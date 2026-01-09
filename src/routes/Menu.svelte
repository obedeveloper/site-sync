<script lang="ts">
	import { logIn } from '$lib/auth-client';
	import { slide } from 'svelte/transition';

	const { mobile }: { mobile?: boolean } = $props();
</script>

<ul transition:slide class:mobile class="flex gap-4 *:hover:text-text/75 sm:text-lg">
	<li>
		<button onclick={logIn}>Log In</button>
	</li>
	<li>
		<button>About</button>
	</li>
</ul>

<style>
	ul.mobile {
		--shadow: light-dark(
			hsl(from var(--color-text) h s 80% / 50%),
			hsl(from var(--color-text) h s 20% / 50%)
		);

		flex-direction: column;
		margin-bottom: 1rem;
		align-items: end;
		box-shadow: 0.35rem 0.5rem 1rem var(--shadow);
		border: 1.5px solid var(--shadow);
		padding: 0.75rem;
		border-radius: 0.35rem;
	}
</style>
