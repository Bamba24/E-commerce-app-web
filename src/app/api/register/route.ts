import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import Bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, motDePasse, nom } = body;

    const salt = Bcrypt.genSaltSync(10);
    const hashPassword = Bcrypt.hashSync(motDePasse, salt);

    const nouvelUtilisateur = await prisma.utilisateur.create({
      data: {
        nom,
        email,
        motDePasse: hashPassword
      },
    });

    return NextResponse.json({ utilisateur: nouvelUtilisateur }, { status: 200 });

  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}
