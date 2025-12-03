<template>
  <section class="py-20 md:py-28 bg-pink-section">
    <div class="container">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
        Penetration Testing Internal VS External
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Internal Column -->
        <div class="bg-primary/20 rounded-xl overflow-hidden">
          <div class="bg-primary/40 px-6 py-4">
            <h3 class="text-xl font-bold text-white">{{ comparison.internal.title }}</h3>
          </div>
          <div class="p-6">
            <ul class="space-y-4">
              <li
                v-for="(item, index) in comparison.internal.items"
                :key="index"
                class="flex items-start gap-3 text-white/80"
              >
                <span class="flex-shrink-0 w-6 h-6 bg-primary/30 rounded-full flex items-center justify-center text-xs text-white">
                  {{ index + 1 }}
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- External Column -->
        <div class="bg-green-900/20 rounded-xl overflow-hidden">
          <div class="bg-green-700/40 px-6 py-4">
            <h3 class="text-xl font-bold text-white">{{ comparison.external.title }}</h3>
          </div>
          <div class="p-6">
            <ul class="space-y-4">
              <li
                v-for="(item, index) in comparison.external.items"
                :key="index"
                class="flex items-start gap-3 text-white/80"
              >
                <span class="flex-shrink-0 w-6 h-6 bg-green-700/30 rounded-full flex items-center justify-center text-xs text-white">
                  {{ index + 1 }}
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceComparison } from '@/types'

interface Props {
  comparison: ServiceComparison
}

defineProps<Props>()
</script>
