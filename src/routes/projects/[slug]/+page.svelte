<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import { projects } from '$lib/data/projects';
	import { lang } from '$lib/i18n.svelte';
	import { page } from '$app/state';
	import { base } from '$app/paths';

	let slug = $derived(page.params.slug);
	let project = $derived(projects.find((p) => p.slug === slug));

	const title = $derived(
		project
			? typeof project.title === 'string'
				? project.title
				: lang.t(project.title.en, project.title.fr)
			: 'Error'
	);
	const longDesc = $derived(
		project
			? typeof project.longDescription === 'string'
				? project.longDescription
				: lang.t(project.longDescription.en, project.longDescription.fr)
			: ''
	);
</script>

<svelte:head>
	<title>{project ? `${title} | flavien HUGS` : 'Project not found | flavien HUGS'}</title>
	{#if project}
		<meta name="description" content={longDesc} />
	{/if}
</svelte:head>

<Container>
	<section class="py-20">
		<Breadcrumb
			crumbs={[
				{ label: lang.t('Projects', 'Projets'), href: `${base}/projects` },
				{ label: title ?? slug }
			]}
		/>
		{#if project}
			<h1 class="text-4xl font-bold">{title}</h1>
			<p class="mt-4 max-w-2xl text-zinc-300">{longDesc}</p>

			<div class="mt-6 flex flex-wrap gap-2">
				{#each project.stack as tech (tech)}
					<Badge text={tech} />
				{/each}
			</div>

			<div class="mt-8 flex gap-4">
				{#if project.github}
					<Button href={project.github}>GitHub</Button>
				{/if}

				{#if project.demo}
					<Button href={project.demo} variant="secondary">Demo</Button>
				{/if}
			</div>

			{#if project.demos && project.demos.length > 0}
				<div class="mt-12 border-t border-zinc-900 pt-10">
					<h2 class="mb-6 font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
						{lang.t('Live environments', 'Environnements de démo')}
					</h2>
					<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{#each project.demos as env (env.url)}
							<Card>
								<div class="flex items-start justify-between gap-3">
									<h3 class="text-sm font-semibold text-white">
										{lang.t(env.label.en, env.label.fr)}
									</h3>
									<a
										href={env.url}
										target="_blank"
										rel="noopener noreferrer"
										class="shrink-0 font-mono text-[10px] tracking-[0.3em] text-zinc-400 uppercase transition hover:text-white"
									>
										{lang.t('Open', 'Ouvrir')} ↗
									</a>
								</div>
								<p class="mt-1 truncate font-mono text-xs text-zinc-600">
									{env.url.replace('https://', '')}
								</p>
								{#if env.credentials}
									<dl class="mt-4 space-y-1.5 border-t border-zinc-900 pt-4 text-xs">
										<div class="flex justify-between gap-3">
											<dt class="text-zinc-600">{lang.t('Login', 'Identifiant')}</dt>
											<dd class="font-mono text-zinc-300 select-all">{env.credentials.username}</dd>
										</div>
										<div class="flex justify-between gap-3">
											<dt class="text-zinc-600">{lang.t('Password', 'Mot de passe')}</dt>
											<dd class="font-mono text-zinc-300 select-all">{env.credentials.password}</dd>
										</div>
									</dl>
								{/if}
							</Card>
						{/each}
					</div>
				</div>
			{/if}

			<div class="mt-12 grid gap-6 md:grid-cols-2">
				<Card>
					<h2 class="mb-4 font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
						{lang.t('Highlights', 'Points clés')}
					</h2>
					<ul class="space-y-3 text-sm text-zinc-400">
						{#each project.highlights as item (item)}
							<li class="flex items-start gap-3">
								<span class="mt-1 text-zinc-700">—</span>
								<span>{typeof item === 'string' ? item : lang.t(item.en, item.fr)}</span>
							</li>
						{/each}
					</ul>
				</Card>

				<Card>
					<h2 class="mb-4 font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
						{lang.t('Architecture', 'Architecture')}
					</h2>
					<ul class="space-y-3 text-sm text-zinc-400">
						{#each project.architecture as item (item)}
							<li class="flex items-start gap-3">
								<span class="mt-1 text-zinc-700">—</span>
								<span>{typeof item === 'string' ? item : lang.t(item.en, item.fr)}</span>
							</li>
						{/each}
					</ul>
				</Card>
			</div>

			{#if project.challenge && project.solution}
				<div class="mt-20 border-t border-zinc-900 pt-12">
					<h2 class="mb-10 text-2xl font-bold tracking-tight text-white uppercase">
						{lang.t('Engineering Deep Dive', 'Analyse Technique')}
					</h2>
					<div class="grid gap-12 lg:grid-cols-2">
						<div class="space-y-4">
							<h3 class="font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
								{lang.t('The Challenge', 'Le Défi')}
							</h3>
							<p class="text-sm leading-relaxed font-light text-zinc-400 italic">
								"{lang.t(project.challenge.en, project.challenge.fr)}"
							</p>
						</div>
						<div class="space-y-4">
							<h3 class="font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
								{lang.t('The Solution', 'La Solution')}
							</h3>
							<p class="text-sm leading-relaxed text-zinc-300">
								{lang.t(project.solution.en, project.solution.fr)}
							</p>
						</div>
					</div>
				</div>
			{/if}
		{:else}
			<h1 class="text-3xl font-bold">{lang.t('Project not found', 'Projet introuvable')}</h1>
			<p class="mt-4 text-zinc-400">
				{lang.t('This project does not exist.', 'Ce projet n’existe pas.')}
			</p>
		{/if}
	</section>
</Container>
