import "./Histoire.css";
import Section from "../../sections/Section";

// Lightbox pour agrandir les images
import Lightbox from "../../components/Lightbox/Lightbox";

// ASSETS
import usine1 from "../../assets/ancienne_usine.jpg";
import usine2 from "../../assets/ancienne_usine_2.png";
import usine3 from "../../assets/ancienne_usine_3.jpg";
import pergola from "../../assets/Une-pergola.jpg";

import ventadourPorche from "../../assets/ventadour.jpg";   // illustration unique pour "Les sources"
import grotteJulie from "../../assets/grotte_1.jpg";        // vignette dans l'aparté

import schema from "../../assets/ventadour_schema.png";

// Étiquettes / archives
import etiqVent1 from "../../assets/sources_etiquette_6.png";
import etiqVent2 from "../../assets/sources_etiquette_8.jpg";
import etiqChan1 from "../../assets/sources_etiquette_7.jpg";
import etiqChan2 from "../../assets/sources_etiquette_3.jpg";
import badge1 from "../../assets/sources_etiquette_4.jpg";
import capsule1 from "../../assets/capsule_1.png"
import capsule2 from "../../assets/capsule_2.png"

function TimelineItem({
  year, title, children,
}: { year: string; title: string; children: React.ReactNode }) {
  return (
    <li className="Histo-tlItem">
      <div className="Histo-tlDot" aria-hidden="true" />
      <div className="Histo-tlYear">{year}</div>
      <div className="Histo-tlBody">
        <h3 className="Histo-tlTitle">{title}</h3>
        <div className="Histo-tlText">{children}</div>
      </div>
    </li>
  );
}

export default function Histoire() {
  return (
    <main className="Histoire">
      {/* INTRO */}
      <Section
        kicker="Notre histoire"
        title="Héritage minéral depuis 1868"
        intro="Au cœur des paysages volcaniques de l’Ardèche, la source du Pestrin est connue depuis l’Antiquité et officiellement exploitée dès 1868. Sa pureté et sa pétillance naturelle ont façonné une tradition locale que nous perpétuons aujourd’hui avec Ventadour."
      >
        <div className="container Histo-heroGrid">
          <figure className="Histo-heroMedia">
            <img src={usine1} alt="Ancienne façade du Pestrin — hôtel, restaurant et usine" loading="eager" />
            <figcaption>Le Pestrin, au bord de la Fontaulière : hospitalité et embouteillage.</figcaption>
          </figure>
          <div className="Histo-heroText">
            <p>
              De l’hôtel-restaurant et ses terrasses ombragées à l’usine d’embouteillage, le Pestrin a
              toujours été un lieu de vie, de partage et de savoir-faire. La source Ventadour, naturellement
              gazeuse, en est l’âme.
            </p>
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section variant="alt" title="Repères historiques">
        <ol className="Histo-timeline container" aria-label="Frise chronologique des Sources du Pestrin">
          <TimelineItem year="1868" title="Naissance officielle d’une source">
            Exploitation officielle du Pestrin à Meyras. L’eau, prisée pour sa pureté et sa pétillance
            naturelle, s’impose comme une référence locale.
          </TimelineItem>
          <TimelineItem year="1951" title="Essor industriel avec Paul Ricard">
            Rachat du site, modernisation et structuration de l’embouteillage. Les bouteilles Ventadour
            voyagent au-delà de l’Ardèche et font connaître le terroir.
          </TimelineItem>
          <TimelineItem year="2017" title="Une pause forcée">
            Suspension de l’autorisation d’exploitation : l’activité s’interrompt. Une période nécessaire
            pour repenser l’avenir de manière exigeante et responsable.
          </TimelineItem>
          <TimelineItem year="2024" title="Renaissance de Ventadour">
            Remise aux normes du site par la Compagnie des Eaux d’Ardèche. Ventadour revient avec une
            vision claire&nbsp;: excellence environnementale, innovation responsable et ancrage territorial
            (territoire inscrit au Geopark UNESCO).
          </TimelineItem>
        </ol>
      </Section>

      {/* AUX ORIGINES + SCHÉMA AGRANDI */}
      <Section title="Aux origines & la signature Ventadour">
        <div className="container Histo-origins">
          <div className="Histo-originsText">
            <p>
              <strong>Aux origines.</strong> La tradition locale raconte que les eaux du Pestrin étaient déjà connues
              à l’époque romaine. Au fil des siècles, le site s’est organisé autour des émergences, jusqu’à
              l’exploitation officielle au XIXᵉ siècle.
            </p>
            <p>
              <strong>Ventadour.</strong> Née d’un terroir volcanique, Ventadour se distingue par une pétillance naturelle
              et une minéralité mesurée qui en font une eau de dégustation, aussi à l’aise au quotidien qu’à table.
            </p>
            <p>
              <strong>Un style sobre.</strong> Nous privilégions le verre consigné et une présentation élégante, pour une
              expérience simple, vraie et durable.
            </p>
          </div>

          {/* Schéma large + zoom */}
          <figure className="Histo-schemaWide">
            <Lightbox
              src={schema}
              alt="Schéma d’écoulement basaltique et infusion de CO₂ naturel"
              caption="Née du volcan : filtration lente dans les roches basaltiques et CO₂ naturel."
            />
            <figcaption>Schéma d’origine volcanique — cliquez pour agrandir.</figcaption>
          </figure>
        </div>
      </Section>

      {/* LIEU DE VIE */}
      <Section variant="alt" title="Un lieu de vie et de partage">
        <div className="container Histo-duo">
          <figure className="Histo-media">
            <img src={pergola} alt="Pergola et terrasses du Pestrin à l’époque" loading="lazy" />
            <figcaption>Terrasses et pergola : on venait goûter l’eau à la source.</figcaption>
          </figure>
          <figure className="Histo-media">
            <img src={usine2} alt="Bâtiments historiques du Pestrin" loading="lazy" />
            <figcaption>Le site historique du Pestrin, entre hospitalité et industrie.</figcaption>
          </figure>
        </div>
      </Section>

      {/* LES SOURCES DU PESTRIN */}
      <Section title="Les sources du Pestrin">
        <div className="container Histo-sourcesWrap">
          <div className="Histo-sourcesMain">
            <p>
              Le site du Pestrin abrite plusieurs sources qui ont chacune laissé leur empreinte : une
              mosaïque d’émergences qui racontent l’histoire d’un même terroir.
            </p>

            <ul className="Histo-sourcesList">
              <li>
                <strong>Ventadour</strong> — Notre source d’aujourd’hui. Naturellement pétillante, elle porte
                la relance du Pestrin en version plate et gazeuse.
              </li>
              <li>
                <strong>Chantemerle</strong> — Exploitée autrefois, son eau servait à produire l’eau plate après
                dégazéification. Son nom reste attaché à la mémoire du lieu.
              </li>
              <li>
                <strong>Julie</strong> — Une source évoquée de longue date, accessible par une cavité voûtée,
                qui a nourri bien des récits sur le site.
              </li>
              <li>
                <strong>Saint-Charles</strong> — Une source historique du vallon, mentionnée aux côtés de Ventadour
                et Chantemerle dans la tradition locale.
              </li>
              <li>
                <strong>Saint-Henri & Saint-Michel</strong> — Des points d’eau situés rive droite de la
                Fontaulière, témoins de la richesse souterraine du vallon.
              </li>
              <li>
                <strong>Source du Bois</strong> — Une émergence discrète nichée derrière les bâtiments.
              </li>
              <li>
                <strong>Forages récents (F1–F5)</strong> — Des ouvrages d’étude et de protection. <em>F3</em> fait
                l’objet d’une <strong>surveillance régulière</strong> ; c’est une <strong>piste d’avenir</strong> pour
                mieux connaître et sécuriser la ressource.
              </li>
            </ul>

            <figure className="Histo-pic Histo-pic--single">
              <Lightbox
                src={ventadourPorche}
                alt="Porche de la Source Ventadour au Pestrin"
                caption="Ventadour — le porche historique de la source."
                thumbClassName="Histo-thumb--ventadour"
              />
              <figcaption>Ventadour — le porche historique de la source.</figcaption>
            </figure>
          </div>

          {/* Aparté latéral */}
          <aside className="Histo-aside" aria-label="Aparté">
            <div className="Histo-asideCard">
              <div className="Histo-asideTitle">Le saviez-vous&nbsp;?</div>
              <p className="Histo-asideText">
                La source appelée <strong>Julie</strong> n’est pas à ciel ouvert&nbsp;: on y accède par une cavité
                taillée dans la roche. On la surnomme «&nbsp;la grotte&nbsp;». Un lieu qui mêle mémoire
                industrielle et curiosité géologique.
              </p>
              <figure className="Histo-asidePic">
                <img src={grotteJulie} alt="Cavité voûtée associée à la source Julie" loading="lazy" />
              </figure>
            </div>
          </aside>
        </div>
      </Section>

      {/* CHANTEMERLE */}
      <Section variant="alt" title="La parenthèse Chantemerle">
        <div className="container Histo-chantemerle">
          <div className="Histo-chantemerleText">
            <p>
              Par le passé, la source <strong>Chantemerle</strong> a également été exploitée pour l’eau plate
              (après dégazéification). Aujourd’hui, c’est <strong>Ventadour</strong> qui porte l’avenir&nbsp;— en
              <em> plate</em> comme en <em>gazeuse</em>.
            </p>
          </div>
          <div className="Histo-etiqGrid">
            <figure>
              <Lightbox
                src={etiqChan2}
                alt="Ancienne étiquette Chantemerle — Sources du Pestrin"
                caption="Chantemerle — étiquette historique."
              />
              <figcaption>Chantemerle — étiquette historique.</figcaption>
            </figure>
            <figure>
              <Lightbox
                src={etiqChan1}
                alt="Ancienne étiquette Chantemerle 100 cl"
                caption="Chantemerle — étiquette historique."
              />
              <figcaption>Chantemerle — étiquette historique.</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* ARCHIVES & IDENTITÉ — Masonry */}
      <Section title="Archives & identité">
        <div className="container Histo-gallery Histo-gallery--masonry">
          <figure>
            <Lightbox
              src={usine3}
              alt="Le Pestrin : façade et route d’époque"
              caption="Façade côté route — carte postale ancienne."
            />
            <figcaption>Façade côté route — carte postale ancienne.</figcaption>
          </figure>
          <figure>
            <Lightbox
              src={etiqVent1}
              alt="Ancienne étiquette Ventadour"
              caption="Ventadour — codes historiques."
            />
            <figcaption>Ventadour — codes historiques.</figcaption>
          </figure>
          <figure>
            <Lightbox
              src={etiqVent2}
              alt="Ventadour 100 cl — étiquette historique"
              caption="Ventadour — 100 cl, eau minérale gazeuse naturelle."
            />
            <figcaption>Ventadour — 100 cl, eau minérale gazeuse naturelle.</figcaption>
          </figure>
          <figure>
            <Lightbox
              src={badge1}
              alt="Affiche & notice d’époque — Pestrin"
              caption="Affiche & notice d’époque."
            />
            <figcaption>Affiche & notice d’époque.</figcaption>
          </figure>
          <figure>
            <Lightbox
              src={capsule1}
              alt="Capsule Pestrin"
              caption="Capsule Pestrin."
            />
            <figcaption>Capsule macaron Pestrin.</figcaption>
          </figure>
          <figure>
            <Lightbox
              src={capsule2}
              alt="Capsule Pestrin"
              caption="Capsule Pestrin."
            />
            <figcaption>Capsule macaron Pestrin.</figcaption>
          </figure>
        </div>
      </Section>
    </main>
  );
}
