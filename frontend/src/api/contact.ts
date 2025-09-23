export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  locale?: 'fr' | 'en';
};

export type ContactResponse = { ok: true } | { ok: false; error: string };

const { apiFetch } = await import('./index');

export async function sendContact(payload: ContactPayload, signal?: AbortSignal): Promise<ContactResponse> {
  // simple garde-fou (le back fait la vraie validation)
  if (!payload.name?.trim() || !payload.email?.includes('@') || (payload.message||'').trim().length < 10) {
    return { ok: false, error: 'Champs invalides côté client' };
  }
  try {
    await apiFetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
      signal
    });
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message || 'Erreur inconnue' };
  }
}
