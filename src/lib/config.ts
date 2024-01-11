// place files you want to import through the `$lib` alias in this folder.

import { dev } from '$app/environment';

export const title = 'Svelte Blog';

export const description = 'SvelteKit blog for Shakespeare';

export const url = dev ? 'http://localhost:1234' : 'https://svelte-blog.vercel.app';
