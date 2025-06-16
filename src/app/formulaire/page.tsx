'use client';

import React, { useState } from 'react';
import {toast} from 'mui-sonner';
import { useRouter } from 'next/navigation';

export default function FormulaireCommande() {

const router = useRouter();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire envoyé :', formData);
    localStorage.removeItem('panier'); // Nettoyer le panier après la commande
    window.dispatchEvent(new Event('panierUpdated')); // Mettre à jour le panier
    toast.success('Votre commande a été validée avec succès !');
    router.push('/'); 
  };

  return (
    <>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow rounded-4 border-0">
            <div className="card-body p-4">
              <h4 className="card-title mb-4 text-center">📝 Informations de livraison</h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Adresse e-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Adresse</label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Ville</label>
                    <input
                      type="text"
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Code postal</label>
                    <input
                      type="text"
                      name="codePostal"
                      value={formData.codePostal}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100 mt-3">
                  ✅ Valider la commande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
