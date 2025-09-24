import React from "react";
import "./LocalPartners.css";

type Partner = { name: string; city?: string; type?: string; };

type Props = { partners: Partner[]; title?: string; intro?: string; };

export default function LocalPartners({ partners, title="Partenaires locaux", intro }: Props){
  return (
    <section className="Partners">
      <div className="container">
        <header className="Partners-head">
          <h2 className="Partners-title">{title}</h2>
          {intro && <p className="Partners-sub">{intro}</p>}
        </header>
        <div className="Partners-grid">
          {partners.map((p, i) => (
            <div className="Partners-card" key={i}>
              <strong className="Partners-name">{p.name}</strong>
              <div className="Partners-meta">
                {p.type && <span>{p.type}</span>}
                {p.city && <span>· {p.city}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
