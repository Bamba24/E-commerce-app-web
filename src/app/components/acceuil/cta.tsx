// src/app/components/CallToAction.tsx
import React from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Prêt à découvrir les meilleures offres ?</h2>
        <p className="lead mb-4">
          Ne manquez pas nos promotions exclusives sur téléphones, ordinateurs et accessoires.
          Profitez d'une livraison rapide et d'un service client fiable.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link href="/telPage" className="btn btn-light btn-lg">Voir les produits</Link>
          <Link href="/register" className="btn btn-outline-light btn-lg">Créer un compte</Link>
        </div>
      </div>
    </div>
  );
}
