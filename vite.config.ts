import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@import '$lib/styles/_column-setter.scss'
				@import '$lib/styles/_column-settings.scss'
			 `
			}
		}
	},
	envPrefix: 'STATIC_'
});
