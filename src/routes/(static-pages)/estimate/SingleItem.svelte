<script lang="ts">
	import { fade } from 'svelte/transition';
	import { items } from './estimate.svelte';

	const { index }: { index: number } = $props();
	const values = $derived(items.values[index]);
	const id = $derived(values.id);
	const total = $derived(values.quantity * values.unitPrice);
</script>

<div class="card space-y-1.5" transition:fade>
	<input type="text" placeholder="Description" bind:value={values.desc} />
	<input
		type="text"
		placeholder="Quantity"
		class:error={isNaN(values.quantity)}
		bind:value={() => values.quantity || '', (v) => (values.quantity = v || 0)}
	/>
	<input type="text" placeholder="Unit" bind:value={values.unit} />
	<input
		type="text"
		placeholder="Unit Price"
		class:error={isNaN(values.unitPrice)}
		bind:value={() => values.unitPrice || '', (v) => (values.unitPrice = v || 0)}
	/>
	<input type="text" value={isNaN(total) ? 'Error!' : total.toLocaleString()} readonly />
	<div class="flex flex-wrap gap-1.5 *:grow">
		<button class="bg-red-600/75" onclick={() => items.delete(id)}>Delete</button>
		<button class="bg-orange-700/75" onclick={() => items.duplicate(id)}>Duplicate</button>
		{#if index !== 0}
			<button class="bg-blue-700/75" onclick={() => items.moveUp(id)}>Move Up</button>
		{/if}

		{#if index !== items.values.length - 1}
			<button class="bg-green-700/75" onclick={() => items.moveDown(id)}>Move Down</button>
		{/if}
	</div>
</div>

<style>
	input {
		border: 1.5px solid hsl(from var(--color-text) h s l / 50%);
		padding: 0.5rem;

		&[readonly] {
			cursor: not-allowed;
			background-color: hsl(from var(--color-text) h s l / 15%);
			border: none;

			.error ~ & {
				background-color: hsl(from var(--color-red-500) h s l / 25%);
			}
		}

		&:focus {
			outline: none;

			&:not([readonly], .error) {
				border-color: var(--color-primary);
			}
		}

		&.error {
			border-color: var(--color-red-500);
			color: var(--color-red-500);
		}
	}

	button {
		padding: 0.35rem 1rem;
		transition: background-color 0.5s ease;

		@media (hover: hover) {
			&:hover {
				background-color: transparent;
				outline: 1.5px solid currentColor;
			}
		}

		@media (prefers-color-scheme: light) {
			color: var(--color-text-inverse);
		}
	}

	.card {
		background-color: hsl(from var(--color-text) h s l / 5%);
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: 1.5px solid hsl(from var(--color-text) h s l / 20%);
	}
</style>
