<template>
  <div class="min-h-screen bg-dark">
    <TheHeader />
    <main class="pt-20">
      <RouterView v-slot="{ Component }">
        <Transition
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <TheFooter />
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import CookieConsent from '@/components/shared/CookieConsent.vue'
</script>
