/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import {readItems} from '@directus/sdk';

export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);

    return {
        global: await directus.request(readItems('global')),
    };
}