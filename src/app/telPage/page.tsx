"use client";

import React from "react";
import {useState, useEffect} from 'react';
import { FaStar } from "react-icons/fa";
import { toast } from "mui-sonner";
import {useRouter} from 'next/navigation';
import Image from "next/image";
import Input from '../components/produits/searchProduct/input';
import Loader from '../components/produits/loader/loader';
import products from './data.json';


type produit = {
  id: number;
  name: string;
  image: string;
  prix: number;
  rating: number;
  categorie: string;
  inStock: boolean;
  slug: string;
  description?: string;
}

export default function HeroTelephones() {

  const router = useRouter();

    // Definition des variables d'etat
    const [state, setState] = useState<produit[]>([]);
    const [filtrer, setFiltrer] = useState<produit[]>([]);
    const [currentOption, setCurrentOption] = useState('all');
     
    // Utilisation d'use Effect pour definir les elements du tableau (products)
    useEffect(()=>{
      setState(products);
      setFiltrer(products);
    }, []);


    // Fonction de filtrage par rapport au categorie
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const option = e.currentTarget.name;
    setCurrentOption(option);

    switch (option) {
      case 'all':
        setFiltrer([...state]);
        break;
      case 'samsung':
        setFiltrer([...state.filter((produit)=> produit.categorie === 'samsung')]);
        break;
      case 'alcatel':
        setFiltrer([...state.filter((produit)=> produit.categorie === 'alcatel')]);
        break;
      case 'prix croissant':
        setFiltrer([...state.sort((a, b)=> a.prix - b.prix )]);
        break;
      case 'prix decroissant':
        setFiltrer([...state.sort((a, b)=> b.prix - a.prix )]);
        break;
      case 'iphone':
        setFiltrer([...state.filter((produit)=> produit.categorie === 'iphone')]);
        break;
      default:
        console.log('Aucun membre trouvé');
    }
  }

      // Fonction de filtrage par rapport au prix des produits 
      function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
      const value = e.target.value;

      if (value === "prix croissant") {
        const sorted = [...filtrer].sort((a, b) => a.prix - b.prix);
        setFiltrer(sorted);
      } else if (value === "prix decroissant") {
        const sorted = [...filtrer].sort((a, b) => b.prix - a.prix);
        setFiltrer(sorted);
      }
    }


    // Function d'ajout dans le panier grace au localStorage
    // Etape 1 : recuperer le nom de l'item et le parser 
    // Etape 2 : recuperer dans un tableau l'objet concerné
    // Etape 3 : verifier si le tableau contient une valeur? incremente : intact = 1
    // Etape 4 : transforme la valeur en objet javascript puis l'ajoute dans panier
    function ajouterAuPanier(produit: produit) {

      const panierActuel = JSON.parse(localStorage.getItem("panier") || "[]");

      const existe = panierActuel.find((item: produit) => item.id === produit.id);
      
      if (existe) {
        existe.quantite += 1;       
      } else {
        panierActuel.push({ ...produit, quantite: 1 });
      }

      localStorage.setItem("panier", JSON.stringify(panierActuel));
      window.dispatchEvent(new Event("panierUpdated"));
      toast.success("Produit ajouté au panier !");
    }



  return (
    <>
      {/* Section Hero */}
      <section
        className="text-white py-5"
        style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
      >
        <div className="container text-center">
          <h6 className="text-uppercase fw-bold mb-2">ElectroShop</h6>
          <h1 className="display-4 fw-bold mb-3">Téléphones</h1>
          <p className="lead mb-5">
            Découvrez nos téléphones à la fois modernes et accessibles
          </p>
        </div>
      </section>

  <section className="bg-light py-5">
  <div className="container">
    <h2 className="fw-bold text-center mb-4">Produits les plus populaires</h2>

    {/* Barre de recherche + filtre */}
    <div className="d-flex justify-content-between align-items-center mb-4">

      <Input state={state} onSearch={setFiltrer} />

      <button style={{background: "linear-gradient(90deg, #3b82f6, #8b5cf6)"}}  onClick={handleClick} name="all" className="btn btn-primary w-20">
          All
      </button>
      <button style={{background: "linear-gradient(90deg, #3b82f6, #8b5cf6)"}}  onClick={handleClick} name="samsung" className="btn btn-primary w-20">
          Samsung
      </button>
      <button style={{background: "linear-gradient(90deg, #3b82f6, #8b5cf6)"}}  onClick={handleClick} name="alcatel" className="btn btn-primary w-20">
          Alcatel
      </button>
      <button style={{background: "linear-gradient(90deg, #3b82f6, #8b5cf6)"}}  onClick={handleClick} name="iphone" className="btn btn-primary w-20">
          Iphones
      </button>

      <select className="form-select w-25 ms-3" onChange={handleSelect}>
        <option value="prix">Prix</option>
        <option value='prix croissant' onClick={handleClick}>Prix croissant</option>
        <option value='prix decroissant' onClick={handleClick}>Prix decroissant</option>
      </select>
    </div>

    {/* Liste ou Loader */}
    {filtrer.length > 0 ? (
      <div className="row g-4">
        {filtrer.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card shadow-sm h-100">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={200}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold text-primary">{product.prix} Fcfa</p>
                <div className="mb-2 text-warning">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} color={i < product.rating ? "#facc15" : "#e5e7eb"} />
                  ))}
                </div>
                <p className={`badge ${product.inStock ? "bg-success" : "bg-danger"}`}>
                  {product.inStock ? "En stock" : "Rupture"}
                </p>
                <div className="mt-auto d-flex gap-2">
                  {product.inStock? (
                    <button onClick={() => ajouterAuPanier(product)} className="btn btn-outline-primary w-100">
                    Ajouter au panier
                  </button>
                  ): (
                    <button disabled onClick={() => ajouterAuPanier(product)} className="btn btn-outline-primary w-100">
                    Ajouter au panier
                  </button>
                  )}
                  <button onClick={() => router.push(`/telPage/${product.slug}`)} className="btn btn-primary w-100">Voir détails</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <Loader />
    )}
  </div>
</section>

    </>
  );
}
