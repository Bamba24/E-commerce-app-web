"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUserConnection } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const { login } = useUserConnection();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, motDePasse);
      router.push("/panier");
    } catch (error) {
      console.log("Erreur de connexion", error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 shadow rounded-4 overflow-hidden" style={{ maxWidth: "960px", height: "600px" }}>
        {/* Bloc gauche : image */}
        <div className="col-md-6 p-0">
          <Image src="/images/background-hero.jpg" alt="Connexion utilisateur" width={600} height={600} className="w-100 h-100 object-fit-cover" />
        </div>

        {/* Bloc droit : formulaire */}
        <div className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
          <h2 className="mb-4 fw-bold text-primary">Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Adresse email</label>
              <input type="email" className="form-control" id="email" placeholder="nom@example.com" 
                     onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input type="password" className="form-control" id="password" placeholder="••••••••" 
                     onChange={(e) => setMotDePasse(e.target.value)} required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Se connecter</button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="mb-1">Vous n&apos;avez pas de compte ? <a href="/register">Créer un compte</a></p>
            <a href="/forgot-password">Mot de passe oublié ?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
