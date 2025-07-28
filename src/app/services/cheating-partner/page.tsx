'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceSchema } from '../../../components/structured-data/ServiceSchema'

const service = {
  id: 'cheating-partner',
  name: 'Cheating Partner Investigations',
  description: 'Discreet. Sensitive. Confidential.',
  longDescription: 'Suspecting infidelity can be emotionally overwhelming. Whether it\'s a change in routine, unusual behaviour, or just a gut feeling — not knowing can be just as painful as knowing.',
  image: '/images/cheating_partner_image_converted.jpg',
  features: [
    'Covert surveillance',
    'Vehicle and location tracking (legally compliant)',
    'Online and social media investigation',
    'Evidence gathering through photo, video, or written reporting',
  ],
  useCases: [
    'Your partner is suddenly secretive with their phone or devices',
    'Unexplained absences, late nights, or frequent travel',
    'Changes in appearance or grooming habits',
    'Emotional distance or defensiveness',
    'Financial discrepancies or hidden spending',
    'Gut instinct that something isn\'t right',
  ],
}

export default function CheatingPartnerPage() {
  return (
    <div className="relative isolate">
      <ServiceSchema service={service} />
      
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {service.name}
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Service details section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div
            className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-24">
              <div className="relative mb-8 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <p className="mt-4 text-xl text-accent">{service.description}</p>
              <p className="mt-6 text-base leading-7 text-secondary">{service.longDescription}</p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-md bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
                >
                  Enquire about this service
                </Link>
              </div>
            </div>
            <div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                <div>
                  <dt className="text-base font-semibold leading-7 text-accent">How We Work</dt>
                  <dd className="mt-4">
                    <ul role="list" className="list-disc space-y-4 pl-8 text-base leading-7 text-secondary">
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-accent">When to Consider This Service</dt>
                  <dd className="mt-4">
                    <ul role="list" className="list-disc space-y-4 pl-8 text-base leading-7 text-secondary">
                      {service.useCases.map((useCase) => (
                        <li key={useCase}>{useCase}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Instagram section */}
      <div className="relative isolate mt-32 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Instagram Image */}
            <div className="relative flex justify-center flex-shrink-0">
              <a
                href="https://www.instagram.com/cheaters.co.nz?igsh=MTZtbDFrOHQzd25ndw=="
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <Image
                    src="/images/Cheaters by Insight.PNG"
                    alt="Follow @cheaters.co.nz on Instagram"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300" />
                  
                  {/* Instagram icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg
                        className="w-8 h-8 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.017 0C8.396 0 7.929.016 6.706.084 5.481.152 4.677.355 3.967.63a7.987 7.987 0 00-2.887 1.88A7.987 7.987 0 00.63 5.397c-.276.71-.479 1.514-.547 2.739C.016 9.359 0 9.826 0 13.447c0 3.621.016 4.088.084 5.311.068 1.225.271 2.03.547 2.739a7.987 7.987 0 001.88 2.887 7.987 7.987 0 002.887 1.88c.71.276 1.514.479 2.739.547 1.223.068 1.69.084 5.311.084 3.621 0 4.088-.016 5.311-.084 1.225-.068 2.03-.271 2.739-.547a7.987 7.987 0 002.887-1.88 7.987 7.987 0 001.88-2.887c.276-.71.479-1.514.547-2.739.068-1.223.084-1.69.084-5.311 0-3.621-.016-4.088-.084-5.311-.068-1.225-.271-2.03-.547-2.739a7.987 7.987 0 00-1.88-2.887A7.987 7.987 0 0018.707.63C17.997.355 17.193.152 15.968.084 14.745.016 14.278 0 10.657 0L12.017 0zm0 2.17c3.456 0 3.87.013 5.237.076 1.28.06 1.957.272 2.417.45.607.236 1.04.519 1.495.974.455.455.738.888.974 1.495.178.46.39 1.137.45 2.417.063 1.367.076 1.781.076 5.237 0 3.456-.013 3.87-.076 5.237-.06 1.28-.272 1.957-.45 2.417-.236.607-.519 1.04-.974 1.495-.455.455-.888.738-1.495.974-.46.178-1.137.39-2.417.45-1.367.063-1.781.076-5.237.076-3.456 0-3.87-.013-5.237-.076-1.28-.06-1.957-.272-2.417-.45-.607-.236-1.04-.519-1.495-.974-.455-.455-.738-.888-.974-1.495-.178-.46-.39-1.137-.45-2.417C2.183 15.887 2.17 15.473 2.17 12.017c0-3.456.013-3.87.076-5.237.06-1.28.272-1.957.45-2.417.236-.607.519-1.04.974-1.495.455-.455.888-.738 1.495-.974.46-.178 1.137-.39 2.417-.45C8.149 2.183 8.563 2.17 12.017 2.17zm0 3.623a6.207 6.207 0 100 12.414 6.207 6.207 0 000-12.414zM12.017 9.66a2.34 2.34 0 110 4.68 2.34 2.34 0 010-4.68zm4.577-2.354a1.45 1.45 0 11-2.9 0 1.45 1.45 0 012.9 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Instagram Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground font-serif mb-4">
                  Follow Our Investigation Stories
                </h3>
                <p className="text-lg leading-7 text-secondary">
                  Follow our work and case insights on Instagram{' '}
                  <a
                    href="https://www.instagram.com/cheaters.co.nz?igsh=MTZtbDFrOHQzd25ndw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200 font-semibold"
                  >
                    @cheaters.co.nz
                  </a>
                  , where we share anonymised stories, relationship red flags, and what really happens behind closed doors.
                </p>
              </div>
              
              <div className="pt-4">
                <a
                  href="https://www.instagram.com/cheaters.co.nz?igsh=MTZtbDFrOHQzd25ndw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.017 0C8.396 0 7.929.016 6.706.084 5.481.152 4.677.355 3.967.63a7.987 7.987 0 00-2.887 1.88A7.987 7.987 0 00.63 5.397c-.276.71-.479 1.514-.547 2.739C.016 9.359 0 9.826 0 13.447c0 3.621.016 4.088.084 5.311.068 1.225.271 2.03.547 2.739a7.987 7.987 0 001.88 2.887 7.987 7.987 0 002.887 1.88c.71.276 1.514.479 2.739.547 1.223.068 1.69.084 5.311.084 3.621 0 4.088-.016 5.311-.084 1.225-.068 2.03-.271 2.739-.547a7.987 7.987 0 002.887-1.88 7.987 7.987 0 001.88-2.887c.276-.71.479-1.514.547-2.739.068-1.223.084-1.69.084-5.311 0-3.621-.016-4.088-.084-5.311-.068-1.225-.271-2.03-.547-2.739a7.987 7.987 0 00-1.88-2.887A7.987 7.987 0 0018.707.63C17.997.355 17.193.152 15.968.084 14.745.016 14.278 0 10.657 0L12.017 0zm0 2.17c3.456 0 3.87.013 5.237.076 1.28.06 1.957.272 2.417.45.607.236 1.04.519 1.495.974.455.455.738.888.974 1.495.178.46.39 1.137.45 2.417.063 1.367.076 1.781.076 5.237 0 3.456-.013 3.87-.076 5.237-.06 1.28-.272 1.957-.45 2.417-.236.607-.519 1.04-.974 1.495-.455.455-.888.738-1.495.974-.46.178-1.137.39-2.417.45-1.367.063-1.781.076-5.237.076-3.456 0-3.87-.013-5.237-.076-1.28-.06-1.957-.272-2.417-.45-.607-.236-1.04-.519-1.495-.974-.455-.455-.738-.888-.974-1.495-.178-.46-.39-1.137-.45-2.417C2.183 15.887 2.17 15.473 2.17 12.017c0-3.456.013-3.87.076-5.237.06-1.28.272-1.957.45-2.417.236-.607.519-1.04.974-1.495.455-.455.888-.738 1.495-.974.46-.178 1.137-.39 2.417-.45C8.149 2.183 8.563 2.17 12.017 2.17zm0 3.623a6.207 6.207 0 100 12.414 6.207 6.207 0 000-12.414zM12.017 9.66a2.34 2.34 0 110 4.68 2.34 2.34 0 010-4.68zm4.577-2.354a1.45 1.45 0 11-2.9 0 1.45 1.45 0 012.9 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
            Ready to get started?
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary">
            Contact us for a free, confidential consultation to discuss your situation and understand how we can help.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}