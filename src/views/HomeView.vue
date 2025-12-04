<template>
  <div>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <AcknowledgmentsSection />
    <CertifiedSection />
    <TheSeparator />
    <ClientsSlider />
    <ContactBox />
  </div>
</template>

<script setup lang="ts">
import { useSeo, seoConfigs } from '@/composables/useSeo'
import HeroSection from '@/components/home/HeroSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import AcknowledgmentsSection from '@/components/home/AcknowledgmentsSection.vue'
import CertifiedSection from '@/components/home/CertifiedSection.vue'
import TheSeparator from '@/components/layout/TheSeparator.vue'
import ClientsSlider from '@/components/shared/ClientsSlider.vue'
import ContactBox from '@/components/shared/ContactBox.vue'

useSeo(seoConfigs.home)
</script>
