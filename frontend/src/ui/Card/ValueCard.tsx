import React from 'react';
import './ValueCard.css';


export type ValueCardProps = {
icon?: React.ReactNode;
title: string;
children: React.ReactNode;
className?: string;
};


const cx = (...cls: Array<string | false | undefined>) => cls.filter(Boolean).join(' ');


export default function ValueCard({ icon, title, children, className }: ValueCardProps){
return (
<article className={cx('vcard', className)}>
{icon && <div className="vcard__icon" aria-hidden>{icon}</div>}
<h3 className="vcard__title">{title}</h3>
<p className="vcard__text">{children}</p>
</article>
);
}

