<script lang="ts">
	import { logIn } from '$lib/auth-client';
	import Logo from './Logo.svelte';
</script>

<nav class="wrapper my-6 flex items-center justify-between">
	<a href="/">
		<Logo class="w-40 sm:w-48"></Logo>
	</a>
	<ul class="flex gap-4 sm:text-lg">
		<li>
			<button class="cursor-pointer" onclick={logIn}>Log In</button>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
	</ul>
</nav>
