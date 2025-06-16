'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from 'next/navigation';

export default function Header() {
  // Utiliser usePathname pour obtenir le chemin actuel
  const pathname = usePathname();

  // Vérifier si la page actuelle est la page d'accueil
  const [panierCount, setPanierCount] = useState(0);

  // Fonction pour mettre à jour le nombre d'articles dans le panier
  const updatePanierCount = () => {
    const panier = JSON.parse(localStorage.getItem('panier') || '[]');
    const count = panier.reduce((acc: number, item: any) => acc + item.quantite, 0);
    setPanierCount(count);
  };

  useEffect(() => {
    // Charger la quantité au premier affichage
    updatePanierCount();

    // Mettre à jour si un événement "panierUpdated" est déclenché
    const handlePanierUpdate = () => updatePanierCount();
    window.addEventListener('panierUpdated', handlePanierUpdate);

    // Nettoyage
    return () => {
      window.removeEventListener('panierUpdated', handlePanierUpdate);
    };
  }, []);

  return (
    <nav style={{position: "sticky", top: "0", zIndex: "1"}} className="navbar navbar-expand-lg navbar-dark bg-light px-3  shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark" href="/">ElectroShop</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={pathname === '/' ? "nav-link text-primary" : "nav-link text-dark"} href="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className={pathname === '/telPage' ? "nav-link text-primary" : "nav-link text-dark"} href="/telPage">Téléphones</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            

            <Link href="/panier" className="btn btn-outline-light position-relative">
              <FaShoppingCart size={25} style={{color: "black"}} />
              {panierCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {panierCount}
                </span>
              )}
            </Link>

            <Link style={{ color: "black", border: " 1px solid #0d6efd"}} href="/register" className="btn btn-outline-light btn-sm">S'inscrire</Link>
            <Link style={{background: "linear-gradient(90deg, #3b82f6, #8b5cf6)", color: "white"}} href="/login" className="btn btn-sm">Se connecter</Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
