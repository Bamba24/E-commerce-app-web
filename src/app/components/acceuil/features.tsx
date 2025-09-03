// src/app/components/Features.tsx
import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



export default function Features() {
  return (
    <div className="container my-5 py-5">
      <div className="row mb-5">
        <div className="col-lg-12 ">
          <h2 className="fw-bold text-center">Pourquoi choisir ElectroShop ?</h2>
          <p className="text-muted text-center">
            Nous vous proposons des produits de qualité, un service client irréprochable, 
            et une livraison rapide. Nous allons ajouter d&apos;autres avantages ici juste pour que le paragraphe soit plus long.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="d-flex flex-column align-items-center h-100 border rounded p-3 shadow-sm">
            <FaTruck size={48} className="color-primary" />
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
              <h5 className="fw-semibold ">Livraison rapide</h5>
              <p className="text-muted text-center">
                Recevez vos commandes en 24h à 72h selon votre localisation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="d-flex flex-column align-items-center h-100 border rounded p-3 shadow-sm">
            <FaCheckCircle size={48} />
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
              <h5 className="fw-semibold">Produits certifiés</h5>
              <p className="text-muted text-center">
                Tous nos articles sont testés et garantis par les meilleurs fournisseurs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="d-flex flex-column align-items-center h-100 border rounded p-3 shadow-sm">
            <FaHeadset size={48} />
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
              <h5 className="fw-semibold">Support 7j/7</h5>
              <p className="text-muted text-center">
                Notre équipe est disponible pour vous aider chaque jour de la semaine.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="d-flex flex-column align-items-center h-100 border rounded p-3 shadow-sm">
            <FaLock size={48} />
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
              <h5 className="fw-semibold">Paiement sécurisé</h5>
              <p className="text-muted text-center">
                Vos transactions sont protégées grâce à des protocoles de sécurité avancés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
