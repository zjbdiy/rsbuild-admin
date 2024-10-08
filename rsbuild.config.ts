import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginVue(), pluginLess()],
  server: {
    proxy: {
      '/api': {
        target: 'https://lpkj.leaper.ltd:5101/v4server/',
      },
    },
  },
});
