import React from "react";
import "./Lightbox.css";

type LightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  thumbClassName?: string;
};

export default function Lightbox({ src, alt, caption, className, thumbClassName }: LightboxProps){
  const [open, setOpen] = React.useState(false);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent){ if(e.key === "Escape") setOpen(false); }
    if(open){
      document.addEventListener("keydown", onKey);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`Lb-thumb ${thumbClassName || ""}`}
        onClick={() => setOpen(true)}
        aria-label={`Agrandir l’image : ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" />
      </button>

      {open && (
        <div
          className={`Lb-overlay ${className || ""}`}
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Agrandissement de l’image"
          onClick={(e) => { if (e.target === overlayRef.current) setOpen(false); }}
        >
          <figure className="Lb-figure">
            <img className="Lb-img" src={src} alt={alt} />
            {caption && <figcaption className="Lb-caption">{caption}</figcaption>}
          </figure>
          <button
            ref={closeBtnRef}
            className="Lb-close"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
