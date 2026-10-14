<script lang="ts">
  import { theme } from '../stores/theme';
  import { onMount } from 'svelte';

  export let scrolled = false;
  export let activeSection = '';

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  let mobileMenuOpen = false;

  function scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      mobileMenuOpen = false;
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:scrolled={scrolled}
>
  <nav class="container" aria-label="Main navigation">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <a href="#hero" class="text-xl font-bold text-gray-900 dark:text-white" aria-label="Go to homepage">
        Portfolio
      </a>

      <div class="hidden lg:flex items-center gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-600 hover:after:w-full after:transition-all"
            on:click|preventDefault={() => scrollToSection(link.href)}
            class:active={activeSection === link.href.slice(1)}
          >
            {link.label}
          </a>
        {/each}

        <button
          on:click={theme.toggle}
          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {#if $theme === 'light'}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {/if}
        </button>
      </div>

      <div class="lg:hidden flex items-center gap-4">
        <button
          on:click={theme.toggle}
          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {#if $theme === 'light'}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {/if}
        </button>

        <button
          on:click={() => mobileMenuOpen = !mobileMenuOpen}
          class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {#if mobileMenuOpen}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>

    {#if mobileMenuOpen}
      <div class="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-slide-down">
        <div class="flex flex-col gap-4">
          {#each navLinks as link}
            <a
              href={link.href}
              class="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 px-2 py-2"
              on:click|preventDefault={() => scrollToSection(link.href)}
            >
              {link.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
</header>

<style>
  header:not(.scrolled) {
    background: transparent;
  }

  header.scrolled {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    header.scrolled {
      background: rgba(23, 23, 29, 0.9);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
    }
  }
</style>