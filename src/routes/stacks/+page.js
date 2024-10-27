/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import {readItem, readItems} from '@directus/sdk';

export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);

    return {
        page: await directus.request(readItem('pages', 'stacks')),
        pageData: await directus.request(readItems('about')),
    };
}