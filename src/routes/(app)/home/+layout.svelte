<script lang="ts">
	import '../app.css';
	import LeftSidebar from '$lib/components/layout/LeftSidebar.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto]">
	<LeftSidebar />
	<main>
		<slot />
	</main>

	<aside class="hidden lg:block">
		</aside>
</div>