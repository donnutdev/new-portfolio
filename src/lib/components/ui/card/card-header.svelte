<script>
	import { cn } from "$lib/utils.js";

	let { ref = $bindable(null), class: className, children, ...restProps } = $props();
</script>

<div bind:this={ref} class={cn("inline-flex space-x-2 p-6 pb-0 place-items-center", className)} {...restProps}>
	{@render children?.()}
</div>
