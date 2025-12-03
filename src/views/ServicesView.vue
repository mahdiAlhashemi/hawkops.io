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
            <span class="text-sm font-medium text-white/80">Professional Security Services</span>
          </span>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive Cybersecurity <br class="hidden md:block" /> Solutions by <span class="gradient-text">HawkOps</span>
          </h1>
          <p class="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            HawkOps provides a comprehensive range of cybersecurity services focused on protecting your digital infrastructure and electronic networks.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 md:py-28 relative">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <router-link
            v-for="(service, index) in services"
            :key="service.id"
            :to="`/${service.slug}`"
            class="group cyber-card rounded-2xl p-7 lg:p-8"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Top Row -->
            <div class="flex items-start justify-between mb-6">
              <!-- Icon -->
              <div class="icon-container w-16 h-16 rounded-2xl flex items-center justify-center">
                <img
                  :src="service.icon"
                  :alt="service.title"
                  class="w-10 h-10 object-contain"
                />
              </div>

              <!-- Arrow Icon -->
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 group-hover:border-primary/30 group-hover:bg-primary/10">
                <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-4">
              {{ service.shortDescription }}
            </p>

            <!-- Learn More Link -->
            <span class="inline-flex items-center gap-2 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
              Learn more
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </router-link>
        </div>
      </div>
    </section>

    <TheSeparator />

    <ContactBox />
  </div>
</template>

<script setup lang="ts">
import { useSeo, seoConfigs } from '@/composables/useSeo'
import TheSeparator from '@/components/layout/TheSeparator.vue'
import ContactBox from '@/components/shared/ContactBox.vue'
import { services } from '@/data/services'

useSeo(seoConfigs.services)
</script>
