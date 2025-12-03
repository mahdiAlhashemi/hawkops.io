<template>
  <router-link
    :to="to"
    class="inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors group"
  >
    <span class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="transform rotate-180"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span class="font-medium">{{ label }}</span>
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  to: string
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: 'Back to Services'
})
</script>
