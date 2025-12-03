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

    <BenefitsGrid
      v-if="service.benefits"
      :benefits="service.benefits"
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
import BenefitsGrid from '@/components/services/BenefitsGrid.vue'
import ContactBox from '@/components/shared/ContactBox.vue'

useSeo(seoConfigs.mobilePentest)

const service = computed(() => getServiceBySlug('mobile-application'))
</script>
