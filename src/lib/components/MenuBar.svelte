<script lang="ts">
	import type { GhostAPI, SettingsResponse } from '@tryghost/content-api';

	export let api: GhostAPI;

	$: menuItems = [] as {
		label: string;
		url: string;
	}[];

	$: logoUrl = '' as string;

	api.settings.browse().then((settings) => {
		logoUrl = settings.logo ?? '';
		menuItems = settings.navigation ?? [];
	});
</script>

<div class="menuContainer">
	<nav class="menu">
		<a href="/"><img class="logo" src={logoUrl} alt="the blue linden logo" /></a>
		{#each menuItems as item}
			<a href={item.url}>{item.label}</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.menuContainer {
		.menu {
			width: colspan(16, 16);
			height: 4em;
			padding-top: 0.5em;
			padding-bottom: 0.5em;

			.logo {
				height: 3em;
				border-radius: 10px;
				@include clickableBorder;
			}
		}
	}
</style>
