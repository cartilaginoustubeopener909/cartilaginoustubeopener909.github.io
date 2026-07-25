// @ts-check
import { defineConfig } from 'astro/config';

const buildVersion = (process.env.GITHUB_SHA ?? process.env.npm_package_version ?? 'dev')
  .slice(0, 12)
  .replace(/[^a-zA-Z0-9.-]/g, '-');

export default defineConfig({
  site: 'https://githubdood21.github.io',
  vite: {
    define: {
      __BUILD_VERSION__: JSON.stringify(buildVersion),
    },
    environments: {
      client: {
        build: {
          rollupOptions: {
            output: {
              entryFileNames: `_astro/[name].v${buildVersion}.[hash].js`,
              chunkFileNames: `_astro/[name].v${buildVersion}.[hash].js`,
            },
          },
        },
      },
    },
  },
});
