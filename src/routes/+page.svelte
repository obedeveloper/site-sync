<script lang="ts">
	import { logIn, logOut } from '$lib/auth-client';
	import { getUser } from '$lib/remote/auth.remote';

	const user = $derived(await getUser());
</script>

{#if user}
	<pre>
    {JSON.stringify(user, null, 2)}
  </pre>
	<button
		onclick={async () => {
			await logOut();
			await getUser().refresh();
		}}>Log Out</button
	>
{:else}
	<button onclick={logIn}>Log In</button>
{/if}

<style>
	button {
		background-color: var(--color-blue-700);
		color: white;
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-weight: 700;
		font-size: 1.2rem;
	}
</style>
