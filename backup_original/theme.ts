import { writable, type Writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function createThemeStore(): Writable<Theme> & { toggle: () => void; init: () => void } {
  const { subscribe, set, update } = writable<Theme>('light');

  function init() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = stored || (prefersDark ? 'dark' : 'light');
      set(initial);
      document.documentElement.classList.toggle('dark', initial === 'dark');
    }
  }

  function toggle() {
    update(current => {
      const next = current === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', next);
        document.documentElement.classList.toggle('dark', next === 'dark');
      }
      return next;
    });
  }

  return {
    subscribe,
    set,
    update,
    toggle,
    init,
  };
}

export const theme = createThemeStore();