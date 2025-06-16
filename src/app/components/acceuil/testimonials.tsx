// src/app/components/Testimonials.tsx
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Awa Ndiaye",
    text: "Livraison rapide et service client au top ! Je recommande vivement ElectroShop.",
    rating: 5,
    image: "/images/background-hero.jpg",
  },
  {
    id: 2,
    name: "Moussa Diop",
    text: "J'ai acheté un ordinateur ici, très bon rapport qualité/prix. Merci !",
    rating: 4,
    image: "/images/background-hero.jpg",
  },
  {
    id: 3,
    name: "Fatou Sarr",
    text: "Site sérieux, produits authentiques. J'adore mon nouveau téléphone.",
    rating: 5,
    image: "/images/background-hero.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="container my-5 py-5">
      <h2 className="fw-bold text-center mb-4">Ce que disent nos clients</h2>
      <div className="row g-4">
        {testimonials.map((item) => (
          <div className="col-md-4 " key={item.id}>
            <div className="card h-100 shadow-sm border-0 pl-2 pr-2 pt-4 pb-4">
              <div className="card-body">
                <p className="card-text fst-italic">"{item.text}"</p>
                <div className="d-flex align-items-center mt-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">{item.name}</h6>
                    <div className="text-warning small">
                      {"★".repeat(item.rating)}{" "}
                      <span className="text-muted">
                        ({item.rating}/5)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
