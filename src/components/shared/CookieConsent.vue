<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div class="container">
        <div class="max-w-4xl mx-auto bg-dark-100/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <!-- Icon -->
            <div class="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"/>
                <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="15" r="1.5" fill="currentColor"/>
                <circle cx="9" cy="7" r="1" fill="currentColor"/>
                <circle cx="16" cy="14" r="1" fill="currentColor"/>
              </svg>
            </div>

            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-white font-semibold mb-1">We Value Your Privacy</h3>
              <p class="text-white/60 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                <router-link to="/privacy-policy" class="text-primary hover:text-accent ml-1">Read our Privacy Policy</router-link>
              </p>
            </div>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-3 w-full md:w-auto">
              <button
                @click="rejectCookies"
                class="flex-1 md:flex-none px-5 py-2.5 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white rounded-xl text-sm font-medium transition-all"
              >
                Reject All
              </button>
              <button
                @click="acceptCookies"
                class="flex-1 md:flex-none px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

const COOKIE_CONSENT_KEY = 'hawkops_cookie_consent'

onMounted(() => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (!consent) {
    // Show banner after a short delay for better UX
    setTimeout(() => {
      showBanner.value = true
    }, 1500)
  }
})

const acceptCookies = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
  showBanner.value = false
}

const rejectCookies = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
  showBanner.value = false
}
</script>
