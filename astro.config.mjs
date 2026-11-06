import { defineConfig } from 'astro/config';

const base = process.env.GITHUB_ACTIONS === 'true' ? '/TheSite01/' : '/';

export default defineConfig({
  site: 'https://evadesad.github.io',
  base,
  output: 'static',
});
