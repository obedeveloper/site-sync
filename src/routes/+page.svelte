<script lang="ts">
	import site from '$lib/assets/site.svg';
</script>

<main class="wrapper overflow-x-hidden">
	<div class="space-y-10 sm:flex sm:gap-7">
		<div class="space-y-6">
			<h1 class="text-4xl font-extrabold sm:text-5xl sm:font-black">
				Your Estimates. <br /> Finally in <span class="text-primary">Sync</span>.
			</h1>
			<p class="text-text/85 sm:text-justify">
				At Site-Sync, we streamline project management for small contractors. Our MVP app eliminates
				the hassle of spreadsheets and paper, enabling you to quickly generate and sync estimates
				across all your devices. Focus on what matters, delivering outstanding results, while we
				ensure your estimates are always in sync. Experience a smoother workflow with Site-Sync!
			</p>
		</div>
		<div class="sm:min-w-2/3">
			<img class="h-full object-cover object-center" src={site} alt="" />
		</div>
	</div>

	<div class="my-7 flex flex-wrap justify-between gap-x-5 gap-y-3 sm:text-lg">
		<button class="bg-primary text-text-inverse hover:bg-primary/75">
			Login to Your Account
		</button>
		<button class="border border-primary text-primary hover:shadow hover:shadow-primary">
			Create Your Estimate Locally
		</button>
	</div>
</main>

<style>
	button {
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-weight: bold;
		border-radius: 0.25rem;
	}
</style>
