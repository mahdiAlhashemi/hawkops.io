<template>
  <div v-if="service">
    <ServiceIntro
      :title="service.intro.title"
      :description="service.intro.description"
      :hero-image="service.heroImage"
    />

    <PointsSection
      :title="service.points.title"
      :description="service.points.description"
      :items="service.points.items"
    />

    <ComparisonTable
      v-if="service.comparison"
      :comparison="service.comparison"
    />

    <ContactBox />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSeo, seoConfigs } from '@/composables/useSeo'
import { getServiceBySlug } from '@/data/services'
import ServiceIntro from '@/components/services/ServiceIntro.vue'
import PointsSection from '@/components/services/PointsSection.vue'
import ComparisonTable from '@/components/services/ComparisonTable.vue'
import ContactBox from '@/components/shared/ContactBox.vue'

useSeo(seoConfigs.infrastructurePentest)

const service = computed(() => getServiceBySlug('penetration-testing'))
</script>
