<script lang="ts">
  import { onMount } from 'svelte';

  let formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  let errors: Partial<typeof formData> = {};
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';

  function validateForm(): boolean {
    errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();

    if (!validateForm()) return;

    isSubmitting = true;
    submitStatus = 'idle';

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, you would send the data to your backend here
    console.log('Form submitted:', formData);

    // Reset form
    formData = { name: '', email: '', subject: '', message: '' };
    submitStatus = 'success';
    isSubmitting = false;

    // Reset status after 5 seconds
    setTimeout(() => {
      submitStatus = 'idle';
    }, 5000);
  }

  const contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'p15rajan@gmail.com',
      href: 'mailto:p15rajan@gmail.com',
    },
    {
      icon: 'linkedin',
      title: 'LinkedIn',
      value: 'packiarajan-siva',
      href: 'https://linkedin.com/in/packiarajan-siva',
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+91 98860 27591',
      href: 'tel:+919886027591',
    },
    {
      icon: 'location',
      title: 'Location',
      value: 'Chennai, India',
      href: '#',
    },
  ];

  const icons: Record<string, string> = {
    email: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    location: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  };
</script>

<section id="contact" class="section" aria-labelledby="contact-heading">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 id="contact-heading" class="section-title">Get In Touch</h2>
      <p class="section-subtitle mx-auto">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
      <div class="animate-slide-up">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Start a Conversation</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Whether you have a question about my work, want to collaborate on a project, or just want to connect, feel free to reach out. I typically respond within 24-48 hours.
        </p>

        <div class="space-y-6 mb-8">
          {#each contactInfo as contact}
            <a
              href={contact.href}
              class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-200 group"
            >
              <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950/30 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-200">
                <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {@html icons[contact.icon]}
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{contact.title}</p>
                <p class="text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">{contact.value}</p>
              </div>
            </a>
          {/each}
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="https://linkedin.com/in/packiarajan-siva" target="_blank" rel="noopener noreferrer" class="btn-outline">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:p15rajan@gmail.com" class="btn-outline">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>
        </div>
      </div>

      <div class="animate-slide-up animate-delay-200">
        <div class="card p-6 lg:p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

          {#if submitStatus === 'success'}
            <div class="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 animate-slide-down">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <p class="text-green-800 dark:text-green-200">Thanks for reaching out! I'll get back to you soon.</p>
              </div>
            </div>
          {/if}

          <form on:submit={handleSubmit} class="space-y-6" novalidate>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="label">Name</label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  class="input"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  disabled={isSubmitting}
                />
                {#if errors.name}
                  <p id="name-error" class="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">{errors.name}</p>
                {/if}
              </div>

              <div>
                <label for="email" class="label">Email</label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  class="input"
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  disabled={isSubmitting}
                />
                {#if errors.email}
                  <p id="email-error" class="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">{errors.email}</p>
                {/if}
              </div>
            </div>

            <div>
              <label for="subject" class="label">Subject</label>
              <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                class="input"
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                disabled={isSubmitting}
              />
              {#if errors.subject}
                <p id="subject-error" class="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">{errors.subject}</p>
              {/if}
            </div>

            <div>
              <label for="message" class="label">Message</label>
              <textarea
                id="message"
                bind:value={formData.message}
                rows={5}
                class="input resize-none"
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                disabled={isSubmitting}
              ></textarea>
              {#if errors.message}
                <p id="message-error" class="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">{errors.message}</p>
              {/if}
            </div>

            <button
              type="submit"
              class="btn-primary w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {#if isSubmitting}
                <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>