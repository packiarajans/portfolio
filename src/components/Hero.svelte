<script lang="ts">
  import { onMount } from 'svelte';

  export let name = 'Your Name';
  export let title = 'GIS & Geospatial Data Scientist';
  export let description = 'Detail-oriented GIS professional with M.Tech Geoinformatics and 14+ years enterprise IT experience. Expert in ArcGIS Pro, QGIS, FME Workbench, PostGIS, remote sensing, UAV data processing, and spatial analysis.';

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/packiarajan-siva', icon: 'linkedin' },
    { name: 'Email', href: 'mailto:p15rajan@gmail.com', icon: 'email' },
    { name: 'Phone', href: 'tel:+919886027591', icon: 'phone' },
  ];

  const icons: Record<string, string> = {
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    email: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  };

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="hero" class="min-h-screen flex items-center justify-center pt-16 lg:pt-20 px-4">
  <div class="container">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="text-center lg:text-left animate-fade-in animate-delay-100">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 animate-slide-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Available for GIS internship / analyst roles
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-slide-up animate-delay-200">
          Hi, I&apos;m <span class="text-primary-600 dark:text-primary-400">{name}</span>
        </h1>

        <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4 animate-slide-up animate-delay-300">
          {title}
        </p>

        <p class="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up animate-delay-400">
          {description}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-up animate-delay-500">
          <a href="#projects" class="btn-primary w-full sm:w-auto">View Projects</a>
          <a href="#contact" class="btn-outline w-full sm:w-auto">Get In Touch</a>
        </div>

        <div class="flex items-center justify-center lg:justify-start gap-6 animate-fade-in animate-delay-500">
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

      <div class="relative animate-fade-in animate-delay-300" aria-hidden="true">
        <div class="relative aspect-square max-w-md mx-auto">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-purple-500/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
          <div class="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 shadow-2xl">
            <div class="space-y-4 font-mono text-sm">
              <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <pre class="text-gray-800 dark:text-gray-200 overflow-x-auto"><code>{`const geospatial = {
  name: "${name}",
  title: "${title}",
  stack: [
    "ArcGIS Pro",
    "QGIS",
    "PostGIS",
    "FME Workbench",
    "Python",
    "Remote Sensing",
  ],
  passion: "Spatial Intelligence & GeoAI"
};`}</code></pre>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div class="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div class="absolute -top-8 -right-8 w-48 h-48 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
          <img 
            src="/profile.png" 
            alt="Packiarajan Sivasubramanian" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow" aria-hidden="true">
    <svg class="w-6 h-6 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

<style>
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }

  @keyframes bounce-slow {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }

  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
</style>