<template>
  <section class="py-20 md:py-28">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left - Shield Image -->
        <div class="flex justify-center lg:justify-start">
          <img
            src="/images/global/sheild-image.png"
            alt="Security Shield"
            class="w-full max-w-md"
          />
        </div>

        <!-- Right - Content -->
        <div>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Certified Professionals
          </h2>
          <p class="text-white/70 text-lg mb-8">
            We at HawkOps are proud of our distinguished and specialized team in the field of cybersecurity. Our team has more than 12 years of experience, having worked in the largest local and international companies, and has discovered vulnerabilities in more than 100 companies around the world.
          </p>

          <!-- Certification Badges -->
          <div class="grid grid-cols-3 sm:grid-cols-5 gap-4">
            <div
              v-for="cert in certifications"
              :key="cert.name"
              class="cert-badge"
            >
              <img
                :src="cert.image"
                :alt="cert.name"
                class="cert-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { certifications } from '@/data/certifications'
</script>

<style scoped>
.cert-badge {
  background: rgba(34, 30, 36, 0.8);
  border-radius: 0.5rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  aspect-ratio: 1;
}

.cert-badge:hover {
  border-color: rgba(176, 14, 57, 0.3);
  transform: translateY(-2px);
}

.cert-image {
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 60px;
  object-fit: contain;
}
</style>
