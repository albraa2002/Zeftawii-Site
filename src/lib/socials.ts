const ic = (d: string) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
export const socialDefs: Record<string, { label: string; svg: string }> = {
  linkedin: { label: 'LinkedIn', svg: ic('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.01M12 17v-6M12 13.5c0-1.4 1-2.5 2.5-2.5S17 12 17 13.5V17"/>') },
  instagram: { label: 'Instagram', svg: ic('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/>') },
  facebook: { label: 'Facebook', svg: ic('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z"/>') },
  tiktok: { label: 'TikTok', svg: ic('<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.2 5 4.4"/>') },
  youtube: { label: 'YouTube', svg: ic('<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9.5 5 2.5-5 2.5Z"/>') },
  x: { label: 'X', svg: ic('<path d="M4 4l16 16M20 4 4 20"/>') },
  threads: { label: 'Threads', svg: ic('<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>') },
  whatsapp: { label: 'WhatsApp', svg: ic('<path d="M3 21l1.7-5A9 9 0 1 1 8 19.3L3 21Z"/><path d="M9 9c.4 2.8 2.700 5.100 6 6l1.500-1.500-2-1-1 .8c-1-.5-1.800-1.300-2.300-2.300l.8-1-1-2L9 9Z"/>') },
  github: { label: 'GitHub', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>' },
  mostaql: { label: 'مستقل', svg: '<span class="soc-txt" aria-hidden="true">م</span>' },
};
