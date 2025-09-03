"use client"

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function DashBord(){

  const [utilisateur, setUtilisateur] = useState({
    nom: "Jean Dupont",
    email: "jean.dupont@email.com",
  });

  const router = useRouter();

  useEffect(()=>{

        const token = localStorage.getItem('token');

        if (token) {

           axios.post('../api/jwtoken', {token})
           .then((response)=>{
            setUtilisateur(response.data.utilisateur)
           })
           .catch(()=>{
            router.push('/login')
           })

        }else {
          router.push('/login')
        }

  }, []);


  const commandes = [
    { id: "CMD001", date: "2025-05-10", total: 129.99, statut: "Livrée" },
    { id: "CMD002", date: "2025-04-28", total: 89.50, statut: "En cours" },
    { id: "CMD003", date: "2025-04-20", total: 49.00, statut: "Annulée" },
  ];

  return (
    <>
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Tableau de bord</h2>

      {/* Informations utilisateur */}
      <div className="mb-4 p-4 bg-light rounded shadow-sm">
        <h4 className="mb-2">Bienvenue, {utilisateur.nom}</h4>
        <p className="mb-0 text-muted">{utilisateur.email}</p>
      </div>

      {/* Statistiques rapides */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="p-3 bg-primary text-white rounded shadow-sm">
            <h5>Total Commandes</h5>
            <p className="display-6">{commandes.length}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-success text-white rounded shadow-sm">
            <h5>Commandes Livrées</h5>
            <p className="display-6">{commandes.filter(c => c.statut === "Livrée").length}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-warning text-white rounded shadow-sm">
            <h5>Commandes en cours</h5>
            <p className="display-6">{commandes.filter(c => c.statut === "En cours").length}</p>
          </div>
        </div>
      </div>

      {/* Liste des commandes */}
      <div className="card shadow-sm">
        <div className="card-header">
          <h5>Dernières commandes</h5>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((commande) => (
                <tr key={commande.id}>
                  <td>{commande.id}</td>
                  <td>{commande.date}</td>
                  <td>{commande.total} €</td>
                  <td>
                    <span className={`badge ${
                      commande.statut === "Livrée"
                        ? "bg-success"
                        : commande.statut === "En cours"
                        ? "bg-warning"
                        : "bg-danger"
                    }`}>
                      {commande.statut}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">Voir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
   )
}