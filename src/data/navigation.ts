import type { NavItem } from '@/types'

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Services',
    href: '/services',
    isDropdown: true,
    children: [
      {
        label: 'Web Application Penetration Testing',
        href: '/web-penetration-testing'
      },
      {
        label: 'Mobile Application Penetration Testing',
        href: '/mobile-application'
      },
      {
        label: 'Source Code Review',
        href: '/secure-code-review'
      },
      {
        label: 'Infrastructure Penetration Testing',
        href: '/penetration-testing'
      },
      {
        label: 'Red Team Operations',
        href: '/redteam'
      },
      {
        label: 'Dark Web Monitoring & Threat Intelligence',
        href: '/dark-web-monitoring'
      }
    ]
  },
  {
    label: 'Case Studies',
    href: '/case-studies'
  },
  {
    label: 'About Us',
    href: '/about-us'
  },
  {
    label: 'FAQ',
    href: '/faq'
  }
]
