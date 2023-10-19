import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ fallback: '404.html' }),
    alias: {
      $experiences: path.resolve('./src/experiences'),
      $data: path.resolve('./src/data'),
      $actions: path.resolve('./src/actions'),
    },
	},
  preprocess: [vitePreprocess()],
};

export default config;
