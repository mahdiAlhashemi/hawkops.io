<template>
  <section class="py-24 md:py-32 relative">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="section-subtitle">CHOOSE US</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Why Choose <span class="gradient-text">HawkOps</span>
        </h2>
        <p class="text-white/60 mt-4 max-w-2xl mx-auto">
          We combine expertise, innovation, and dedication to deliver exceptional cybersecurity solutions
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group cyber-card rounded-2xl p-8 text-center hover:text-left transition-all duration-500"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <!-- Icon -->
          <div class="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:mx-0 transition-all duration-500">
            <img
              :src="feature.icon"
              :alt="feature.title"
              class="w-10 h-10 object-contain"
            />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
            {{ feature.title }}
          </h3>
          <p class="text-white/60 text-sm leading-relaxed">
            {{ feature.description }}
          </p>

          <!-- Decorative Line -->
          <div class="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { features } from '@/data/features'
</script>
