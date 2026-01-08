<script lang="ts">
	import { logIn } from '$lib/auth-client';
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
	import { navigating } from '$app/state';
	import { fade } from 'svelte/transition';
</script>

<header class="sticky top-0 mb-2 space-y-1 bg-text-inverse pb-4">
	<div class="progress h-4">
		{#if navigating.from}
			<div transition:fade class="h-full bg-primary"></div>
		{/if}
	</div>

	<nav class="wrapper flex items-center justify-between">
		<a href={resolve('/')}>
			<Logo class="w-40 sm:w-48"></Logo>
		</a>
		<ul class="flex gap-4 *:hover:text-text/75 sm:text-lg">
			<li>
				<button onclick={logIn}>Log In</button>
			</li>
			<li>
				<button>About</button>
			</li>
		</ul>
	</nav>
</header>

<style>
	button {
		cursor: pointer;
	}

	.progress div {
		width: 0%;
		margin-inline: auto;
		animation: progress 1s infinite ease-in-out;
	}

	@keyframes progress {
		50% {
			width: 100%;
		}
	}
</style>
