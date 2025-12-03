<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6">
    <!-- Spacer for top padding -->
    <div class="h-4 lg:h-6"></div>

    <!-- Main Header Container - Floating Style -->
    <div
      class="header-container transition-all duration-500"
      :class="[
        isScrolled
          ? 'header-scrolled'
          : 'header-default'
      ]"
    >
      <nav class="px-4 lg:px-6">
        <div class="flex items-center justify-between h-16 lg:h-[72px]">
          <!-- Logo -->
          <router-link to="/" class="logo group flex items-center gap-3 relative z-10">
            <div class="logo-glow"></div>
            <img
              src="/images/logo/logo.png"
              alt="HawkOps Logo"
              class="h-8 lg:h-9 w-auto transition-all duration-300 group-hover:scale-105 relative"
            />
          </router-link>

          <!-- Desktop Navigation - Centered -->
          <div class="hidden lg:flex items-center justify-center flex-1 mx-8">
            <ul class="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10">
              <li v-for="item in navigation" :key="item.href" class="relative">
                <!-- Regular link -->
                <router-link
                  v-if="!item.isDropdown"
                  :to="item.href"
                  class="nav-link"
                  :class="{ 'nav-link-active': isActive(item.href) }"
                >
                  {{ item.label }}
                </router-link>

                <!-- Dropdown -->
                <div v-else class="relative group">
                  <button
                    class="nav-link"
                    :class="{ 'nav-link-active': isServicesActive }"
                  >
                    {{ item.label }}
                    <svg
                      class="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>

                  <!-- Dropdown menu -->
                  <div class="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div class="dropdown-menu">
                      <!-- Dropdown Arrow -->
                      <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-100 border-l border-t border-white/10 rotate-45"></div>

                      <div class="relative">
                        <router-link
                          v-for="child in item.children"
                          :key="child.href"
                          :to="child.href"
                          class="dropdown-item group/item"
                        >
                          <span class="dropdown-icon">
                            <img
                              :src="getServiceIcon(child.href)"
                              :alt="child.label"
                              class="w-5 h-5 object-contain"
                            />
                          </span>
                          <div class="flex-1">
                            <span class="text-white/90 text-sm font-medium group-hover/item:text-white transition-colors">{{ child.label }}</span>
                          </div>
                          <svg class="w-4 h-4 text-white/20 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Right Side - CTA -->
          <div class="hidden lg:flex items-center gap-4">
            <!-- CTA Button -->
            <router-link
              to="/contact"
              class="cta-button group"
            >
              <span class="relative z-10 flex items-center gap-2">
                Contact Us
                <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            <div class="w-5 h-4 flex flex-col justify-between">
              <span
                class="w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                :class="{ 'rotate-45 translate-y-[7px]': isMobileMenuOpen }"
              ></span>
              <span
                class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                :class="{ 'opacity-0 scale-0': isMobileMenuOpen }"
              ></span>
              <span
                class="w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                :class="{ '-rotate-45 -translate-y-[7px]': isMobileMenuOpen }"
              ></span>
            </div>
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-4"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden mt-3 mobile-menu"
      >
        <div class="p-5">
          <ul class="space-y-1">
            <li v-for="item in navigation" :key="item.href">
              <router-link
                v-if="!item.isDropdown"
                :to="item.href"
                class="mobile-nav-link"
                :class="{ 'mobile-nav-link-active': isActive(item.href) }"
                @click="isMobileMenuOpen = false"
              >
                {{ item.label }}
              </router-link>

              <div v-else>
                <button
                  @click="isMobileServicesOpen = !isMobileServicesOpen"
                  class="mobile-nav-link w-full justify-between"
                  :class="{ 'mobile-nav-link-active': isServicesActive }"
                >
                  {{ item.label }}
                  <svg
                    class="w-4 h-4 transition-transform duration-300"
                    :class="{ 'rotate-180': isMobileServicesOpen }"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>

                <Transition
                  enter-active-class="transition-all duration-300"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition-all duration-200"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-2"
                >
                  <ul v-if="isMobileServicesOpen" class="mt-2 ml-4 space-y-1 border-l-2 border-primary/30 pl-4">
                    <li v-for="child in item.children" :key="child.href">
                      <router-link
                        :to="child.href"
                        class="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm py-2.5 px-3 rounded-lg hover:bg-white/5"
                        @click="isMobileMenuOpen = false"
                      >
                        <span class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <img
                            :src="getServiceIcon(child.href)"
                            :alt="child.label"
                            class="w-4 h-4 object-contain"
                          />
                        </span>
                        {{ child.label }}
                      </router-link>
                    </li>
                  </ul>
                </Transition>
              </div>
            </li>
          </ul>

          <div class="mt-6 pt-6 border-t border-white/10">
            <router-link
              to="/contact"
              class="cta-button w-full justify-center"
              @click="isMobileMenuOpen = false"
            >
              <span class="relative z-10 flex items-center gap-2">
                Contact Us
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { navigation } from '@/data/navigation'
import { services } from '@/data/services'

const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileServicesOpen = ref(false)

const isActive = (href: string) => {
  return route.path === href
}

const isServicesActive = computed(() => {
  const servicePaths = services.map(s => `/${s.slug}`)
  return servicePaths.includes(route.path)
})

const getServiceIcon = (href: string) => {
  const service = services.find(s => `/${s.slug}` === href)
  return service?.icon || '/images/services/webapp-pentest.png'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Header Container */
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

.header-default {
  background: rgba(13, 3, 32, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.header-scrolled {
  background: rgba(13, 3, 32, 0.95);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(176, 14, 57, 0.2);
  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.4),
    0 0 60px rgba(176, 14, 57, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* Logo Glow */
.logo-glow {
  position: absolute;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(176, 14, 57, 0.3) 0%, transparent 70%);
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.logo:hover .logo-glow {
  opacity: 1;
}

/* Navigation Links */
.nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.nav-link-active {
  color: #fff;
  background: linear-gradient(135deg, rgba(176, 14, 57, 0.3) 0%, rgba(176, 14, 57, 0.1) 100%);
  box-shadow: 0 0 20px rgba(176, 14, 57, 0.2);
}

/* Dropdown Menu */
.dropdown-menu {
  min-width: 320px;
  background: linear-gradient(135deg, rgba(34, 30, 36, 0.98) 0%, rgba(13, 3, 32, 0.98) 100%);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 50px rgba(176, 14, 57, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background: rgba(176, 14, 57, 0.15);
}

.dropdown-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(176, 14, 57, 0.1);
  border: 1px solid rgba(176, 14, 57, 0.2);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.dropdown-item:hover .dropdown-icon {
  background: rgba(176, 14, 57, 0.2);
  border-color: rgba(176, 14, 57, 0.4);
  box-shadow: 0 0 15px rgba(176, 14, 57, 0.2);
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #B00E39 0%, #901031 100%);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cta-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-button:hover::before {
  opacity: 1;
}

.cta-button:hover {
  transform: translateY(-1px);
  box-shadow:
    0 10px 30px rgba(176, 14, 57, 0.4),
    0 0 40px rgba(176, 14, 57, 0.2);
}

/* Mobile Menu */
.mobile-menu {
  background: linear-gradient(135deg, rgba(34, 30, 36, 0.98) 0%, rgba(13, 3, 32, 0.98) 100%);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  padding: 0.875rem 1rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.mobile-nav-link-active {
  color: #fff;
  background: rgba(176, 14, 57, 0.15);
}
</style>
