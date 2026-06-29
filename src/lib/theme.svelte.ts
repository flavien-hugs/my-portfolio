import { browser } from '$app/environment';

export type Theme = 'dark' | 'light';

class ThemeStore {
	current = $state<Theme>('dark');

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('theme') as Theme | null;
			if (saved === 'dark' || saved === 'light') {
				this.current = saved;
			} else {
				this.current = window.matchMedia('(prefers-color-scheme: light)').matches
					? 'light'
					: 'dark';
			}
			this.apply();
		}
	}

	private apply() {
		if (!browser) return;
		const root = document.documentElement;
		root.classList.toggle('light', this.current === 'light');
		root.classList.toggle('dark', this.current === 'dark');
	}

	set(theme: Theme) {
		this.current = theme;
		if (browser) {
			localStorage.setItem('theme', theme);
			this.apply();
		}
	}

	toggle() {
		this.set(this.current === 'dark' ? 'light' : 'dark');
	}
}

export const theme = new ThemeStore();
