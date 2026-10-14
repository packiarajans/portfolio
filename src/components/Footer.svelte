<script lang="ts">
  import { theme } from '../stores/theme';

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigate: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      {label: 'Projects', href: '#projects' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/packiarajan-siva', external: true },
      { label: 'Email', href: 'mailto:p15rajan@gmail.com', external: false },
      { label: 'Phone', href: 'tel:+919886027591', external: false },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const icons: Record<string, string> = {
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    email: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/packiarajan-siva', icon: 'linkedin' },
    { name: 'Email', href: 'mailto:p15rajan@gmail.com', icon: 'email' },
    { name: 'Phone', href: 'tel:+919886027591', icon: 'phone' },
  ];
</script>

<footer class="bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>

  <div class="container py-12 lg:py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div class="lg:col-span-1">
        <a href="#hero" class="text-xl font-bold text-gray-900 dark:text-white block mb-4">Packiarajan Sivasubramanian</a>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          GIS & Geospatial Data Scientist | GeoAI Specialist | M.Tech Geoinformatics
        </p>
        <div class="flex gap-4">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-950/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {@html icons[social.icon]}
              </svg>
            </a>
          {/each}
        </div>
      </div>

      <nav aria-label="Navigation">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Navigate</h3>
        <ul class="space-y-3">
          {#each footerLinks.navigate as link}
            <li>
              <a
                href={link.href}
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <nav aria-label="Resources">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
        <ul class="space-y-3">
          {#each footerLinks.resources as link}
            <li>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
                {#if link.external}
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <nav aria-label="Legal">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
        <ul class="space-y-3">
          {#each footerLinks.legal as link}
            <li>
              <a
                href={link.href}
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <div class="pt-8 border-t border-gray-200 dark:border-gray-800">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} Portfolio. All rights reserved.
        </p>

        <div class="flex items-center gap-4">
          <button
            on:click={theme.toggle}
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-sm flex items-center gap-1"
            aria-label="Toggle dark mode"
          >
            {#if $theme === 'light'}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Dark
            {:else}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Light
            {/if}
          </button>

          <p class="text-xs text-gray-400 dark:text-gray-500">
            Built with Svelte 5 + Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>