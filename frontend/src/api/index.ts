// Petit helper commun
const BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    ...init
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${path}`);
  return res.json() as Promise<T>;
}

export * from './products';
export * from './health';
export * from './contact';
