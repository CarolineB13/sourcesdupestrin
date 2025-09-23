import React, { useState } from 'react';
import { Input } from '../../ui/Input';


export default function PlaygroundInputs(){
const [value, setValue] = useState('');
return (
<div style={{padding:'32px', display:'grid', gap:'16px', background:'var(--color-bg)'}}>
<h1 style={{fontFamily:'Pestrin, serif', fontSize:'40px', margin:0}}>INPUTS – VENTADOUR</h1>


<Input label="Votre nom" placeholder="Ex: Claire" hint="Texte d’aide" />


<Input label="Email" type="email" placeholder="nom@exemple.fr" required />


<Input label="Avec erreur" placeholder="Tape quelque chose" error="Adresse email invalide" />


<div style={{display:'flex', gap:'12px', alignItems:'center', flexWrap:'wrap'}}>
<div style={{width:260}}><Input size="sm" label="Small" placeholder="Small" /></div>
<div style={{width:260}}><Input size="md" label="Medium" placeholder="Medium" /></div>
<div style={{width:260}}><Input size="lg" label="Large" placeholder="Large" /></div>
</div>


<Input label="Full width" placeholder="S’étire" fullWidth />


<Input label="Disabled" placeholder="Inactif" disabled />
</div>
);
}