'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FAQSchema } from '../../components/structured-data/FAQSchema'
import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  ScaleIcon, 
  MapPinIcon
} from '@heroicons/react/24/outline'

const faqCategories = [
  {
    title: 'Privacy & Confidentiality',
    icon: ShieldCheckIcon,
    description: 'Your privacy and discretion are our top priorities',
    faqs: [
      {
        question: 'Is my enquiry confidential?',
        answer: 'Yes. All communication with Insight Investigations is completely private and handled with discretion.',
      },
      {
        question: 'Can I speak with a female?',
        answer: 'Yes, we understand that some situations are sensitive and offer the option to speak with a woman throughout the process.',
      },
    ]
  },
  {
    title: 'Legal & Compliance',
    icon: ScaleIcon,
    description: 'Licensed, legal, and court-ready investigations',
    faqs: [
      {
        question: 'How do you stay within the law?',
        answer: 'We\'re licensed investigators and comply with all New Zealand laws, including the Private Security Personnel and Private Investigators Act 2010.',
      },
      {
        question: 'Can your evidence be used in court?',
        answer: 'Yes, we gather and document evidence in accordance with legal requirements, ensuring it can be used in court proceedings if needed.',
      },
    ]
  },
  {
    title: 'Pricing & Process',
    icon: CurrencyDollarIcon,
    description: 'Transparent pricing and clear investigation process',
    faqs: [
      {
        question: 'What does it cost to hire a private investigator?',
        answer: 'Costs vary depending on the type and complexity of the case. We offer a free consultation to discuss your situation and provide a quote with no obligation.',
      },
      {
        question: 'How long does an investigation take?',
        answer: 'The duration varies depending on the type of investigation and complexity of the case. During your consultation, we\'ll provide an estimated timeline based on your specific needs.',
      },
      {
        question: 'What information do you need to start?',
        answer: 'The initial information needed varies by case type. During your free consultation, we\'ll guide you through the specific details required for your situation.',
      },
    ]
  },
  {
    title: 'Service Areas & Getting Started',
    icon: MapPinIcon,
    description: 'Coverage areas and how to begin your investigation',
    faqs: [
      {
        question: 'What areas do you cover?',
        answer: 'We\'re based in Christchurch and offer our services nationwide across New Zealand.',
      },
      {
        question: 'How do I get started?',
        answer: 'Contact us through our online form or email for a free, confidential consultation. We\'ll discuss your situation and explain how we can help.',
      },
    ]
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  // Flatten all FAQs for schema
  const allFAQs = faqCategories.flatMap(category => category.faqs)

  return (
    <div className="relative isolate">
      <FAQSchema faqs={allFAQs} />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions about our services and process. If you don't see what you're looking for, please don't hesitate to contact us.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground font-serif">
                      {category.title}
                    </h3>
                    <p className="text-sm text-secondary">{category.description}</p>
                  </div>
                </div>
                
                <dl className="space-y-4 divide-y divide-primary/10">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex; // Unique index across all categories
                    return (
                      <motion.div
                        key={faq.question}
                        className="pt-4 first:pt-0"
                        initial={false}
                        animate={{ backgroundColor: openIndex === globalIndex ? 'rgba(255, 255, 255, 0.03)' : 'transparent' }}
                        transition={{ duration: 0.2 }}
                      >
                        <dt>
                          <button
                            type="button"
                            className="flex w-full items-start justify-between text-left p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                            onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                          >
                            <span className="text-base font-semibold leading-7 text-foreground">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              <svg
                                className={`h-6 w-6 transform text-primary transition-transform duration-200 ${
                                  openIndex === globalIndex ? 'rotate-45' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                              </svg>
                            </span>
                          </button>
                        </dt>
                        <AnimatePresence>
                          {openIndex === globalIndex && (
                            <motion.dd
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-4 ml-2 text-base leading-7 text-secondary">{faq.answer}</p>
                            </motion.dd>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </dl>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-24 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif">
            Still have questions?
          </h2>
          <p className="mt-6 text-base leading-7 text-secondary">
            Can't find the answer you're looking for? Please contact us for a free, confidential consultation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 