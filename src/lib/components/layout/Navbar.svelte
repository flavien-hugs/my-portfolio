<script lang="ts">
	import Container from './Container.svelte';
	import { profile } from '$lib/data/profile';
	import { lang } from '$lib/i18n.svelte';
	import { theme } from '$lib/theme.svelte';
	import { base } from '$app/paths';
</script>

<nav class="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
	<Container>
		<div class="flex h-16 items-center justify-between">
			<a href="{base}/" class="font-semibold tracking-tight">{profile.name}</a>

			<div class="flex items-center gap-6">
				<!-- Nav Links -->
				<div class="flex gap-6 font-mono text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
					<a href="{base}/projects" class="transition-colors hover:text-white"
						>{lang.t('Projects', 'Projets')}</a
					>
					<a href="{base}/blog" class="transition-colors hover:text-white">Blog</a>
				</div>

				<!-- Lang Switcher -->
				<div class="flex items-center gap-2 border-l border-zinc-900 pl-6 text-zinc-600">
					<button
						onclick={() => lang.set('fr')}
						class="font-mono text-[10px] transition-colors {lang.current === 'fr'
							? 'text-white'
							: 'hover:text-zinc-400'}"
					>
						FR
					</button>
					<span class="text-[10px] text-zinc-800">/</span>
					<button
						onclick={() => lang.set('en')}
						class="font-mono text-[10px] transition-colors {lang.current === 'en'
							? 'text-white'
							: 'hover:text-zinc-400'}"
					>
						EN
					</button>
				</div>

				<!-- Theme Toggle -->
				<div class="flex items-center border-l border-zinc-900 pl-6">
					<button
						onclick={() => theme.toggle()}
						aria-label={lang.t('Toggle theme', 'Changer de thème')}
						title={lang.t('Toggle theme', 'Changer de thème')}
						class="text-zinc-500 transition-colors hover:text-white"
					>
						{#if theme.current === 'dark'}
							<svg
								width="15"
								height="15"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
							</svg>
						{:else}
							<svg
								width="15"
								height="15"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<circle cx="12" cy="12" r="4" />
								<path
									d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
								/>
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</Container>
</nav>
