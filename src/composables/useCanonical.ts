import { watchEffect, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const BASE_URL = 'https://hawkops.io'

export function useCanonical() {
  const route = useRoute()
  let canonicalLink: HTMLLinkElement | null = null

  watchEffect(() => {
    // Remove existing canonical link if present
    const existing = document.querySelector('link[rel="canonical"]')
    if (existing) {
      existing.remove()
    }

    // Create new canonical link
    canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    canonicalLink.href = `${BASE_URL}${route.path === '/' ? '/' : route.path}`
    document.head.appendChild(canonicalLink)
  })

  onUnmounted(() => {
    if (canonicalLink) {
      canonicalLink.remove()
    }
  })
}
