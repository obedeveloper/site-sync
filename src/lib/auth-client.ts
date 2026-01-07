import { createAuthClient } from 'better-auth/svelte';

const { signIn, signOut } = createAuthClient({});

export const logIn = async () => await signIn.social({ provider: 'google' });
export const logOut = async () => await signOut();
