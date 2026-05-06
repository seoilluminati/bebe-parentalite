import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bebe-au-naturel-guide.fr',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
