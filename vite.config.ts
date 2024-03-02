import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@import '$lib/styles/colors.scss';
				@import '$lib/styles/borders.scss';
				@import '$lib/styles/_column-settings.scss';
				@import '$lib/styles/_column-setter.scss';
			 `
			}
		}
	},
	envPrefix: 'STATIC_'
});
