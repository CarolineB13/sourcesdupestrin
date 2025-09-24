import React from "react";
import "./ImpactStats.css";

type Stat = { label: string; value: number; suffix?: string; };
type Props = { stats: Stat[]; subtitle?: string; };

export default function ImpactStats({ stats, subtitle }: Props){
  return (
    <section className="Impact">
      <div className="container">
        <header className="Impact-head">
          <h2 className="Impact-title">Notre impact concret</h2>
          {subtitle && <p className="Impact-sub">{subtitle}</p>}
        </header>
        <div className="Impact-grid">
          {stats.map((s, i) => (
            <div className="Impact-card" key={i}>
              <div className="Impact-value">
                {s.value.toLocaleString("fr-FR")}
                {s.suffix ? <span className="Impact-suffix">{s.suffix}</span> : null}
              </div>
              <div className="Impact-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
