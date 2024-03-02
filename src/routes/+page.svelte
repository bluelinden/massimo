<script lang="ts">
	import type { GhostAPI, PostsOrPages } from '@tryghost/content-api';

	export let data: { api: GhostAPI };
	const { api } = data;

	const dateLocale = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	$: highlightedPosts = api.posts.browse({ filter: 'featured:true' });
</script>

<main id="homepage">
	{#await highlightedPosts then posts}
		{#each posts as post}
			<article class="ultrawide stout hero">
				<a href={post.url}>
				<img src={post.feature_image} alt={post.feature_image_alt} />
				<div class="overlay">
					<h1>{post.title}</h1>
					<!-- {#if post.updated_at}
						<p>Published on {new Date(post.updated_at).toDateString()}</p>
					{/if}
					<p>({post.reading_time} {post.reading_time === 1 ? 'minute' : 'minutes'} to read)</p> -->
				</div>
				</a>
			</article>
		{/each}
	{/await}
	{#await api.posts.browse({ limit: 'all' }) then posts}
		{#each posts as post}
			<p>{post.title}</p>
		{/each}
	{/await}
</main>

<style lang="scss">
	#homepage {
		article {
			margin-bottom: 1em;
			a {
				color: $fg;
			}
		}

		.ultrawide {
			width: colspan(16, 16);
		}

		.stout {
			height: 16em;
		}

		.hero {
			border-radius: 2em;
			@include clickableBorder;
			overflow: hidden;
			position: relative;
			background-color: $bgFaded;
			img {
				max-height: 100%;
				left: 0;
				top: 0;
				width: 100%;
				position: absolute;
				opacity: 0.15;
				filter: saturate(2) blur(15px);
			}
			.overlay {
				top: 50%;
				transform: translateY(-50%);
				margin-left: colspan(1, 16);
				margin-right: colspan(2, 16);
				h1 {
					font-size: xxx-large;
				}
				* {
					padding: 0;
					margin: 0;
				}

				position: absolute;
				z-index: 2;
			}
		}

		img {
			object-fit: cover;
		}
	}
</style>
