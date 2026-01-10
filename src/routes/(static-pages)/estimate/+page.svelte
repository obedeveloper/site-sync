<script lang="ts">
	import Header from './Header.svelte';
	import SingleItem from './SingleItem.svelte';
	import { onMount } from 'svelte';
	import type { MetaData } from './types';
	import { items } from './estimate.svelte';
	let footerHeight = $state(0);

	let metaData: MetaData = $state({
		title: '',
		desc: ''
	});

	onMount(() => {
		const localMetaData = localStorage.getItem('meta-data');
		const localItems = localStorage.getItem('items');

		if (localMetaData) {
			metaData = JSON.parse(localMetaData);
		}

		if (localItems) {
			items.values = JSON.parse(localItems);
		}
	});

	const total = $derived(items.total);

	$effect(() => {
		localStorage.setItem('meta-data', JSON.stringify(metaData));
		localStorage.setItem('items', JSON.stringify(items.values));
	});

	function addNewItem() {
		items.values.push({ id: Date.now(), desc: '', quantity: 0, unit: '', unitPrice: 0 });
	}

	function clearEstimate() {
		if (confirm('Are you sure you want to clear the estimate? This action cannot be undone.')) {
			items.clear();
			metaData = { title: '', desc: '' };
		}
	}
</script>

<svelte:head>
	<title>{metaData.title}</title>
	<meta name="description" content={metaData.desc} />
</svelte:head>

<svelte:window
	onkeydown={(event) => {
		if (event.shiftKey && event.key.toLowerCase() === 'n') {
			event.preventDefault();
			addNewItem();
		} else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'd') {
			event.preventDefault();
			clearEstimate();
		}
	}}
/>

<main style:--footer-height={footerHeight + 'px'} class="wrapper" spellcheck="false">
	{#if metaData.title || metaData.desc || items.values.length}
		<button
			class="mb-4 w-full bg-red-500 px-6 py-2 text-text-inverse hover:bg-red-500/75 sm:w-fit"
			onclick={clearEstimate}>Clear Estimate {@render KBD('Ctrl/Cmd + D')}</button
		>
	{/if}

	<Header bind:title={metaData.title} bind:desc={metaData.desc}></Header>

	<div class="items my-6">
		{#each items.values as { id }, index (id)}
			<SingleItem {index}></SingleItem>
		{/each}
	</div>

	<button
		class="my-4 w-full bg-primary px-6 py-2 text-lg font-semibold text-text-inverse hover:bg-primary/75 sm:w-fit"
		onclick={addNewItem}
	>
		Add New Item {@render KBD('Shift + N')}
	</button>
</main>

<h2
	bind:clientHeight={footerHeight}
	class="fixed bottom-0 w-full bg-text-inverse text-3xl font-bold"
>
	<span class="wrapper block py-5" class:error={isNaN(total)}>
		{#if isNaN(total)}
			Error!
		{:else}
			TOTAL: {total.toLocaleString()}
		{/if}
	</span>
</h2>

{#snippet KBD(text: string)}
	<kbd class="ml-2 rounded bg-gray-200 px-2 py-1 font-mono text-sm text-gray-800">{text}</kbd>
{/snippet}

<style>
	main {
		margin-bottom: calc(var(--footer-height) + 1.5rem);
	}

	.error {
		color: var(--color-red-500);
	}

	.items {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}

	kbd {
		display: none;

		@media (hover: hover) {
			display: inline;
		}
	}
</style>
