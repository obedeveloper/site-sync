<script lang="ts">
	interface Props {
		title: string;
		desc: string;
	}

	let { desc = $bindable(), title = $bindable() }: Props = $props();
</script>

<div class="space-y-3">
	<div>
		<span>Title:</span>
		<h1 class="text-4xl" contenteditable bind:innerText={title}></h1>
	</div>
	<div>
		<span>Description:</span>
		<p contenteditable bind:innerText={desc}></p>
	</div>
</div>

<style>
	div {
		--text-75: hsl(from var(--color-text) h s l / 75%);
	}

	span {
		color: var(--text-75);
	}

	h1,
	p {
		border: 1.5px solid var(--text-75);
		padding: 0.2rem 0.4rem;
		word-break: break-word;

		&:focus {
			outline: 0;
			border-color: var(--color-primary);
		}
	}
</style>
