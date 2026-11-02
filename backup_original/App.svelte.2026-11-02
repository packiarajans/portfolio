<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from './stores/theme';
  import Navigation from './components/Navigation.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import Blog from './components/Blog.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';

  let scrolled = false;
  let activeSection = '';

  onMount(() => {
    theme.init();

    function handleScroll() {
      scrolled = window.scrollY > 20;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="min-h-screen bg-white dark:bg-gray-950">
  <Navigation bind:scrolled bind:activeSection />

  <main id="main-content">
    <Hero
      name="Packiarajan Sivasubramanian"
      title="GIS & Geospatial Data Scientist / GeoAI"
      description="Detail-oriented GIS professional with M.Tech Geoinformatics and 14+ years enterprise IT experience. Expert in ArcGIS Pro, QGIS, FME Workbench, PostGIS, remote sensing, UAV data processing, and spatial analysis. Combining geospatial intelligence with cloud infrastructure expertise."
    />

    <About
      bio="Detail-oriented GIS professional pursuing an M.Tech in Geoinformatics (University of Madras) with hands-on expertise in ArcGIS Pro, QGIS, FME Workbench, and PostGIS. Combines spatial analysis, remote sensing, and UAV data processing with 14+ years of enterprise IT experience in cloud infrastructure and data management. Skilled in LULC classification, ETL workflows, and geospatial visualization."
    />

    <Projects />

    <Blog />

    <Contact />
  </main>

  <Footer />
</div>