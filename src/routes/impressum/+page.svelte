<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>Impressum - Axonide</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="container mx-auto max-w-3xl px-4 py-12">
	<h1 class="mb-10 text-center text-4xl font-bold">Impressum</h1>

	<div class="space-y-8">
		<Card.Root>
			<Card.Header>
				<Card.Title>Angaben gemäß § 5 DDG</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-muted-foreground">
					Leon Barratt
					<br /> Ostenbergstraße 99
					<br /> 44227 Dortmund
                    <br /> Deutschland
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Kontakt</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-muted-foreground">
					Telefon: +49 176 31328302 <br />
					E-Mail: <a href="mailto:info@axonide.com">info@axonide.com</a>
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>EU-Streitschlichtung</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-muted-foreground">
					Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
					<a
						href="https://ec.europa.eu/consumers/odr/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-primary hover:underline"
					>
						https://ec.europa.eu/consumers/odr/
					</a>.
					<br />
					Unsere E-Mail-Adresse finden Sie oben im Impressum.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-muted-foreground">
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>