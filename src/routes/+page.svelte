<script>
    let { data } = $props();

    let { page, pageData } = data;
</script>

<div class="grad w-full -z-10">
    <div class="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 py-20 flex flex-col gap-4">
        <h1 class="text-4xl sm:text-6xl text-white font-bold mt-20">{page.title}</h1>
        <div class="text-white text-xl max-w-xl">
            {@html page.summary}
        </div>
    </div>
</div>
{#each pageData as item (item.id)}
    <div class="m-0 p-0 h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"></div>
    <div class="w-full grid-style -z-10 grid">
        <div class="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 py-20 flex flex-col justify-center gap-4 z-0 grid-content">
            <h2 class="text-3xl sm:text-5xl text-white font-bold">{item.title}</h2>
            <div class="text-white text-base sm:text-xl max-w-6xl">
                {@html item.content}
            </div>
        </div>
        <div class="h-full grid-overlay"></div>
    </div>
{/each}
<div class="m-0 p-0 h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600"></div>
<style>
    .grad {
        background-image:
                linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
                url("$lib/assets/grad-1.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        fill: none;
    }
    .grid-style {
        background-size: 40px 40px;
        background-image:
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
        background-position: center;
    }
    .grid-content, .grid-overlay{
        grid-area: 1/1;
    }
    .grid-overlay {
        background-image: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    }
</style>
