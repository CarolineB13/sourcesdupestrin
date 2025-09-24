// src/pages/Collection/Collection.tsx
import React from "react";
import { Section } from "../../sections";
import { ProductCard } from "../../ui/Card";
import { PRODUCTS } from "../../data/products";
import "./Collection.css";

export default function Collection(){
  const available = PRODUCTS.filter(p => p.status === "available");
  const soon      = PRODUCTS.filter(p => p.status === "soon");

  return (
    <main className="collection">
      {/* En-tête de page : H1 unique */}
      <header className="container" aria-labelledby="collection-h1">
        <p style={{ margin: 0, letterSpacing: ".06em", textTransform: "uppercase", opacity: .8 }}>
          Notre collection
        </p>
        <h1 id="collection-h1">Notre collection Ventadour</h1>
        <p style={{ maxWidth: "70ch" }}>
          Formats disponibles et à venir, conditionnés principalement en verre consigné.
        </p>
      </header>

      {/* Disponibles maintenant (H2 via <Section title=…>) */}
      <Section title="Disponibles maintenant">
        <div className="container">
          <div className="collection__grid">
            {available.map(p => (
              <ProductCard
                key={p.id}
                imageUrl={p.image}
                status={p.status}
                title={p.title}
                type={p.type}
                volume={p.volume}
                packaging={p.packaging}
                onContactHref="/contact"
                onShopHref={p.shopUrl}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Bientôt */}
      <Section variant="alt" title="Bientôt" intro="Formats en préparation (planning à confirmer).">
        <div className="container">
          <div className="collection__grid">
            {soon.map(p => (
              <ProductCard
                key={p.id}
                imageUrl={p.image}
                status={p.status}
                title={p.title}
                type={p.type}
                volume={p.volume}
                packaging={p.packaging}
                onContactHref="/contact"
                onShopHref={p.shopUrl}
              />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
