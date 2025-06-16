import React from 'react'

    export default function Footer() {
      return (
        <footer className="py-5 bg-light border-top mt-5">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-3 mb-3">
                <h5>Catégories</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="/produits/portables" className="nav-link p-0 text-muted">Téléphones</a></li>
                  <li className="nav-item mb-2"><a href="/produits/ordinateurs" className="nav-link p-0 text-muted">Ordinateurs</a></li>
                </ul>
              </div>
    
              <div className="col-6 col-md-3 mb-3">
                <h5>Compte</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="/connexion" className="nav-link p-0 text-muted">Connexion</a></li>
                  <li className="nav-item mb-2"><a href="/inscription" className="nav-link p-0 text-muted">Inscription</a></li>
                  <li className="nav-item mb-2"><a href="/profil" className="nav-link p-0 text-muted">Profil</a></li>
                </ul>
              </div>
    
              <div className="col-6 col-md-3 mb-3">
                <h5>Aide</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Livraison</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Paiement</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
                </ul>
              </div>
    
              <div className="col-md-3 mb-3">
                <form>
                  <h5>S’inscrire à la newsletter</h5>
                  <p>Recevez nos dernières offres et promotions.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <input type="email" className="form-control" placeholder="Adresse e-mail" />
                    <button className="btn btn-primary" type="submit">S’inscrire</button>
                  </div>
                </form>
              </div>
            </div>
    
            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>&copy; 2025 ElectroShop. Tous droits réservés.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-twitter"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><i className="bi bi-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </footer>
      );
    }    
