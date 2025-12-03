<template>
  <section class="py-20 md:py-28 bg-pink-section">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left Content -->
        <div>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            {{ title }}
          </h2>
          <p class="text-white/70 text-lg mb-8">
            {{ description }}
          </p>
          <GradientButton to="/contact">
            Contact Us
          </GradientButton>
        </div>

        <!-- Right - Points List -->
        <div class="space-y-6">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex items-start gap-4"
          >
            <div class="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
              {{ index + 1 }}
            </div>
            <p class="text-white/80 leading-relaxed pt-2">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GradientButton from '@/components/common/GradientButton.vue'

interface Props {
  title: string
  description: string
  items: string[]
}

defineProps<Props>()
</script>
