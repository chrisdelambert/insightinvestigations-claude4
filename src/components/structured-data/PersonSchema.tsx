import React from 'react'

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://insightinvestigations.co.nz/about#luke-valentine",
    "name": "Luke Valentine",
    "jobTitle": "Licensed Private Investigator",
    "description": "Licensed Private Investigator with experience in criminal and insurance investigations, providing professional investigation services throughout New Zealand.",
    "url": "https://insightinvestigations.co.nz/about",
    "worksFor": {
      "@type": "LocalBusiness",
      "@id": "https://insightinvestigations.co.nz/#business",
      "name": "Insight Investigations"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Private Investigator",
      "occupationLocation": {
        "@type": "City",
        "name": "Christchurch",
        "containedInPlace": {
          "@type": "Country",
          "name": "New Zealand"
        }
      }
    },
    "knowsAbout": [
      "Private Investigation",
      "Surveillance",
      "Background Checks",
      "Evidence Gathering",
      "Criminal Investigation",
      "Insurance Investigation",
      "Legal Investigation"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+64-27-226-8728",
      "email": "luke@insightinvestigations.co.nz",
      "contactType": "Professional"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}