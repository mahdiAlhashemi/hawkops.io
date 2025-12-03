<template>
  <div class="mb-6">
    <h5
      v-if="subtitle"
      class="text-accent uppercase text-sm font-semibold tracking-wider mb-3"
    >
      {{ subtitle }}
    </h5>
    <h2
      class="text-white font-bold leading-tight"
      :class="sizeClass"
    >
      <slot>{{ title }}</slot>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg'
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xl md:text-2xl'
    case 'md':
      return 'text-2xl md:text-3xl'
    case 'xl':
      return 'text-3xl md:text-4xl lg:text-5xl'
    default:
      return 'text-2xl md:text-3xl lg:text-4xl'
  }
})
</script>
