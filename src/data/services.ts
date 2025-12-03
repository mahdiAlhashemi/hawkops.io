import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web-pentest',
    slug: 'web-penetration-testing',
    title: 'Web Application Penetration Testing',
    shortDescription: 'Safeguard your IT infrastructure with our expert Vulnerability Assessment services. Identify and address security weaknesses effectively.',
    icon: '/images/services/webapp-pentest.png',
    heroImage: '/images/global/WEB_APT.png',
    intro: {
      title: 'Web applications Penetration Testing',
      description: `In today's digital landscape, web applications have become essential tools for businesses, serving as the primary interface for customers, partners, and employees. However, this increased reliance also brings significant security risks. Unauthorized access, data breaches, and cyberattacks can have devastating consequences, including financial losses, reputational damage, and legal liabilities.

At HawkOps, we specialize in web application penetration testing, a rigorous process designed to identify and exploit vulnerabilities within your web applications. Our team of expert ethical hackers simulates real-world attacks to uncover weaknesses before malicious actors can exploit them.`
    },
    points: {
      title: 'Web Penetration testing?',
      description: 'We begin by thoroughly mapping the attack surface of your web application, using intelligence-gathering techniques to identify all potential entry points and targets for exploitation.',
      items: [
        'We replicate the information-gathering techniques employed by adversaries to build a comprehensive understanding of your web application\'s vulnerabilities.',
        'We deconstruct your application\'s architecture, mapping its various components and interactions to identify potential weaknesses.',
        'We leverage both manual analysis and automated tools to detect vulnerabilities that could be exploited by attackers.'
      ]
    },
    comparison: {
      internal: {
        title: 'Internal',
        items: [
          'Assume the tester has some level of access or knowledge about the internal systems.',
          'Test from within the organization\'s network.',
          'Focus on vulnerabilities that could be exploited by insider threats or after initial compromise.',
          'Assess internal applications, databases, and services.'
        ]
      },
      external: {
        title: 'External',
        items: [
          'Simulate an attack from an outsider with no prior knowledge of the system.',
          'Test from outside the organization\'s network.',
          'Focus on publicly accessible services and applications.',
          'Identify vulnerabilities that could be exploited by external attackers.'
        ]
      }
    }
  },
  {
    id: 'mobile-pentest',
    slug: 'mobile-application',
    title: 'Mobile Application Penetration Testing',
    shortDescription: 'Safeguard your IT infrastructure with our expert Vulnerability Assessment services. Identify and address security weaknesses effectively.',
    icon: '/images/services/mobile-pentest.png',
    heroImage: '/images/services/mobile-pentest.png',
    intro: {
      title: 'Mobile Application Penetration Testing',
      description: `We perform manual and dynamic analysis of your mobile application, using a combination of manual testing techniques and advanced analysis tools. Our comprehensive approach aligns with the OWASP Mobile Security Testing Guide (MSTG) and the Mobile Application Security Verification Standard (MASVS).

These methodologies provide a robust framework for assessing mobile application security. We focus on identifying client-side vulnerabilities, insecure data storage practices, weak authentication mechanisms, insufficient transport layer security, and other critical issues.`
    },
    points: {
      title: 'We attack mobile apps just like the bad guys do...',
      description: 'Our team simulates real-world attack scenarios to uncover vulnerabilities in your mobile applications before malicious actors can exploit them.',
      items: [
        'We analyze the application\'s binary and source code to identify hardcoded secrets, insecure coding practices, and potential backdoors.',
        'We test runtime behaviors, API communications, and data handling to detect vulnerabilities in real-time operation.',
        'We evaluate the application\'s resistance to reverse engineering and tampering attempts.'
      ]
    },
    benefits: [
      {
        title: 'Simulate attacks to rigorously assess security posture',
        icon: '/images/features/Attack-Surface.png',
        description: 'Comprehensive attack simulations that mirror real-world threat scenarios.'
      },
      {
        title: 'Enhance compliance and governance measures',
        icon: '/images/features/hacker.png',
        description: 'Ensure your mobile applications meet industry security standards and regulations.'
      },
      {
        title: 'Uncover vulnerabilities through advanced analysis',
        icon: '/images/features/lifeline.png',
        description: 'Deep analysis techniques to find hidden security flaws.'
      },
      {
        title: 'Identify and expose all attack vectors',
        icon: '/images/features/Attack-Surface.png',
        description: 'Comprehensive mapping of potential entry points for attackers.'
      }
    ]
  },
  {
    id: 'code-review',
    slug: 'secure-code-review',
    title: 'Source Code Review',
    shortDescription: 'Safeguard your IT infrastructure with our expert Vulnerability Assessment services. Identify and address security weaknesses effectively.',
    icon: '/images/services/code-review.png',
    heroImage: '/images/global/WEB_APT.png',
    intro: {
      title: 'Secure Your Software Development Lifecycle',
      description: `Our secure code review service employs a hybrid approach, combining automated analysis tools with expert manual review to identify vulnerabilities in your application's source code.

We thoroughly examine your codebase to detect security flaws such as injection vulnerabilities, authentication weaknesses, cryptographic issues, and other coding practices that could expose your application to attacks.`
    },
    points: {
      title: 'We thoroughly cover the entire spectrum of application code',
      description: 'Our security experts are proficient in multiple programming languages and frameworks, enabling us to conduct comprehensive reviews across diverse technology stacks.',
      items: [
        'We identify vulnerable code patterns and insecure implementations that could lead to exploitation.',
        'We evaluate your application\'s adherence to secure coding best practices and industry standards.',
        'We provide actionable remediation guidance with code-level recommendations.'
      ]
    },
    benefits: [
      {
        title: 'Gain Insight into Your Application\'s Code-based Attack Surface',
        icon: '/images/features/Attack-Surface.png',
        description: 'Understand the full scope of potential vulnerabilities in your codebase.'
      },
      {
        title: 'Examine Code from an Adversary\'s Perspective',
        icon: '/images/features/hacker.png',
        description: 'Our experts think like attackers to find vulnerabilities others miss.'
      },
      {
        title: 'Identify Vulnerabilities Targeted by Real-World Adversaries',
        icon: '/images/features/lifeline.png',
        description: 'Focus on the security issues that attackers actively exploit.'
      },
      {
        title: 'Enhance Secure Coding Practices Throughout Development Lifecycle',
        icon: '/images/features/Attack-Surface.png',
        description: 'Build security into your development process from the start.'
      }
    ]
  },
  {
    id: 'infrastructure-pentest',
    slug: 'penetration-testing',
    title: 'Infrastructure Penetration Testing',
    shortDescription: 'Safeguard your IT infrastructure with our expert Vulnerability Assessment services. Identify and address security weaknesses effectively.',
    icon: '/images/services/infrastructure.png',
    heroImage: '/images/global/pentest-removebg.png',
    intro: {
      title: 'Infrastructure Penetration Testing',
      description: `In the digital age, the security of your IT infrastructure is paramount. Our Infrastructure Penetration Testing service simulates real-world cyberattacks on your network systems, servers, and connected devices to identify vulnerabilities before they can be exploited by malicious actors.

We evaluate your entire infrastructure ecosystem, including firewalls, routers, servers, workstations, and cloud environments, to provide a comprehensive security assessment that helps you strengthen your defenses.`
    },
    points: {
      title: 'Who Needs a Penetration testing?',
      description: 'Any organization that relies on IT infrastructure to conduct business operations can benefit from penetration testing. This includes businesses of all sizes across various industries.',
      items: [
        'Organizations handling sensitive customer data or intellectual property.',
        'Companies required to meet regulatory compliance standards such as PCI DSS, HIPAA, or SOC 2.'
      ]
    },
    comparison: {
      internal: {
        title: 'Internal',
        items: [
          'Simulates an attack from within the corporate network.',
          'Tests the security of internal systems, databases, and applications.',
          'Evaluates lateral movement possibilities after initial access.',
          'Assesses the effectiveness of internal security controls.'
        ]
      },
      external: {
        title: 'External',
        items: [
          'Simulates an attack from outside the organization.',
          'Tests perimeter security including firewalls, DMZ, and public-facing services.',
          'Identifies vulnerabilities in externally accessible systems.',
          'Evaluates the organization\'s exposure to internet-based threats.'
        ]
      }
    }
  },
  {
    id: 'redteam',
    slug: 'redteam',
    title: 'Red Team Operations',
    shortDescription: 'Comprehensive adversary simulation to test your organization\'s detection and response capabilities.',
    icon: '/images/services/infrastructure.png',
    heroImage: '/images/global/redteam.png',
    intro: {
      title: 'Red Team Operations',
      description: `Red Team Operations go beyond traditional penetration testing by simulating sophisticated, multi-stage attacks that mirror the tactics, techniques, and procedures (TTPs) used by advanced persistent threats (APTs) and real-world adversaries.

Our red team engagements test not only your technical defenses but also your people, processes, and detection capabilities. We operate covertly over an extended period, using the same methods that real attackers employ, to provide a true assessment of your organization's security posture.`
    },
    points: {
      title: 'Who Needs a Red Teaming?',
      description: 'Red team assessments are ideal for organizations with mature security programs that want to validate their detection and response capabilities against sophisticated threats.',
      items: [
        'Organizations that have already implemented robust security controls and want to test their effectiveness.',
        'Companies seeking to evaluate their security operations center (SOC) and incident response capabilities.'
      ]
    },
    methodology: [
      {
        title: 'Preparation',
        content: 'During the preparation phase, we work with your organization to define the scope, objectives, and rules of engagement. We establish communication channels, identify key stakeholders, and ensure minimal employee awareness to maintain the authenticity of the assessment.'
      },
      {
        title: 'Implementation',
        content: 'Our red team conducts reconnaissance, develops custom attack scenarios, and executes multi-stage attacks. This may include social engineering, physical intrusion attempts, and technical exploitation using custom tools and techniques designed to evade detection.'
      },
      {
        title: 'Report',
        content: 'We provide a comprehensive report detailing our findings, including the attack paths used, vulnerabilities discovered, and recommendations for improvement. Our focus is on enhancing your security awareness and capabilities without assigning blame.'
      }
    ]
  },
  {
    id: 'dark-web-monitoring',
    slug: 'dark-web-monitoring',
    title: 'Dark Web Monitoring & Threat Intelligence',
    shortDescription: 'Proactively monitor your security posture against Dark Web threats, data breaches, compromised credentials, and network infections.',
    icon: '/images/services/dark-web-monitoring.png',
    heroImage: '/images/services/dark-web-monitoring.png',
    intro: {
      title: 'Dark Web Monitoring & Threat Intelligence',
      description: `In the ever-evolving threat landscape, organizations face constant risks from data breaches, compromised credentials, and malicious actors operating in the shadows of the Dark Web. Our Dark Web Monitoring service provides continuous surveillance to detect and alert you to threats before they materialize into full-scale security incidents.

We monitor underground forums, marketplaces, paste sites, and other hidden channels where cybercriminals trade stolen data, compromised credentials, and exploit kits. Our proactive approach enables you to respond to threats swiftly, protecting your organization's reputation, assets, and customer trust.`
    },
    points: {
      title: 'Why Dark Web Monitoring?',
      description: 'Cybercriminals operate in hidden corners of the internet, trading stolen data and planning attacks. Our monitoring service brings visibility to these threats.',
      items: [
        'Detect compromised employee and customer credentials before they are exploited by attackers.',
        'Identify leaked sensitive data, intellectual property, and confidential documents on Dark Web marketplaces.',
        'Monitor for mentions of your organization, executives, and brand in underground forums and channels.',
        'Receive early warnings about planned attacks, vulnerabilities being traded, and emerging threats targeting your industry.'
      ]
    },
    benefits: [
      {
        title: 'Compromised Credentials Detection',
        icon: '/images/features/hacker.png',
        description: 'Identify stolen usernames, passwords, and authentication tokens before attackers can use them to breach your systems.'
      },
      {
        title: 'Data Breach Alerts',
        icon: '/images/features/Attack-Surface.png',
        description: 'Receive immediate notifications when your organization\'s data appears on Dark Web marketplaces or paste sites.'
      },
      {
        title: 'Network Infection Monitoring',
        icon: '/images/features/lifeline.png',
        description: 'Detect indicators of compromise and malware infections targeting your network infrastructure.'
      },
      {
        title: 'Brand & Executive Protection',
        icon: '/images/features/Attack-Surface.png',
        description: 'Monitor for impersonation attempts, phishing campaigns, and threats targeting your organization\'s leadership.'
      }
    ],
    methodology: [
      {
        title: 'Discovery',
        content: 'We begin by identifying your organization\'s digital footprint, including domains, email formats, executive names, and key assets. This baseline enables targeted monitoring across Dark Web sources relevant to your threat profile.'
      },
      {
        title: 'Continuous Monitoring',
        content: 'Our platform continuously scans Dark Web forums, marketplaces, paste sites, Telegram channels, and other underground sources. Advanced algorithms and human analysts work together to identify genuine threats and filter out noise.'
      },
      {
        title: 'Alert & Response',
        content: 'When threats are detected, you receive prioritized alerts with actionable intelligence. Our team provides context about the threat severity, potential impact, and recommended remediation steps to neutralize the risk.'
      }
    ]
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
