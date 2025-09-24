import React from "react";
import { Link } from "react-router-dom";
import ConsigneProcess from "../../components/ConsigneProcess/ConsigneProcess";
import ConsigneFAQ from "../../components/ConsigneFAQ/ConsigneFAQ";
import LocalPartners from "../../components/LocalPartners/LocalPartners";
// import ImpactStats from "../../components/ImpactStats/ImpactStats";
import "./Consigne.css";

export default function Consigne(){
  return (
    <main className="ConsignePage">
      {/* HERO court */}
      <section className="ConsigneHero">
        <div className="container ConsigneHero-inner">
          <h1 id="consigne-h1" className="ConsigneHero-title">La consigne, simplement</h1>
          <p className="ConsigneHero-sub">
            Réemploi du verre, circuits courts, points de retour proches de chez vous.
          </p>
        </div>
      </section>

      {/* Boucle en 4 étapes */}
      <ConsigneProcess/>

      {/* Partenaires / points de retour */}
      <LocalPartners
        title="Points de retour & partenaires"
        intro="Rapportez vos bouteilles à l’usine, chez les commerces où vous les avez achetées, ou dans nos points partenaires."
        partners={[
          { name:"Bistrot de Meyras", type:"Restaurant", city:"Meyras" },
          { name:"Épicerie des Monts", type:"Épicerie", city:"Aubenas" },
          { name:"Café du Pont", type:"CHR", city:"Thueyts" },
        ]}
      />

      {/* FAQ */}
      <ConsigneFAQ/>

      {/* CTA pratiques */}
      <section className="ConsigneCTA" aria-label="Actions utiles">
        <div className="container ConsigneCTA-inner">
          <div className="ConsigneCTA-block">
            <h2>Vous êtes un professionnel ?</h2>
            <p>Restaurant, épicerie, jardinerie… Devenez point de collecte ou partenaire de distribution.</p>
            <Link to="/contact" className="Btn Btn--primary">Nous contacter</Link>
          </div>
          <div className="ConsigneCTA-block">
            <h3>Où rapporter mes bouteilles ?</h3>
            <p>La liste des points de retour s’étoffe régulièrement. Revenez la consulter.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
