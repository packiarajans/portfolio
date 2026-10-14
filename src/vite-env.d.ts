/// <reference types="vite/client" />

declare module '$lib/*' {
  const content: any;
  export default content;
}

declare module '$lib/stores/theme' {
  import { Writable } from 'svelte/store';

  type Theme = 'light' | 'dark';

  interface ThemeStore extends Writable<Theme> {
    toggle: () => void;
    init: () => void;
  }

  export const theme: ThemeStore;
}

declare module '$lib/components/*.svelte' {
  import type { SvelteComponent } from 'svelte';
  const component: typeof SvelteComponent;
  export default component;
}