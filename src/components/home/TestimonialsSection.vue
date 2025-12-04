<template>
  <section class="py-20 md:py-28 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-dark-100"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>

    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span class="w-2 h-2 bg-primary rounded-full"></span>
          <span class="text-sm font-medium text-white/80">Client Testimonials</span>
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          What Our <span class="gradient-text">Clients Say</span>
        </h2>
        <p class="text-white/60 text-lg max-w-2xl mx-auto">
          Trusted by leading organizations across the Middle East and beyond
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="cyber-card rounded-2xl p-8 relative group"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 right-6 text-primary/20">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg
              v-for="star in 5"
              :key="star"
              class="w-5 h-5 text-accent"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>

          <!-- Content -->
          <p class="text-white/70 leading-relaxed mb-6">
            "{{ testimonial.content }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
              {{ testimonial.author.charAt(0) }}
            </div>
            <div>
              <h4 class="text-white font-semibold">{{ testimonial.author }}</h4>
              <p class="text-white/50 text-sm">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    content: "HawkOps identified critical vulnerabilities in our banking platform that our internal team had missed. Their thorough approach and detailed reporting exceeded our expectations.",
    author: "Ahmed Al-Rashid",
    position: "CTO, Regional Bank"
  },
  {
    content: "The red team assessment was eye-opening. HawkOps demonstrated how attackers could breach our defenses and provided actionable recommendations that significantly improved our security posture.",
    author: "Sarah Mitchell",
    position: "CISO, E-commerce Platform"
  },
  {
    content: "Working with HawkOps on our mobile app security was a game-changer. They found issues in both our iOS and Android apps that could have led to serious data breaches.",
    author: "Mohammed Hassan",
    position: "VP Engineering, FinTech Startup"
  },
  {
    content: "Their secure code review service helped us build security into our development process from day one. The team's expertise in multiple programming languages is impressive.",
    author: "Lisa Chen",
    position: "Lead Developer, SaaS Company"
  },
  {
    content: "HawkOps' dark web monitoring alerted us to compromised credentials before they could be used against us. Their proactive approach to threat intelligence is invaluable.",
    author: "Omar Khalil",
    position: "Security Manager, Healthcare Provider"
  },
  {
    content: "Professional, thorough, and highly skilled. HawkOps helped us achieve compliance with regional security standards while actually improving our security, not just checking boxes.",
    author: "James Wilson",
    position: "IT Director, Manufacturing Firm"
  }
]
</script>
