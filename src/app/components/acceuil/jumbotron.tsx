// src/app/components/JumbotronTriple.tsx
import React from 'react';
import Link from 'next/link';

export default function JumbotronTriple() {
  return (
    <div className="container my-5 py-5">

      <h1>Categories Principales</h1>

      <div className="row g-4 mt-2">
        {/* Colonne gauche avec Bloc B et Bloc C */}
        <div className="col-md-6 d-flex flex-column gap-4">
          {/* Bloc B (en haut) */}
          <div className="p-4 bg-light rounded shadow h-100">
            <h4 className="fw-semibold">Ordinateurs portables</h4>
            <p>
              Performance et fiabilité. Trouvez votre compagnon de travail ou de divertissement.
            </p>
            <Link href="/telPage" className="btn btn-outline-primary btn-sm">Voir les ordinateurs</Link>
          </div>

          {/* Bloc C (en bas) */}
          <div className="p-4 bg-light rounded shadow h-100">
            <h4 className="fw-semibold">Accessoires</h4>
            <p>
              Chargeurs, casques, clés USB, tout pour compléter votre équipement.
            </p>
            <button className="btn btn-outline-primary btn-sm">Voir les accessoires</button>
          </div>
        </div>

        {/* Colonne droite avec Bloc A */}
        <div className="col-md-6">
          <div className="p-4 bg-light rounded shadow h-100 d-flex flex-column justify-content-center">
            <h2 className="fw-bold mb-3">Nouveaux Smartphones</h2>
            <p>
              Explorez les derniers modèles alliant design, performance et connectivité. Livraison rapide garantie.
            </p>
            <button className="btn btn-primary mt-3">Voir les téléphones</button>
          </div>
        </div>
      </div>
    </div>
  );
}
