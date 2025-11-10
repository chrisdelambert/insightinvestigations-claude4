'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceSchema } from '../../../components/structured-data/ServiceSchema'

const service = {
  id: 'bug-sweeping',
  name: 'Bug Sweeping',
  description: 'Peace of Mind. Comprehensive. Secure.',
  longDescription: 'When you suspect someone\'s listening, watching, or tracking you — you need more than guesswork. You need proof. Insight Investigations is the only licensed private investigation agency based in the South Island equipped with professional-grade TSCM (Technical Surveillance Counter-Measures) technology. We locate and identify hidden cameras, covert microphones, GPS trackers, and other surveillance devices that compromise your privacy.',
  image: '/images/Bug_Hunter_NoBackground.png',
  features: [
    'Confidential discussion to understand your concerns and locations to inspect.',
    'Full sweep of your home, office, or vehicle using professional Bug Hunter Pro equipment.',
    'Detection of hidden cameras, microphones, GPS trackers, and wireless transmitters.',
    'Immediate advice if devices are found — including photos and removal options.',
    'Summary report outlining what was checked and the results of the sweep.',
    'Security advice going forward.',
  ],
  useCases: [
    'Staying in an Airbnb, motel, or short-term rental and want to be sure there are no hidden cameras.',
    'Moving into a new rental, or commercial space and need peace of mind before you settle in.',
    'Responsible for council buildings and amenities, shared offices, or public venues where confidentiality matters.',
    'Finding signs that someone may have placed a listening device, tracker, or hidden camera in your home, vehicle, or workplace.',
    'After a breakup, flat dispute, or workplace conflict, wanting to confirm you\'re not being monitored.',
    'Noticing strange phone interference, rapid battery drain, or unexpected tracking notifications.',
    'Managing sensitive business, legal, or personal information where privacy and security are essential.',
  ],
}

export default function BugSweepingPage() {
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
              <div className="relative mb-8 overflow-hidden rounded-xl bg-background p-8">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
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
