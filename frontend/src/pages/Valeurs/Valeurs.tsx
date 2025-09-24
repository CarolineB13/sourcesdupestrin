import { Link } from "react-router-dom";
import { Recycle, HeartPulse, Leaf, MapPin } from "lucide-react";
import { Section } from "../../sections";
import ValueCard from "../../ui/Card/ValueCard";
import "./Valeurs.css";

export default function Valeurs(){
  return (
    <main className="ValeursPage">
      {/* En-tête de page : H1 unique */}
      <header className="container" aria-labelledby="valeurs-h1">
        <p style={{ margin: 0, letterSpacing: ".06em", textTransform: "uppercase", opacity: .8 }}>
          Nos engagements
        </p>
        <h1 id="valeurs-h1">Nos valeurs</h1>
        <p style={{ maxWidth: "70ch" }}>
          Au Pestrin, nos choix défendent la sobriété, la santé, la préservation du site et l’ancrage ardéchois.
        </p>
      </header>

      {/* Section de contenu (H2 via Section.title) */}
      <Section title="Nos engagements">
        <div className="container">
          <div className="Valeurs-grid">

            {/* 1. Écologie — Verre consigné */}
            <ValueCard title="Écologie — Verre consigné">
              <div className="ValCard">
                <div className="ValCard-head">
                  <span className="ValIcon" aria-hidden="true"><Recycle size={24} /></span>
                  <p className="ValLead">
                    Réduire le déchet à la source : privilégier le <strong>réemploi du verre</strong> et les circuits courts.
                  </p>
                </div>
                <ul className="Checklist">
                  <li>Verre consigné (casiers réutilisables).</li>
                  <li>Tournées locales optimisées.</li>
                  <li>Matériaux sobres et faciles à trier.</li>
                </ul>
                <div className="Kpis">
                  <span className="Kpi">Réemploi ♻︎</span>
                  <span className="Kpi">Local-first</span>
                  <span className="Kpi">Zéro plastique (objectif)</span>
                </div>
              </div>
            </ValueCard>

            {/* 2. Santé & authenticité */}
            <ValueCard title="Santé & authenticité">
              <div className="ValCard">
                <div className="ValCard-head">
                  <span className="ValIcon" aria-hidden="true"><HeartPulse size={24} /></span>
                  <p className="ValLead">
                    Une eau <strong>faiblement minéralisée</strong>, issue d’une source naturellement gazeuse.
                    En bouteille&nbsp;: version plate (dégazéifiée) ou version à <strong>pétillance fine</strong>
                    avec <strong>ajout de CO₂</strong> après dégazéification, conformément à la réglementation.
                  </p>
                </div>
                <ul className="Checklist">
                  <li>Hydratation quotidienne, <strong>goût équilibré</strong>, sans artifice.</li>
                  <li>Contrôles qualité internes + conformité <strong>HACCP</strong>.</li>
                  <li>Traçabilité & transparence sur l’origine et le process.</li>
                </ul>
                <div className="Kpis">
                  <span className="Kpi">Faible minéralisation</span>
                  <span className="Kpi">Pétillance fine</span>
                  <span className="Kpi">HACCP</span>
                </div>
              </div>
            </ValueCard>

            {/* 3. Préservation du site */}
            <ValueCard title="Préservation du site & patrimoine">
              <div className="ValCard">
                <div className="ValCard-head">
                  <span className="ValIcon" aria-hidden="true"><Leaf size={24} /></span>
                  <p className="ValLead">
                    Captage protégé, <strong>gestion raisonnée</strong> de la ressource et iconographie <strong>minérale & sobre</strong>.
                  </p>
                </div>
                <ul className="Checklist">
                  <li>Protection des milieux autour de la source.</li>
                  <li>Accès restreint aux zones sensibles.</li>
                  <li>Focus terroir (grotte, basaltes) plutôt que marketing tape-à-l’œil.</li>
                </ul>
                <div className="Kpis">
                  <span className="Kpi">Site protégé</span>
                  <span className="Kpi">Gestion durable</span>
                  <span className="Kpi">Sobriété visuelle</span>
                </div>
              </div>
            </ValueCard>

            {/* 4. Ancrage local */}
            <ValueCard title="Ancrage local & élégance sobre">
              <div className="ValCard">
                <div className="ValCard-head">
                  <span className="ValIcon" aria-hidden="true"><MapPin size={24} /></span>
                  <p className="ValLead">
                    Savoir-faire <strong>ardéchois</strong>, <strong>circuits courts</strong> et design <strong>soigné</strong> héritage 1868.
                  </p>
                </div>
                <ul className="Checklist">
                  <li>Partenariats de proximité (CHR, épiceries).</li>
                  <li>Codes couleurs historiques bleu/jaune.</li>
                  <li>Ton authentique, sans surpromesse.</li>
                </ul>
                <div className="Kpis">
                  <span className="Kpi">Circuits courts</span>
                  <span className="Kpi">Design soigné</span>
                  <span className="Kpi">Héritage 1868</span>
                </div>
              </div>
            </ValueCard>

          </div>
        </div>
      </Section>

      {/* Bandeau de liaison (vers la page consigne) */}
      <section className="ValCTA" aria-label="En savoir plus">
        <div className="container ValCTA-inner">
          <p className="ValCTA-text">Envie de comprendre notre boucle de consigne et la FAQ&nbsp;?</p>
          <div className="ValCTA-actions">
            <Link className="Btn Btn--primary" to="/consigne">Tout savoir sur la consigne</Link>
            <Link className="Btn Btn--ghost" to="/contact">Professionnels : nous contacter</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
