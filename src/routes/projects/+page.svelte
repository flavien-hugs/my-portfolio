<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import { lang } from '$lib/i18n.svelte';

	const PAGE_SIZE = 6;

	type SortMode = 'random' | 'asc' | 'desc';

	let selectedTech = $state('All');
	let visibleCount = $state(PAGE_SIZE);
	let sortMode = $state<SortMode>('random');
	let randomSeed = $state(1);

	const allTech = [...new Set(projects.flatMap((p) => p.stack))].sort();

	const filtered = $derived(
		projects.filter((p) => selectedTech === 'All' || p.stack.includes(selectedTech))
	);

	function titleOf(p: (typeof projects)[number]): string {
		return typeof p.title === 'string' ? p.title : lang.current === 'fr' ? p.title.fr : p.title.en;
	}

	// Deterministic, seedable PRNG so the random order stays stable across
	// re-renders (e.g. "load more") and only changes when the seed changes.
	function mulberry32(seed: number) {
		let a = seed;
		return () => {
			a |= 0;
			a = (a + 0x6d2b79f5) | 0;
			let t = Math.imul(a ^ (a >>> 15), 1 | a);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	function shuffle<T>(arr: T[], seed: number): T[] {
		const rng = mulberry32(seed || 1);
		const out = [...arr];
		for (let i = out.length - 1; i > 0; i--) {
			const j = Math.floor(rng() * (i + 1));
			[out[i], out[j]] = [out[j], out[i]];
		}
		return out;
	}

	const ordered = $derived.by(() => {
		const list = [...filtered];
		if (sortMode === 'asc' || sortMode === 'desc') {
			const dir = sortMode === 'asc' ? 1 : -1;
			return list.sort((a, b) => titleOf(a).localeCompare(titleOf(b)) * dir);
		}
		return shuffle(list, randomSeed);
	});

	const visible = $derived(ordered.slice(0, visibleCount));
	const hasMore = $derived(visibleCount < ordered.length);
	const remaining = $derived(ordered.length - visibleCount);

	// Reset pagination when filter or sort mode changes.
	$effect(() => {
		selectedTech;
		sortMode;
		visibleCount = PAGE_SIZE;
	});

	// Randomize on the client after hydration to keep SSR markup deterministic.
	onMount(() => {
		randomSeed = Math.floor(Math.random() * 1_000_000) + 1;
	});

	function pickRandom() {
		sortMode = 'random';
		randomSeed = Math.floor(Math.random() * 1_000_000) + 1;
		visibleCount = PAGE_SIZE;
	}

	function loadMore() {
		visibleCount += PAGE_SIZE;
	}

	const pillBase =
		'rounded-full border px-3 py-1 font-mono text-[11px] tracking-widest uppercase transition-colors duration-200';
	const pillOff =
		'border-zinc-800 bg-transparent text-zinc-500 hover:border-zinc-600 hover:text-zinc-300';
	const pillOn = 'border-white bg-white text-black';
</script>

<svelte:head>
	<title>Projects | flavien HUGS</title>
	<meta
		name="description"
		content="Backend projects focused on engineering, architecture, security and deployment by Flavien HUGS."
	/>
</svelte:head>

<Container>
	<section class="py-10">
		<Breadcrumb crumbs={[{ label: lang.t('Projects', 'Projets') }]} />

		<!-- Header -->
		<div class="border-b border-zinc-800 pb-10">
			<p class="mb-2 font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
				{lang.t('Work', 'Travaux')} — {filtered.length}
				{lang.t('projects', 'projets')}
			</p>
			<h1 class="text-4xl font-bold tracking-tight text-white">
				{lang.t('Projects', 'Projets')}
			</h1>
			<p class="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
				{lang.t(
					'Projects focused on backend engineering, architecture, security and deployment.',
					"Projets axés sur l'ingénierie backend, l'architecture, la sécurité et le déploiement."
				)}
			</p>
		</div>

		<!-- Filter bar -->
		<div class="flex flex-wrap gap-2 border-b border-zinc-800 py-5">
			<button
				class="{pillBase} {selectedTech === 'All' ? pillOn : pillOff}"
				onclick={() => (selectedTech = 'All')}
			>
				{lang.t('All', 'Tous')}
			</button>
			{#each allTech as tech (tech)}
				<button
					class="{pillBase} {selectedTech === tech ? pillOn : pillOff}"
					onclick={() => (selectedTech = tech)}
				>
					{tech}
				</button>
			{/each}
		</div>

		<!-- Sort bar -->
		<div class="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 py-5">
			<span class="font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
				{lang.t('Order', 'Ordre')}
			</span>
			<div class="flex gap-2">
				<button
					class="{pillBase} flex items-center gap-1.5 {sortMode === 'random' ? pillOn : pillOff}"
					onclick={pickRandom}
					title={lang.t('Shuffle', 'Mélanger')}
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
					</svg>
					{lang.t('Random', 'Aléatoire')}
				</button>
				<button
					class="{pillBase} {sortMode === 'asc' ? pillOn : pillOff}"
					onclick={() => (sortMode = 'asc')}
				>
					A–Z
				</button>
				<button
					class="{pillBase} {sortMode === 'desc' ? pillOn : pillOff}"
					onclick={() => (sortMode = 'desc')}
				>
					Z–A
				</button>
			</div>
		</div>

		<!-- Project grid -->
		<div class="grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each visible as project, i (project.slug)}
				<ProjectCard
					index={i + 1}
					slug={project.slug}
					title={project.title}
					description={project.description}
					stack={project.stack}
					github={project.github}
					demo={project.demo}
				/>
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="py-16 text-center font-mono text-sm text-zinc-700">
				{lang.t('No projects found.', 'Aucun projet trouvé.')}
			</p>
		{/if}

		<!-- Load more -->
		{#if hasMore}
			<div class="mt-2 flex flex-col items-center gap-4 border-t border-zinc-800/60 pt-10">
				<!-- Progress bar -->
				<div class="h-px w-48 overflow-hidden rounded-full bg-zinc-800">
					<div
						class="h-full bg-white transition-all duration-500"
						style="width: {Math.round((visibleCount / ordered.length) * 100)}%"
					></div>
				</div>

				<p class="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
					{visibleCount} / {ordered.length}
					{lang.t('projects', 'projets')}
				</p>

				<button
					class="group flex items-center gap-3 rounded-full border border-zinc-800 px-6 py-2.5 font-mono text-xs tracking-widest text-zinc-500 uppercase transition-all duration-300 hover:border-zinc-600 hover:text-white"
					onclick={loadMore}
				>
					{lang.t('Load more', 'Charger plus')}
					<span class="font-mono text-zinc-700 transition-colors group-hover:text-zinc-400">
						+{remaining}
					</span>
				</button>
			</div>
		{/if}

		<!-- All shown indicator -->
		{#if !hasMore && ordered.length > PAGE_SIZE}
			<div class="mt-2 flex flex-col items-center gap-3 border-t border-zinc-800/60 pt-10">
				<div class="h-px w-48 rounded-full bg-white"></div>
				<p class="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
					{ordered.length} / {ordered.length}
					{lang.t('projects', 'projets')}
				</p>
			</div>
		{/if}
	</section>
</Container>
