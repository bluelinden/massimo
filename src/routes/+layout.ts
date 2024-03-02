import GhostContentAPI from '@tryghost/content-api';
import type { LayoutLoad } from './$types.js';

import '../app.scss';

export const load: LayoutLoad = async function load({ params }) {
	// content keys aren't necessarily secret, but it's still a god idea to not hardcode them here
	const apiKey = import.meta.env.STATIC_GHOST_CONTENT_KEY as string;
	const apiUrl = import.meta.env.STATIC_GHOST_API_URL as string;

	const api = new GhostContentAPI({
		url: apiUrl,
		key: apiKey,
		version: 'v5.0'
	});

	return {
		api
	};
};
