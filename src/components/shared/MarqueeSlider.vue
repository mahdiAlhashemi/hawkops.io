<template>
  <div class="marquee-container overflow-hidden">
    <div
      class="marquee-track animate"
      :class="{ reverse }"
      :style="{ '--duration': `${duration}s` }"
    >
      <div class="marquee-group">
        <slot />
      </div>
      <div class="marquee-group" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  reverse?: boolean
  duration?: number
}

withDefaults(defineProps<Props>(), {
  reverse: false,
  duration: 20
})
</script>

<style scoped>
.marquee-track {
  display: flex;
  gap: 2rem;
}

.marquee-track.animate {
  animation: scroll-x var(--duration, 20s) linear infinite;
}

.marquee-track.reverse {
  animation-direction: reverse;
}

.marquee-group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  min-width: 100%;
}

@keyframes scroll-x {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 2rem));
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track.animate {
    animation: none;
  }
}
</style>
