<script>
    let { data } = $props();

    let { page, pageData } = data;
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
{#each pageData as item, i (item.id)}
    <div class="w-full grid-style -z-10 grid">
        <div class="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 pt-20 flex flex-col justify-center gap-4 z-0 grid-content" class:pb-20={i === pageData.length - 1}>
            <h2 class="text-3xl sm:text-5xl text-white font-bold">{item.title}</h2>
            <div class="text-white text-base sm:text-xl max-w-6xl">
                {@html item.content}
            </div>
        </div>
        <div class="h-full grid-overlay"></div>
    </div>
{/each}
<div class="m-0 p-0 h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"></div>
