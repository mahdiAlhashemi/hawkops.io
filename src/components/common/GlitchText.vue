<template>
  <component
    :is="tag"
    ref="glitchRef"
    class="glitch-text"
    :class="[textClass, { auto: autoAnimate }]"
    :data-content="text"
  >
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  text: string
  tag?: string
  textClass?: string
  autoAnimate?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: 'span',
  autoAnimate: false
})

const glitchRef = ref<HTMLElement | null>(null)
</script>
