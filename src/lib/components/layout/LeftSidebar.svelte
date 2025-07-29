<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import {
    Home,
    Search,
    Bell,
    Mail,
    Bookmark,
    User,
    PenSquare,
    MoreHorizontal,
  } from "lucide-svelte";
  const user = {
    name: "Leon Barratt",
    username: "axonide",
    avatarUrl: "https://pbs.twimg.com/profile_images/1943666887746838528/R_7iReiQ_400x400.jpg"
  };
</script>

<aside class="sticky top-0 flex h-screen flex-col justify-between border-r p-2 md:p-4">
  <div>
    <div class="mb-4 flex justify-center lg:justify-start">
      <a href="/" class="text-primary transition-colors hover:text-primary/80">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-8 w-8"
				>
					<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
					<path d="M8 12h8" />
					<path d="M12 8v8" />
				</svg>
				<span class="sr-only">Axonide</span>
			</a>
		</div>

		<nav class="flex flex-col items-center gap-2 lg:items-start">
			<Button variant="ghost" href="/home" class="w-full justify-center lg:justify-start">
				<Home class="h-6 w-6" />
				<span class="ml-4 hidden lg:inline">Home</span>
			</Button>
			<Button variant="ghost" href="/explore" class="w-full justify-center lg:justify-start">
				<Search class="h-6 w-6" />
				<span class="ml-4 hidden lg:inline">Explore</span>
			</Button>
			<Button variant="ghost" href="/notifications" class="w-full justify-center lg:justify-start">
				<Bell class="h-6 w-6" />
				<span class="ml-4 hidden lg:inline">Notifications</span>
			</Button>
			<Button variant="ghost" href="/messages" class="w-full justify-center lg:justify-start">
				<Mail class="h-6 w-6" />
				<span class="ml-4 hidden lg:inline">Messages</span>
			</Button>
			<Button variant="ghost" href="/bookmarks" class="w-full justify-center lg:justify-start">
				<Bookmark class="h-6 w-6" />
				<span class="ml-4 hidden lg:inline">Bookmarks</span>
			</Button>
			<Button variant="ghost" href="/profile" class="w-full justify-center lg:justify-start">
				<User class="h-6 w-6" />
				<span class="ml-4 hidden lg:inline">Profile</span>
			</Button>

			<Button class="mt-4 w-full">
				<PenSquare class="h-6 w-6 lg:hidden" />
				<span class="hidden lg:inline">Post</span>
			</Button>
		</nav>
	</div>

	<div class="mt-auto">
		<Button variant="ghost" class="flex h-auto w-full items-center justify-between p-2">
			<div class="flex items-center">
				<Avatar.Root class="h-10 w-10">
					<Avatar.Image src={user.avatarUrl} alt={user.name} />
					<Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
				</Avatar.Root>
				<div class="ml-3 hidden text-left lg:inline">
					<p class="font-bold">{user.name}</p>
					<p class="text-sm text-muted-foreground">@{user.username}</p>
				</div>
			</div>
			<MoreHorizontal class="hidden h-5 w-5 lg:inline" />
		</Button>
	</div>
</aside>