// أيقونات خطية 24x24. استخدمها: <Fragment set:html={icon('bi')} />
const P: Record<string, string> = {
  bi: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  marketing: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 11.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z',
  automation: 'M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5',
  ai: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z',
  account: 'M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM20 20v-1.5a3.5 3.5 0 0 0-2.5-3.3M15.5 4.2a3.5 3.5 0 0 1 0 6.6',
  project: 'M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2',
  tool: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM8 7h8M8 12h2M12 12h2M8 16h2M12 16h2',
  blog: 'M6 3h9l4 4v14H6V3ZM14 3v5h5M9 13h7M9 17h7',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5ZM6 19h13',
  store: 'M4 9l1.5-5h13L20 9M4 9h16v11H4V9ZM9 20v-6h6v6',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0',
  briefcase: 'M4 8h16v11H4V8ZM9 8V5h6v3M4 13h16',
  download: 'M12 4v11M7 11l5 5 5-5M5 20h14',
  sun: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM21 21l-4.3-4.3',
  chevron: 'M6 9l6 6 6-6',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  chat: 'M4 5h16v11H9l-5 4V5Z',
  check: 'M5 12l5 5 9-10',
  rss: 'M5 5a14 14 0 0 1 14 14M5 11a8 8 0 0 1 8 8M6 19a1 1 0 1 0 0-.01',
};
export const icon = (name: string, size = 20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[name] || P.arrow}"/></svg>`;
export const svcIcons = ['bi', 'marketing', 'automation', 'ai', 'account', 'project'];
