<template>
  <section class="py-20 md:py-28">
    <div class="container">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
        Key Benefits
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="bg-dark-100 rounded-xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300"
        >
          <!-- Icon -->
          <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
            <img
              :src="benefit.icon"
              :alt="benefit.title"
              class="w-10 h-10 object-contain"
            />
          </div>

          <!-- Content -->
          <h3 class="text-lg font-bold text-white mb-3">
            {{ benefit.title }}
          </h3>
          <p class="text-white/60 text-sm leading-relaxed">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceBenefit } from '@/types'

interface Props {
  benefits: ServiceBenefit[]
}

defineProps<Props>()
</script>
