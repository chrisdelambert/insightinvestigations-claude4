'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    id: 1,
    slug: 'cheating-partner-investigations',
    title: 'Our Cheating Partner Investigations',
    subtitle: 'Because living in doubt is worse than knowing the truth.',
    excerpt: 'At Insight Investigations, we specialise in one of the most emotionally difficult areas of private investigation: cheating partners. If you suspect your partner is being unfaithful, you\'re not alone and you\'re not wrong for wanting answers.',
    date: '2025-08-23',
    readTime: '5 min read',
    image: '/images/cheating_partner_image_converted.jpg',
    category: 'Investigations'
  }
]

export default function BlogPage() {
  return (
    <div className="relative isolate min-h-screen bg-background pt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
            Latest Insights
          </h1>
          <p className="mt-6 text-xl leading-8 text-secondary">
            Expert insights, case studies, and professional guidance from New Zealand's trusted private investigators.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <CalendarDaysIcon className="w-4 h-4 mr-2" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-NZ', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title and Subtitle */}
                    <h2 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-200 font-serif mb-2">
                      {post.title}
                    </h2>
                    {post.subtitle && (
                      <h3 className="text-sm font-medium text-gray-300 mb-3 italic">
                        {post.subtitle}
                      </h3>
                    )}

                    {/* Excerpt */}
                    <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-200">
                      Read full article
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Empty State for Future Posts */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4 font-serif">
              More Articles Coming Soon
            </h3>
            <p className="text-gray-300 mb-6">
              We're regularly adding new insights and case studies. Stay tuned for more expert guidance on investigations and security matters.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              Have a Question?
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}