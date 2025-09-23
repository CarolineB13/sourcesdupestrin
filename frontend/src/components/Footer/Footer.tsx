import React from 'react';
import logoUrl from '../../assets/logo-pestrin.svg';
import './Footer.css';


export default function Footer(){
const year = new Date().getFullYear();
return (
<footer className="footer">
<div className="container footer__inner">
<a className="footer__brand" href="/">
<img className="footer__logo" src={logoUrl} alt="Les Sources du Pestrin" />
<span className="footer__title">Les Sources du Pestrin</span>
</a>


<nav className="footer__links" aria-label="Liens bas de page">
<a className="footer__link" href="/mentions-legales">Mentions légales</a>
<a className="footer__link" href="/politique-confidentialite">Politique de confidentialité</a>
</nav>


<div className="footer__meta">
<span>Compagnie des Eaux d’Ardèche — 2742 route de La Fontaulière - 07380 Meyras</span>
<a className="footer__link" href="tel:+33475871053">+33 (0)4 75 87 10 53</a>
<a className="footer__link" href="mailto:contact@sourcesdupestrin.fr">contact@sourcesdupestrin.fr</a>
<span className="footer__copy">© {year} — Tous droits réservés</span>
</div>
</div>
</footer>
);
}