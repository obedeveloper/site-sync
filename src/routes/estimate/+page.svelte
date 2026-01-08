<script lang="ts">
	import Header from './Header.svelte';
	import SingleItem from './SingleItem.svelte';
	import TableHead from './TableHead.svelte';

	interface Item {
		id: number;
		desc: string;
		unit: string;
		quantity: number;
		unitPrice: number;
	}

	interface MetaData {
		title: string;
		desc: string;
	}

	const metaData: MetaData = $state(
		JSON.parse(localStorage.getItem('meta-data') ?? '{}') || {
			title: '',
			desc: ''
		}
	);

	const items: Item[] = $state(JSON.parse(localStorage.getItem('items') ?? '[]'));
	const total = $derived(
		items.reduce((prev, curr) => prev + curr.quantity * curr.unitPrice, 0).toLocaleString(undefined)
	);

	$effect(() => {
		localStorage.setItem('meta-data', JSON.stringify(metaData));
		localStorage.setItem('items', JSON.stringify(items));
	});
</script>

<svelte:head>
	<title>{metaData.title}</title>
	<meta name="description" content={metaData.desc} />
</svelte:head>

<main class="wrapper mb-6" spellcheck="false">
	<Header bind:title={metaData.title} bind:desc={metaData.desc}></Header>

	<table class="my-6 table-auto md:table-fixed">
		<TableHead></TableHead>
		<tbody>
			{#each items as item, index (item.id)}
				<SingleItem
					index={index + 1}
					bind:desc={item.desc}
					bind:quantity={item.quantity}
					bind:unit={item.unit}
					bind:unitPrice={item.unitPrice}
					remove={() => items.splice(index, 1)}
				></SingleItem>
			{/each}
		</tbody>
	</table>

	<h2 class="text-3xl font-bold">TOTAL: {total}</h2>

	<button
		class="my-4 cursor-pointer bg-primary px-6 py-2 text-lg font-semibold text-text-inverse hover:bg-primary/75"
		onclick={() => items.push({ id: Date.now(), desc: '', quantity: 0, unit: '', unitPrice: 0 })}
		>Add New Item</button
	>
</main>
