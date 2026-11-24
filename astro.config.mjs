// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://3a-fasaderstvo.si',
  vite: {
    plugins: [tailwindcss()],
  },
});
