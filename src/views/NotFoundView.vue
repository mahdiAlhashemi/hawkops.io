<template>
  <section class="min-h-[70vh] flex items-center justify-center py-20">
    <div class="container">
      <div class="max-w-lg mx-auto text-center">
        <h1 class="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p class="text-white/70 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <GradientButton to="/">
          Back to Home
        </GradientButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GradientButton from '@/components/common/GradientButton.vue'
</script>
