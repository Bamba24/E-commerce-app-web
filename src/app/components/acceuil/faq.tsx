// src/app/components/Faq.tsx
"use client";
import React from "react";

export default function Faq() {
  return (
    <div className="container my-5 py-5">
      <h2 className="fw-bold text-center mb-4">Foire aux questions</h2>
      <div className="accordion" id="faqAccordion">

        <div className="accordion-item">
          <h2 className="accordion-header" id="faq1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
              Quels sont les délais de livraison ?
            </button>
          </h2>
          <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              La livraison prend généralement entre 24h et 72h selon votre localisation.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="faq2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
              Puis-je retourner un produit ?
            </button>
          </h2>
          <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Oui, vous avez 7 jours pour retourner un produit s’il ne vous convient pas.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="faq3">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
              Les produits sont-ils garantis ?
            </button>
          </h2>
          <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Tous nos produits sont couverts par une garantie de 6 mois minimum.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
