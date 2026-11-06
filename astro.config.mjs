import { defineConfig } from 'astro/config';

export default defineConfig(({ command }) => ({
  site: 'https://evadesad.github.io',
  base: command === 'dev' ? '/' : '/TheSite01',
  output: 'static',
}));
