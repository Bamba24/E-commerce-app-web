import { NextRequest, NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { prisma } from '../../lib/prisma'; // ajuste le chemin selon ton projet

interface TokenPayload extends JwtPayload {
  id: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token, articles } = body;

    // 🔐 Vérifie que la requête est bien formée
    if (!token || !articles || !Array.isArray(articles)) {
      return NextResponse.json({ message: 'Requête invalide' }, { status: 400 });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return NextResponse.json({ message: 'Clé JWT manquante' }, { status: 500 });
    }

    // ✅ Vérifie le token
    const decoded = jwt.verify(token, secret) as TokenPayload;
    const userId = decoded.id;

    // 💰 Calcule le prix total de la commande
    const total = articles.reduce(
      (acc: number, item: { prix: number; quantite: number }) => acc + item.prix * item.quantite,
      0
    );

    // 🛒 Création de la commande et des articles associés
    const commande = await prisma.commande.create({
      data: {
        utilisateurId: userId,
        prixTotal: total,
        articles: {
          create: articles.map((item: { id: number; name: string; image: string; prix: number; quantite: number }) => ({
            produitId: String(item.id),         // 🟢 Convertir id en string si c’est un nombre
            nomProduit: item.name,
            imageProduit: item.image,
            prix: Number(item.prix),
            quantite: item.quantite || 1,       // 🟢 Assure-toi qu'il existe
          })),
        }
      },
    });


    return NextResponse.json(
  { message: 'Commande enregistrée avec succès', commande },
  { status: 201 }
  );


  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: 'Erreur serveur ou token invalide', error: error.message },
      { status: 500 }
    );
  }
}
