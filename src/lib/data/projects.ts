import { type LocalizedString } from '$lib/i18n.svelte';

export type DemoEnv = {
	label: LocalizedString;
	url: string;
	credentials?: { username: string; password: string };
};

export type Project = {
	slug: string;
	title: string | LocalizedString;
	description: string | LocalizedString;
	longDescription: string | LocalizedString;
	stack: string[];
	featured: boolean;
	github?: string;
	demo?: string;
	demos?: DemoEnv[];
	highlights: (string | LocalizedString)[];
	architecture: (string | LocalizedString)[];
	challenge?: { en: string; fr: string };
	solution?: { en: string; fr: string };
	status?: 'production' | 'development';
};

export const projects: Project[] = [
	{
		slug: 'paygate-africa',
		title: 'Paygate Africa',
		description: {
			en: 'Unified abstraction layer for African payment gateways with zero dependencies.',
			fr: "Couche d'abstraction unifiée pour les passerelles de paiement africaines."
		},
		longDescription: {
			en: 'Paygate Africa is a lightweight Python package providing a unified API to integrate multiple African payment providers (CinetPay, Kkiapay...). Standardizes flows and avoids external dependencies.',
			fr: 'Paygate Africa est un package Python léger offrant une API unifiée pour intégrer plusieurs fournisseurs de paiement africains. Il standardise les flux et évite les dépendances externes.'
		},
		stack: ['Python', 'SDK Design', 'Payment APIs'],
		featured: true,
		github: 'https://github.com/flavien-hugs/paygate-africa',
		demo: 'https://flavien-hugs.github.io/paygate-africa/',
		highlights: [
			{
				en: 'Unified interface for multiple gateways',
				fr: 'Interface unifiée pour plusieurs passerelles'
			},
			{ en: 'Zero external dependencies', fr: 'Zéro dépendance externe' },
			{
				en: 'Clean architecture & extensible design',
				fr: 'Architecture propre et design extensible'
			}
		],
		architecture: [
			{ en: 'Provider Abstraction Layer', fr: "Couche d'abstraction des fournisseurs" },
			{ en: 'Gateway Interface', fr: 'Interface de passerelle' },
			{ en: 'Unified Transaction API', fr: 'API de transaction unifiée' }
		],
		challenge: {
			en: 'Standardizing wildly different API responses and error codes from various African banks into a single, predictable developer interface.',
			fr: "Standardisation des réponses API et des codes d'erreur très disparates des banques africaines en une interface développeur unique et prévisible."
		},
		solution: {
			en: 'Implemented a strict Adapter pattern with a custom Error Mapping engine that normalizes provider-specific failures into high-level business exceptions.',
			fr: "Implémentation d'un pattern Adapter strict avec un moteur de mappage d'erreurs personnalisé qui normalise les échecs spécifiques aux fournisseurs en exceptions métier de haut niveau."
		}
	},
	{
		slug: 'laregina-marketplace',
		title: 'LaRegina Marketplace',
		description: {
			en: 'Multi-vendor marketplace platform for product listing and order management.',
			fr: 'Plateforme de marketplace multi-vendeurs pour la gestion de produits et commandes.'
		},
		longDescription: {
			en: 'Backend-driven marketplace system designed to handle multi-vendor commerce flows. Supports product management per seller and transaction tracking.',
			fr: 'Système backend de marketplace conçu pour gérer les flux de commerce multi-vendeurs. Supporte la gestion des produits par vendeur et le suivi des transactions.'
		},
		stack: ['Python', 'Django', 'Marketplace Design'],
		featured: true,
		github: 'https://github.com/flavien-hugs/laregina-marketplace',
		highlights: [
			{ en: 'Multi-vendor SaaS architecture', fr: 'Architecture SaaS multi-vendeur' },
			{ en: 'Order lifecycle management', fr: 'Gestion du cycle de vie des commandes' },
			{ en: 'Financial flow modeling', fr: 'Modélisation des flux financiers' }
		],
		architecture: [
			{ en: 'Identity & Access (Customers/Sellers)', fr: 'Gestion Identité & Accès' },
			{ en: 'Order Processing Service', fr: 'Service de traitement des commandes' },
			{ en: 'Transaction Layer', fr: 'Couche de Transaction' }
		]
	},
	{
		slug: 'venone-crm',
		title: 'Venone CRM',
		description: {
			en: 'Real estate CRM for managing properties, clients, leads, and sales workflows.',
			fr: 'CRM immobilier pour la gestion de propriétés, clients, prospects et ventes.'
		},
		longDescription: {
			en: 'Centralized dashboard for real estate agents to manage leads, monitor listings, and track deals. Part of the Venone ecosystem.',
			fr: 'Tableau de bord centralisé pour les agents immobiliers pour gérer les prospects, surveiller les annonces et suivre les ventes.'
		},
		stack: ['Python', 'Flask', 'CRM', 'REST API', 'PostgreSQL'],
		featured: true,
		github: 'https://github.com/flavien-hugs/venone-crm',
		demo: 'https://venonedash.flavienhugs.cc',
		highlights: [
			{
				en: 'Lead mapping and pipeline tracking',
				fr: 'Cartographie des prospects et suivi du pipeline'
			},
			{ en: 'Integrated with Venone ecosystem', fr: 'Intégré à l’écosystème Venone' },
			{ en: 'Business Intelligence Dashboard', fr: 'Tableau de bord de Business Intelligence' }
		],
		architecture: [
			{ en: 'Lead Management Module', fr: 'Module de gestion des prospects' },
			{ en: 'Relationship Management Layer', fr: 'Couche de gestion de la relation client' },
			{ en: 'Pipeline Service', fr: 'Service de Pipeline' }
		],
		status: 'production'
	},
	{
		slug: 'venone-web',
		title: 'Venone (Web Platform)',
		description: {
			en: 'Real estate management system for property rental and sales.',
			fr: 'Système de gestion immobilier pour la location et la vente de biens.'
		},
		longDescription: {
			en: 'Full-featured real estate platform designed to manage property rentals and sales for agents and tenants.',
			fr: 'Plateforme immobilière complète conçue pour gérer les locations et ventes pour les agents et locataires.'
		},
		stack: ['Python', 'Flask', 'PostgreSQL'],
		featured: true,
		github: 'https://github.com/flavien-hugs/venone-web',
		demo: 'https://venoneweb.flavienhugs.cc',
		highlights: [
			{ en: 'Web + Mobile ecosystem', fr: 'Écosystème Web + Mobile' },
			{ en: 'Tenant & contract management', fr: 'Gestion des locataires et contrats' },
			{ en: 'Search and filtering systems', fr: 'Systèmes de recherche et filtrage' }
		],
		architecture: [
			{ en: 'Rental Workflow Engine', fr: 'Moteur de workflow de location' },
			{ en: 'Identity Service', fr: 'Service d’identité' },
			{ en: 'Multiformat client API', fr: 'API client multiformat' }
		],
		status: 'production'
	},
	{
		slug: 'mp3music-player',
		title: 'Python MP3 Player',
		description: {
			en: 'Lightweight desktop music player built with Python and Tkinter.',
			fr: 'Lecteur de musique desktop léger construit avec Python et Tkinter.'
		},
		longDescription: {
			en: 'A simple desktop application demonstrating fundamental GUI programming and audio handling in Python.',
			fr: 'Une application desktop simple démontrant la programmation GUI fondamentale et la gestion audio en Python.'
		},
		stack: ['Python', 'Tkinter', 'Pygame'],
		featured: true,
		github: 'https://github.com/flavien-hugs/mp3music-player',
		highlights: [
			{ en: 'Local audio playback engine', fr: 'Moteur de lecture audio locale' },
			{ en: 'Simple/Clean user interface', fr: 'Interface utilisateur simple/propre' },
			{ en: 'File loading & playlist logic', fr: 'Chargement de fichiers & logique de playlist' }
		],
		architecture: [
			{ en: 'GUI Layer (Tkinter)', fr: 'Couche GUI (Tkinter)' },
			{ en: 'Audio Engine (Pygame)', fr: 'Moteur Audio (Pygame)' }
		]
	},
	{
		slug: 'kozondjango',
		title: 'KozonDjango',
		description: {
			en: 'A Django application designed to practice core framework concepts.',
			fr: 'Une application Django conçue pour pratiquer les concepts clés du framework.'
		},
		longDescription: {
			en: 'Experimental platform to explore core Django tools like models, views, and authentication.',
			fr: 'Plateforme expérimentale pour explorer les outils Django tels que les modèles, les vues et l’authentification.'
		},
		stack: ['Python', 'Django', 'Learning'],
		featured: false,
		github: 'https://github.com/flavien-hugs/kozondjango',
		highlights: [
			{ en: 'Best practices implementation', fr: 'Implémentation des bonnes pratiques' },
			{ en: 'Structured learning approach', fr: 'Approche d’apprentissage structurée' }
		],
		architecture: [{ en: 'Classic Django MTV', fr: 'Django MTV Classique' }]
	},
	{
		slug: 'auction-api-architecture',
		title: 'Auction API (Clean Architecture)',
		description: {
			en: 'A high-integrity auction management system built with FastAPI and Clean Architecture.',
			fr: "Système de gestion d'enchères conçu avec FastAPI et Clean Architecture."
		},
		longDescription: {
			en: 'This project implements an auction system focusing on architectural integrity. It uses Clean Architecture (Hexagonal) to decouple business logic from external drivers, with rigorous TDD and domain-driven design.',
			fr: "Projet implémentant un système d'enchères axé sur l'intégrité architecturale. Utilisation de la Clean Architecture (Hexagonale) pour découpler la logique métier, avec TDD rigoureux et DDD."
		},
		stack: ['Python', 'FastAPI', 'TDD', 'Clean Architecture'],
		featured: true,
		github: 'https://github.com/flavien-hugs/fastapi-clean-architecture',
		highlights: [
			{ en: 'Strict Clean Architecture pattern', fr: 'Pattern Clean Architecture strict' },
			{ en: 'Comprehensive TDD coverage', fr: 'Couverture TDD complète' },
			{ en: 'Domain-Driven Design (DDD)', fr: 'Domain-Driven Design (DDD)' }
		],
		architecture: [
			{ en: 'Domain Entities & Use Cases', fr: 'Entités du Domaine & Cas d’Utilisation' },
			{ en: 'Dependency Inversion Layer', fr: 'Couche d’Inversion de Dépendance' },
			{ en: 'Infrastructure Adapters (Repo, API)', fr: 'Adapteurs d’Infrastructure (Repo, API)' }
		]
	},
	{
		slug: 'kareeba-microservices',
		title: 'Kareeba Backend (Microservices)',
		description: {
			en: 'FastAPI REST API designed for a marketplace using microservices architecture.',
			fr: 'API REST FastAPI pour une marketplace utilisant une architecture microservices.'
		},
		longDescription: {
			en: 'Robust backend for a multi-vendor marketplace, leveraging MongoDB for flexible data modeling and Docker for service orchestration.',
			fr: "Backend robuste pour une marketplace multi-vendeur, exploitant MongoDB pour la modélisation et Docker pour l'orchestration des services."
		},
		stack: ['FastAPI', 'MongoDB', 'Microservices', 'Docker'],
		featured: true,
		github: 'https://github.com/flavien-hugs/kareeba-backend',
		highlights: [
			{ en: 'Microservices service decomposition', fr: 'Décomposition en microservices' },
			{ en: 'NoSQL modeling with MongoDB', fr: 'Modélisation NoSQL avec MongoDB' },
			{ en: 'Dockerized development environment', fr: 'Environnement Dockerisé' }
		],
		architecture: [
			{ en: 'Service Registry & Gateway', fr: 'Registre de Services & Gateway' },
			{ en: 'MongoDB Data Persistence', fr: 'Persistence MongoDB' },
			{ en: 'Asynchronous Service Communication', fr: 'Communication Asynchrone' }
		]
	},
	{
		slug: 'django-ninja-keycloak',
		title: 'Django Ninja + Keycloak',
		description: {
			en: 'Secure integration of Django Ninja with Keycloak for Identity Management.',
			fr: 'Intégration sécurisée de Django Ninja avec Keycloak pour la gestion d’identité.'
		},
		longDescription: {
			en: 'Demonstrates a modern approach to authentication by integrating the fast Django Ninja framework with Keycloak (OAuth2/OIDC). Features secure token rotation and RBAC.',
			fr: "Démontre une approche moderne de l'authentification en intégrant Django Ninja avec Keycloak (OAuth2/OIDC). Gestion des tokens et RBAC."
		},
		stack: ['Django Ninja', 'Keycloak', 'OAuth2', 'OIDC'],
		featured: true,
		github: 'https://github.com/flavien-hugs/djn-keycloak',
		highlights: [
			{ en: 'Typed API with Django Ninja', fr: 'API typée avec Django Ninja' },
			{ en: 'Keycloak OIDC Integration', fr: 'Intégration Keycloak OIDC' },
			{ en: 'Secure RBAC implementation', fr: 'Implémentation RBAC sécurisée' }
		],
		architecture: [
			{ en: 'Identity Provider (Keycloak)', fr: 'Fournisseur d’Identité (Keycloak)' },
			{ en: 'Middleware Auth Layer', fr: 'Couche Middleware d’Authentification' },
			{ en: 'Pydantic Data Schemas', fr: 'Schémas de données Pydantic' }
		]
	},
	{
		slug: 'comet-game-pygame',
		title: 'Comet Game',
		description: {
			en: 'A war-themed arcade game developed with Python and Pygame.',
			fr: 'Un jeu de guerre d’arcade développé avec Python et Pygame.'
		},
		longDescription: {
			en: 'A defensive arcade game where players protect their territory from falling comets. Inspired by classic game patterns and rebuilt with a custom OOP structure to ensure modularity and ease of asset integration.',
			fr: 'Un jeu d’arcade défensif où le joueur protège son territoire contre des comètes. Inspiré par des patterns classiques et réécrit avec une structure OOP personnalisée pour assurer la modularité.'
		},
		stack: ['Python', 'Pygame', 'Game Design'],
		featured: false,
		github: 'https://github.com/flavien-hugs/commet-game',
		highlights: [
			{ en: 'Collision detection algorithms', fr: 'Algorithmes de détection de collision' },
			{ en: 'Modular entity system', fr: 'Système d’entités modulaire' },
			{
				en: 'Score tracking & difficulty scaling',
				fr: 'Suivi de score & progression de difficulté'
			}
		],
		architecture: [
			{ en: 'State Management (Game, Player)', fr: 'Gestion d’État (Jeu, Joueur)' },
			{ en: 'Event Handling System', fr: 'Système de Gestion d’Événements' },
			{ en: 'Rendering Pipeline', fr: 'Pipeline de Rendu' }
		]
	},
	{
		slug: 'caas-checkout',
		title: 'CaaS — Checkout-as-a-Service',
		description: {
			en: 'Checkout SaaS for digital sellers with mobile money, page builder and admin dashboard.',
			fr: 'SaaS de checkout pour vendeurs digitaux : mobile money, page builder et dashboard admin.'
		},
		longDescription: {
			en: 'Checkout-as-a-Service for francophone African digital sellers: mobile money plumbing (Kkiapay, CinetPay), a landing page builder and an admin dashboard with RBAC. A monorepo pairing a hexagonal FastAPI backend with a SvelteKit frontend, ready for phase-2 multi-tenancy.',
			fr: "Checkout-as-a-Service pour les vendeurs digitaux d'Afrique francophone : plomberie mobile money (Kkiapay, CinetPay), page builder pour les landings et dashboard admin avec RBAC. Monorepo associant un backend FastAPI hexagonal et un frontend SvelteKit, prêt pour le multi-tenancy en phase 2."
		},
		stack: ['FastAPI', 'SvelteKit', 'PostgreSQL', 'Redis', 'Celery', 'Hexagonal Architecture'],
		featured: true,
		github: 'https://github.com/flavien-hugs/caas',
		highlights: [
			{
				en: 'Mobile money integration (Kkiapay, CinetPay)',
				fr: 'Intégration mobile money (Kkiapay, CinetPay)'
			},
			{ en: 'No-code landing page builder', fr: 'Page builder de landings sans code' },
			{ en: 'Admin dashboard with RBAC', fr: 'Dashboard admin avec RBAC' }
		],
		architecture: [
			{ en: 'Hexagonal backend (ports & adapters)', fr: 'Backend hexagonal (ports & adapters)' },
			{ en: 'SvelteKit frontend & dashboard', fr: 'Frontend & dashboard SvelteKit' },
			{ en: 'Async tasks via Celery/Redis', fr: 'Tâches asynchrones via Celery/Redis' }
		],
		challenge: {
			en: 'Wiring heterogeneous mobile money providers into a single checkout flow while keeping the door open for multi-tenancy.',
			fr: 'Brancher des fournisseurs mobile money hétérogènes dans un flux de checkout unique tout en gardant la porte ouverte au multi-tenancy.'
		},
		solution: {
			en: 'A hexagonal core isolates payment ports behind adapters, so providers plug in without touching business logic, and the page builder ships landings without code.',
			fr: 'Un cœur hexagonal isole les ports de paiement derrière des adapters : les fournisseurs se branchent sans toucher à la logique métier, et le page builder publie des landings sans code.'
		},
		status: 'development'
	},
	{
		slug: 'vigie',
		title: 'Vigie',
		description: {
			en: 'Information aggregator that collects, deduplicates and emails a daily thematic digest.',
			fr: "Agrégateur d'information qui collecte, déduplique et envoie un résumé thématique quotidien par email."
		},
		longDescription: {
			en: 'Vigie gathers news from RSS feeds, JSON APIs and scraping, deduplicates it in SQLite and sends a daily thematic digest by email (optional SMS). Pre-configured for Côte d’Ivoire watch: business, agriculture, education, health, economy and a "hidden jobs" radar.',
			fr: "Vigie collecte l'actualité depuis des flux RSS, des API JSON et par scraping, la déduplique dans SQLite et envoie chaque jour un résumé thématique par email (SMS optionnel). Pré-configuré pour la veille ivoirienne : business, agriculture, éducation, santé, économie et un radar « emploi caché »."
		},
		stack: ['Python', 'Web Scraping', 'SQLite', 'CLI'],
		featured: true,
		github: 'https://github.com/flavien-hugs/vigie',
		highlights: [
			{
				en: 'Multi-source: RSS, JSON APIs, scraping',
				fr: 'Multi-sources : RSS, API JSON, scraping'
			},
			{ en: 'Deduplication & thematic digest', fr: 'Déduplication & résumé thématique' },
			{ en: 'Decoupled collect/notify via SQLite', fr: 'Collecte/envoi découplés via SQLite' }
		],
		architecture: [
			{ en: 'Collectors (RSS/API/scrape)', fr: 'Collecteurs (RSS/API/scrape)' },
			{ en: 'SQLite storage with dedup', fr: 'Stockage SQLite avec déduplication' },
			{ en: 'Digest & notify (email/SMS)', fr: 'Digest & notification (email/SMS)' }
		]
	},
	{
		slug: 'auth-microservice',
		title: 'Auth Microservice',
		description: {
			en: 'Enterprise authentication service with multi-provider login and full RBAC.',
			fr: "Service d'authentification d'entreprise avec login multi-provider et RBAC complet."
		},
		longDescription: {
			en: 'A scalable authentication and user-management microservice implementing complete Role-Based Access Control with multiple providers (Keycloak, local JWT, Firebase). Ships distributed permission mapping via Redis, Prometheus metrics, Sentry tracking and service discovery for high availability.',
			fr: "Microservice d'authentification et de gestion des utilisateurs implémentant un RBAC complet avec plusieurs providers (Keycloak, JWT local, Firebase). Intègre un mapping de permissions distribué via Redis, des métriques Prometheus, le suivi Sentry et la service discovery pour la haute disponibilité."
		},
		stack: ['FastAPI', 'Keycloak', 'JWT', 'Redis', 'RBAC', 'Prometheus'],
		featured: true,
		github: 'https://github.com/flavien-hugs/ms-oauth',
		highlights: [
			{
				en: 'Multi-provider (Keycloak, JWT, Firebase)',
				fr: 'Multi-provider (Keycloak, JWT, Firebase)'
			},
			{ en: 'Granular RBAC with Redis caching', fr: 'RBAC granulaire avec cache Redis' },
			{ en: 'Observability: Prometheus & Sentry', fr: 'Observabilité : Prometheus & Sentry' }
		],
		architecture: [
			{ en: 'Provider abstraction layer', fr: "Couche d'abstraction des providers" },
			{
				en: 'Distributed permission mapping (Redis)',
				fr: 'Mapping de permissions distribué (Redis)'
			},
			{ en: 'Service discovery & clustering', fr: 'Service discovery & clustering' }
		],
		status: 'production'
	},
	{
		slug: 'digital-wallet-api',
		title: 'Digital Wallet API',
		description: {
			en: 'API managing electronic wallets and their lifecycle.',
			fr: 'API de gestion des portefeuilles électroniques et de leur cycle de vie.'
		},
		longDescription: {
			en: 'A digital wallet API built with FastAPI and MongoDB. It auto-provisions a wallet on user creation, exposes user and admin wallet operations (listing, filtering, status changes) and tears wallets down on user deletion.',
			fr: "API de portefeuille numérique construite avec FastAPI et MongoDB. Elle initialise automatiquement un portefeuille à la création d'un utilisateur, expose les opérations wallet côté utilisateur et admin (listing, filtrage, changement de statut) et désactive les portefeuilles à la suppression d'un utilisateur."
		},
		stack: ['FastAPI', 'MongoDB', 'Beanie', 'Docker'],
		featured: false,
		github: 'https://github.com/flavien-hugs/ms-wallet',
		highlights: [
			{
				en: 'Auto wallet provisioning per user',
				fr: 'Provisionnement automatique par utilisateur'
			},
			{ en: 'Admin wallet management & status control', fr: 'Gestion admin & contrôle de statut' },
			{ en: 'Async MongoDB modeling with Beanie', fr: 'Modélisation MongoDB async avec Beanie' }
		],
		architecture: [
			{ en: 'Wallet domain & lifecycle', fr: 'Domaine wallet & cycle de vie' },
			{ en: 'MongoDB persistence (Beanie)', fr: 'Persistence MongoDB (Beanie)' },
			{
				en: 'User-event driven provisioning',
				fr: 'Provisionnement piloté par événements utilisateur'
			}
		],
		status: 'development'
	},
	{
		slug: 'customer-feedback-api',
		title: 'Customer Feedback API',
		description: {
			en: 'Customer feedback REST API built as a strict showcase of the SOLID principles.',
			fr: 'API REST de collecte des retours clients construite comme une vitrine stricte des principes SOLID.'
		},
		longDescription: {
			en: 'A feedback-collection API built with FastAPI and async SQLAlchemy that applies the five SOLID principles rigorously across a layered (domain / application / infrastructure) design. Covers surveys, responses, NPS analytics dashboards and exports to CSV, JSON and PDF.',
			fr: 'API de collecte de retours construite avec FastAPI et SQLAlchemy async, appliquant rigoureusement les cinq principes SOLID dans une architecture en couches (domaine / application / infrastructure). Couvre sondages, réponses, tableaux de bord analytiques NPS et exports CSV, JSON et PDF.'
		},
		stack: ['FastAPI', 'SQLAlchemy', 'SOLID', 'Clean Architecture'],
		featured: false,
		github: 'https://github.com/flavien-hugs/ms-feedbacks',
		highlights: [
			{ en: 'Strict SOLID, layer by layer', fr: 'SOLID strict, couche par couche' },
			{ en: 'NPS scoring & analytics dashboard', fr: 'Score NPS & tableau de bord analytique' },
			{ en: 'Export to CSV / JSON / PDF', fr: 'Export CSV / JSON / PDF' }
		],
		architecture: [
			{
				en: 'Domain layer (entities, value objects)',
				fr: 'Couche domaine (entités, value objects)'
			},
			{ en: 'Application use cases & DTOs', fr: 'Use cases applicatifs & DTOs' },
			{ en: 'Infrastructure adapters & repos', fr: "Adapteurs d'infrastructure & repos" }
		]
	},
	{
		slug: 'sfs-file-storage',
		title: 'SFS — Simple File Storage',
		description: {
			en: 'Media file storage microservice backed by MongoDB metadata and S3-compatible MinIO.',
			fr: 'Microservice de stockage de fichiers multimédia adossé à MongoDB (métadonnées) et MinIO (S3).'
		},
		longDescription: {
			en: 'A file storage and management microservice exposing a FastAPI REST API. Binary objects live in MinIO (S3-compatible) while metadata is stored in MongoDB, with Consul for service discovery, Redis caching and Sentry monitoring.',
			fr: 'Microservice de stockage et de gestion de fichiers exposant une API REST FastAPI. Les objets binaires sont dans MinIO (compatible S3) et les métadonnées dans MongoDB, avec Consul pour la service discovery, du cache Redis et le monitoring Sentry.'
		},
		stack: ['FastAPI', 'MongoDB', 'MinIO', 'Consul', 'Redis'],
		featured: false,
		github: 'https://github.com/flavien-hugs/sfs',
		highlights: [
			{ en: 'S3-compatible storage via MinIO', fr: 'Stockage compatible S3 via MinIO' },
			{ en: 'Metadata in MongoDB (Beanie)', fr: 'Métadonnées dans MongoDB (Beanie)' },
			{ en: 'Service discovery with Consul', fr: 'Service discovery avec Consul' }
		],
		architecture: [
			{ en: 'REST API (FastAPI)', fr: 'API REST (FastAPI)' },
			{ en: 'Object storage (MinIO/boto3)', fr: 'Stockage objet (MinIO/boto3)' },
			{ en: 'Metadata store (MongoDB)', fr: 'Store de métadonnées (MongoDB)' }
		]
	},
	{
		slug: 'paylink',
		title: 'PayLink',
		description: {
			en: 'Multi-entity Kkiapay payment page with a transactions back-office.',
			fr: 'Page de paiement Kkiapay multi-entités avec back-office de transactions.'
		},
		longDescription: {
			en: 'PayLink is a free-amount payment page integrating the Kkiapay aggregator, with local transaction recording and a back-office (tracking, reconciliation, statistics, export). Each entity (school, association, business…) is configurable (logo, name, colors, Kkiapay keys) and reuses the same payment page via its slug.',
			fr: "PayLink est une page de paiement (montant libre) intégrant l'agrégateur Kkiapay, avec enregistrement local des transactions et un back-office (suivi, réconciliation, statistiques, export). Chaque entité (école, association, commerce…) est paramétrable (logo, nom, couleurs, clés Kkiapay) et réutilise la même page de paiement via son slug."
		},
		stack: ['FastAPI', 'SvelteKit', 'PostgreSQL', 'Kkiapay', 'Hexagonal Architecture'],
		featured: true,
		github: 'https://github.com/flavien-hugs/paylink',
		highlights: [
			{
				en: 'Reusable payment page per entity (slug)',
				fr: 'Page de paiement réutilisable par entité (slug)'
			},
			{ en: 'Kkiapay aggregator integration', fr: "Intégration de l'agrégateur Kkiapay" },
			{ en: 'Back-office: reconciliation & export', fr: 'Back-office : réconciliation & export' }
		],
		architecture: [
			{ en: 'Hexagonal backend (FastAPI)', fr: 'Backend hexagonal (FastAPI)' },
			{ en: 'Public payment page (SvelteKit)', fr: 'Page de paiement publique (SvelteKit)' },
			{ en: 'Admin back-office (JWT)', fr: 'Back-office admin (JWT)' }
		]
	},
	{
		slug: 'likya',
		title: 'Likya',
		description: {
			en: 'Health platform for West Africa: care providers, health records, wallet and fundraisers.',
			fr: "Plateforme santé pour l'Afrique de l'Ouest : prestataires de soins, carnet de santé, wallet et cagnottes."
		},
		longDescription: {
			en: 'Likya is a microservices health platform for West Africa managing care providers, patient health records, a Moneroo-powered wallet and medical fundraisers (cagnottes). Services sit behind a KrakenD gateway, pairing a PostgreSQL core API with MongoDB-backed services.',
			fr: "Likya est une plateforme santé en microservices pour l'Afrique de l'Ouest gérant les prestataires de soins, le carnet de santé des patients, un wallet alimenté par Moneroo et des cagnottes médicales. Les services sont exposés derrière une passerelle KrakenD, associant une API cœur PostgreSQL à des services adossés à MongoDB."
		},
		stack: ['FastAPI', 'PostgreSQL', 'MongoDB', 'KrakenD', 'Microservices', 'Moneroo'],
		featured: true,
		github: 'https://github.com/flavien-hugs/likya-backend',
		demo: 'https://website.demo.likya.pro',
		demos: [
			{
				label: { en: 'Admin console', fr: 'Console admin' },
				url: 'https://admin-console.demo.likya.pro',
				credentials: { username: 'admin@likay.pro', password: 'p@55word' }
			},
			{
				label: { en: 'Provider console', fr: 'Console prestataire' },
				url: 'https://provider-console.demo.likya.pro',
				credentials: { username: 'demo.provider@likya.pro', password: 'p@55word' }
			},
			{
				label: { en: 'Public website', fr: 'Site vitrine' },
				url: 'https://website.demo.likya.pro'
			}
		],
		highlights: [
			{
				en: 'Care providers & patient health records',
				fr: 'Prestataires de soins & carnet de santé'
			},
			{ en: 'Wallet recharge via Moneroo', fr: 'Recharge de wallet via Moneroo' },
			{ en: 'Medical fundraisers (cagnottes)', fr: 'Cagnottes médicales' }
		],
		architecture: [
			{ en: 'KrakenD API gateway', fr: 'Passerelle API KrakenD' },
			{ en: 'Core API (FastAPI, PostgreSQL)', fr: 'API cœur (FastAPI, PostgreSQL)' },
			{ en: 'Domain microservices (MongoDB)', fr: 'Microservices métier (MongoDB)' }
		],
		status: 'development'
	},
	{
		slug: 'payme',
		title: 'Payme',
		description: {
			en: 'Payment platform for West African SMEs, with web and mobile clients.',
			fr: "Plateforme de paiement pour les PME d'Afrique de l'Ouest, avec clients web et mobile."
		},
		longDescription: {
			en: 'Payme is a payment platform for West African SMEs. A hexagonal FastAPI backend exposes the API consumed by a React web app and a mobile client, and handles webhooks from payment operators such as Orange Money and Wave.',
			fr: "Payme est une plateforme de paiement pour les PME d'Afrique de l'Ouest. Un backend FastAPI hexagonal expose l'API consommée par une application web React et un client mobile, et traite les webhooks des opérateurs de paiement comme Orange Money et Wave."
		},
		stack: ['FastAPI', 'React', 'PostgreSQL', 'Hexagonal Architecture'],
		featured: true,
		github: 'https://github.com/flavien-hugs/payme-backend',
		demo: 'https://websitepayme.creantiq.com',
		demos: [
			{
				label: { en: 'Merchant space', fr: 'Espace marchand' },
				url: 'https://marchandpayme.creantiq.com',
				credentials: { username: 'demo3@demo.payme.test', password: 'password' }
			},
			{
				label: { en: 'Admin console', fr: 'Console admin' },
				url: 'https://consolepayme.creantiq.com',
				credentials: { username: 'admin@payme.app', password: 'p@55word' }
			},
			{
				label: { en: 'Public website', fr: 'Site vitrine' },
				url: 'https://websitepayme.creantiq.com'
			}
		],
		highlights: [
			{ en: 'Orange Money & Wave integrations', fr: 'Intégrations Orange Money & Wave' },
			{ en: 'Web + mobile clients', fr: 'Clients web + mobile' },
			{ en: 'Operator webhooks handling', fr: 'Traitement des webhooks opérateurs' }
		],
		architecture: [
			{ en: 'Hexagonal backend per domain module', fr: 'Backend hexagonal par module métier' },
			{ en: 'React web frontend', fr: 'Frontend web React' },
			{ en: 'Mobile client', fr: 'Client mobile' }
		],
		status: 'development'
	},
	{
		slug: 'oriens-engine',
		title: 'Oriens Engine',
		description: {
			en: 'Intelligent school-orientation engine recommending study paths from grades and interests.',
			fr: "Moteur d'orientation scolaire intelligent recommandant des filières selon notes et intérêts."
		},
		longDescription: {
			en: 'Oriens Engine is a school-orientation engine for high-school graduates and 3rd-year students, primarily in Côte d’Ivoire. It analyzes grades, interests and constraints (city, budget) to recommend the best-suited higher-education tracks or secondary streams, with structured explanations. Built on Clean Architecture with a self-retraining ML pipeline fed by user feedback.',
			fr: "Oriens Engine est un moteur d'orientation scolaire pour les bacheliers et élèves de 3ème, principalement en Côte d'Ivoire. Il analyse les notes, les intérêts et les contraintes (ville, budget) pour recommander les filières supérieures ou séries secondaires les plus adaptées, avec des explications structurées. Bâti sur une Clean Architecture avec un pipeline ML auto-adaptatif alimenté par les retours utilisateurs."
		},
		stack: ['FastAPI', 'scikit-learn', 'Next.js', 'Clean Architecture'],
		featured: true,
		github: 'https://github.com/flavien-hugs/oriens-backend',
		demo: 'https://oriens.flavienhugs.cc',
		highlights: [
			{
				en: 'Personalized study-path recommendations',
				fr: 'Recommandations de filières personnalisées'
			},
			{ en: 'Self-retraining ML pipeline', fr: 'Pipeline ML auto-adaptatif' },
			{ en: 'Structured, explainable suggestions', fr: 'Suggestions structurées et explicables' }
		],
		architecture: [
			{ en: 'Recommendation use case', fr: "Cas d'utilisation de recommandation" },
			{ en: 'ML engine (scikit-learn)', fr: 'Moteur ML (scikit-learn)' },
			{ en: 'Next.js frontend', fr: 'Frontend Next.js' }
		],
		status: 'development'
	}
];
