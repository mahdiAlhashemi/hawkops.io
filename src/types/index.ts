export interface NavItem {
  label: string
  href: string
  isDropdown?: boolean
  children?: NavItem[]
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  icon: string
  heroImage?: string
  intro: ServiceIntro
  points: ServicePoints
  benefits?: ServiceBenefit[]
  comparison?: ServiceComparison
  methodology?: MethodologyPhase[]
}

export interface ServiceIntro {
  title: string
  description: string
}

export interface ServicePoints {
  title: string
  description: string
  items: string[]
}

export interface ServiceBenefit {
  title: string
  icon: string
  description: string
}

export interface ServiceComparison {
  internal: { title: string; items: string[] }
  external: { title: string; items: string[] }
}

export interface MethodologyPhase {
  title: string
  content: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Client {
  name: string
  logo: string
}

export interface Acknowledgment {
  name: string
  logo: string
}

export interface Certification {
  name: string
  image: string
}

export interface ContactInfo {
  email: string
  phones: string[]
  locations: string[]
  social: {
    twitter: string
    linkedin: string
  }
}
