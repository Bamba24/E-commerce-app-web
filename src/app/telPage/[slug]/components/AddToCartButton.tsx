"use client";

import {toast} from "mui-sonner";

interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  prix: number;
  description: string;
  rating: number;
  inStock: boolean;
  quantite?: number;
}


interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const handleAddToCart = () => {
    const panier = JSON.parse(localStorage.getItem('panier') || '[]');
    const existingIndex = panier.findIndex((item: Product) => item.id === product.id);

    if (existingIndex !== -1) {
      panier[existingIndex].quantite = (panier[existingIndex].quantite || 1) + 1;
    } else {
      panier.push({ ...product, quantite: 1 });
    }

    localStorage.setItem('panier', JSON.stringify(panier));
    window.dispatchEvent(new Event('panierUpdated'));
    toast.success("Produit ajouté au panier !");
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={!product.inStock}
      className="btn btn-primary mt-3"
    >
      Ajouter au panier
    </button>
  );
}
