<template>
  <section class="py-24 md:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-pink-section"></div>
    <div class="absolute inset-0 cyber-grid opacity-20"></div>

    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span class="section-subtitle">OUR SERVICES</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Protecting Your Digital <br class="hidden md:block" /> Assets Expertly
          </h2>
        </div>
        <router-link
          to="/services"
          class="group inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors font-medium"
        >
          View all services
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <router-link
          v-for="(service, index) in displayedServices"
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
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { services } from '@/data/services'

// Display only the first 4 services
const displayedServices = computed(() => services.slice(0, 4))
</script>
