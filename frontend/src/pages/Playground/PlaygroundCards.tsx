import React from 'react';
import { ProductCard, ValueCard } from '../../ui/Card';
import { Section } from '../../sections';
import bottle from '../../assets/photo_verre_eau.png'; 


const IconLeaf = () => (
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
<path d="M2 22s6-2 10-6 6-10 6-10-6 2-10 6-6 10-6 10Z"/>
</svg>
);


export default function PlaygroundCards(){
return (
<div>
<Section kicker="Notre collection" title="Cartes produit" intro="Démo des cartes produits Ventadour.">
<div className="container" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'16px'}}>
<ProductCard imageUrl={bottle} status="available" title="Ventadour 1L" type="Gazeuse" volume="1 L" packaging="Verre consigné · casier x12" onContactHref="/contact" />
<ProductCard imageUrl={bottle} status="soon" title="Ventadour 50cl" type="Plate" volume="0,5 L" packaging="Verre consigné · casier x20" />
</div>
</Section>


<Section variant="alt" kicker="Nos valeurs" title="Des engagements concrets" intro="Écologie, santé, préservation du site et ancrage local.">
<div className="container" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'16px'}}>
<ValueCard icon={<IconLeaf/>} title="Verre consigné">Nous privilégions le réemploi et limitons le plastique.</ValueCard>
<ValueCard icon={<IconLeaf/>} title="Origine volcanique">Une minéralité équilibrée, une pétillance naturelle.</ValueCard>
<ValueCard icon={<IconLeaf/>} title="Ancrage local">Production en Ardèche, circuits courts.</ValueCard>
</div>
</Section>
</div>
);
}

