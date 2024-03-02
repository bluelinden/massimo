<script lang="ts">
	import type { GhostAPI } from '@tryghost/content-api';

	export let data: {api: GhostAPI};
	console.log(data);
	data.api.posts.browse().then((posts) => posts.map((post) => console.log(post)))
</script>

<p>
	
</p>
