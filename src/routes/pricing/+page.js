/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import {readItem, readItems} from '@directus/sdk';

export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);

    const plans = await directus.request(readItems('pricing'));
    const pricing_info = await directus.request(readItems('pricing_info'));

    return {
        page: await directus.request(readItem('pages', 'pricing')),
        pageData: {
            plans,
            pricing_info
        }
    };
}