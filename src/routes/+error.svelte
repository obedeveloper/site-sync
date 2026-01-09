<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-screen items-center justify-center transition-colors">
	<div class="max-w-md px-6 py-12 text-center">
		<h1 class="mb-4 text-6xl font-bold text-red-600 dark:text-red-400">
			{page.status}
		</h1>
		<p class="mb-2 text-lg text-gray-700 dark:text-gray-300">
			{page.error?.message}
		</p>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Error ID: {page.error?.errorId}
		</p>
	</div>
</div>
