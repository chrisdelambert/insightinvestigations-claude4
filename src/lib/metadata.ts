import { Metadata } from 'next'

const siteUrl = 'https://insightinvestigations.co.nz'
const siteName = 'Insight Investigations'
const defaultTitle = 'Insight Investigations | Professional Private Investigation Services'
const defaultDescription = 'Licensed private investigator based in Christchurch, Canterbury. Specializing in cheating partner investigations and bug sweeping services. Modern approach with complete discretion throughout South Island NZ.'

export interface SEOConfig {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description = defaultDescription,
  path = '',
  image = '/logo.png',
  type = 'website',
  noIndex = false
}: SEOConfig = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle
  const url = `${siteUrl}${path}`
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return {
    title: fullTitle,
    description,
    applicationName: siteName,
    authors: [{ name: 'Luke Valentine', url: siteUrl }],
    creator: 'Luke Valentine',
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    icons: {
      icon: '/favicon.png',
      apple: '/apple-touch-icon.png',
    },
    themeColor: '#0b0b0b',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: 'en_NZ',
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@insightinvestigations',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large' as const,
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    keywords: [
      'private investigator Christchurch',
      'cheating partner investigation',
      'bug sweeping',
      'hidden camera detection',
      'surveillance',
      'background checks',
      'Canterbury',
      'New Zealand',
    ],
    classification: 'business',
    category: 'Investigation Services',
  }
}

// Predefined metadata for common pages
export const homeMetadata = generateMetadata({
  title: 'Cheating Partner & Bug Sweeping Christchurch Investigations',
  description: 'Specialised private investigators in hidden camera bug sweeping, cheating partner investigations, and Privacy Certification, delivering reassurance where privacy and trust matter.',
  path: '/',
})

export const servicesMetadata = generateMetadata({
  title: 'Private Investigation Services | Christchurch Canterbury',
  description: 'Christchurch private investigator specializing in cheating partner investigations and bug sweeping services. Professional surveillance, background checks, and confidential investigation services throughout Canterbury.',
  path: '/services',
})

export const aboutMetadata = generateMetadata({
  title: 'About Luke Valentine - Licensed Private Investigator',
  description: 'Meet Luke Valentine, licensed private investigator in Christchurch, New Zealand. Experienced in criminal investigations, insurance claims, and confidential private investigation services.',
  path: '/about',
})

export const contactMetadata = generateMetadata({
  title: 'Contact Us - Free Consultation',
  description: 'Contact Insight Investigations for a free, confidential consultation. Licensed private investigator serving Christchurch and all of New Zealand. Call or email today.',
  path: '/contact',
})

export const faqMetadata = generateMetadata({
  title: 'Frequently Asked Questions',
  description: 'Common questions about private investigation services in New Zealand. Learn about our process, costs, legal requirements, and what to expect from professional investigation services.',
  path: '/faq',
})

export const privacyCertificationMetadata = generateMetadata({
  title: 'Hidden Camera Detection NZ | Privacy Certification & Bug Sweeps',
  description: 'Professional hidden camera detection and privacy certification in Christchurch, Canterbury. TSCM inspection and bug sweep services using BugHunter Pro equipment. Licensed PI, independent reporting.',
  path: '/privacy-certification',
})