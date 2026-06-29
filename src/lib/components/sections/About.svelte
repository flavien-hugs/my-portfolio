<script lang="ts">
	import { lang } from '$lib/i18n.svelte';
</script>

<section class="py-10">
	<div class="flex flex-col gap-16 lg:flex-row lg:gap-24">
		<!-- Sticky Sidebar -->
		<div class="h-fit lg:sticky lg:top-32 lg:w-1/3">
			<h3 class="text-4xl leading-tight font-bold tracking-tight text-white">
				{lang.t('How I Build', 'Comment je bâtis')} <br />
				{lang.t('Modern Systems.', 'des systèmes modernes.')}
			</h3>
			<p class="mt-6 leading-relaxed font-light text-zinc-500">
				{lang.t(
					'Engineering is more than just making solutions work. It is the art of building world-class systems: robust by nature, secure by design, and maintainable by conviction.',
					"L'ingénierie dépasse la simple mise en œuvre technique. C’est l’art de bâtir des systèmes de classe mondiale: robustes par nature, sécurisés par design et maintenables par conviction."
				)}
			</p>
		</div>

		<!-- Principles List -->
		<div class="relative flex flex-col lg:w-2/3">
			<!-- Vertical Line between numbers -->
			<div class="absolute top-10 bottom-10 left-[1.15rem] -z-10 w-px bg-zinc-900"></div>

			<!-- 01 -->
			<div class="group flex flex-col gap-4 pb-12">
				<div class="flex items-center gap-6">
					<span
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-500 transition-colors group-hover:border-emerald-500/50 group-hover:text-emerald-500"
						>01</span
					>
					<h4 class="text-xl font-bold tracking-tight text-white uppercase">
						{lang.t('Clean Architecture First', "Clean Architecture d'abord")}
					</h4>
				</div>
				<p class="max-w-xl pl-16 text-sm leading-relaxed font-light text-zinc-400">
					{lang.t(
						'I treat your business logic as a sacred core. By using Hexagonal and DDD principles, I keep it entirely isolated from databases, APIs, and frameworks. This ensures your system is testable and decoupled.',
						'Je traite votre logique métier comme un noyau sacré. En utilisant les principes Hexagonaux et DDD, je la garde entièrement isolée des bases de données, des API et des frameworks. Cela garantit que votre système est testable et découplé.'
					)}
				</p>
			</div>

			<!-- 02 -->
			<div class="group flex flex-col gap-4 pb-12">
				<div class="flex items-center gap-6">
					<span
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-500 transition-colors group-hover:border-blue-500/50 group-hover:text-blue-500"
						>02</span
					>
					<h4 class="text-xl font-bold tracking-tight text-white uppercase">
						{lang.t('Security is Inherent', 'La sécurité est inhérente')}
					</h4>
				</div>
				<p class="max-w-xl pl-16 text-sm leading-relaxed font-light text-zinc-400">
					{lang.t(
						"Security is never an 'add-on'. I implement Zero-Trust architecture, secure JWT rotation, and fine-grained RBAC from the very first line of code. Your data is protected by industrial-grade patterns.",
						"La sécurité n'est jamais un 'ajout'. J'implémente une architecture Zero-Trust, une rotation JWT sécurisée et un RBAC granulaire dès la première ligne de code. Vos données sont protégées par des modèles de qualité industrielle."
					)}
				</p>
			</div>

			<!-- 03 -->
			<div class="group flex flex-col gap-4">
				<div class="flex items-center gap-6">
					<span
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-500 transition-colors group-hover:border-amber-500/50 group-hover:text-amber-500"
						>03</span
					>
					<h4 class="text-xl font-bold tracking-tight text-white uppercase">
						{lang.t('Automated Reliability', 'Fiabilité automatisée')}
					</h4>
				</div>
				<p class="max-w-xl pl-16 text-sm leading-relaxed font-light text-zinc-400">
					{lang.t(
						"If it's manual, it's a liability. I build with Docker-first workflows, rigorous CI/CD pipelines, and deep observability (ELK/Prometheus). Robustness via automation.",
						"Si c'est manuel, c'est une vulnérabilité. Je construis avec des workflows orientés Docker, des pipelines CI/CD rigoureux et une observabilité profonde (ELK/Prometheus). La robustesse par l'automatisation."
					)}
				</p>
			</div>
		</div>
	</div>
</section>
