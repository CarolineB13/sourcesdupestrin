import React from "react";
import "./ConsigneProcess.css";
import { Package, Truck, Waves, RefreshCw } from "lucide-react";

type Step = { icon: React.ReactNode; title: string; text: string; };

export default function ConsigneProcess(){
  const steps: Step[] = [
    { icon: <Package size={24} />, title: "Je consigne", text: "J’achète Ventadour en verre consigné (casiers réutilisables)." },
    { icon: <Truck size={24} />,   title: "Je rapporte", text: "Je rends les bouteilles vides à l’usine, au point d’achat, ou chez un partenaire." },
    { icon: <Waves size={24} />,   title: "On lave",     text: "Tri, contrôle, lavage industriel puis contrôle qualité." },
    { icon: <RefreshCw size={24}/>,title: "On réemploie",text: "Les bouteilles repartent pour une nouvelle vie. Zéro déchet." }
  ];

  return (
    <section className="Consigne" aria-labelledby="consigne-title">
      <div className="container">
        <header className="Consigne-head">
          <h2 id="consigne-title" className="Consigne-title">La consigne en 4 étapes</h2>
          <p className="Consigne-sub">Un cycle local et maîtrisé — du terroir à votre table.</p>
        </header>

        <ol className="Consigne-steps">
          {steps.map((s, i) => (
            <li className="Consigne-step" key={i}>
              <span className="Consigne-ico" aria-hidden="true">{s.icon}</span>
              <h3 className="Consigne-stepTitle">{s.title}</h3>
              <p className="Consigne-stepText">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
