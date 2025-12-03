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
            <span class="text-sm font-medium text-white/80">Our Story</span>
          </span>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            About <span class="gradient-text">HawkOps</span>
          </h1>
          <p class="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our company stands out with a team boasting over 12 years of extensive experience in cybersecurity services. We began our journey in collaboration with distinguished local Iraqi talents, leveraging high-quality local resources in cybersecurity and software development. We have successfully achieved remarkable milestones with numerous local and international companies alike.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 relative">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="cyber-card rounded-2xl p-6 text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">12+</div>
            <div class="text-white/50 text-sm">Years Experience</div>
          </div>
          <div class="cyber-card rounded-2xl p-6 text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
            <div class="text-white/50 text-sm">Vulnerabilities Found</div>
          </div>
          <div class="cyber-card rounded-2xl p-6 text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
            <div class="text-white/50 text-sm">Happy Clients</div>
          </div>
          <div class="cyber-card rounded-2xl p-6 text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div class="text-white/50 text-sm">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>

    <TheSeparator />

    <!-- Acknowledgments Section -->
    <section class="py-20 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-pink-section"></div>
      <div class="absolute inset-0 cyber-grid opacity-10"></div>

      <div class="container relative z-10">
        <div class="text-center mb-14">
          <span class="section-subtitle">RECOGNITION</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-3">
            Acknowledgments
            <img src="/images/legends/rocket.png" alt="" class="w-8 h-8" />
          </h2>
          <p class="text-white/50 mt-4 max-w-2xl mx-auto">
            Our team members have been rewarded and acknowledged by the following companies after reporting security vulnerabilities in their products.
          </p>
        </div>

        <MarqueeSlider :duration="30">
          <div
            v-for="ack in acknowledgments"
            :key="ack.name"
            class="logo-card"
          >
            <img
              :src="ack.logo"
              :alt="ack.name"
              class="logo-image"
            />
          </div>
        </MarqueeSlider>
      </div>
    </section>

    <TheSeparator />

    <ClientsSlider />
  </div>
</template>

<script setup lang="ts">
import { useSeo, seoConfigs } from '@/composables/useSeo'
import TheSeparator from '@/components/layout/TheSeparator.vue'
import MarqueeSlider from '@/components/shared/MarqueeSlider.vue'
import ClientsSlider from '@/components/shared/ClientsSlider.vue'
import { acknowledgments } from '@/data/acknowledgments'

useSeo(seoConfigs.about)
</script>

<style scoped>
.logo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 80px;
  padding: 1rem 1.5rem;
  margin: 0 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.logo-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(176, 14, 57, 0.3);
}

.logo-image {
  max-width: 100%;
  max-height: 40px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.logo-card:hover .logo-image {
  opacity: 1;
  filter: brightness(0) invert(1);
}
</style>
