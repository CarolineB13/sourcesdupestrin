// src/api/products.ts
export type Product = {
  id: string;
  status: "available" | "soon";
  title: string;
  type: string;
  volume: string;
  packaging: string;
  image?: string;
  shopUrl?: string;
};

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  // 1) Essaye l’API si définie
  if (API_URL) {
    try {
      const res = await fetch(`${API_URL}/products`, { signal, headers: { "accept": "application/json" } });
      if (!res.ok) throw new Error(`API ${res.status}`);
      return await res.json();
    } catch (e) {
      console.warn("[products] remote API failed, using static fallback.", e);
    }
  }

  // 2) Fallback statique (public/products.json)
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const res = await fetch(`${base}/products.json`, { signal, headers: { "accept": "application/json" } });
  if (!res.ok) throw new Error(`Static products not found (${res.status})`);
  const data = await res.json();

  // Normalise les images relatives -> BASE_URL
  return (data as any[]).map(p => ({
    ...p,
    image: p.image && !/^https?:\/\//i.test(p.image)
      ? new URL(p.image.replace(/^\/+/, ""), base + "/").toString()
      : p.image
  })) as Product[];
}
