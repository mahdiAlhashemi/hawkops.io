<template>
  <section class="py-20 md:py-28 bg-pink-section">
    <div class="container">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
        Our Red Teaming Methodology
      </h2>

      <!-- Phase Navigation -->
      <div class="flex justify-center gap-4 mb-8">
        <button
          v-for="(phase, index) in phases"
          :key="phase.title"
          @click="activePhase = index"
          class="px-6 py-3 rounded-full font-semibold transition-all duration-300"
          :class="activePhase === index
            ? 'bg-gradient-primary text-white'
            : 'bg-dark-100 text-white/70 hover:text-white hover:bg-dark-100/80'"
        >
          {{ phase.title }}
        </button>
      </div>

      <!-- Phase Content -->
      <div class="max-w-3xl mx-auto">
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
          mode="out-in"
        >
          <div
            :key="activePhase"
            class="bg-dark-100 rounded-xl p-8 border border-white/5"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {{ activePhase + 1 }}
              </div>
              <h3 class="text-2xl font-bold text-white">
                {{ currentPhase?.title }}
              </h3>
            </div>
            <p class="text-white/70 text-lg leading-relaxed">
              {{ currentPhase?.content }}
            </p>
          </div>
        </Transition>
      </div>

      <!-- Progress Indicators -->
      <div class="flex justify-center gap-2 mt-8">
        <button
          v-for="(_, index) in phases"
          :key="index"
          @click="activePhase = index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="activePhase === index ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { MethodologyPhase } from '@/types'

interface Props {
  phases: MethodologyPhase[]
}

const props = defineProps<Props>()

const activePhase = ref(0)

const currentPhase = computed(() => props.phases[activePhase.value])
</script>
