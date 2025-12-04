<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 md:pb-28 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-hero"></div>
      <div class="absolute inset-0 cyber-grid opacity-20"></div>

      <!-- Animated Orbs -->
      <div class="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 left-10 w-60 h-60 bg-accent/10 rounded-full blur-[100px]"></div>

      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-white/80">We're Here to Help</span>
          </span>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get in Touch with <span class="gradient-text">HawkOps</span>
          </h1>
          <p class="text-white/60 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
            Have questions or need support? Our team of cybersecurity experts is here to help. Reach out to us for comprehensive solutions tailored to your needs.
          </p>

          <!-- Contact Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <!-- Email -->
            <a
              :href="`mailto:${contactInfo.email}`"
              class="group cyber-card rounded-2xl p-8 text-center"
            >
              <div class="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img src="/images/icons/sms.svg" alt="Email" class="w-8 h-8" />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p class="text-white/60 group-hover:text-accent transition-colors">{{ contactInfo.email }}</p>
            </a>

            <!-- Phone -->
            <div class="cyber-card rounded-2xl p-8 text-center">
              <div class="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img src="/images/icons/call.svg" alt="Phone" class="w-8 h-8" />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Call Us</h3>
              <div class="space-y-3">
                <div>
                  <span class="text-xs text-primary font-medium">UAE</span>
                  <p class="text-white/60">
                    <a :href="`tel:${contactInfo.phones[0]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[0] }}</a><br />
                    <a :href="`tel:${contactInfo.phones[1]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[1] }}</a>
                  </p>
                </div>
                <div>
                  <span class="text-xs text-primary font-medium">Iraq</span>
                  <p class="text-white/60">
                    <a :href="`tel:${contactInfo.phones[2]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[2] }}</a><br />
                    <a :href="`tel:${contactInfo.phones[3]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[3] }}</a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="cyber-card rounded-2xl p-8 text-center">
              <div class="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img src="/images/icons/location.svg" alt="Location" class="w-8 h-8" />
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p class="text-white/60 whitespace-pre-line">
                {{ contactInfo.locations[0] }}
                <br />
                {{ contactInfo.locations[1] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 md:py-28 bg-dark-100">
      <div class="container">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <!-- Form -->
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Request a <span class="gradient-text">Free Consultation</span>
              </h2>
              <p class="text-white/60 mb-8">
                Fill out the form below and our security experts will get back to you within 24 hours.
              </p>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-2">Full Name *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-2">Company Name</label>
                    <input
                      v-model="form.company"
                      type="text"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-2">Email Address *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-white/80 mb-2">Service Interested In *</label>
                  <select v-model="form.service" required class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [&>option]:bg-dark [&>option]:text-white">
                    <option value="" disabled>Select a service</option>
                    <option value="web-pentest">Web Application Penetration Testing</option>
                    <option value="mobile-pentest">Mobile Application Penetration Testing</option>
                    <option value="infrastructure-pentest">Infrastructure Penetration Testing</option>
                    <option value="code-review">Secure Code Review</option>
                    <option value="red-team">Red Team Operations</option>
                    <option value="dark-web">Dark Web Monitoring & Threat Intelligence</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-white/80 mb-2">Project Details *</label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your security needs, project scope, or any specific requirements..."
                  ></textarea>
                </div>

                <div class="flex items-start gap-3">
                  <input
                    v-model="form.consent"
                    type="checkbox"
                    required
                    class="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                  />
                  <label class="text-sm text-white/60">
                    I agree to the <router-link to="/privacy-policy" class="text-primary hover:text-accent">Privacy Policy</router-link> and consent to HawkOps processing my data.
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                  <svg v-if="!isSubmitting" class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>

                <!-- Success Message -->
                <div v-if="submitSuccess" class="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm">
                  Thank you for your message! Our team will contact you within 24 hours. A confirmation email has been sent to your inbox.
                </div>

                <!-- Error Message -->
                <div v-if="submitError" class="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                  {{ submitError }}
                </div>
              </form>
            </div>

            <!-- Right Side Info -->
            <div class="space-y-8">
              <!-- Why Choose Us -->
              <div class="cyber-card rounded-2xl p-8">
                <h3 class="text-xl font-bold text-white mb-6">Why Choose HawkOps?</h3>
                <ul class="space-y-4">
                  <li class="flex items-start gap-4">
                    <span class="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h4 class="text-white font-medium">12+ Years Experience</h4>
                      <p class="text-white/50 text-sm">Trusted by enterprises across the Middle East</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <span class="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15C15.866 15 19 11.866 19 8V3H5V8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8.5 21H15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M12 15V21" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </span>
                    <div>
                      <h4 class="text-white font-medium">Certified Experts</h4>
                      <p class="text-white/50 text-sm">OSCP, OSCE, OSEP, CRTO, CRTL certified team</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <span class="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M2 12H22" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </span>
                    <div>
                      <h4 class="text-white font-medium">Global Recognition</h4>
                      <p class="text-white/50 text-sm">Acknowledged by Google, Microsoft, Apple & more</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <span class="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h4 class="text-white font-medium">Fast Turnaround</h4>
                      <p class="text-white/50 text-sm">Quick assessments without compromising quality</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Business Hours -->
              <div class="cyber-card rounded-2xl p-8">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span class="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </span>
                  Business Hours
                </h3>
                <ul class="space-y-3 text-white/60">
                  <li class="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span class="text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span class="text-white/40">Closed</span>
                  </li>
                </ul>
              </div>

              <!-- Emergency Contact -->
              <div class="cyber-card rounded-2xl p-8 border-primary/30 bg-primary/5">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span class="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                      <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </span>
                  Security Emergency?
                </h3>
                <p class="text-white/60 mb-4">
                  If you're experiencing an active security incident, contact us immediately.
                </p>
                <a
                  :href="`tel:${contactInfo.phones[0]?.replace(/\s/g, '')}`"
                  class="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.98C20.63 21.01 20.26 21.01 19.89 21C8.94 20.44 0 11.5 0 0.54C0 0.24 0.24 0 0.54 0H3.54C4.04 0 4.45 0.39 4.5 0.89C4.54 1.39 4.62 1.89 4.75 2.36C4.89 2.87 4.74 3.41 4.35 3.76L2.65 5.46C4.54 8.94 7.24 11.64 10.72 13.53L12.42 11.83C12.77 11.44 13.31 11.29 13.82 11.43C14.29 11.56 14.79 11.64 15.29 11.68C15.79 11.73 16.18 12.14 16.18 12.64V16.92C16.18 17.42 16.58 17.84 17.08 17.89C17.45 17.92 17.82 17.94 18.19 17.94C18.39 17.94 18.59 17.93 18.79 17.92C19.26 17.87 19.72 17.78 20.16 17.66C20.67 17.52 21.21 17.67 21.56 18.02L22 18.46V16.92Z" fill="currentColor"/>
                  </svg>
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheSeparator />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useSeo, seoConfigs } from '@/composables/useSeo'
import TheSeparator from '@/components/layout/TheSeparator.vue'
import { contactInfo } from '@/data/contact'

useSeo(seoConfigs.contact)

const API_URL = import.meta.env.VITE_API_URL || 'https://api.hawkops.io'

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  consent: false
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = ''

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message')
    }

    submitSuccess.value = true

    // Reset form
    Object.assign(form, {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      consent: false
    })
  } catch (error) {
    console.error('Contact form error:', error)
    submitError.value = error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly at info@hawkops.io'

    // Fallback to mailto if API fails
    const subject = encodeURIComponent(`[Website Inquiry] ${form.service} - ${form.company || form.name}`)
    const body = encodeURIComponent(`
Name: ${form.name}
Company: ${form.company || 'N/A'}
Email: ${form.email}
Phone: ${form.phone || 'N/A'}
Service: ${form.service}

Message:
${form.message}
    `.trim())

    // Open mailto as fallback
    if (confirm('Would you like to send the message via email instead?')) {
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

