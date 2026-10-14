<script lang="ts">
  export let bio = `Detail-oriented GIS professional pursuing an M.Tech in Geoinformatics (University of Madras) with hands-on expertise in ArcGIS Pro, QGIS, FME Workbench, and PostGIS. Combines spatial analysis, remote sensing, and UAV data processing with 14+ years of enterprise IT experience in cloud infrastructure and data management. Skilled in LULC classification, ETL workflows, and geospatial visualization.`;

  const skills = [
    { category: 'GIS Platforms', items: ['ArcGIS Pro', 'ArcMap', 'QGIS', 'SAGA'] },
    { category: 'Remote Sensing', items: ['Sentinel (Optical & SAR)', 'Landsat', 'Microwave SAR', 'UAV Data Processing'] },
    { category: 'Spatial Analysis', items: ['Buffer', 'Overlay', 'Network Analysis', 'Interpolation', 'Spatial Join'] },
    { category: 'Data Processing', items: ['Georeferencing', 'Digitization', 'Ortho-mosaic Creation'] },
    { category: 'ETL & Automation', items: ['FME Workbench', 'Python Scripting'] },
    { category: 'Classification & Modelling', items: ['LULC Classification', 'Biomass Estimation', 'Crop Yield Analysis'] },
    { category: 'Databases', items: ['PostgreSQL', 'PostGIS', 'Neo4j'] },
    { category: 'Programming', items: ['Python', 'SQL', 'R (spatial analysis)'] },
    { category: 'Cloud Platforms', items: ['AWS', 'Azure'] },
    { category: 'Data Formats', items: ['Shapefile', 'GeoJSON', 'KML', 'TIFF', 'Raster', 'Vector', 'Point Cloud'] },
  ];

  const stats = [
    { value: '14+', label: 'Years IT Experience' },
    { value: 'M.Tech', label: 'Geoinformatics (Pursuing)' },
    { value: 'M.Sc', label: 'Data Science' },
    { value: '10+', label: 'Certifications' },
  ];

  const experience = [
    {
      role: 'Senior Infrastructure Architect',
      company: 'Cognizant Technology Solutions',
      period: '2008–2022',
      location: 'USA (2008–2011) | India (2011–2022)',
      highlights: [
        'Led pre-sales and RFP/RFI responses for cloud infrastructure solutions',
        'Designed IaaS solutions across AWS and Azure for enterprise clients',
        'Managed workload migration ensuring zero downtime and data integrity',
      ],
    },
    {
      role: 'Member Technical Staff',
      company: 'Sunrise Systems Inc., USA',
      period: '2006–2008',
      location: '',
      highlights: [
        'Designed SAN/NAS and enterprise backup systems for large-scale workloads',
      ],
    },
    {
      role: 'Storage Consultant',
      company: 'UBS Singapore (via Perot Systems)',
      period: '2004–2006',
      location: '',
      highlights: [
        'Managed SAN/NAS and disaster recovery systems ensuring high availability',
      ],
    },
  ];

  const education = [
    { degree: 'M.Tech Geoinformatics', institution: 'University of Madras, Chennai', period: '2025–2027 (Pursuing)' },
    { degree: 'M.Sc. Data Science', institution: 'Chandigarh University', period: '2023–2025 | CGPA: 7.1' },
    { degree: 'B.Sc. Mathematics & Chemistry', institution: 'Madurai Kamaraj University', period: '1981–1984' },
  ];

  const certifications = [
    'Mastering Geospatial Analysis with QGIS – Coursera',
    'Data Analysis with R Programming – Google/Coursera',
    'Database Design & SQL in PostgreSQL – Coursera',
    'FME Essentials – Udemy',
  ];
</script>

<section id="about" class="section bg-gray-50 dark:bg-gray-950/50" aria-labelledby="about-heading">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 id="about-heading" class="section-title">About Me</h2>
      <p class="section-subtitle mx-auto">GIS & Geospatial Data Scientist / GeoAI</p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 mb-16">
      <div class="lg:col-span-2 animate-slide-up">
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{bio}</p>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            With 14+ years of enterprise IT experience spanning cloud infrastructure, storage architecture, and data management across Cognizant, Sunrise Systems, and UBS Singapore, I bring a unique combination of geospatial domain expertise and large-scale systems engineering. Currently pursuing M.Tech Geoinformatics at University of Madras (2025-2027) and hold an M.Sc. in Data Science from Chandigarh University.
          </p>
        </div>
      </div>

      <div class="animate-slide-up animate-delay-200">
        <div class="card p-6 h-full">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Competencies</h3>
          <ul class="space-y-3">
            {#each [
              'Geospatial Analysis & Visualization',
              'Remote Sensing & UAV Processing',
              'Spatial Modelling & LULC Classification',
              'ETL Automation with FME & Python',
              'Cloud Infrastructure (AWS/Azure)',
              'PostgreSQL/PostGIS Database Design',
            ] as item}
              <li class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {item}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {#each stats as stat, index}
        <div class="card p-6 text-center animate-scale-in" style="animation-delay: calc({index * 100}ms);">
          <div class="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
          <div class="text-gray-600 dark:text-gray-400">{stat.label}</div>
        </div>
      {/each}
    </div>

    <div class="animate-slide-up mb-16">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each skills as skill, index}
          <div class="card p-6 animate-scale-in" style="animation-delay: calc({index * 100}ms);">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-950/30 flex items-center justify-center">
                <svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              {skill.category}
            </h4>
            <ul class="space-y-2">
              {#each skill.items as item}
                <li class="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <div class="animate-slide-up mb-16">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Experience</h3>
      <div class="space-y-6 max-w-3xl mx-auto">
        {#each experience as exp, index}
          <div class="card p-6 animate-slide-up" style="animation-delay: calc({index * 150}ms);">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                <p class="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400 text-right sm:text-left">
                <p>{exp.period}</p>
                {#if exp.location}
                  <p>{exp.location}</p>
                {/if}
              </div>
            </div>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              {#each exp.highlights as highlight}
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {highlight}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <div class="animate-slide-up mb-16">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {#each education as edu, index}
          <div class="card p-6 animate-scale-in text-center" style="animation-delay: calc({index * 100}ms);">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
            <p class="text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
            <p class="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="animate-slide-up">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications</h3>
      <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {#each certifications as cert, index}
          <div class="card p-4 animate-scale-in" style="animation-delay: calc({index * 100}ms);">
            <p class="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {cert}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>