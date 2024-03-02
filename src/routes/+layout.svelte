<script lang="ts">
	import type { GhostAPI } from '@tryghost/content-api';
	import MenuBar from '$lib/components/MenuBar.svelte';
	export let data: { api: GhostAPI };
</script>

<MenuBar api={data.api} />
<slot />

<style lang="scss">
</style>
