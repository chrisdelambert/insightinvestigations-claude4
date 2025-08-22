'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  ArrowLeftIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

const blogPosts = {
  'cheating-partner-investigations': {
    id: 1,
    slug: 'cheating-partner-investigations',
    title: 'Our Cheating Partner Investigations',
    subtitle: 'Because living in doubt is worse than knowing the truth.',
    date: '2025-08-23',
    readTime: '5 min read',
    image: '/images/cheating_partner_image_converted.jpg',
    category: 'Investigations',
    content: `
At Insight Investigations, we specialise in one of the most emotionally difficult areas of private investigation: cheating partners. If you suspect your partner is being unfaithful, you're not alone and you're not wrong for wanting answers.

## The Reality of Infidelity

Infidelity is more common than most people realise. Research shows that around 22% of men and 14% of women admit to cheating on a partner during a relationship. And those figures only include the people who were willing to admit it. With dating apps, private messaging, and social media making secrecy easier than ever, these numbers are likely even higher.

But what's worse than being cheated on?

**Not knowing.**

The suspicion. The constant guessing. The sleepless nights. Living in that fog of uncertainty is exhausting, and it erodes your confidence and peace of mind.

That's where we come in.

## What We Do

Our investigations are tailored to your situation and carried out with complete discretion. You don't need to confront your partner or risk damaging your relationship further by snooping; we handle it professionally, quietly, and legally.

We use proven techniques, including:

• **Physical surveillance**: Monitoring movements to confirm where they are and who they're with.

• **Social media and dating app analysis**: Searching for evidence of secret profiles or online activity.

• **Background checks**: Investigating unexplained trips, unknown addresses, or suspicious third parties.

• **Neighbourhood and lifestyle inquiries**: Gathering discreet intel when needed.

## What You Get

You'll receive a clear, evidence-based report of our findings, complete with photos or video (where applicable). Whether we confirm infidelity or prove your suspicions wrong, you'll gain clarity, control, and peace of mind.

Because knowledge is power, and once you know the truth, you can decide your next move with confidence.

## Take the First Step

Stop wondering. Stop doubting yourself. You deserve answers.

Visit [insightinvestigations.co.nz](/) or [cheaters.co.nz](https://cheaters.co.nz) for a free, confidential consultation.

---

**Summary:**

At Insight Investigations, we specialise in discreet, professional cheating partner investigations. With around 22% of men and 14% of women admitting to infidelity, suspicions are often well-founded. We use proven techniques like surveillance, social media analysis, and background checks to uncover the truth - giving you clear evidence and peace of mind. Because knowing is always better than wondering. Visit [cheaters.co.nz](https://cheaters.co.nz) to take the first step.
    `
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 font-serif">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={index} className="text-lg font-semibold text-white mb-4 text-center">
            {paragraph.replace(/\*\*(.*)\*\*/, '$1')}
          </p>
        )
      }
      if (paragraph.startsWith('• ')) {
        const items = paragraph.split('\n').filter(item => item.startsWith('• '))
        return (
          <ul key={index} className="space-y-3 mb-6">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0" />
                <span 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: item.replace('• ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                  }}
                />
              </li>
            ))}
          </ul>
        )
      }
      if (paragraph.startsWith('---')) {
        return <hr key={index} className="border-gray-600 my-8" />
      }
      if (paragraph.trim()) {
        return (
          <p 
            key={index} 
            className="text-gray-300 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>')
            }}
          />
        )
      }
      return null
    }).filter(Boolean)
  }

  return (
    <div className="relative isolate min-h-screen bg-background pt-20">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        <article>
          {/* Header */}
          <motion.header
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-sm font-medium text-gray-200">
                {post.category}
              </span>
            </div>

            {/* Title and Subtitle */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif mb-4">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-xl text-gray-300 italic mb-6">
                {post.subtitle}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 mb-8">
              <div className="flex items-center">
                <CalendarDaysIcon className="w-4 h-4 mr-2" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-NZ', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-gray-300 leading-relaxed space-y-6">
              {formatContent(post.content)}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-12 bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Need Professional Investigation Services?
            </h3>
            <p className="text-gray-300 mb-6">
              Every case is unique. Get a free, confidential consultation to discuss how we can help you find the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-200"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services/cheating-partner"
                className="inline-flex items-center rounded-lg border border-gray-600 bg-gray-800 px-6 py-3 text-base font-semibold text-white hover:bg-gray-700 transition-all duration-200"
              >
                Learn More About This Service
              </Link>
            </div>
          </motion.div>
        </article>

        {/* Back to Blog */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
        </motion.div>
      </div>
    </div>
  )
}