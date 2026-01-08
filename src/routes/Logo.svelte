<script lang="ts">
	import logoLight from '$lib/assets/logo-light.svg';
	import logoDark from '$lib/assets/logo-dark.svg';

	const { class: styles }: { class?: string } = $props();
</script>

<picture>
	<source srcset={logoDark} media="(prefers-color-scheme: dark)" />
	<source srcset={logoLight} media="(prefers-color-scheme: light)" />
	<img class={styles} src={logoLight} alt="Product logo" />
</picture>
