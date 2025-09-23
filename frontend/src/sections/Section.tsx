import React from 'react';
import './Section.css';


export type SectionProps = {
id?: string;
variant?: 'default' | 'alt';
kicker?: string;
title?: string;
intro?: string;
children: React.ReactNode;
};


export default function Section({ id, variant='default', kicker, title, intro, children }: SectionProps){
return (
<section id={id} className={`section ${variant === 'alt' ? 'section--alt' : ''}`}>
<div className="container">
{(kicker || title || intro) && (
<header className="section__head">
{kicker && <div className="section__kicker">{kicker}</div>}
{title && <h2 className="section__title">{title}</h2>}
{intro && <p className="section__intro">{intro}</p>}
</header>
)}
{children}
</div>
</section>
);
}

