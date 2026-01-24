'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FAQSchema } from '../../../components/structured-data/FAQSchema'
import {
  ShieldCheckIcon,
  CpuChipIcon,
  ScaleIcon,
  ClockIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

const faqCategories = [
  {
    title: 'About Privacy Certification',
    icon: ShieldCheckIcon,
    description: 'Understanding what Privacy Certification is and what it covers',
    faqs: [
      {
        question: 'What is Privacy Certification?',
        answer: 'Privacy Certification is an independent inspection carried out by a licensed Private Investigator to assess whether there are indicators of unauthorised electronic surveillance — such as hidden cameras, microphones, or tracking devices - within nominated areas of your premises. Where no such devices are detected, a Privacy Certification is issued confirming that professional steps were taken to assess privacy risks at the time of inspection.',
      },
      {
        question: 'Does Privacy Certification guarantee there are no hidden cameras?',
        answer: 'No. Privacy Certification does not guarantee that no surveillance exists now or in the future. Like all professional inspections, it reflects conditions at a specific point in time. The certification confirms that: a professional inspection was conducted, specialist detection equipment was used, and no unauthorised surveillance devices were identified during that inspection. It does not detect devices that are inactive, shielded, or installed after the inspection.',
      },
      {
        question: 'How long does Privacy Certification remain valid?',
        answer: 'The certification reflects conditions at the time of inspection. Many clients choose to renew Privacy Certification: periodically (e.g. annually), after renovations or layout changes, following staff changes, or if a concern, complaint, or allegation is raised. There is no fixed expiry, but certification should be viewed as a point-in-time assessment rather than a permanent guarantee.',
      },
    ]
  },
  {
    title: 'Detection Capabilities',
    icon: CpuChipIcon,
    description: 'What devices can and cannot be detected',
    faqs: [
      {
        question: 'What types of devices can be detected?',
        answer: 'Privacy Certification focuses on identifying active or transmitting surveillance devices, including: hidden wireless cameras, covert microphones and listening devices, devices transmitting via Wi-Fi, Bluetooth, or cellular networks, and active GPS tracking devices that transmit using radio-frequency or cellular signals. Detection is supported by physical inspection and professional judgement.',
      },
      {
        question: 'Can you detect devices that are switched off?',
        answer: 'No. Electronic detection equipment is designed to identify devices that are powered on or actively transmitting at the time of inspection. Devices that are switched off, dormant, or fully shielded may not be detectable. This limitation applies across the entire electronic counter-surveillance industry and is not unique to Privacy Certification.',
      },
      {
        question: 'Why use a licensed Private Investigator rather than consumer tools?',
        answer: 'Consumer tools and visual checks have limitations and often provide false reassurance. Privacy Certification combines: licensed investigative practice, specialist detection equipment, physical inspection, and professional judgement and documentation. This produces a level of due diligence that can be relied upon if privacy is ever questioned.',
      },
    ]
  },
  {
    title: 'If a Device Is Found',
    icon: WrenchScrewdriverIcon,
    description: 'What happens when something is detected',
    faqs: [
      {
        question: 'Do you remove devices if you find one?',
        answer: 'No - not unless expressly authorised. If a suspected device or anomaly is identified: the finding is documented and photographed, the client is informed discreetly, and the device is not interfered with unless the client provides clear authority. Options may include removal, further examination, or referral to appropriate authorities. Any further action is handled separately and in accordance with New Zealand law.',
      },
      {
        question: 'What happens if something suspicious is found?',
        answer: 'If a suspected surveillance device or anomaly is identified, Privacy Certification is not issued at that stage. Certification is only issued once the issue has been appropriately resolved. This ensures the certification remains meaningful, accurate, and defensible.',
      },
    ]
  },
  {
    title: 'Legal & Compliance',
    icon: ScaleIcon,
    description: 'Legal aspects of Privacy Certification',
    faqs: [
      {
        question: 'Is this service legal in New Zealand?',
        answer: 'Yes. Privacy Certification is conducted lawfully by a licensed Private Investigator, with the consent of the property owner or authorised representative. All inspections and findings are handled in accordance with New Zealand privacy and surveillance laws. We do not install surveillance, conduct monitoring, or interfere with devices without authority.',
      },
      {
        question: 'Can I use the certification publicly?',
        answer: 'Yes. Clients may display the Privacy Certification to demonstrate that an independent inspection has been carried out. How and where it is displayed is up to the client. The certification does not authorise claims of ongoing or guaranteed privacy and should be represented accurately.',
      },
    ]
  },
  {
    title: 'Practical Questions',
    icon: BuildingOfficeIcon,
    description: 'Practical aspects of getting certified',
    faqs: [
      {
        question: 'Is Privacy Certification suitable for Airbnb or short-term accommodation?',
        answer: 'Yes. Privacy Certification is commonly used by short-term accommodation providers to demonstrate due diligence and reassure guests that privacy expectations have been professionally considered. It is particularly relevant for spaces where guests change clothes, sleep, or spend extended private time.',
      },
      {
        question: 'Will staff or guests be told if an inspection is happening?',
        answer: 'That depends on the client. Some organisations choose to inform staff or guests in advance, while others prefer a discreet inspection. This is discussed prior to the inspection to ensure it is conducted appropriately and professionally.',
      },
      {
        question: 'How do I arrange Privacy Certification?',
        answer: 'You can contact Insight Investigations to discuss your premises, the areas to be inspected, and the most appropriate scope for your organisation. Each inspection is tailored to the environment and its privacy risks.',
      },
    ]
  },
]

export default function PrivacyCertificationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Flatten all FAQs for schema
  const allFAQs = faqCategories.flatMap(category => category.faqs)

  return (
    <div className="relative isolate">
      <FAQSchema faqs={allFAQs} />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.p
            className="text-base font-semibold leading-7 text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Certification
          </motion.p>
          <motion.h1
            className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions about Privacy Certification. If you don't see what you're looking for, please don't hesitate to contact us.
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
            Ready to Get Certified?
          </h2>
          <p className="mt-6 text-base leading-7 text-secondary">
            Contact us to discuss your premises and arrange a Privacy Certification inspection.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              Get in touch
            </Link>
            <Link
              href="/privacy-certification"
              className="text-sm font-semibold leading-6 text-secondary hover:text-foreground transition-colors duration-200"
            >
              Learn more about Privacy Certification <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
