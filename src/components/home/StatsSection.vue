<template>
  <section class="py-16 md:py-20 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-dark to-primary/10"></div>
    <div class="absolute inset-0 cyber-grid opacity-10"></div>

    <div class="container relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center group"
        >
          <div class="relative inline-block mb-4">
            <span
              class="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
              ref="counterRefs"
            >
              {{ stat.prefix }}{{ animatedValues[stat.label] || 0 }}{{ stat.suffix }}
            </span>
          </div>
          <p class="text-white/60 text-sm md:text-base font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'

const stats = [
  { value: 500, label: 'Security Assessments', suffix: '+', prefix: '' },
  { value: 100, label: 'Clients Protected', suffix: '+', prefix: '' },
  { value: 12, label: 'Years Experience', suffix: '+', prefix: '' },
  { value: 50, label: 'Expert Certifications', suffix: '+', prefix: '' }
]

const animatedValues = reactive<Record<string, number>>({})

const animateValue = (label: string, end: number, duration: number = 2000) => {
  const start = 0
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)

    animatedValues[label] = Math.floor(easeOutQuart * (end - start) + start)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  // Initialize values
  stats.forEach(stat => {
    animatedValues[stat.label] = 0
  })

  // Start animation with intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateValue(stat.label, stat.value)
            }, index * 150)
          })
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )

  const section = document.querySelector('section')
  if (section) {
    observer.observe(section)
  }
})
</script>
