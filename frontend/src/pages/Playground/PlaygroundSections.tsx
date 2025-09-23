import React from 'react';
import { Section } from '../../sections';


export default function PlaygroundSections(){
return (
<>
<Section kicker="Héritage" title="Pestrin = Ventadour" intro="Une source née du volcan, exploitée depuis 1868, aujourd’hui relancée en verre consigné.">
<div style={{height:120, background:'linear-gradient(90deg,#eef3f7,#f5f8fb)', borderRadius:'10px'}}/>
</Section>
<Section variant="alt" kicker="Terroir" title="Au cœur des Monts d’Ardèche" intro="Site classé UNESCO Geopark.">
<div style={{height:120, background:'linear-gradient(90deg,#eef3f7,#f5f8fb)', borderRadius:'10px'}}/>
</Section>
</>
);
}