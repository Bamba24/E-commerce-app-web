import { NextRequest, NextResponse } from "next/server";
import jwt  from 'jsonwebtoken'

export async function POST(req: NextRequest){
      
      if (req.method === 'POST') {
        
        const body = await req.json();
        const {token} = body;
        const secret = process.env.JWT_SECRET;


        if(!secret){return NextResponse.json({message: 'jwt secret not defined'})}
        

        try {
          const decoded = jwt.verify(token, secret)
          return NextResponse.json({utilisateur: decoded})
        } catch (error) {
          return NextResponse.json({message: `token invalide ${error}`})
        }
        
      }else{
        return NextResponse.json({message: "Methode pas autorisé pour ton status"})
      }

   
}