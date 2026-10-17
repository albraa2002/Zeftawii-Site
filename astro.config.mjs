import { defineConfig } from 'astro/config';

// بعد ما تنشر الموقع غيّر السطر ده لدومينك الحقيقي
export default defineConfig({
  site: 'https://zeftawii-site-bkxt.vercel.app',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
