// src/api/products.ts
export type Product = {
  id: string;
  title: string;                // ex: "Ventadour 1 L"
  type: 'Plate' | 'Gazeuse';
  volume: string;               // "1 L" | "0,5 L" | "33 cl"
  packaging?: string;           // "verre consigné · x12"
  status: 'available' | 'soon';
  image?: string;
  shopUrl?: string;
};

type BackendProduct = {
  id: string;
  name: string;                 // "Ventadour 1L — Plate"
  format?: string;              // "1l" | "0,5l" | "33cl"
  type?: 'plate' | 'gazeuse';
  packaging?: string;           // "verre consigné" | "canette aluminium"
  pack?: string;                // "x12" | "x20"
  comingSoon?: boolean;
  image?: string;
  shopUrl?: string;
};

type ProductsResponse = { items: BackendProduct[] };

// 👉 Fallback malin : .env > sinon en dev (5173) on cible 4000
const BASE = (
  import.meta.env.VITE_API_BASE_URL ||
  (location.port === '5173' ? 'http://localhost:4000' : '')
).replace(/\/$/, '');

const cap = (s?: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s) as
  | 'Plate' | 'Gazeuse' | undefined;

function volumeFromFormat(fmt?: string, fallbackName?: string): string {
  if (fmt) {
    const f = fmt.toLowerCase().replace(/\s+/g, '');
    if (f.endsWith('l'))  return f.replace('l', ' L').replace('.', ','); // 0,5l -> 0,5 L
    if (f.endsWith('cl')) return f.replace('cl', ' cl');                 // 33cl -> 33 cl
  }
  const m = fallbackName?.match(/Ventadour\s+([^—]+)\s*—/i);
  return m ? m[1].trim() : '';
}

function typeFromBoth(t?: string, name?: string): 'Plate' | 'Gazeuse' {
  if (t === 'plate' || /plate/i.test(name || ''))   return 'Plate';
  if (t === 'gazeuse' || /gazeuse/i.test(name||'')) return 'Gazeuse';
  return 'Plate';
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const url = `${BASE}/api/products`;
  console.info('[fetchProducts] GET', url);

  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

  const data = (await res.json()) as ProductsResponse | BackendProduct[];
  const raw = Array.isArray(data) ? data : data.items || [];

  const mapped = raw.map(p => {
    const volume = volumeFromFormat(p.format, p.name);
    const type   = typeFromBoth(p.type, p.name);
    const packaging = [p.packaging, p.pack].filter(Boolean).join(' · ') || undefined;

    return {
      id: p.id,
      title: `Ventadour ${volume || ''}`.trim(),
      type,
      volume,
      packaging,
      status: p.comingSoon ? 'soon' : 'available',
      image: p.image,
      shopUrl: p.shopUrl
    } as Product;
  });

  console.info('[fetchProducts] ok items=', mapped.length);
  return mapped;
}
