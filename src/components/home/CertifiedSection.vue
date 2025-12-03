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
              class="bg-dark-100 rounded-lg p-3 flex items-center justify-center border border-white/5 hover:border-primary/20 transition-colors"
            >
              <img
                :src="cert.image"
                :alt="cert.name"
                class="h-10 w-auto object-contain"
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
