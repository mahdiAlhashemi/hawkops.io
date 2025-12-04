import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'HawkOps | Empowering You in the Digital Age' }
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'About Us | HawkOps' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { title: 'Contact | HawkOps' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: { title: 'Services | HawkOps' }
    },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: () => import('@/views/CaseStudiesView.vue'),
      meta: { title: 'Case Studies | HawkOps' }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/FaqView.vue'),
      meta: { title: 'FAQ | HawkOps' }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/PrivacyPolicyView.vue'),
      meta: { title: 'Privacy Policy | HawkOps' }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('@/views/TermsOfServiceView.vue'),
      meta: { title: 'Terms of Service | HawkOps' }
    },
    {
      path: '/web-penetration-testing',
      name: 'web-penetration-testing',
      component: () => import('@/views/services/WebPenetrationTestingView.vue'),
      meta: { title: 'Web Application Penetration Testing | HawkOps' }
    },
    {
      path: '/mobile-application',
      name: 'mobile-application',
      component: () => import('@/views/services/MobileApplicationView.vue'),
      meta: { title: 'Mobile Application Penetration Testing | HawkOps' }
    },
    {
      path: '/secure-code-review',
      name: 'secure-code-review',
      component: () => import('@/views/services/SecureCodeReviewView.vue'),
      meta: { title: 'Secure Code Review | HawkOps' }
    },
    {
      path: '/penetration-testing',
      name: 'penetration-testing',
      component: () => import('@/views/services/PenetrationTestingView.vue'),
      meta: { title: 'Infrastructure Penetration Testing | HawkOps' }
    },
    {
      path: '/redteam',
      name: 'redteam',
      component: () => import('@/views/services/RedTeamView.vue'),
      meta: { title: 'Red Team Operations | HawkOps' }
    },
    {
      path: '/dark-web-monitoring',
      name: 'dark-web-monitoring',
      component: () => import('@/views/services/DarkWebMonitoringView.vue'),
      meta: { title: 'Dark Web Monitoring | HawkOps' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: '404 - Page Not Found | HawkOps' }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title on navigation
router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || 'HawkOps'
  next()
})

export default router
