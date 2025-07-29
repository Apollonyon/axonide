<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<svelte:head>
  <title>Axonide - Your Timeline, Your Terms</title>
  <meta name="description" content="A modern, open-source social platform built as an escape from other social media platforms." />
</svelte:head>

<div class="container mx-auto px-4">
  <header class="py-6">
    <nav class="flex items-center justify-between">
      <a href="/" class="text-2xl font-bold text-primary">Axonide</a>
      <div class="flex items-center gap-2">
        <Button variant="ghost" href="/login">Log In</Button>
        <Button href="/register">Get Started</Button>
      </div>
    </nav>
  </header>

  <main>
    <section class="py-20 text-center md:py-32">
      <h1 class="text-4xl font-extrabold tracking-tight lg:text-6xl">
        Your Timeline, Your Terms.
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Axonide is a modern, open-source social platform built as an escape from other social media platforms.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <Button size="lg" href="/register">Create Your Account</Button>
        <Button size="lg" variant="secondary" href="https://github.com/CrimsonDynamic/axonide" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </div>
    </section>

    <section class="py-16">
      <div class="grid gap-8 md:grid-cols-3">
        <Card.Root>
          <Card.Header>
            <Card.Title>Algorithmic Choice</Card.Title>
          </Card.Header>
          <Card.Content>
            <p class="text-muted-foreground">
              Start with the smart 'For You' feed to discover popular content, or switch to a purely
              chronological timeline based on your followers. The choice is always yours so you can have the best of both worlds.
            </p>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Open Source</Card.Title>
          </Card.Header>
          <Card.Content>
            <p class="text-muted-foreground">
              Built by the community, for the community. Axonide's code is transparent and currently made by a solo developer River
            </p>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Connect Directly</Card.Title>
          </Card.Header>
          <Card.Content>
            <p class="text-muted-foreground">
              Get rid of the pesky ads and algorithmic manipulation that plague other platforms. Social media without the corporate greed and data mining.
            </p>
          </Card.Content>
        </Card.Root>
      </div>
    </section>
  </main>

  <footer class="border-t py-6 text-center text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Axonide. An open-source project. | <a href="/impressum">Impressum</a></p>
  </footer>
</div>