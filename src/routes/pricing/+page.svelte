<script>
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Button } from "$lib/components/ui/button";
    import {ExternalLink, Plus} from 'lucide-svelte'
    import { PUBLIC_APIURL } from "$env/static/public";
    import {Separator} from "$lib/components/ui/separator/index.js";

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
    <div class="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 py-20 flex flex-col justify-center gap-20 z-0 grid-content">
        <div class="flex flex-col md:flex-row justify-center md:gap-6 gap-8 max-w-6xl mx-auto">
            {#each pageData.plans as plan, i (plan.id)}
                <Card.Root class="basis-1/3 z-50 plan mx-auto flex flex-col justify-between scale-100 {plan.recommended === true ? 'md:scale-105' : ''}"
                           style="border-color: {plan.outline_color}; box-shadow: 0 0 10px {plan.outline_color};">
                    {#if plan.recommended === true}
                        <div class="absolute -top-5 left-5 rounded-t-sm z-10 px-2 text-sm text-black"
                             style="box-shadow: 0 0 10px {plan.outline_color};"
                             style:background-color={plan.outline_color}>
                            Recommended</div>
                    {/if}
                    <Card.Header>
                        <Card.Title>
                            <h1 class="md:text-2xl text-xl">{plan.name}</h1>
                        </Card.Title>
                    </Card.Header>
                    <Card.Content class="sm:text-base text-sm content">
                        {@html plan.details}
                    </Card.Content>
                    <Card.Footer class="inline-flex gap-1 md:text-xl text-lg font-bold mt-auto">
                        {plan.pricing_statement}
                    </Card.Footer>
                </Card.Root>
            {/each}
        </div>
        <div class="flex flex-col justify-center gap-6">
            {#each pageData.pricing_info as item, i (item.id)}
                <h2 class="text-3xl sm:text-4xl text-white font-bold">{item.title}</h2>
                <div class="text-white text-base sm:text-xl plan">
                    {@html item.detail}
                </div>
            {/each}
        </div>
    </div>
    <div class="h-full grid-overlay"></div>
</div>
<div class="m-0 p-0 h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"></div>