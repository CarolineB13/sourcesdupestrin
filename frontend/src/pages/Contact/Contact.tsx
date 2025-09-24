import React from 'react'
import './Contact.css'
import { Car, Footprints, Train } from "lucide-react";
// ————————————————————————
// Petits composants réutilisables
// ————————————————————————
export function ContactInfo(){
  return (
    <section className="Contact-section" aria-labelledby="coord-title">
      <div className="container">
        <h2 id="coord-title" className="Contact-h2">Coordonnées</h2>
        <div className="Contact-cards">
          <article className="Contact-card" aria-label="Adresse & société">
            <h3 className="Contact-h3">Compagnie des Eaux d’Ardèche</h3>
            <p className="Contact-mono">Les Sources du Pestrin</p>
            <p>2742 route de la Fontaulière<br/>07380 Meyras, Ardèche — France</p>
          </article>

          <article className="Contact-card" aria-label="Téléphone & email">
            <h3 className="Contact-h3">Nous contacter</h3>
            <p>Tél. : <a href="tel:+33475871053">04 75 87 10 53</a></p>
            <p>Email : <a href="mailto:contact@sourcesdupestrin.fr">contact@sourcesdupestrin.fr</a></p>
          </article>

          <article className="Contact-card" aria-label="Horaires">
            <h3 className="Contact-h3">Horaires d’accueil</h3>
            <HoursTable/>
          </article>
        </div>
      </div>
    </section>
  )
}

export function HoursTable(){
  return (
    <table className="HoursTable" aria-label="Horaires d’ouverture">
      <tbody>
        <tr><th>Lun</th><td>09:00–12:00</td><td>14:00–17:00</td></tr>
        <tr><th>Mar</th><td>09:00–12:00</td><td>14:00–17:00</td></tr>
        <tr><th>Mer</th><td>09:00–12:00</td><td>14:00–17:00</td></tr>
        <tr><th>Jeu</th><td>09:00–12:00</td><td>14:00–17:00</td></tr>
        <tr><th>Ven</th><td>09:00–12:00</td><td>14:00–16:00</td></tr>
      </tbody>
    </table>
  )
}

export function MapEmbed(){
  const lat = 44.6821278;
  const lng = 4.2818839;

  const base = "https://www.google.com/maps/dir/?api=1";
  const driving  = `${base}&destination=${lat},${lng}&travelmode=driving`;
  const walking  = `${base}&destination=${lat},${lng}&travelmode=walking`;
  const transit  = `${base}&destination=${lat},${lng}&travelmode=transit`;

  return (
    <section className="Contact-section" aria-labelledby="map-title">
      <div className="container">
        <h2 id="map-title" className="Contact-h2">Nous trouver</h2>

        <div className="MapEmbed">
          {/* eslint-disable-next-line max-len */}
          <iframe
            title="Plan d’accès — Les Sources du Pestrin (Meyras)"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.8360270915764!2d4.2818839!3d44.682127799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4dc65df9bc2fb%3A0x7faf45cf714febdf!2sLes%20Sources%20du%20Pestrin%20-%20Compagnie%20des%20Eaux%20d'Ard%C3%A8che!5e0!3m2!1sfr!2sfr!4v1758718739993!5m2!1sfr!2sfr"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="MapActions">
          <a className="Btn Btn--primary MapBtn" href={driving} target="_blank" rel="noreferrer">
            <Car size={18} aria-hidden="true" />
            <span>Itinéraire</span>
          </a>
        </div>
      </div>
    </section>
  );
}


export function ContactForm(){
  const [info, setInfo] = React.useState<string>('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setInfo('Le formulaire sera activé très bientôt (envoi par SMTP). En attendant, utilisez le mailto ci-dessus).')
  }

  return (
    <section className="Contact-section" aria-labelledby="form-title">
      <div className="container">
        <h2 id="form-title" className="Contact-h2">Écrivez-nous</h2>
        <form className="Contact-form" onSubmit={onSubmit} noValidate>
          {/* Champ anti-bots (honeypot) */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

          <div className="FormRow">
            <div className="Field">
              <label htmlFor="name">Nom <span aria-hidden>*</span></label>
              <input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="Field">
              <label htmlFor="email">Email <span aria-hidden>*</span></label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
          </div>

          <div className="FormRow">
            <div className="Field">
              <label htmlFor="phone">Téléphone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" pattern="^[0-9+().\\-\\s]{6,}$" />
            </div>
            <div className="Field">
              <label htmlFor="subject">Sujet</label>
              <input id="subject" name="subject" />
            </div>
          </div>

          <div className="Field">
            <label htmlFor="message">Votre message <span aria-hidden>*</span></label>
            <textarea id="message" name="message" required rows={6} />
          </div>

          <div className="FormActions">
            <button className="Btn Btn--primary" title="Bientôt actif">Envoyer</button>
            {info && <p className="FormMsg FormMsg--info">{info}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default function Contact(){
  return (
    <main className="Contact">
      <header className="Contact-hero">
        <div className="container">
          <p className="Contact-kicker">Contact</p>
          <h1>Nous rencontrer & nous écrire</h1>
          <p className="Contact-intro">Pour toute question (professionnels, particuliers, presse), contactez-nous via le formulaire ou par téléphone. Nous sommes basés à Meyras, au cœur des Monts d’Ardèche.</p>
        </div>
      </header>

      <ContactInfo/>
      <ContactForm/>
      <MapEmbed/>

      {/* JSON-LD — résultats enrichis */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context':'https://schema.org',
        '@type':'Organization',
        name:'Les Sources du Pestrin',
        legalName:'Compagnie des Eaux d\'Ardèche',
        url:'https://www.sourcesdupestrin.fr',
        logo:'https://www.sourcesdupestrin.fr/assets/logo-pestrin.svg',
        brand:{ '@type':'Brand', name:'Ventadour' },
        address:{ '@type':'PostalAddress', streetAddress:'2742 route de la Fontaulière', postalCode:'07380', addressLocality:'Meyras', addressCountry:'FR' },
        contactPoint:[{ '@type':'ContactPoint', contactType:'customer service', telephone:'+33-4-75-87-10-53', email:'contact@sourcesdupestrin.fr', availableLanguage:['fr','en'] }],
        hasMap:`https://www.google.com/maps?q=${encodeURIComponent('2742 Route de la Fontaulière, 07380 Meyras, France')}`,
        openingHoursSpecification:[
          { '@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday'], opens:'09:00', closes:'17:00' },
          { '@type':'OpeningHoursSpecification', dayOfWeek:'Friday', opens:'09:00', closes:'16:00' }
        ]
      })}} />
    </main>
  )
}
