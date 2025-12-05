<template>
  <section class="py-20 md:py-28">
    <div class="container">
      <div class="relative rounded-3xl overflow-hidden">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary-700"></div>

        <!-- Grid Pattern -->
        <div class="absolute inset-0 cyber-grid opacity-10"></div>

        <!-- Animated Orbs -->
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>
        <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-[80px]"></div>

        <!-- Background Vector -->
        <div class="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img
            src="/images/icons/contact-vector.png"
            alt=""
            class="w-full h-full object-contain object-right"
          />
        </div>

        <!-- Content -->
        <div class="relative z-10 p-10 md:p-14 lg:p-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span class="text-sm font-medium text-white/90">Security Alert</span>
              </span>

              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Increased Risks of Evolving <span class="text-accent">Cyber Threats</span>
              </h2>
              <p class="text-white/80 text-lg mb-8 leading-relaxed">
                Stay protected against evolving cyber threats with HawkOps' advanced security solutions. Our experts are ready to help secure your digital assets.
              </p>

              <div class="flex flex-col sm:flex-row items-start gap-4">
                <router-link
                  to="/contact"
                  class="group inline-flex items-center gap-3 bg-accent text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/40"
                >
                  Get Free Consultation
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </router-link>
                <router-link
                  to="/services"
                  class="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors px-4 py-4"
                >
                  Explore Services
                </router-link>
              </div>
            </div>

            <!-- Stats/Trust Indicators -->
            <div class="hidden lg:grid grid-cols-2 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div class="text-4xl font-bold text-white mb-2">99.9%</div>
                <div class="text-white/70 text-sm">Threat Detection Rate</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div class="text-4xl font-bold text-white mb-2">24/7</div>
                <div class="text-white/70 text-sm">Security Monitoring</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div class="text-4xl font-bold text-white mb-2">500+</div>
                <div class="text-white/70 text-sm">Audits Completed</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div class="text-4xl font-bold text-white mb-2">&lt;1hr</div>
                <div class="text-white/70 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
