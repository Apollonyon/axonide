<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import LeftSidebar from '$lib/components/layout/LeftSidebar.svelte';
  // We will import and display posts here later
</script>

<div>
	<div class="p-4 border-b">
		<h2 class="text-xl font-bold">Home</h2>
	</div>

	<Tabs.Root value="foryou" class="w-full">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="foryou">For You</Tabs.Trigger>
			<Tabs.Trigger value="following">Following</Tabs.Trigger>
		</Tabs.List>
	</Tabs.Root>

	<div class="p-4 border-b">
		<p class="text-muted-foreground">Compose Post Area...</p>
	</div>

	<div class="flex flex-col">
		<div class="p-4 border-b min-h-[100px]">Post 1...</div>
		<div class="p-4 border-b min-h-[100px]">Post 2...</div>
		<div class="p-4 border-b min-h-[100px]">Post 3...</div>
	</div>
</div>