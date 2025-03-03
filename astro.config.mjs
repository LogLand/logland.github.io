// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://logland.life',
  // site: 'https://logland.github.io',
  output: 'static',
  integrations: [mdx(), tailwind(), sitemap()],
  vite: {
      build: {
        assetsInlineLimit: 1
    }
  }
});