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
    <div className="collection">
      <Section
        kicker="Notre collection"
        title="Notre collection Ventadour"
        intro="Formats disponibles et à venir, conditionnés principalement en verre consigné."
      >
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
    </div>
  );
}
