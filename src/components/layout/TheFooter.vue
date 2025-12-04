<template>
  <footer class="relative bg-dark-100 pt-20 pb-8 overflow-hidden">
    <!-- Background Effect -->
    <div class="absolute inset-0 cyber-grid opacity-10"></div>
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>

    <div class="container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Logo & Description -->
        <div class="lg:col-span-1">
          <router-link to="/" class="inline-block mb-6 group">
            <img
              src="/images/logo/logo.png"
              alt="HawkOps Logo"
              class="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </router-link>
          <p class="text-white/50 text-sm leading-relaxed mb-6">
            Protecting your digital assets with cutting-edge cybersecurity solutions since 2012.
          </p>
          <!-- Trust Badges -->
          <div class="flex items-center gap-3">
            <div class="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <span class="text-xs text-white/60">ISO 27001</span>
            </div>
            <div class="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <span class="text-xs text-white/60">CREST</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span class="w-1 h-1 bg-white/30 rounded-full group-hover:bg-accent transition-colors"></span>
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about-us" class="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span class="w-1 h-1 bg-white/30 rounded-full group-hover:bg-accent transition-colors"></span>
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span class="w-1 h-1 bg-white/30 rounded-full group-hover:bg-accent transition-colors"></span>
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/case-studies" class="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span class="w-1 h-1 bg-white/30 rounded-full group-hover:bg-accent transition-colors"></span>
                Case Studies
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span class="w-1 h-1 bg-white/30 rounded-full group-hover:bg-accent transition-colors"></span>
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contacts -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            Contact Us
          </h3>
          <ul class="space-y-4">
            <li>
              <div class="flex items-start gap-3 text-white/60">
                <span class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src="/images/icons/footer-call.png" alt="Phone" class="w-5 h-5" />
                </span>
                <div class="text-sm pt-1">
                  <span class="text-xs text-primary font-medium">UAE</span>
                  <p class="mb-2">
                    <a :href="`tel:${contactInfo.phones[0]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[0] }}</a><br />
                    <a :href="`tel:${contactInfo.phones[1]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[1] }}</a>
                  </p>
                  <span class="text-xs text-primary font-medium">Iraq</span>
                  <p>
                    <a :href="`tel:${contactInfo.phones[2]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[2] }}</a><br />
                    <a :href="`tel:${contactInfo.phones[3]?.replace(/\s/g, '')}`" class="hover:text-accent transition-colors">{{ contactInfo.phones[3] }}</a>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <a
                :href="`mailto:${contactInfo.email}`"
                class="flex items-center gap-3 text-white/60 hover:text-accent transition-colors group"
              >
                <span class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <img src="/images/icons/footer-sms.png" alt="Email" class="w-5 h-5" />
                </span>
                <span class="text-sm">{{ contactInfo.email }}</span>
              </a>
            </li>
            <li>
              <div class="flex items-start gap-3 text-white/60">
                <span class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src="/images/icons/footer-map.png" alt="Location" class="w-5 h-5" />
                </span>
                <span class="text-sm pt-2">
                  {{ contactInfo.locations[0] }}<br />
                  {{ contactInfo.locations[1] }}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Follow Us -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            Follow Us
          </h3>
          <p class="text-white/50 text-sm mb-4">Stay connected for the latest updates</p>
          <div class="flex items-center gap-3">
            <a
              :href="contactInfo.social.twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10 hover:border-primary"
              aria-label="Twitter"
            >
              <i class="fa-brands fa-x-twitter text-lg"></i>
            </a>
            <a
              :href="contactInfo.social.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10 hover:border-primary"
              aria-label="LinkedIn"
            >
              <i class="fa-brands fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Separator -->
      <div class="my-10 cyber-divider"></div>

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-white/40 text-sm">
          &copy; {{ currentYear }} HawkOps. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-sm">
          <router-link to="/privacy-policy" class="text-white/40 hover:text-accent transition-colors">Privacy Policy</router-link>
          <router-link to="/terms-of-service" class="text-white/40 hover:text-accent transition-colors">Terms of Service</router-link>
          <router-link to="/faq" class="text-white/40 hover:text-accent transition-colors">FAQ</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { contactInfo } from '@/data/contact'

const currentYear = computed(() => new Date().getFullYear())
</script>
