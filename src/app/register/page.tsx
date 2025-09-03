"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react"; 
import { useRouter } from "next/navigation";
import { toast } from "mui-sonner";
import axios from "axios";


export default function RegisterPage() {

  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [nom, setNom] = useState("")
  const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()

      try {
        await axios.post('/api/register', {nom, email, motDePasse});
        toast.success("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        router.push('/login');
      } catch (error) {
        console.log("Inscription failed", error)
        toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
      }

  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 shadow rounded-4 overflow-hidden" style={{ maxWidth: "960px", height: "600px" }}>
        
        {/* Bloc gauche : Image */}
        <div className="col-md-6 p-0">
          <Image
            src="/images/background-hero.jpg"
            alt="Image de connexion"
            width={600}
            height={600}
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* Bloc droit : Formulaire de connexion */}
        <div className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
          <h2 className="mb-4 fw-bold text-primary">S&apos;inscrire</h2>

          <form onSubmit={handleSubmit}>

          <div className="mb-3">
              <label htmlFor="password" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="Nom"
                placeholder="Votre nom"
                onChange={ (e)=> setNom(e.target.value) }
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="email" className="form-label">Adresse email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="votre@email.com"
                onChange={ (e)=> setEmail(e.target.value) }
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="••••••••"
                onChange={ (e)=> setMotDePasse(e.target.value) }
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Connexion</button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p>
              Vous avez deja un compte ?{" "}
              <a href="/login" className="text-decoration-none">Connecter vous</a>
            </p>
            <a href="/forgot-password" className="text-decoration-none">Mot de passe oublié ?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
