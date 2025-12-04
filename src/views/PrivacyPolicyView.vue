<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-hero"></div>
      <div class="absolute inset-0 cyber-grid opacity-20"></div>

      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
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
              <h2 class="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p class="text-white/70 leading-relaxed">
                HawkOps ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website hawkops.io or engage our cybersecurity services.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 class="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p class="text-white/70 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide when you:
              </p>
              <ul class="list-disc list-inside text-white/70 space-y-2">
                <li>Fill out our contact form</li>
                <li>Request a consultation or quote</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage our services</li>
              </ul>
              <p class="text-white/70 leading-relaxed mt-4">
                This may include your name, email address, phone number, company name, and project details.
              </p>

              <h3 class="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
              <p class="text-white/70 leading-relaxed">
                When you visit our website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, and pages visited. This helps us improve our website and services.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p class="text-white/70 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul class="list-disc list-inside text-white/70 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our cybersecurity services</li>
                <li>Send you relevant information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
              <p class="text-white/70 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p class="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p class="text-white/70 leading-relaxed">
                Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p class="text-white/70 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
              <ul class="list-disc list-inside text-white/70 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability</li>
              </ul>
              <p class="text-white/70 leading-relaxed mt-4">
                To exercise these rights, please contact us at info@hawkops.io.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p class="text-white/70 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p class="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p class="text-white/70 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
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
  title: 'Privacy Policy | HawkOps',
  description: 'Learn how HawkOps collects, uses, and protects your personal information. Read our privacy policy for details on data handling and your rights.',
  keywords: 'privacy policy, data protection, HawkOps privacy, personal information'
})
</script>
