<script lang="ts">
	import { goto } from '$app/navigation';
	import site from '$lib/assets/site.svg';
	import { resolve } from '$app/paths';
	import { logIn } from '$lib/auth-client';
</script>

<svelte:head>
	<title>Site Sync</title>
	<meta
		name="description"
		content="Our MVP app enables quick generation and syncing of estimates across all devices"
	/>
</svelte:head>

<main class="wrapper overflow-x-hidden">
	<div class="space-y-6">
		<h1 class="text-4xl font-extrabold sm:text-5xl sm:font-black">
			Your Estimates. <br /> Finally in <span class="text-primary">Sync</span>.
		</h1>
		<p class="flex flex-col items-center gap-6 text-justify text-text/85 sm:gap-10 lg:flex-row">
			Site-Sync simplifies project management for small contractors by eliminating spreadsheets and
			paper. Our MVP app enables quick generation and syncing of estimates across all devices,
			allowing you to focus on delivering exceptional results while ensuring your estimates are
			always up-to-date. Enjoy a smoother workflow with Site-Sync!
			<img class="max-w-md lg:max-w-xl" src={site} alt="" />
		</p>
	</div>

	<div class="my-7 flex flex-wrap justify-between gap-x-5 gap-y-3 *:grow sm:text-lg">
		<button onclick={logIn} class="bg-primary text-text-inverse hover:bg-primary/75">
			Login to Your Account
		</button>
		<button
			onclick={() => goto(resolve('/estimate'))}
			class="border border-primary text-primary hover:shadow hover:shadow-primary"
		>
			Create local Estimate
		</button>
	</div>
</main>

<style>
	button {
		padding: 0.5rem 1rem;
		font-weight: bold;
		border-radius: 0.25rem;
	}
</style>
