import React from 'react';
import { Button } from '../Button';
import './ProductCard.css';


export type ProductCardProps = {
imageUrl?: string;
status?: 'available' | 'soon';
title: string; // ex: "Ventadour 1L"
type: 'Plate' | 'Gazeuse';
volume: string; // ex: "1 L"
packaging?: string; // ex: "Verre consigné · casier x12"
onContactHref?: string; // ex: "/contact"
onShopHref?: string; // ex: url boutique
className?: string;
};


const SHOP_ENABLED = String(import.meta.env.VITE_SHOP_ENABLED) === 'true';


const cx = (...cls: Array<string | false | undefined>) => cls.filter(Boolean).join(' ');


export default function ProductCard({ imageUrl, status='available', title, type, volume, packaging, onContactHref='/contact', onShopHref, className }: ProductCardProps){
return (
<article className={cx('pcard', className)}>
<div className="pcard__media" aria-hidden>
{imageUrl ? <img className="pcard__img" src={imageUrl} alt=""/> : (
<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
<path d="M8 8v10a4 4 0 0 0 8 0V8"/><path d="M10 5h4"/><path d="M9 8h6"/>
</svg>
)}
</div>


<div style={{display:'grid', gap:'10px'}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'8px'}}>
{status === 'soon' && <span className="pcard__badge pcard__badge--soon">Bientôt</span>}
</div>
<h3 className="pcard__title">{title}</h3>
<div className="pcard__meta">
<span>{type}</span>
<span>•</span>
<span>{volume}</span>
{packaging && (<><span>•</span><span>{packaging}</span></>)}
</div>
<div className="pcard__actions">
<Button as="a" href={onContactHref} variant="ghost" size="sm">Nous contacter</Button>
{SHOP_ENABLED && onShopHref && (
<Button as="a" href={onShopHref} size="sm" target="_blank" rel="noopener">Commander</Button>
)}
</div>
</div>
</article>
);
}

