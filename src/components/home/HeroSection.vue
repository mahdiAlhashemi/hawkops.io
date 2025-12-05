<template>
  <section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-hero"></div>
    <div class="absolute inset-0 cyber-grid opacity-30"></div>

    <!-- Animated Background Orbs -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse" style="animation-delay: 1s;"></div>

    <div class="container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 fade-in-up">
            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-white/80">Cybersecurity Experts Since 2012</span>
          </div>

          <GlitchText
            text="Secure Your Digital Life"
            tag="h1"
            text-class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 fade-in-up fade-in-up-delay-1"
            auto-animate
          />

          <p class="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed fade-in-up fade-in-up-delay-2">
            HawkOps brings you top-notch technology with most skilled experts to help you spot weak points within your system and shutdown attacks before its birth to always stay ahead
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start fade-in-up fade-in-up-delay-3">
            <GradientButton to="/contact" show-arrow size="lg">
              Get started
            </GradientButton>
            <router-link
              to="/services"
              class="group inline-flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white font-semibold transition-all duration-300"
            >
              <span class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              Explore Services
            </router-link>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 fade-in-up fade-in-up-delay-4">
            <div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">12+</div>
              <div class="text-sm text-white/50">Years Experience</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">100+</div>
              <div class="text-sm text-white/50">Vulnerabilities Found</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div class="text-sm text-white/50">Happy Clients</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Hero Image -->
        <div class="relative hidden lg:block">
          <!-- Glow Effect Behind Image -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-80 h-80 bg-primary/30 rounded-full blur-[100px]"></div>
          </div>

          <div class="relative animate-float">
            <img
              src="/images/global/hero-image.png"
              alt="Cybersecurity Hero"
              width="512"
              height="512"
              class="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>

          <!-- Floating Elements -->
          <div class="absolute top-10 right-10 px-4 py-2 bg-dark-100/80 backdrop-blur-sm rounded-lg border border-white/10 animate-bounce-slow">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-green-500 rounded-full"></span>
              <span class="text-sm text-white/80">System Protected</span>
            </div>
          </div>

          <div class="absolute bottom-20 left-0 px-4 py-2 bg-dark-100/80 backdrop-blur-sm rounded-lg border border-white/10 animate-bounce-slow" style="animation-delay: 0.5s;">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
              <span class="text-sm text-white/80">Threat Monitoring Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
      <span class="text-xs uppercase tracking-wider">Scroll</span>
      <div class="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
        <div class="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GlitchText from '@/components/common/GlitchText.vue'
import GradientButton from '@/components/common/GradientButton.vue'
</script>

<style scoped>
.animate-float {
  animation: float-up-down 4s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

@keyframes float-up-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
