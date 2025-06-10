'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceSchema } from '../../components/structured-data/ServiceSchema'

const services = [
  {
    id: 'surveillance',
    name: 'Surveillance & Monitoring',
    description: 'Professional observation. Reliable evidence. Complete discretion.',
    longDescription: 'Whether you\'re dealing with suspected dishonesty, workplace misconduct, insurance fraud, or personal safety concerns — discreet surveillance can help you uncover the facts.',
    image: '/images/surveillance_image_converted.jpg',
    features: [
      'Static or mobile surveillance',
      'Covert photography and video',
      'Vehicle tracking (where legally permitted)',
      'Online activity monitoring',
      'Detailed, time-stamped reporting',
    ],
    useCases: [
      'Suspected infidelity or secretive behaviour',
      'Workplace misconduct or dishonesty',
      'Insurance fraud or false claims',
      'Breach of restraining order or protection order',
      'Concerns about a neighbour, tenant, or ex-partner',
      'Monitoring high-value property or assets',
    ],
  },
  {
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
  },
  {
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
  },
  {
    id: 'background-checks',
    name: 'Background Checks',
    description: 'Know who you\'re dealing with — before it matters.',
    longDescription: 'Whether you\'re hiring a new employee, entering into a relationship, or considering a business deal — understanding someone\'s background can help you make smarter, safer decisions.',
    image: '/images/Background Checks.png',
    features: [
      'Criminal convictions or police history',
      'Employment and education claims',
      'Social media and online footprint',
      'Financial risk indicators',
      'Identity verification and past addresses',
      'Association with known individuals or groups',
    ],
    useCases: [
      'Hiring staff for your business or household',
      'Starting a new relationship or online connection',
      'Entering a business partnership or investment',
      'Screening tenants or flatmates',
      'Concerned about someone\'s past or hidden history',
      'Verifying identity or qualifications',
    ],
  },
  {
    id: 'stalker-harassment',
    name: 'Stalker & Harassment Investigations',
    description: 'Protect your peace. Regain control.',
    longDescription: 'Being followed, watched, or harassed — online or in person — can leave you feeling unsafe and powerless. We provide discreet, professional support to help you gather evidence, understand your options, and take steps to protect yourself.',
    image: '/images/Stalker.jpg',
    features: [
      'Surveillance to confirm patterns of behaviour',
      'Digital footprint analysis (including social media)',
      'GPS or route tracking (where legal and appropriate)',
      'Gathering witness statements',
      'Documenting contact, visits, or threats',
      'Advice on next steps and protective options',
    ],
    useCases: [
      'Repeated unwanted contact or messages',
      'Feeling followed, watched, or monitored',
      'Unexplained visits to your home or workplace',
      'Sudden appearance of fake social media profiles',
      'Harassment from an ex-partner, colleague, or stranger',
      'Concerns your concerns aren\'t being taken seriously by others',
    ],
  },
  {
    id: 'finding-people',
    name: 'Finding People',
    description: 'Reconnecting people. Recovering truth.',
    longDescription: 'Whether it\'s a long-lost family member, someone avoiding legal responsibility, or a person who has simply vanished — not knowing where they are can leave you feeling stuck and helpless.',
    image: '/images/Missing Person Image.png',
    features: [
      'Investigative database searches',
      'Public records and digital footprint analysis',
      'Social media and online research',
      'Discreet enquiries and fieldwork',
      'Collaboration with third parties where appropriate',
    ],
    useCases: [
      'Locating a missing family member or friend',
      'Reuniting with someone from your past',
      'Tracing a debtor or person avoiding payment',
      'Finding a witness or former employee',
      'Locating someone for legal or estate matters',
      'Helping with adoption-related searches',
    ],
  },
]

export default function Services() {
  return (
    <div className="relative isolate">
      {services.map((service) => (
        <ServiceSchema key={service.id} service={service} />
      ))}
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
                Our Services
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional, discreet investigation services tailored to your needs. Each case is handled with complete confidentiality and attention to detail.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {services.map((service, index) => (
            <div key={service.id}>
              {index > 0 && (
                <div className="py-16">
                  <div className="w-full border-t border-gray-200" />
                </div>
              )}
              <motion.div
                id={service.id}
                className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start py-16 scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
              <div className="lg:sticky lg:top-24">
                <h2 className="text-3xl font-bold tracking-tight text-foreground font-serif mb-6">{service.name}</h2>
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
          ))}
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