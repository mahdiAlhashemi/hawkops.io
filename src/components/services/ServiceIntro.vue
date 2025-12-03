<template>
  <section class="relative pt-32 pb-20 md:pb-28 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-hero"></div>
    <div class="absolute inset-0 cyber-grid opacity-20"></div>

    <!-- Animated Orbs -->
    <div class="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-0 left-10 w-60 h-60 bg-accent/10 rounded-full blur-[100px]"></div>

    <div class="container relative z-10">
      <!-- Back Link -->
      <div class="mb-10">
        <BackLink to="/services" label="Back to Services" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            {{ title }}
          </h1>
          <p class="text-white/60 text-lg leading-relaxed whitespace-pre-line">
            {{ description }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-start gap-4 mt-10">
            <router-link
              to="/contact"
              class="group inline-flex items-center gap-3 cyber-btn text-white px-8 py-4 rounded-full font-semibold"
            >
              <span class="relative z-10">Get a Quote</span>
              <svg class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Right - Hero Image -->
        <div v-if="heroImage" class="hidden lg:flex justify-center relative">
          <!-- Glow Effect -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          </div>
          <img
            :src="heroImage"
            :alt="title"
            class="relative w-full max-w-md object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BackLink from '@/components/common/BackLink.vue'

interface Props {
  title: string
  description: string
  heroImage?: string
}

defineProps<Props>()
</script>
