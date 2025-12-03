import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export interface SeoMeta {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  twitterCard?: string
  canonical?: string
  structuredData?: object
}

const BASE_URL = 'https://hawkops.io'
const DEFAULT_IMAGE = `${BASE_URL}/images/og-image.png`

export function useSeo(meta: SeoMeta) {
  const route = useRoute()

  const updateMetaTags = () => {
    const fullTitle = meta.title.includes('HawkOps') ? meta.title : `${meta.title} | HawkOps`
    const fullUrl = meta.url || `${BASE_URL}${route.path}`
    const image = meta.image || DEFAULT_IMAGE

    // Update title
    document.title = fullTitle

    // Helper to update or create meta tag
    const setMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        const attrName = selector.includes('property=') ? 'property' : 'name'
        const attrValue = selector.match(/(?:name|property)="([^"]+)"/)?.[1]
        if (attrValue) {
          element.setAttribute(attrName, attrValue)
        }
        document.head.appendChild(element)
      }
      element.setAttribute(attribute, content)
    }

    // Primary meta tags
    setMetaTag('meta[name="title"]', 'content', fullTitle)
    setMetaTag('meta[name="description"]', 'content', meta.description)
    if (meta.keywords) {
      setMetaTag('meta[name="keywords"]', 'content', meta.keywords)
    }

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', fullTitle)
    setMetaTag('meta[property="og:description"]', 'content', meta.description)
    setMetaTag('meta[property="og:url"]', 'content', fullUrl)
    setMetaTag('meta[property="og:image"]', 'content', image)
    setMetaTag('meta[property="og:type"]', 'content', meta.type || 'website')

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle)
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description)
    setMetaTag('meta[name="twitter:url"]', 'content', fullUrl)
    setMetaTag('meta[name="twitter:image"]', 'content', image)
    setMetaTag('meta[name="twitter:card"]', 'content', meta.twitterCard || 'summary_large_image')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = meta.canonical || fullUrl

    // Structured data
    if (meta.structuredData) {
      // Remove existing page-specific structured data
      const existingScript = document.querySelector('script[data-page-structured-data]')
      if (existingScript) {
        existingScript.remove()
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-page-structured-data', 'true')
      script.textContent = JSON.stringify(meta.structuredData)
      document.head.appendChild(script)
    }
  }

  onMounted(() => {
    updateMetaTags()
  })

  watch(() => route.path, () => {
    updateMetaTags()
  })

  return {
    updateMetaTags
  }
}

// Pre-defined SEO configurations for each page
export const seoConfigs = {
  home: {
    title: 'HawkOps | Cybersecurity Experts - Penetration Testing & Security Solutions',
    description: 'HawkOps is a leading cybersecurity consultancy with 12+ years of experience. We offer penetration testing, security assessments, code review, and red team operations. Protect your business from cyber threats today.',
    keywords: 'cybersecurity, penetration testing, web application security, mobile security, code review, red team, security assessment, vulnerability assessment, ethical hacking, Dubai, UAE, Iraq, Baghdad, HawkOps',
  },
  about: {
    title: 'About Us - HawkOps Cybersecurity Consultancy',
    description: 'Learn about HawkOps, a cybersecurity consultancy with over 12 years of experience. Our expert team specializes in offensive security, vulnerability research, and protecting businesses from cyber threats.',
    keywords: 'about HawkOps, cybersecurity company, security experts, offensive security team, vulnerability researchers, Dubai cybersecurity',
  },
  contact: {
    title: 'Contact HawkOps - Get Cybersecurity Support',
    description: 'Contact HawkOps for cybersecurity services. Reach our team of experts in Dubai, UAE and Baghdad, Iraq. Email: info@hawkops.io. Get a free security consultation today.',
    keywords: 'contact HawkOps, cybersecurity contact, security consultation, Dubai security company, Iraq cybersecurity',
  },
  services: {
    title: 'Cybersecurity Services - Penetration Testing, Code Review & More',
    description: 'Comprehensive cybersecurity services from HawkOps including web application penetration testing, mobile security, infrastructure testing, source code review, and red team operations.',
    keywords: 'cybersecurity services, penetration testing services, security assessment, vulnerability testing, code review services, red team services',
  },
  webPentest: {
    title: 'Web Application Penetration Testing Services | HawkOps',
    description: 'Expert web application penetration testing to identify vulnerabilities in your web apps. OWASP methodology, manual testing, and comprehensive security reports. Protect your web applications today.',
    keywords: 'web application penetration testing, web security testing, OWASP testing, web vulnerability assessment, application security, SQL injection testing, XSS testing',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Web Application Penetration Testing',
      provider: {
        '@type': 'Organization',
        name: 'HawkOps'
      },
      description: 'Comprehensive web application penetration testing to identify and exploit vulnerabilities before malicious actors can.',
      areaServed: ['AE', 'IQ', 'SA', 'KW', 'QA', 'BH', 'OM'],
      serviceType: 'Cybersecurity'
    }
  },
  mobilePentest: {
    title: 'Mobile Application Penetration Testing | iOS & Android Security',
    description: 'Mobile application security testing for iOS and Android apps. OWASP MSTG methodology, binary analysis, runtime testing, and API security assessment. Secure your mobile apps.',
    keywords: 'mobile penetration testing, iOS security testing, Android security, mobile app security, OWASP MSTG, mobile vulnerability assessment, app security testing',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Mobile Application Penetration Testing',
      provider: {
        '@type': 'Organization',
        name: 'HawkOps'
      },
      description: 'Comprehensive mobile application security testing for iOS and Android platforms following OWASP MSTG standards.',
      areaServed: ['AE', 'IQ', 'SA', 'KW', 'QA', 'BH', 'OM'],
      serviceType: 'Cybersecurity'
    }
  },
  infrastructurePentest: {
    title: 'Infrastructure Penetration Testing | Network Security Assessment',
    description: 'Infrastructure and network penetration testing services. Internal and external security assessments, server testing, firewall evaluation, and comprehensive vulnerability identification.',
    keywords: 'infrastructure penetration testing, network security testing, internal pentest, external pentest, server security, network vulnerability assessment',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Infrastructure Penetration Testing',
      provider: {
        '@type': 'Organization',
        name: 'HawkOps'
      },
      description: 'Complete infrastructure penetration testing including network, servers, and cloud environment security assessment.',
      areaServed: ['AE', 'IQ', 'SA', 'KW', 'QA', 'BH', 'OM'],
      serviceType: 'Cybersecurity'
    }
  },
  codeReview: {
    title: 'Secure Code Review Services | Source Code Security Analysis',
    description: 'Professional source code security review services. Manual and automated code analysis to identify vulnerabilities, insecure coding practices, and security flaws in your application code.',
    keywords: 'secure code review, source code analysis, code security audit, SAST, static analysis, secure coding, code vulnerability assessment',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Secure Source Code Review',
      provider: {
        '@type': 'Organization',
        name: 'HawkOps'
      },
      description: 'Comprehensive source code security review combining automated tools with expert manual analysis.',
      areaServed: ['AE', 'IQ', 'SA', 'KW', 'QA', 'BH', 'OM'],
      serviceType: 'Cybersecurity'
    }
  },
  redTeam: {
    title: 'Red Team Operations | Advanced Adversary Simulation',
    description: 'Red team operations and adversary simulation services. Test your organization\'s detection and response capabilities against sophisticated real-world attack scenarios.',
    keywords: 'red team operations, adversary simulation, red team assessment, APT simulation, security operations testing, purple team, threat simulation',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Red Team Operations',
      provider: {
        '@type': 'Organization',
        name: 'HawkOps'
      },
      description: 'Advanced red team operations simulating sophisticated adversary attacks to test detection and response capabilities.',
      areaServed: ['AE', 'IQ', 'SA', 'KW', 'QA', 'BH', 'OM'],
      serviceType: 'Cybersecurity'
    }
  },
  darkWebMonitoring: {
    title: 'Dark Web Monitoring & Threat Intelligence | Data Breach Detection',
    description: 'Proactive Dark Web monitoring and threat intelligence to detect compromised credentials, data breaches, and security threats. Protect your organization from cybercriminals operating in underground forums and marketplaces.',
    keywords: 'dark web monitoring, threat intelligence, data breach detection, compromised credentials, credential monitoring, dark web surveillance, cyber threat detection, breach alerts, security monitoring, threat hunting, cyber intelligence, leaked data detection',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Dark Web Monitoring & Threat Intelligence',
      provider: {
        '@type': 'Organization',
        name: 'HawkOps'
      },
      description: 'Continuous Dark Web monitoring and threat intelligence to detect compromised credentials, data breaches, and emerging threats before they impact your organization.',
      areaServed: ['AE', 'IQ', 'SA', 'KW', 'QA', 'BH', 'OM'],
      serviceType: 'Cybersecurity'
    }
  }
}
