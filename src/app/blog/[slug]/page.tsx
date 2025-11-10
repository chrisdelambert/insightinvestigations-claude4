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
  'bug-sweeping-protecting-your-privacy': {
    id: 2,
    slug: 'bug-sweeping-protecting-your-privacy',
    title: 'Bug Sweeping – Protecting Your Privacy',
    subtitle: 'Peace of Mind. Comprehensive. Secure.',
    date: '2025-10-22',
    readTime: '5 min read',
    image: '/images/bug_detector_device.jpg',
    category: 'Privacy & Security',
    serviceLink: '/services/bug-sweeping',
    content: `
At Insight Investigations, we understand that privacy isn't a luxury — it's a necessity. Whether it's your home, your rental, your office, or even a short-term stay like an Airbnb, the thought that someone could be listening, watching, or tracking is deeply unsettling. That's where our bug sweeping service comes in.

## The Hidden Reality

You might assume that hidden cameras and listening devices belong in spy movies. But the truth is, they're more common than most people realise — and easier than ever to purchase and hide.

A survey by Inman News revealed that respondents reported finding hidden cameras in Airbnb or rental properties an alarming one in ten times they stayed somewhere new. Meanwhile, a UK study conducted by YouGov found that 14% of people admitted to secretly recording someone without their knowledge.

Judging by these statistics, covert recording devices may be far more widespread than expected. Estimates suggest that up to 10% of homes, offices, and short-term rentals could have hidden cameras or microphones at any given time.

These aren't rare cases — they're warning signs that modern technology has made surveillance cheap, discreet, and accessible to anyone with a motive.

## Why Bug Sweeping Makes Sense

• Hidden cameras, microphones, and GPS trackers are small, affordable, and easy to conceal.

• Short-term rentals, motels, and shared offices are frequent targets — devices can be planted and forgotten.

• Business and legal environments are at risk of corporate spying or data theft.

• Once in place, a hidden device can record or transmit data continuously without detection.

• Public showers and toilets are particularly susceptible to being bugged.

• Relationship breakups can end with devices being planted and privacy affected.

A professional bug sweep helps identify and eliminate these risks — restoring confidence and privacy where it matters most.

## What a Professional Bug Sweep Involves

When you engage Insight Investigations, the process is discreet and precise — carried out by an expert using professional-grade TSCM (Technical Surveillance Counter-Measures) equipment.

• **Confidential discussion** to understand your concerns and identify areas to inspect.

• **Full sweep** of your home, office, vehicle, council building, or rental using specialised detection tools.

• **Detection** of hidden cameras, microphones, GPS trackers, and wireless transmitters.

• **Immediate advice and documentation** if a device is located.

• **Summary report** detailing what was checked, what was found, and recommended next steps.

• **Ongoing security advice**.

## When You Should Consider a Sweep

• Staying in an Airbnb, motel, or short-term rental, and want to ensure your privacy.

• Moving into a new rental, office, or commercial space and need reassurance before settling in.

• Holding meetings in council buildings, shared offices, or public venues where confidentiality matters.

• After a breakup, tenancy dispute, or workplace conflict, when you suspect monitoring.

• Experiencing unusual phone interference, fast battery drain, or suspicious tracking alerts.

• Managing sensitive business, legal, or personal information that must remain private.

## Taking the First Step

You don't need to be certain — only suspicious. A professional sweep doesn't assume you're being watched; it confirms whether you are. Contact Insight Investigations for a confidential consultation. We'll explain the process, carry out a comprehensive sweep, and provide a clear, evidence-based report — so you can make informed decisions and take back control of your privacy.

Visit [insightinvestigations.co.nz](/) for a free, confidential consultation.

---

**Summary:**

Hidden cameras and listening devices are more common than most realise. Using professional TSCM equipment, Insight Investigations detects and removes covert devices from homes, rentals, vehicles, and offices — restoring your privacy and peace of mind.
    `
  },
  'cheating-partner-investigations': {
    id: 1,
    slug: 'cheating-partner-investigations',
    title: 'Our Cheating Partner Investigations',
    subtitle: 'Because living in doubt is worse than knowing the truth.',
    date: '2025-08-23',
    readTime: '5 min read',
    image: '/images/cheating_partner_image_converted.jpg',
    category: 'Investigations',
    serviceLink: '/services/cheating-partner',
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
                href={post.serviceLink}
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