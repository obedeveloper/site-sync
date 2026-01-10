<script lang="ts">
	import '@fontsource/poppins';
	import './layout.css';
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
	import { navigating } from '$app/state';
	import { fade } from 'svelte/transition';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="progress fixed top-0 z-10 h-4 w-full">
	{#if navigating.from}
		<div transition:fade class="h-full bg-primary"></div>
	{/if}
</div>

<header class="wrapper mt-8 mb-6">
	<a href={resolve('/')}>
		<Logo class="w-40 sm:w-48"></Logo>
	</a>
</header>

{@render children()}

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
