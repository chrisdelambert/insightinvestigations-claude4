import React from 'react'

interface ServiceSchemaProps {
  service: {
    name: string
    description: string
    id: string
  }
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://insightinvestigations.co.nz/services#${service.id}`,
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Insight Investigations",
      "url": "https://insightinvestigations.co.nz"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://insightinvestigations.co.nz/contact",
      "servicePhone": "+64-27-226-8728"
    },
    "category": "Private Investigation Services",
    "serviceType": "Professional Investigation",
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Country",
        "name": "New Zealand"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}