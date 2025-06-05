'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import TypewriterText from '../components/TypewriterText'

const services = [
  {
    name: 'Surveillance & Monitoring',
    description: 'Professional observation and evidence gathering with complete discretion.',
    href: '/services#surveillance',
    icon: '/images/services/surveillance.png',
  },
  {
    name: 'Cheating Partner Investigations',
    description: 'When you need answers, we\'re here to help with sensitivity and professionalism.',
    href: '/services#cheating-partner',
    icon: '/images/services/cheating-partner.png',
  },
  {
    name: 'School Zoning Checks',
    description: 'Supporting fair enrolment through address verification investigations.',
    href: '/services#school-zoning',
    icon: '/images/services/school-zoning.png',
  },
  {
    name: 'Background Checks',
    description: 'Know who you\'re dealing with before it matters.',
    href: '/services#background-checks',
    icon: '/images/services/background-checks.png',
  },
  {
    name: 'Stalker & Harassment Investigations',
    description: 'Professional support to help you feel safe again.',
    href: '/services#stalker-harassment',
    icon: '/images/services/stalker-investigations.png',
  },
  {
    name: 'Tracing Missing Persons',
    description: 'Reconnecting people and recovering truth with care and discretion.',
    href: '/services#missing-persons',
    icon: '/images/services/missing-person.png',
  },
]

export default function Home() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver()
  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver()
  const { ref: aboutRef, isIntersecting: aboutInView } = useIntersectionObserver()

  return (
    <div className="relative isolate">
      {/* Logo section */}
      <div className="relative w-full bg-[#16191c]">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 lg:px-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[800px]">
              <Image
                src="/logo_extended.png"
                alt="Insight Investigations"
                width={800}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero section */}
      <div className="hero-spotlight relative isolate -z-10 bg-[#16191c]">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <motion.div 
                ref={heroRef}
                className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
                  {heroInView ? (
                    <TypewriterText 
                      text="Shining light on the truth" 
                      speed={80}
                      delay={500}
                    />
                  ) : (
                    "Shining light on the truth"
                  )}
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                  Based in Christchurch and offering services nationwide, Insight Investigations provides professional, discreet private investigation services tailored to both individuals and businesses.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/contact"
                    className="button-primary"
                  >
                    Get in touch
                  </Link>
                  <Link href="/services" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                    Our services <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="relative w-full bg-[#16191c] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            ref={servicesRef}
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-300">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Professional Investigation Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Whether you need clarity in personal matters, support for schools or employers, or evidence for legal purposes, we're here to help.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div 
                  key={service.name}
                  className="card group relative flex flex-col overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  onClick={() => window.location.href = service.href}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-black">
                    <div className="service-icon-container flex-shrink-0 p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-all duration-200">
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-lg"
                      />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                    <p className="flex-auto text-gray-900">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-black transition-colors duration-200"
                      >
                        Learn more <span aria-hidden="true" className="ml-2">→</span>
                      </Link>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* What sets us apart section */}
      <div ref={aboutRef} className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-accent to-primary"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
            What Sets Us Apart
          </h2>
          <div className="mt-10 flex flex-col gap-4 text-lg leading-8 text-secondary">
            {[
              "A modern, professional approach — non-traditional background.",
              "Total discretion and confidentiality",
              "Option to speak with a woman, especially for sensitive matters",
              "Clear, court-ready documentation if required",
              "Serving private clients, schools, employers, and legal firms"
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: aboutInView ? index * 0.1 : 0 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="rounded-md bg-[#16191c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors duration-200"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}