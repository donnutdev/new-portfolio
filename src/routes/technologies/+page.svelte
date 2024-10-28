<script>
    import { Button } from "$lib/components/ui/button";
    import {ExternalLink, Plus} from 'lucide-svelte'
    import { PUBLIC_APIURL } from "$env/static/public";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as HoverCard from "$lib/components/ui/hover-card";

    let { data } = $props();

    let { page, pageData } = data;
    console.log(pageData)
</script>

<div class="grad w-full -z-10 sm:min-h-[430px]">
    <div class="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 pb-20 sm:pt-20 flex flex-col gap-4">
        <h1 class="text-4xl sm:text-6xl text-white font-bold mt-20">{page.title}</h1>
        <div class="text-white text-xl max-w-xl">
            {@html page.summary}
        </div>
    </div>
</div>
<div class="m-0 p-0 h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"></div>
<div class="w-full grid-style -z-10 grid">
    <div class="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 py-20 inline-flex flex-wrap justify-center gap-6 z-0 grid-content">
        {#each pageData as tech_category (tech_category.slug)}
            {#each tech_category.technologies as technology (technology.id)}
                <a href={technology.technologies_id.url} target="_blank">
                    <Card.Root class="hover:bg-accent" on:click={() => console.log("Hey")}>
                        <Card.Content class="w-full justify-center">
                            <img src="{PUBLIC_APIURL}/assets/{technology.technologies_id.icon}" class="w-16 md:w-24" alt={technology.technologies_id.name}>
                        </Card.Content>
                    </Card.Root>
                </a>
            {/each}
        {/each}
    </div>
    <div class="h-full grid-overlay"></div>
</div>
<div class="m-0 p-0 h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"></div>
