import React from 'react'

interface BlogPostSchemaProps {
  title: string
  description: string
  slug: string
  date: string
  image: string
}

export function BlogPostSchema({ title, description, slug, date, image }: BlogPostSchemaProps) {
  const siteUrl = 'https://insightinvestigations.co.nz'

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": `${siteUrl}${image}`,
    "url": `${siteUrl}/blog/${slug}`,
    "datePublished": date,
    "dateModified": date,
    "author": {
      "@type": "Person",
      "name": "Luke Valentine",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Insight Investigations",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
