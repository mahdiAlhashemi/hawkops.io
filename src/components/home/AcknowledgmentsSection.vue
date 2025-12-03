<template>
  <section class="py-20 md:py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-pink-section"></div>
    <div class="absolute inset-0 cyber-grid opacity-10"></div>

    <div class="container relative z-10">
      <div class="text-center mb-14">
        <span class="section-subtitle">RECOGNITION</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-3">
          Acknowledgments
          <img
            src="/images/legends/rocket.png"
            alt=""
            class="w-8 h-8"
          />
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
</template>

<script setup lang="ts">
import MarqueeSlider from '@/components/shared/MarqueeSlider.vue'
import { acknowledgments } from '@/data/acknowledgments'
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
