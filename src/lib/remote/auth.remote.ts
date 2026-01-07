import { query } from '$app/server';
import { getRequestEvent } from '$app/server';

export const getUser = query(async () => getRequestEvent().locals.user);
