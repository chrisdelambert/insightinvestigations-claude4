'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceSchema } from '../../../components/structured-data/ServiceSchema'

const service = {
  id: 'school-zoning',
  name: 'School Zoning Checks',
  description: 'Verifying address claims. Supporting fair enrolment.',
  longDescription: 'In-zone enrolment fraud can put pressure on school resources and create unfair advantages. Our zoning checks provide discreet, factual evidence to confirm residential claims.',
  image: '/images/School Zoning.png',
  features: [
    'Surveillance of property access and routines',
    'Tenancy and ownership record verification',
    'Utility or service connection research',
    'Interviews or discreet neighbourhood enquiries',
    'Detailed, time-stamped reports with supporting evidence',
  ],
  useCases: [
    'A family is suspected of using a false or temporary address',
    'You\'ve received complaints about zoning dishonesty',
    'Enrolment documentation doesn\'t match observed living patterns',
    'Tenancy details seem inconsistent or fabricated',
    'You need verified evidence to support an enrolment decision',
  ],
}

export default function SchoolZoningPage() {
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