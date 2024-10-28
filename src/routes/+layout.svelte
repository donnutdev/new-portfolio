<script>
    import '../app.css';
    let { children, data } = $props();
    import { ModeWatcher } from "mode-watcher";
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import {tweened} from "svelte/motion";
    
    let { global } = data;
    
    let scrollY = $state(0);
    let navBar;
    
    let navigating = $state(false);
    let navigationProgress = tweened(0, { duration: 300 });
    
    beforeNavigate((nav) => {
        if (nav.willUnload === true) return;
        navigating = true;
        navigationProgress.set(65);
    });
    
    afterNavigate(() => {
        navigationProgress.set(100);
        navigationProgress.subscribe(value => {
            if (value === 100) {
                setTimeout(() => {
                    navigating = false;
                    navigationProgress.set(0);
                }, 500);
            }
        });
    });
    
    $effect(() => {
        if (scrollY > 0) {
            navBar.classList.add('shadow', 'backdrop-blur-lg', 'bg-black', 'bg-opacity-20');
        } else {
            navBar.classList.remove('shadow', 'backdrop-blur-lg', 'bg-black', 'bg-opacity-20');
        }
    })
</script>

<svelte:window bind:scrollY/>

<svelte:head>
    <title>{global.title}</title>
</svelte:head>

<ModeWatcher defaultTheme="dark"/>
<nav class="text-white w-full transition-all duration-500 inline-flex justify-center p-4 fixed z-50" bind:this={navBar}>
    <div
            class="h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-600 absolute top-0 left-0"
            style:width={$navigationProgress/100*100 + "%"}
            hidden={!navigating}
    ></div>
    <ul class="inline-flex gap-8">
        <li>
            <a href="/" class="group relative transition duration-300" data-sveltekit-preload-data>
                <span class="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
                    About
                </span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-600"></span>
                <span class="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:blur transition duration-300 text-cyan-400 to-indigo-600 group-hover:animate-pulse">
                    About
                </span>
            </a>
        </li>
        <li>
            <a href="/projects" class="group relative transition duration-300" data-sveltekit-preload-data>
                <span class="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
                    Projects
                </span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-600"></span>
                <span class="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:blur transition duration-300 text-cyan-400 to-indigo-600 group-hover:animate-pulse">
                    Projects
                </span>
            </a>
        </li>
        <li>
            <a href="/technologies" class="group relative transition duration-300" data-sveltekit-preload-data>
                <span class="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
                    Tech
                </span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-600"></span>
                <span class="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:blur transition duration-300 text-cyan-400 to-indigo-600 group-hover:animate-pulse">
                    Tech
                </span>
            </a>
        </li>
        <li>
            <a href="/blog" class="group relative transition duration-300" data-sveltekit-preload-data>
                <span class="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
                    Blog
                </span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-600"></span>
                <span class="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:blur transition duration-300 text-cyan-400 to-indigo-600 group-hover:animate-pulse">
                    Blog
                </span>
            </a>
        </li>
    </ul>
</nav>

<main>
    <div class="w-screen h-screen fixed grain -z-0"></div>
    {@render children()}
</main>

<style>
    .grain {
        background-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 350px;
        opacity: 0.1;
    }
</style>
