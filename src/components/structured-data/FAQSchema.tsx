import React from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://insightinvestigations.co.nz/faq#faq",
    "name": "Private Investigation Services FAQ",
    "description": "Frequently asked questions about private investigation services in New Zealand",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `https://insightinvestigations.co.nz/faq#question-${index}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}