<template>
  <section class="py-24 md:py-32 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"></div>

    <div class="container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <span class="section-subtitle">ABOUT US</span>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
          At HawkOps, we offer unparalleled <br class="hidden md:block" /> protection and expertise.
        </h2>

        <p class="text-white/60 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
          HawkOps is a cybersecurity consultancy firm with a team of experts specializing in offensive security. With over 12 years of experience in the field, our team is dedicated to ensuring the highest quality of security services.
        </p>

        <router-link
          to="/about-us"
          class="group inline-flex items-center gap-3 text-accent hover:text-white transition-all duration-300 font-semibold text-lg"
        >
          <span class="relative">
            More about HawkOps
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
