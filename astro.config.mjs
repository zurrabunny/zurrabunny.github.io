// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: '',
  base: '',
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh-cn', 'ar'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'red',
    },
  },
});
