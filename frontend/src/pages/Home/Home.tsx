import { Link } from "react-router-dom";
import "./Home.css";

import heroImg from "../../assets/paysage_ardechois.jpg";
import basaltImg from "../../assets/grotte_3.jpg";
import bouteillePlate from "../../assets/bouteille_plate.jpg";
import bouteilleGazeuse from "../../assets/bouteille_gaz.jpg";


import Section from "../../sections/Section";
import ProductCard from "../../ui/Card/ProductCard";
import ValueCard from "../../ui/Card/ValueCard";

const SHOP_ENABLED = import.meta.env.VITE_SHOP_ENABLED === "true";

export default function Home(){
  return (
    <main className="Home">

      {/* HERO */}
       <section className="Home-hero" aria-label="Paysage ardéchois">
        <img className="Home-heroBg" src={heroImg} alt="" aria-hidden="true" loading="eager" />
        <div className="container Home-heroInner">
          <figure className="Home-quote">
            <blockquote>
              <p>«Là où le temps façonne la roche, naît une eau digne d’héritage.»</p>
            </blockquote>
          </figure>
          <div className="Home-ctas">
            <Link className="Btn Btn--primary" to="/histoire">Découvrir Ventadour</Link>
            {SHOP_ENABLED && (
              <a className="Btn Btn--ghost" href="https://boutique.sourcesdupestrin.fr" target="_blank" rel="noreferrer">
                Boutique
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ORIGINE VOLCANIQUE */}
<Section
  id="origine"
  variant="alt"
  title="Une source née du volcan"
>
  <div className="GridTwo GridTwo--center">
    <div>
      <p className="lead">
        Enfouie dans les profondeurs du massif ardéchois, la source Ventadour jaillit naturellement gazeuse.
        Son pétillant provient d’un phénomène rare : le gaz carbonique d’origine volcanique infuse l’eau
        à travers les couches basaltiques, lui donnant une minéralité équilibrée et un goût unique.
      </p>
      <Link to="/histoire" className="LinkArrow">Explorer notre source →</Link>
    </div>
    <div className="MediaCard">
      <img src={basaltImg} alt="Paysage ardéchois aux reliefs volcaniques" loading="lazy" />
    </div>
  </div>
</Section>


      {/* COLLECTION */}
      <Section
        id="collection"
        title="Une collection au goût d’authenticité"
        intro="Plate ou naturellement pétillante, notre eau minérale accompagne tous les instants. Embouteillée exclusivement en verre consigné, elle reflète notre engagement durable."
      >
        <div className="HeaderRow">
          <span />{/* pousse-flex */}
          <Link to="/collection" className="LinkArrow">Voir nos produits →</Link>
        </div>

        <div className="Cards">
          <ProductCard
            imageUrl={bouteillePlate}
            status="available"
            title="Ventadour 1L"
            type="Plate"
            volume="1 L"
            packaging="Verre consigné · casier x12"
            onContactHref="/contact"
            onShopHref="https://boutique.sourcesdupestrin.fr"
          />
          <ProductCard
            imageUrl={bouteilleGazeuse}
            status="available"
            title="Ventadour 1L"
            type="Gazeuse"
            volume="1 L"
            packaging="Verre consigné · casier x12"
            onContactHref="/contact"
            onShopHref="https://boutique.sourcesdupestrin.fr"
          />
          <ProductCard
            status="soon"
            title="Ventadour"
            type="Plate"
            volume="0,5 L / 33 cl"
            packaging="Bientôt disponibles"
            onContactHref="/contact"
          />
        </div>
      </Section>

      {/* VALEURS */}
      <Section id="valeurs" variant="alt" title="Nos valeurs">
        <div className="Values">
          <ValueCard title="Verre consigné">
            Réduction des déchets, réemploi, filière locale.
          </ValueCard>
          <ValueCard title="Origine naturelle">
            Faible minéralisation, pétillance fine, eau authentique.
          </ValueCard>
          <ValueCard title="Territoire préservé">
            Au cœur d’un patrimoine géologique unique (UNESCO Geopark).
          </ValueCard>
          <ValueCard title="Sobriété & élégance">
            Design soigné, codes couleurs historiques bleu & jaune.
          </ValueCard>
        </div>
      </Section>

    </main>
  );
}