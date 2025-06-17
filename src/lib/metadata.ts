import { Metadata } from 'next'

const siteUrl = 'https://insightinvestigations.co.nz'
const siteName = 'Insight Investigations'
const defaultTitle = 'Insight Investigations | Professional Private Investigation Services'
const defaultDescription = 'Licensed private investigator based in Christchurch, Canterbury. Specializing in cheating partner investigations and school zoning verification. Modern approach with complete discretion throughout South Island NZ.'

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
    alternates: {
      canonical: url,
      languages: {
        'en-NZ': url,
        'en': url,
      },
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
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    keywords: [
      'private investigator',
      'private detective',
      'cheating partner investigation',
      'infidelity investigator',
      'school zoning investigation',
      'address verification',
      'investigation services',
      'surveillance',
      'background checks',
      'missing persons',
      'Christchurch',
      'Canterbury',
      'New Zealand',
      'licensed investigator',
      'professional investigation',
      'confidential investigation',
      'evidence gathering',
      'matrimonial investigation',
      'education sector investigation',
      'South Island investigator',
      'modern investigation services'
    ],
    classification: 'business',
    category: 'Investigation Services',
    ...(noIndex && { robots: 'noindex, nofollow' }),
  }
}

// Predefined metadata for common pages
export const homeMetadata = generateMetadata({
  title: 'Cheating Partner & School Zoning Investigations | Christchurch',
  description: 'Specialized private investigator in Christchurch, Canterbury. Expert in cheating partner investigations and school zoning verification. Modern approach, complete discretion. Licensed professional serving South Island NZ.',
  path: '/',
})

export const servicesMetadata = generateMetadata({
  title: 'Private Investigation Services | Christchurch Canterbury',
  description: 'Christchurch private investigator specializing in cheating partner investigations and school zoning verification. Professional surveillance, background checks, and confidential investigation services throughout Canterbury.',
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