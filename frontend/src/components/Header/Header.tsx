// src/components/Header/Header.tsx
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button'; 
import logoUrl from '../../assets/logo-pestrin.svg';
import './Header.css';

const SHOP_ENABLED = String(import.meta.env.VITE_SHOP_ENABLED) === 'true';

function LangSwitcher(){
  const loc = useLocation();
  const nav = useNavigate();
  const isEN = loc.pathname.startsWith('/en');

  const switchTo = (lang: 'fr' | 'en') => {
    const { pathname, search, hash } = loc;
    if (lang === 'en' && !pathname.startsWith('/en')) {
      nav('/en' + pathname + search + hash);
    } else if (lang === 'fr' && pathname.startsWith('/en')) {
      nav(pathname.replace(/^\/en/, '') + search + hash || '/');
    }
  };

  return (
    <div className="lang" role="tablist" aria-label="Language switcher">
      <button className="lang__btn" role="tab" aria-current={!isEN ? 'true' : undefined} onClick={() => switchTo('fr')}>FR</button>
      <span>·</span>
      <button className="lang__btn" role="tab" aria-current={isEN ? 'true' : undefined} onClick={() => switchTo('en')}>EN</button>
    </div>
  );
}

export default function Header(){
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="header__brand" href="/">
          <img className="header__logo" src={logoUrl} alt="Les Sources du Pestrin" />
          <span className="header__title">Les Sources du Pestrin</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav__list">
            <li><NavLink to="/" className={({isActive}) => `nav__link ${isActive ? 'is-active' : ''}`}>Accueil</NavLink></li>
            <li><NavLink to="/histoire" className={({isActive}) => `nav__link ${isActive ? 'is-active' : ''}`}>Notre histoire</NavLink></li>
            <li><NavLink to="/valeurs" className={({isActive}) => `nav__link ${isActive ? 'is-active' : ''}`}>Nos valeurs</NavLink></li>
            <li><NavLink to="/collection" className={({isActive}) => `nav__link ${isActive ? 'is-active' : ''}`}>Notre collection</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => `nav__link ${isActive ? 'is-active' : ''}`}>Contact</NavLink></li>
          </ul>
          <LangSwitcher />
          {SHOP_ENABLED && (
            <Button as="a" href="https://boutique.sourcesdupestrin.fr" target="_blank" rel="noopener" size="sm">Boutique</Button>
          )}
        </nav>

        {/* Burger */}
        <button className="burger" aria-label="Ouvrir le menu" aria-controls="menuMobile" aria-expanded={open ? 'true' : 'false'} onClick={() => setOpen(true)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
      </div>

      {/* Drawer mobile */}
      <div className="drawer" id="menuMobile" aria-hidden={open ? 'false' : 'true'} onClick={close}>
        <div className="drawer__panel" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          <div className="drawer__top">
            <a className="header__brand" href="/" onClick={close}>
              <img className="header__logo" src={logoUrl} alt="Les Sources du Pestrin"
                   onError={(e) => { (e.currentTarget as HTMLImageElement).style.display='none'; }} />
              <span className="header__title">Les Sources du Pestrin</span>
            </a>
            <button className="burger" aria-label="Fermer le menu" onClick={close}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 6l12 12M18 6l-12 12"/>
              </svg>
            </button>
          </div>

          <nav className="drawer__links" aria-label="Navigation mobile">
            <NavLink to="/" className="drawer__link" onClick={close}>Accueil</NavLink>
            <NavLink to="/histoire" className="drawer__link" onClick={close}>Notre histoire</NavLink>
            <NavLink to="/valeurs" className="drawer__link" onClick={close}>Nos valeurs</NavLink>
            <NavLink to="/collection" className="drawer__link" onClick={close}>Notre collection</NavLink>
            <NavLink to="/contact" className="drawer__link" onClick={close}>Contact</NavLink>
          </nav>

          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'auto', gap:'12px'}}>
            <LangSwitcher />
            {SHOP_ENABLED && (
              <Button as="a" href="https://boutique.sourcesdupestrin.fr" target="_blank" rel="noopener" size="sm">Boutique</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
