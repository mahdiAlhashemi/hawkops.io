<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-hero"></div>
      <div class="absolute inset-0 cyber-grid opacity-20"></div>
      <div class="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-[120px]"></div>

      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="text-sm font-medium text-white/80">Success Stories</span>
          </span>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Case <span class="gradient-text">Studies</span>
          </h1>
          <p class="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real-world examples of how we've helped organizations strengthen their security posture and protect against cyber threats.
          </p>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-20 md:py-28">
      <div class="container">
        <div class="space-y-16">
          <div
            v-for="(study, index) in caseStudies"
            :key="index"
            class="cyber-card rounded-2xl overflow-hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Image/Visual Side -->
              <div class="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-dark-100 flex items-center justify-center p-12">
                <div class="text-center">
                  <div class="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <component :is="study.icon" class="w-10 h-10 text-primary" />
                  </div>
                  <span class="text-xs text-primary font-semibold uppercase tracking-wider">{{ study.industry }}</span>
                </div>
                <!-- Stats Overlay -->
                <div class="absolute bottom-4 left-4 right-4 flex gap-4">
                  <div v-for="stat in study.stats" :key="stat.label" class="bg-dark/80 backdrop-blur-sm rounded-lg px-4 py-2 flex-1 text-center">
                    <span class="text-2xl font-bold gradient-text">{{ stat.value }}</span>
                    <p class="text-white/50 text-xs">{{ stat.label }}</p>
                  </div>
                </div>
              </div>

              <!-- Content Side -->
              <div class="p-8 lg:p-12">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ study.title }}</h3>

                <!-- Challenge -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-primary uppercase tracking-wider mb-2">The Challenge</h4>
                  <p class="text-white/60 leading-relaxed">{{ study.challenge }}</p>
                </div>

                <!-- Solution -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Solution</h4>
                  <p class="text-white/60 leading-relaxed">{{ study.solution }}</p>
                </div>

                <!-- Results -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Results</h4>
                  <ul class="space-y-2">
                    <li v-for="result in study.results" :key="result" class="flex items-start gap-2 text-white/60">
                      <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      {{ result }}
                    </li>
                  </ul>
                </div>

                <!-- Services Used -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="service in study.services"
                    :key="service"
                    class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {{ service }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-28 bg-dark-100">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p class="text-white/60 text-lg mb-8">
            Let us help you identify and address security vulnerabilities before attackers do.
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Get Your Free Assessment
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <TheSeparator />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { useSeo } from '@/composables/useSeo'
import TheSeparator from '@/components/layout/TheSeparator.vue'

useSeo({
  title: 'Case Studies | Cybersecurity Success Stories',
  description: 'Explore real-world examples of how HawkOps has helped organizations identify vulnerabilities, prevent breaches, and strengthen their security posture.',
  keywords: 'cybersecurity case studies, penetration testing results, security assessment examples, breach prevention, security success stories'
})

// Icon components
const BankIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-10 h-10' }, [
  h('path', { d: 'M3 21H21M3 10H21M5 6L12 3L19 6M4 10V21M20 10V21M8 14V17M12 14V17M16 14V17', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const ShoppingIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-10 h-10' }, [
  h('path', { d: 'M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6ZM3 6H21M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const HealthIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-10 h-10' }, [
  h('path', { d: 'M22 12H18L15 21L9 3L6 12H2', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const GovIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-10 h-10' }, [
  h('path', { d: 'M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const caseStudies = [
  {
    title: 'Regional Bank Security Transformation',
    industry: 'Financial Services',
    icon: BankIcon,
    challenge: 'A major regional bank with over 500,000 customers needed to comply with new regulatory requirements while addressing growing concerns about their digital banking platform security.',
    solution: 'We conducted comprehensive penetration testing of their web and mobile banking applications, followed by a thorough infrastructure assessment. Our team identified critical vulnerabilities in their authentication system and API security.',
    results: [
      'Discovered and remediated 23 critical vulnerabilities',
      'Achieved full regulatory compliance within 3 months',
      'Zero security incidents in 18 months post-engagement',
      'Reduced attack surface by 60%'
    ],
    services: ['Web Penetration Testing', 'Mobile Security', 'Infrastructure Testing'],
    stats: [
      { value: '23', label: 'Critical Vulns Fixed' },
      { value: '60%', label: 'Attack Surface Reduced' }
    ]
  },
  {
    title: 'E-Commerce Platform Protection',
    industry: 'Retail & E-Commerce',
    icon: ShoppingIcon,
    challenge: 'A rapidly growing e-commerce platform processing millions in transactions faced sophisticated fraud attempts and needed to ensure their customer data was protected.',
    solution: 'We performed a red team engagement simulating advanced persistent threats, combined with source code review of their payment processing module. Our dark web monitoring service detected leaked credentials before they could be exploited.',
    results: [
      'Prevented potential $2M fraud incident',
      'Identified and secured exposed API endpoints',
      'Implemented secure development lifecycle practices',
      'Achieved PCI DSS compliance'
    ],
    services: ['Red Team Operations', 'Code Review', 'Dark Web Monitoring'],
    stats: [
      { value: '$2M', label: 'Fraud Prevented' },
      { value: '100%', label: 'PCI Compliant' }
    ]
  },
  {
    title: 'Healthcare Data Security',
    industry: 'Healthcare',
    icon: HealthIcon,
    challenge: 'A healthcare provider managing sensitive patient records across multiple facilities needed to ensure HIPAA compliance and protect against ransomware threats targeting the healthcare sector.',
    solution: 'We conducted infrastructure penetration testing across all facilities, performed security assessments of their medical device networks, and established continuous dark web monitoring for data breach detection.',
    results: [
      'Secured 15 previously vulnerable medical devices',
      'Achieved full HIPAA compliance',
      'Implemented network segmentation reducing lateral movement risk',
      'Early detection of 3 credential leaks on dark web'
    ],
    services: ['Infrastructure Testing', 'Dark Web Monitoring', 'Compliance Assessment'],
    stats: [
      { value: '15', label: 'Devices Secured' },
      { value: '3', label: 'Leaks Detected' }
    ]
  },
  {
    title: 'Government Agency Security Audit',
    industry: 'Government',
    icon: GovIcon,
    challenge: 'A government agency responsible for critical infrastructure needed to assess their security posture against nation-state level threats and ensure compliance with national cybersecurity standards.',
    solution: 'Our team conducted a comprehensive security assessment including advanced red team operations, social engineering tests, and physical security evaluation. We simulated sophisticated attack scenarios targeting their SCADA systems.',
    results: [
      'Identified critical SCADA vulnerabilities',
      'Improved incident response time by 75%',
      'Enhanced employee security awareness (90% reduction in phishing susceptibility)',
      'Achieved national cybersecurity certification'
    ],
    services: ['Red Team Operations', 'Infrastructure Testing', 'Security Training'],
    stats: [
      { value: '75%', label: 'Faster Response' },
      { value: '90%', label: 'Phishing Reduction' }
    ]
  }
]
</script>
