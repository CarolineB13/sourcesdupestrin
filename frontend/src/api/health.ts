type Health = {
  status: 'ok' | 'down';
  service: string;
  env: string;
  shopEnabled?: boolean;
  shopUrl?: string | null;
};

const { apiFetch } = await import('./index');

export function fetchHealth(signal?: AbortSignal) {
  return apiFetch<Health>('/api/health', { signal });
}
