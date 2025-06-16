// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import Bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, motDePasse } = body;

    const user = await prisma.utilisateur.findUnique({
      where: { email },
    });

    if (user && Bcrypt.compareSync(motDePasse, user.motDePasse)) {

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );

      return NextResponse.json({ token }, { status: 200 });
      
    } else {
      return NextResponse.json(
        { message: "Email ou mot de passe incorrect" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
