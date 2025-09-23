import React from 'react';
import { Button } from '../../ui/Button'



const IconArrow = () => (
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
<path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);


export default function PlaygroundButtons(){
return (
<div style={{padding:'32px', display:'grid', gap:'16px', background:'var(--color-bg)'}}>
<h1 style={{fontFamily:'Pestrin, serif', fontSize:'40px', margin:0}}>BOUTONS – VENTADOUR</h1>


<div style={{display:'flex', gap:'12px', alignItems:'center', flexWrap:'wrap'}}>
<Button>Primaire</Button>
<Button rightIcon={<IconArrow/>}>Avec icône</Button>
<Button loading>Chargement…</Button>
<Button disabled>Disabled</Button>
</div>


<div style={{display:'flex', gap:'12px', alignItems:'center', flexWrap:'wrap'}}>
<Button variant="ghost">Fantôme</Button>
<Button variant="ghost" leftIcon={<IconArrow/>}>Retour</Button>
<Button as="a" href="#" variant="ghost" rightIcon={<IconArrow/>}>Lien</Button>
</div>


<div style={{display:'flex', gap:'12px', alignItems:'center', flexWrap:'wrap'}}>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button fullWidth>Full width</Button>
</div>
</div>
);
}