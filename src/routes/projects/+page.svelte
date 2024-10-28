<script>
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Button } from "$lib/components/ui/button";
    import {ExternalLink, Plus} from 'lucide-svelte'
    import { PUBLIC_APIURL } from "$env/static/public";

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
    <div class="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 py-20 flex flex-col justify-center gap-6 z-0 grid-content">
        {#each pageData as project (project.id)}
            <Card.Root class="w-full">
                <Card.Header>
                    {#if project.icon}
                        <Avatar.Root>
                            <Avatar.Image src="{PUBLIC_APIURL}/assets/{project.icon}" alt={project.name + "icon"} />
                        </Avatar.Root>
                    {/if}
                    <Card.Info>
                        {#if project.url}
                            <Card.Title>
                                <a class="inline-flex gap-2 place-items-center link" href={project.url} target="_blank">
                                    {project.name}<ExternalLink class="w-4 h-4"/>
                                </a>
                            </Card.Title>
                        {:else}
                            <Card.Title class="inline-flex gap-2 place-items-center link">
                                {project.name}
                            </Card.Title>
                        {/if}
                        <Card.Description>Started on {new Date(project.start_date).toDateString()}</Card.Description>
                    </Card.Info>
                </Card.Header>
                <Card.Content class="sm:text-base text-sm">
                    {@html project.description}
                </Card.Content>
                <Card.Footer class="inline-flex gap-1">
                    {#each project.technologies as technology, index (technology.id)}
                        <Button variant="outline" size="icon" href={technology.technologies_id.url} target="_blank">
                            <img src="{PUBLIC_APIURL}/assets/{technology.technologies_id.icon}" class="w-6" alt={technology.technologies_id.name}>
                        </Button>
                        {#if index !== project.technologies.length - 1}
                            <Plus class="w-6"/>
                        {/if}
                    {/each}
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
    <div class="h-full grid-overlay"></div>
</div>
<div class="m-0 p-0 h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"></div>
