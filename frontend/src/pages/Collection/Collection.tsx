// src/pages/Collection/Collection.tsx
import React from 'react';
import { Section } from '../../sections';
import { ProductCard } from '../../ui/Card';
import { fetchProducts, type Product } from '../../api/products';
import './Collection.css';

export default function Collection(){
  const [items, setItems] = React.useState<Product[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const ctl = new AbortController();
    let alive = true;

    (async () => {
      try {
        const data = await fetchProducts(ctl.signal);
        if (!alive) return;
        setItems(data);
      } catch (e: any) {
        // Ignore les aborts (StrictMode double-mount, navigation, etc.)
        const msg = String(e?.message || '');
        if (e?.name === 'AbortError' || /aborted/i.test(msg)) return;

        console.error('[Collection] fetchProducts failed:', e);
        if (!alive) return;
        setError(e?.message || 'Erreur inconnue');
      }
    })();

    return () => {
      alive = false;
      ctl.abort();
    };
  }, []);

  const available = (items || []).filter(p => p.status === 'available');
  const soon      = (items || []).filter(p => p.status === 'soon');

  return (
    <div className="collection">
      <Section
        kicker="Notre collection"
        title="Notre collection Ventadour"
        intro="Formats disponibles et à venir, conditionnés principalement en verre consigné."
      >
        <div className="container">
          {/* n'affiche l'erreur que s'il n'y a pas de données */}
          {error && !items && <div className="collection__error">Erreur de chargement : {error}</div>}
          {!items && !error && <div className="collection__status">Chargement…</div>}

          {items && (
            <div className="collection__grid">
              {available.map(p => (
                <ProductCard
                  key={p.id}
                  imageUrl={p.image}
                  status={p.status}
                  title={p.title}
                  type={p.type}
                  volume={p.volume}
                  packaging={p.packaging}
                  onContactHref="/contact"
                  onShopHref={p.shopUrl}
                />
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section variant="alt" title="Bientôt" intro="Formats en préparation (planning à confirmer).">
        <div className="container">
          {items && (
            <div className="collection__grid">
              {soon.map(p => (
                <ProductCard
                  key={p.id}
                  imageUrl={p.image}
                  status={p.status}
                  title={p.title}
                  type={p.type}
                  volume={p.volume}
                  packaging={p.packaging}
                  onContactHref="/contact"
                  onShopHref={p.shopUrl}
                />
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
