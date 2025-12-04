<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-hero"></div>
      <div class="absolute inset-0 cyber-grid opacity-20"></div>

      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p class="text-white/60">
            Last updated: December 2025
          </p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 md:py-20">
      <div class="container">
        <div class="max-w-4xl mx-auto prose prose-invert prose-lg">
          <div class="cyber-card rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p class="text-white/70 leading-relaxed">
                By accessing or using the HawkOps website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p class="text-white/70 leading-relaxed">
                HawkOps provides cybersecurity consulting services including but not limited to penetration testing, vulnerability assessments, source code review, red team operations, and threat intelligence services. Specific services are governed by individual engagement agreements.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">3. Authorization and Scope</h2>
              <p class="text-white/70 leading-relaxed">
                All security testing and assessment services require proper written authorization from the system owner. Clients must ensure they have legal authority to authorize testing of all systems included in the scope. Testing will be conducted only within the agreed-upon scope and timeframe.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">4. Client Responsibilities</h2>
              <p class="text-white/70 leading-relaxed mb-4">As a client, you agree to:</p>
              <ul class="list-disc list-inside text-white/70 space-y-2">
                <li>Provide accurate and complete information necessary for our services</li>
                <li>Ensure you have proper authorization for all systems to be tested</li>
                <li>Maintain appropriate backups before testing begins</li>
                <li>Designate a point of contact for communication during engagements</li>
                <li>Notify us promptly of any changes to scope or systems</li>
                <li>Review and respond to our findings in a timely manner</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
              <p class="text-white/70 leading-relaxed">
                We treat all client information, including vulnerabilities discovered during assessments, as strictly confidential. We will not disclose findings to third parties without your written consent, except as required by law. Our team members are bound by confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">6. Deliverables</h2>
              <p class="text-white/70 leading-relaxed">
                Upon completion of an engagement, we will provide a detailed report of our findings as specified in the engagement agreement. Reports remain confidential and are intended solely for the client's internal use. Redistribution requires our written consent.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p class="text-white/70 leading-relaxed">
                While we exercise reasonable care in performing our services, we cannot guarantee that all vulnerabilities will be discovered or that systems will be completely secure after our assessment. HawkOps' liability is limited to the fees paid for the specific engagement. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
              <p class="text-white/70 leading-relaxed">
                All tools, methodologies, and proprietary techniques used by HawkOps remain our intellectual property. Reports and findings specific to your engagement become your property upon full payment. Our general knowledge and skills gained during engagements may be used to improve our services.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">9. Payment Terms</h2>
              <p class="text-white/70 leading-relaxed">
                Payment terms are specified in individual engagement agreements. Unless otherwise agreed, invoices are due within 30 days of receipt. We reserve the right to suspend services for overdue accounts.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p class="text-white/70 leading-relaxed">
                Either party may terminate an engagement with written notice. In case of termination, the client is responsible for payment of services rendered up to the termination date. All confidentiality obligations survive termination.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">11. Disclaimer</h2>
              <p class="text-white/70 leading-relaxed">
                Our services are provided "as is" without warranties of any kind, either express or implied. Security testing involves inherent risks, and while we take precautions to minimize disruption, we cannot guarantee zero impact on systems.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <p class="text-white/70 leading-relaxed">
                These Terms of Service are governed by the laws of the United Arab Emirates. Any disputes arising from these terms or our services shall be resolved through arbitration in Dubai, UAE.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
              <p class="text-white/70 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
              <p class="text-white/70 leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div class="mt-4 p-4 bg-white/5 rounded-xl">
                <p class="text-white">HawkOps</p>
                <p class="text-white/70">Email: info@hawkops.io</p>
                <p class="text-white/70">Dubai, UAE | Baghdad, Iraq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheSeparator />
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'
import TheSeparator from '@/components/layout/TheSeparator.vue'

useSeo({
  title: 'Terms of Service | HawkOps',
  description: 'Read the terms and conditions governing the use of HawkOps cybersecurity services. Understand your rights and responsibilities as a client.',
  keywords: 'terms of service, terms and conditions, HawkOps terms, service agreement'
})
</script>
