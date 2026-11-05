import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Keep the journal out of the sitemap until at least one post is published (draft: false).
const journalDir = new URL('./src/content/journal/', import.meta.url);
const journalLive = readdirSync(journalDir).some(
  (f) => f.endsWith('.md') && /^draft:\s*false/m.test(readFileSync(new URL(f, journalDir), 'utf8')),
);

export default defineConfig({
  site: 'https://www.balbinagarzapsychotherapy.com',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => journalLive || !/\/journal$/.test(page),
    }),
  ],
});
