import Image from "next/image";
import products from "../data.json"; 
import AddToCartButton from "./components/AddToCartButton";

interface Props {
  params: Promise<{ slug: string }>;
}


export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="container py-5">Produit introuvable.</div>;
  }

  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Image */}
        <div className="col-md-6">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="img-fluid rounded shadow-sm"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Infos */}
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <h3 className="text-primary">{product.prix} fcfa</h3>

          {/* Étoiles */}
          <div className="mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ color: i < Math.round(product.rating) ? "#ffc107" : "#ccc" }}>
                ★
              </span>
            ))}
            <span className="ms-2">{product.rating} / 5</span>
          </div>

          {/* Stock */}
          <p>
            <strong>Disponibilité:</strong>{" "}
            {product.inStock ? (
              <span className="text-success">En stock</span>
            ) : (
              <span className="text-danger">Rupture de stock</span>
            )}
          </p>

          {/* Bouton Ajouter au panier */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
