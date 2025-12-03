<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center gap-2 bg-gradient-primary hover:bg-gradient-primary-reverse text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
    :class="[
      { 'w-full justify-center': fullWidth },
      sizeClasses
    ]"
  >
    <slot />
    <span v-if="showArrow" class="ml-1">
      <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.84375" y="4.70435" width="17.1695" height="1.2563" fill="currentColor"/>
        <rect x="14.3047" y="0.726318" width="6.54806" height="1.2563" transform="rotate(45.6414 14.3047 0.726318)" fill="currentColor"/>
        <rect width="6.54806" height="1.2563" transform="matrix(-0.699146 0.714979 0.714979 0.699146 17.9844 4.49487)" fill="currentColor"/>
      </svg>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  showArrow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  fullWidth: false,
  showArrow: false
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-8 py-4 text-lg'
    default:
      return 'px-6 py-3'
  }
})
</script>
