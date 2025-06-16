// src/app/components/Partners.tsx
import React from "react";
import Image from "next/image";

const partners = [
  { name: "Samsung", logo: "/images/partners/samsung.png" },
  { name: "Apple", logo: "/images/partners/apple.png" },
  { name: "HP", logo: "/images/partners/hp.png" },
  { name: "Dell", logo: "/images/partners/dell.png" },
];

export default function Partners() {
  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Nos partenaires de confiance</h2>
        <div className="d-flex justify-content-center flex-wrap gap-4 align-items-center">
          {partners.map((p) => (
            <Image
              key={p.name}
              src={p.logo}
              alt={p.name}
              width={100}
              height={60}
              style={{ objectFit: "contain", maxHeight: 60 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
