<script lang="ts">
  export let projects = [
    {
      id: 0,
      title: 'GeoSense Agent 2.0 – Site Scorer',
      description: 'Multi-phase ML + geospatial pipeline that rates any latitude/longitude for risk and opportunity. Features include distance to road, distance to hospital and DEM-derived flood risk, modelled with Random Forest and XGBoost with SHAP explanations on a PostGIS backend. City-generic, single-command pipeline; first applied to Chennai and Indian cities.',
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%230c4a6e'/><stop offset='1' stop-color='%236366f1'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g)'/><g stroke='%23ffffff' stroke-opacity='.15'><path d='M0 60H800'/><path d='M0 120H800'/><path d='M0 180H800'/><path d='M0 240H800'/><path d='M0 300H800'/><path d='M0 360H800'/><path d='M0 420H800'/><path d='M0 480H800'/><path d='M0 540H800'/><path d='M80 0V600'/><path d='M160 0V600'/><path d='M240 0V600'/><path d='M320 0V600'/><path d='M400 0V600'/><path d='M480 0V600'/><path d='M560 0V600'/><path d='M640 0V600'/><path d='M720 0V600'/></g><circle cx='400' cy='280' r='110' fill='%23ffffff' fill-opacity='.12'/><path d='M400 170c-45 0-80 35-80 80 0 60 80 150 80 150s80-90 80-150c0-45-35-80-80-80z' fill='%23ffffff'/><circle cx='400' cy='250' r='30' fill='%236366f1'/></svg>",
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'PostGIS', 'FME Workbench'],
      github: 'https://github.com/packiarajans/geosense-agent-2',
      demo: '#',
      featured: true,
      category: 'GeoAI Project',
      year: '2026',
    },
    {
      id: 1,
      title: 'Integrated WebGIS Platform – Sathyamangalam Tiger Reserve',
      description: 'Built an interactive WebGIS for plant species mapping and survey tracking. Designed KPI dashboards with progress charts and plant inventory tables. Validated the platform through a trial field survey in Salem District.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['React.js', 'PostGIS', 'GeoServer', 'Leaflet', 'Python'],
      github: '#',
      demo: '#',
      featured: true,
      category: 'GIS Project',
      year: '2026',
    },
    {
      id: 2,
      title: 'Flood Risk Zonation – Cuddalore District',
      description: 'Applied Weighted Overlay Analysis using DEM, LULC, soil, slope, and rainfall data. Produced thematic maps classifying zones from Low to Very High flood risk. Delivered a stakeholder report with recommendations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['ArcGIS Pro', 'Python (arcpy)', 'DEM', 'LULC', 'Weighted Overlay'],
      github: '#',
      demo: '#',
      featured: true,
      category: 'GIS Project',
      year: '2025',
    },
    {
      id: 3,
      title: 'Customer Churn Prediction',
      description: 'Built a Logistic Regression model with 81% accuracy and 0.85 F1-score. Applied EDA and feature engineering on large datasets to identify key churn factors.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Python', 'Scikit-learn', 'Logistic Regression', 'EDA', 'Feature Engineering'],
      github: 'https://github.com/packiarajans/ML-Projects/tree/Hadoop/Telecom%20Churn%20Project',
      demo: '#',
      featured: false,
      category: 'AI/ML Project',
      year: '2024',
    },
    {
      id: 4,
      title: 'Traffic Signal Detection',
      description: 'Developed a CNN model for smart-city GIS applications. Evaluated with precision, recall, and cross-validation metrics for traffic signal recognition.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
      tags: ['TensorFlow', 'Keras', 'Python', 'CNN', 'Computer Vision'],
      github: 'https://github.com/packiarajans/ML-Projects/tree/Hadoop/Traffice%20Signal%20Detection',
      demo: '#',
      featured: false,
      category: 'AI/ML Project',
      year: '2023',
    },
  ];
</script>

<section id="projects" class="section" aria-labelledby="projects-heading">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 id="projects-heading" class="section-title">Featured Projects</h2>
      <p class="section-subtitle mx-auto">GIS, Remote Sensing & AI/ML Projects</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {#each projects as project, index}
        <article class="card group animate-slide-up" style="animation-delay: calc({index * 100}ms);">
          <div class="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt=""
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-4 left-4 flex flex-col gap-2">
              {#if project.featured}
                <span class="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">Featured</span>
              {/if}
              <span class="px-2.5 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">{project.category}</span>
              <span class="px-2.5 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">{project.year}</span>
            </div>
          </div>

          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tags as tag}
                <span class="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">{tag}</span>
              {/each}
            </div>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
              {project.title}
            </h3>

            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            <div class="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              {#if project.github && project.github !== '#'}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              {/if}
              {#if project.demo && project.demo !== '#'}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </a>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="text-center mt-12 animate-fade-in animate-delay-500">
      <a href="/projects" class="btn-outline">View All Projects</a>
    </div>
  </div>
</section>