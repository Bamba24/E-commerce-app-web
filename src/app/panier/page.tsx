"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "mui-sonner";
import { useRouter } from "next/navigation";
import axios from "axios"; // ✅ Import Axios
import EmptyCard from "@/app/components/produits/EmptyCard"; // Import your empty cart illustration

// Définition des types
type Article = {
  id: number;
  name: string;
  image: string;
  prix: number;
  quantite: number;
};

export default function Panier() {
  const router = useRouter();
  const [panier, setPanier] = useState<Article[]>([]);

  useEffect(() => {
    const storedPanier = JSON.parse(localStorage.getItem("panier") || "[]");
    setPanier(storedPanier);
  }, []);

  const updateQuantity = (id: number, quantite: number) => {
    const updated = panier.map((item) =>
      item.id === id ? { ...item, quantite: Math.max(1, quantite) } : item
    );
    setPanier(updated);
    toast.success("Quantité mise à jour !");
    localStorage.setItem("panier", JSON.stringify(updated));
    window.dispatchEvent(new Event("panierUpdated"));
  };

  const removeItem = (id: number) => {
    const filtered = panier.filter((item) => item.id !== id);
    setPanier(filtered);
    toast.success("Produit supprimé du panier !");
    localStorage.setItem("panier", JSON.stringify(filtered));
    window.dispatchEvent(new Event("panierUpdated"));
  };

  const handleOrder = async () => {
    const produitCommander = localStorage.getItem("panier");
    const token = localStorage.getItem("token");

    if (!produitCommander || produitCommander.length === 0 ) {
      toast.error("Veuillez ajouter des produits à votre panier avant de commander.");
    } else {
      const articlesParsed = JSON.parse(produitCommander);

      try {
        const response = await axios.post("/api/commande", {
          articles: articlesParsed,
          token,
        });

        console.log("Commande réussie :", response.data);
        router.push("/formulaire");
        toast.success("Merci pour votre commande !");
        window.dispatchEvent(new Event("panierUpdated"));

      } catch (error) {
        
        console.error("Erreur lors de la commande :", error);
        router.push('/login')
      }
    }
  };

  const total = panier.reduce((acc, item) => acc + item.prix * item.quantite, 0);

  return (
    <>
      <div className="container py-5">

        {panier.length === 0 ? (
          <EmptyCard />
        ) : (
          <div className="row">
            <div className="col-md-8">
              {panier.map((item) => (
                <div key={item.id} className="d-flex mb-4 border p-3 rounded shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h5>{item.name}</h5>
                    <p>Prix unitaire : {item.prix} fcfa</p>
                    <div className="d-flex align-items-center gap-2">
                      <label>Quantité :</label>
                      <input
                        type="number"
                        value={item.quantite}
                        min={1}
                        className="form-control w-auto"
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                  <div className="text-end">
                    <strong>{item.prix * item.quantite} fcfa</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-4">
              <div className="border p-4 rounded shadow-sm bg-light sticky-top" style={{ top: "80px" }}>
                <h4 className="mb-3">🧾 Résumé de la commande</h4>
                <ul className="list-group mb-3">
                  {panier.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                      <span>{item.name} × {item.quantite}</span>
                      <span>{item.prix * item.quantite} fcfa</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>{total} fcfa</span>
                  </li>
                </ul>
                <button className="btn btn-success w-100" onClick={handleOrder}>
                  Commander
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
