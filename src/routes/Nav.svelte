<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
	import { navigating } from '$app/state';
	import { fade } from 'svelte/transition';
	import Menu from './Menu.svelte';

	let menuIsOpen = $state(false);
</script>

<header class="sticky top-0 z-10 mb-2 space-y-1 bg-text-inverse pb-4 sm:mb-5">
	<div class="progress h-4">
		{#if navigating.from}
			<div transition:fade class="h-full bg-primary"></div>
		{/if}
	</div>

	<nav class="wrapper flex items-center justify-between">
		<a href={resolve('/')}>
			<Logo class="w-40 sm:w-48"></Logo>
		</a>
		<div class="hidden sm:block">
			<Menu></Menu>
		</div>
		{@render HamburgerMenu()}
	</nav>
</header>

<div class="wrapper sm:hidden">
	{#if menuIsOpen}
		<Menu mobile></Menu>
	{/if}
</div>

{#snippet HamburgerMenu()}
	<button class="space-y-1 sm:hidden" onclick={() => (menuIsOpen = !menuIsOpen)}>
		{#each { length: 3 } as _}
			<div class="h-1 w-8 bg-text"></div>
		{/each}
	</button>
{/snippet}

<style>
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
