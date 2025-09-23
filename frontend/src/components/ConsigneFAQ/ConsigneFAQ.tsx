import React from "react";
import "./ConsigneFAQ.css";
import { faqConsigne, type QA } from "../../data/faqConsigne";

export default function ConsigneFAQ({ items }: { items?: QA[] }){
  const list = items?.length ? items : faqConsigne;
  return (
    <section className="FAQ" aria-labelledby="faq-consigne-title">
      <div className="container">
        <h2 id="faq-consigne-title" className="FAQ-title">FAQ — La consigne Ventadour</h2>
        <div className="FAQ-grid">
          {list.map((x,i)=>(
            <details className="FAQ-item" key={i}>
              <summary className="FAQ-q">{x.q}</summary>
              <div className="FAQ-a">{x.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
