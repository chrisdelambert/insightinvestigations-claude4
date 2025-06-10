import React from 'react'

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://insightinvestigations.co.nz/#business",
    "name": "Insight Investigations",
    "legalName": "Insight Investigations",
    "url": "https://insightinvestigations.co.nz",
    "logo": "https://insightinvestigations.co.nz/logo.png",
    "image": "https://insightinvestigations.co.nz/logo.png",
    "description": "Licensed private investigator based in Christchurch, New Zealand. Professional surveillance, background checks, missing persons, and confidential investigation services throughout NZ.",
    "founder": {
      "@type": "Person",
      "name": "Luke Valentine",
      "jobTitle": "Licensed Private Investigator"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Christchurch",
      "addressRegion": "Canterbury",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -43.5321,
      "longitude": 172.6362
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "New Zealand"
      },
      {
        "@type": "City", 
        "name": "Christchurch"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Canterbury"
      }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+64-27-226-8728",
      "email": "luke@insightinvestigations.co.nz",
      "contactType": "Customer Service",
      "areaServed": "NZ",
      "availableLanguage": "English"
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investigation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Surveillance & Monitoring",
            "description": "Professional observation and evidence gathering with complete discretion"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Background Checks",
            "description": "Comprehensive background investigation and verification services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Missing Person Investigation",
            "description": "Professional people tracing and location services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cheating Partner Investigation", 
            "description": "Discreet matrimonial and relationship investigations"
          }
        }
      ]
    },
    "priceRange": "$$",
    "currenciesAccepted": "NZD",
    "paymentAccepted": "Cash, Bank Transfer",
    "openingHours": "Mo-Fr 09:00-17:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}