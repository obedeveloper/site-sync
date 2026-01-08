<script lang="ts">
	let {
		desc = $bindable(),
		index,
		quantity = $bindable(),
		unit = $bindable(),
		unitPrice = $bindable(),
		remove
	}: {
		index: number;
		desc: string;
		unit: string;
		quantity: number;
		unitPrice: number;
		remove: () => void;
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
	<td class="border-text bg-red-700 text-text-inverse dark:text-text">
		<button onclick={() => remove()}>Delete</button>
	</td>
</tr>

<style>
	td:has(input, button) {
		padding: 0;

		input {
			padding: 0.25rem 0.75rem;
			width: 100%;

			&:focus {
				outline: none;
			}
		}

		button {
			cursor: pointer;
			display: flex;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
		}
	}
</style>
