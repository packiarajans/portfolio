<script lang="ts">
  export let posts = [
    {
      id: 1,
      title: 'Building an Integrated WebGIS Platform for Wildlife Conservation',
      excerpt: 'How we developed an interactive WebGIS platform for plant species mapping in Sathyamangalam Tiger Reserve using React, PostGIS, GeoServer, and Leaflet.',
      date: '2026-01-15',
      readTime: '10 min read',
      category: 'GIS Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      slug: 'integrated-webgis-platform-wildlife-conservation',
    },
    {
      id: 2,
      title: 'Flood Risk Zonation Using Weighted Overlay Analysis in ArcGIS Pro',
      excerpt: 'Step-by-step guide to creating flood risk maps for Cuddalore District using DEM, LULC, soil, slope, and rainfall data with weighted overlay analysis.',
      date: '2025-06-20',
      readTime: '12 min read',
      category: 'Spatial Analysis',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=450&fit=crop',
      slug: 'flood-risk-zonation-weighted-overlay-analysis',
    },
    {
      id: 3,
      title: 'Automating Geospatial Workflows with FME Workbench',
      excerpt: 'Learn how to build efficient ETL pipelines for spatial data processing, transformation, and automation using FME Workbench.',
      date: '2025-03-10',
      readTime: '8 min read',
      category: 'ETL & Automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      slug: 'automating-geospatial-workflows-fme-workbench',
    },
    {
      id: 4,
      title: 'Remote Sensing Data Processing: From Sentinel to Insights',
      excerpt: 'A comprehensive guide to processing Sentinel-1 SAR and Sentinel-2 optical data for LULC classification and change detection.',
      date: '2024-11-05',
      readTime: '15 min read',
      category: 'Remote Sensing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      slug: 'remote-sensing-sentinel-data-processing',
    },
    {
      id: 5,
      title: 'Customer Churn Prediction with Logistic Regression',
      excerpt: 'Building a predictive model for customer churn using scikit-learn, achieving 81% accuracy with proper feature engineering and EDA.',
      date: '2024-08-15',
      readTime: '10 min read',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
      slug: 'customer-churn-prediction-logistic-regression',
    },
    {
      id: 6,
      title: 'Transitioning from Enterprise IT to Geospatial Data Science',
      excerpt: 'My journey from 14 years in cloud infrastructure at Cognizant to pursuing M.Tech Geoinformatics and building GIS applications.',
      date: '2024-05-20',
      readTime: '6 min read',
      category: 'Career',
      image: '/transition.jpg',
      slug: 'transition-enterprise-it-geospatial-data-science',
    },
  ];

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
</script>

<section id="blog" class="section bg-gray-50 dark:bg-gray-950/50" aria-labelledby="blog-heading">
  <div class="container">
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
      <div>
        <h2 id="blog-heading" class="section-title">Blog & Articles</h2>
        <p class="section-subtitle mt-2">Technical articles on GIS, Remote Sensing, and Data Science</p>
      </div>
      <a href="/blog" class="btn-outline self-start">View All Posts</a>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each posts as post, index}
        <article class="card group animate-slide-up" style="animation-delay: calc({index * 100}ms);">
          <div class="relative aspect-video overflow-hidden">
            <img
              src={post.image}
              alt=""
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="px-2.5 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-300 rounded-full">
                {post.category}
              </span>
              <time class="text-xs text-gray-500 dark:text-gray-400" datetime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>

            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
              {post.title}
            </h3>

            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
              <span class="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
              <a
                href={`/blog/${post.slug}`}
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1"
              >
                Read more
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>