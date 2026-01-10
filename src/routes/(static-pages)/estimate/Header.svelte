<script lang="ts">
	interface Props {
		title: string;
		desc: string;
	}

	let { desc = $bindable(), title = $bindable() }: Props = $props();
</script>

<div class="space-y-3 *:flex *:flex-col *:gap-1">
	<label>
		<span>Title:</span>
		<input type="text" bind:value={title} />
	</label>
	<label>
		<span>Description:</span>
		<input type="text" bind:value={desc} />
	</label>
</div>

<style>
	div {
		--text-75: hsl(from var(--color-text) h s l / 50%);
	}

	label {
		color: var(--text-75);
	}

	input {
		border: 1.5px solid var(--text-75);
		padding: 0.2rem 0.4rem;
		word-break: break-word;
		color: var(--color-text);

		&:focus {
			outline: 0;
			border-color: var(--color-primary);
		}
	}
</style>
