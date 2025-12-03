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

    <ProcessCarousel
      v-if="service.methodology"
      :phases="service.methodology"
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
import ProcessCarousel from '@/components/services/ProcessCarousel.vue'
import ContactBox from '@/components/shared/ContactBox.vue'

useSeo(seoConfigs.redTeam)

const service = computed(() => getServiceBySlug('redteam'))
</script>
