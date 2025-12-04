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
            <span class="text-sm font-medium text-white/80">Got Questions?</span>
          </span>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked <span class="gradient-text">Questions</span>
          </h1>
          <p class="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our cybersecurity services, processes, and how we can help protect your organization.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 md:py-28">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <!-- Categories -->
          <div class="flex flex-wrap gap-3 justify-center mb-12">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all"
              :class="activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'"
            >
              {{ category }}
            </button>
          </div>

          <!-- FAQ Items -->
          <div class="space-y-4">
            <div
              v-for="(faq, index) in filteredFaqs"
              :key="index"
              class="cyber-card rounded-xl overflow-hidden"
            >
              <button
                @click="toggleFaq(index)"
                class="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span class="text-white font-medium pr-4">{{ faq.question }}</span>
                <svg
                  class="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === index }"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div
                class="overflow-hidden transition-all duration-300"
                :class="openFaq === index ? 'max-h-96' : 'max-h-0'"
              >
                <div class="px-6 pb-5 text-white/60 leading-relaxed">
                  {{ faq.answer }}
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
            Still Have Questions?
          </h2>
          <p class="text-white/60 text-lg mb-8">
            Our team is here to help. Contact us for personalized answers to your security questions.
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Contact Our Team
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
import { ref, computed } from 'vue'
import { useSeo } from '@/composables/useSeo'
import TheSeparator from '@/components/layout/TheSeparator.vue'

useSeo({
  title: 'FAQ | Cybersecurity Questions Answered',
  description: 'Find answers to frequently asked questions about penetration testing, security assessments, and cybersecurity services from HawkOps.',
  keywords: 'cybersecurity FAQ, penetration testing questions, security assessment FAQ, pentest questions, cybersecurity services FAQ'
})

const categories = ['All', 'General', 'Penetration Testing', 'Services', 'Pricing & Process']
const activeCategory = ref('All')
const openFaq = ref<number | null>(null)

const faqs = [
  {
    category: 'General',
    question: 'What is HawkOps and what services do you offer?',
    answer: 'HawkOps is a cybersecurity consultancy specializing in offensive security services. We offer penetration testing (web, mobile, infrastructure), secure code review, red team operations, and dark web monitoring & threat intelligence. With over 12 years of experience, our certified experts help organizations identify and address security vulnerabilities.'
  },
  {
    category: 'General',
    question: 'Where is HawkOps located?',
    answer: 'HawkOps has offices in Dubai, UAE and Baghdad, Iraq. We serve clients across the Middle East and globally, conducting both on-site and remote security assessments depending on project requirements.'
  },
  {
    category: 'General',
    question: 'What certifications does your team hold?',
    answer: 'Our team holds industry-leading certifications including OSCP, OSCE, OSEP, CRTO, CRTL, and CRTE. We also maintain certifications in various technologies and frameworks to ensure comprehensive coverage of modern attack surfaces.'
  },
  {
    category: 'Penetration Testing',
    question: 'What is penetration testing and why do I need it?',
    answer: 'Penetration testing (pentesting) is a simulated cyberattack against your systems to identify exploitable vulnerabilities. It helps you understand your security weaknesses before malicious actors find them, meet compliance requirements, and validate that your security controls are effective.'
  },
  {
    category: 'Penetration Testing',
    question: 'How long does a penetration test take?',
    answer: 'The duration depends on the scope and complexity of the engagement. A typical web application pentest takes 1-2 weeks, while comprehensive infrastructure assessments may take 2-4 weeks. Red team engagements can span several weeks to months for realistic adversary simulation.'
  },
  {
    category: 'Penetration Testing',
    question: 'Will penetration testing disrupt our operations?',
    answer: 'We design our tests to minimize business disruption. We work with you to schedule testing during appropriate windows, avoid denial-of-service attacks unless specifically requested, and coordinate closely with your team throughout the engagement.'
  },
  {
    category: 'Penetration Testing',
    question: 'What is the difference between vulnerability scanning and penetration testing?',
    answer: 'Vulnerability scanning uses automated tools to identify known vulnerabilities, while penetration testing involves skilled security professionals who manually exploit vulnerabilities to understand real-world risk. Pentesting goes deeper, chaining vulnerabilities and demonstrating actual business impact.'
  },
  {
    category: 'Services',
    question: 'What is Red Team testing?',
    answer: 'Red Team testing is an advanced security assessment that simulates real-world attacks by sophisticated adversaries. Unlike traditional pentesting, red team engagements test your detection and response capabilities, including physical security and social engineering, often without defenders knowing the test is occurring.'
  },
  {
    category: 'Services',
    question: 'What does your Dark Web Monitoring service include?',
    answer: 'Our Dark Web Monitoring service continuously monitors underground forums, marketplaces, and paste sites for your organization\'s compromised credentials, leaked data, and mentions of your brand. We provide alerts and actionable intelligence to help you respond to threats before they impact your business.'
  },
  {
    category: 'Services',
    question: 'Do you offer security training for our team?',
    answer: 'Yes, we offer security awareness training and technical training for development teams. This includes secure coding practices, recognizing social engineering attacks, and understanding common vulnerabilities specific to your technology stack.'
  },
  {
    category: 'Pricing & Process',
    question: 'How much does penetration testing cost?',
    answer: 'Pricing varies based on scope, complexity, and duration of the engagement. We provide customized quotes after understanding your specific requirements. Contact us for a free consultation and estimate based on your needs.'
  },
  {
    category: 'Pricing & Process',
    question: 'What do I receive at the end of an engagement?',
    answer: 'You receive a comprehensive report including an executive summary, detailed technical findings with proof-of-concept evidence, risk ratings, and remediation recommendations. We also offer a debrief session to walk through findings and answer questions.'
  },
  {
    category: 'Pricing & Process',
    question: 'Do you offer retesting after we remediate vulnerabilities?',
    answer: 'Yes, we offer retesting services to verify that vulnerabilities have been properly remediated. This ensures that fixes are effective and no new issues were introduced during remediation. Retesting is typically included or available at a reduced rate.'
  },
  {
    category: 'Pricing & Process',
    question: 'How do we get started?',
    answer: 'Simply contact us through our website or call us directly. We\'ll schedule a discovery call to understand your requirements, define the scope, and provide a proposal. Once approved, we\'ll coordinate timing and begin the assessment.'
  }
]

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'All') return faqs
  return faqs.filter(faq => faq.category === activeCategory.value)
})

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>
