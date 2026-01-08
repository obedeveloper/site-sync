<script lang="ts">
	import { logIn } from '$lib/auth-client';
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
</script>

<nav class="wrapper my-6 flex items-center justify-between">
	<a href={resolve('/')}>
		<Logo class="w-40 sm:w-48"></Logo>
	</a>
	<ul class="flex gap-4 *:hover:text-text/75 sm:text-lg">
		<li>
			<button onclick={logIn}>Log In</button>
		</li>
		<li>
			<button>About</button>
		</li>
	</ul>
</nav>

<style>
	button {
		cursor: pointer;
	}
</style>
