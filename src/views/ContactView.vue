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

    <!-- Additional Info Section -->
    <section class="py-20 md:py-28">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <!-- Response Time -->
            <div class="cyber-card rounded-2xl p-8">
              <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                Quick Response
              </h3>
              <p class="text-white/60 leading-relaxed">
                Our team typically responds within <span class="text-accent font-semibold">24 hours</span> on business days. For urgent security matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheSeparator />
  </div>
</template>

<script setup lang="ts">
import { useSeo, seoConfigs } from '@/composables/useSeo'
import TheSeparator from '@/components/layout/TheSeparator.vue'
import { contactInfo } from '@/data/contact'

useSeo(seoConfigs.contact)
</script>
