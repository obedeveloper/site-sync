<script lang="ts">
	let {
		desc = $bindable(),
		index,
		quantity = $bindable(),
		unit = $bindable(),
		unitPrice = $bindable(),
		remove,
		up,
		down
	}: {
		index: number;
		desc: string;
		unit: string;
		quantity: number;
		unitPrice: number;
		remove: () => void;
		up?: () => void;
		down?: () => void;
	} = $props();

	const amount = $derived((quantity * unitPrice).toLocaleString(undefined));
</script>

<tr class="*:border *:px-3 *:py-1 *:focus:outline-0">
	<td>{index}</td>
	<td contenteditable bind:innerText={desc}></td>
	<td contenteditable bind:innerText={unit}></td>
	<td>
		<input type="text" bind:value={() => quantity || '', (v) => (quantity = v || 0)} />
	</td>
	<td>
		<input type="text" bind:value={() => unitPrice || '', (v) => (unitPrice = v || 0)} />
	</td>
	<td>{amount}</td>
	<td>
		<button class="bg-red-500 dark:bg-red-900/75" onclick={() => remove()}>Delete</button>

		{#if up}
			<button class="bg-blue-500 dark:bg-blue-900/75" onclick={() => up()}>Move Up</button>
		{/if}
		{#if down}
			<button class="bg-indigo-500 dark:bg-indigo-900/75" onclick={() => down()}>Move Down</button>
		{/if}
	</td>
</tr>

<style>
	td:has(input) {
		padding: 0;

		input {
			padding: 0.25rem 0.75rem;
			width: 100%;

			&:focus {
				outline: none;
			}
		}
	}

	td:has(button) {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		gap: 0.75rem;

		button {
			cursor: pointer;
			flex-grow: 1;
			padding: 0.5rem 1rem;

			@media (prefers-color-scheme: light) {
				color: var(--color-text-inverse);
			}
		}
	}
</style>
