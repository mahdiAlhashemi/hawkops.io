<template>
  <section class="py-20 md:py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-pink-section"></div>
    <div class="absolute inset-0 cyber-grid opacity-10"></div>

    <div class="container relative z-10">
      <div class="text-center mb-14">
        <span class="section-subtitle">TRUSTED BY</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white">
          Our Clients
        </h2>
        <p class="text-white/50 mt-3 max-w-xl mx-auto">
          Trusted by leading organizations across the Middle East and beyond
        </p>
      </div>

      <MarqueeSlider :duration="25" :reverse="true">
        <div
          v-for="client in clients"
          :key="client.name"
          class="client-card"
        >
          <img
            :src="client.logo"
            :alt="client.name"
            class="client-logo"
          />
        </div>
      </MarqueeSlider>
    </div>
  </section>
</template>

<script setup lang="ts">
import MarqueeSlider from './MarqueeSlider.vue'
import { clients } from '@/data/clients'
</script>

<style scoped>
.client-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  padding: 1.25rem 1.5rem;
  margin: 0 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.client-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(176, 14, 57, 0.3);
  transform: translateY(-2px);
}

.client-logo {
  max-width: 100%;
  max-height: 45px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.client-card:hover .client-logo {
  opacity: 1;
  filter: brightness(0) invert(1);
}
</style>
