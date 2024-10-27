<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<div class={cn("inline-flex space-x-2 p-6 pb-0 place-items-center", className)} {...$$restProps}>
	<slot />
</div>
