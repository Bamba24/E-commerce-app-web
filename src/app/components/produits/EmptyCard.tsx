"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmptyCart() {
  const router = useRouter();

  const handleRetour = () => {
    router.push("/telPage");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center gap-4">
      <h2 className="text-2xl font-semibold text-gray-700">Votre panier est vide</h2>

      <Image
        src="/images/illustrationCardEmpty.svg" // chemin relatif à /public
        alt="Panier vide"
        width={164}
        height={164}
        className="mb-4"
      />

      <p className="text-gray-500 max-w-xs">
        Ajoutez des produits à votre panier pour commencer vos achats.
      </p>

      <button
        onClick={handleRetour}
        className="btn btn-primary mt-4 px-6 py-2  rounded "
      >
        Retour aux produits
      </button>
    </div>
  );
}
