'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import TypewriterText from '../components/TypewriterText'
import { 
  EyeIcon, 
  HeartIcon, 
  HomeIcon, 
  DocumentMagnifyingGlassIcon, 
  ShieldExclamationIcon, 
  UserIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Surveillance & Monitoring',
    description: 'Professional observation and evidence gathering with complete discretion.',
    href: '/services#surveillance',
    icon: EyeIcon,
  },
  {
    name: 'Cheating Partner Investigations',
    description: 'When you need answers, we\'re here to help with sensitivity and professionalism.',
    href: '/services#cheating-partner',
    icon: HeartIcon,
  },
  {
    name: 'School Zoning Checks',
    description: 'Supporting fair enrolment through address verification investigations.',
    href: '/services#school-zoning',
    icon: HomeIcon,
  },
  {
    name: 'Background Checks',
    description: 'Know who you\'re dealing with before it matters.',
    href: '/services#background-checks',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Stalker & Harassment Investigations',
    description: 'Professional support to help you feel safe again.',
    href: '/services#stalker-harassment',
    icon: ShieldExclamationIcon,
  },
  {
    name: 'Tracing Missing Persons',
    description: 'Reconnecting people and recovering truth with care and discretion.',
    href: '/services#missing-persons',
    icon: UserIcon,
  },
]

export default function Home() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver()
  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver()
  const { ref: aboutRef, isIntersecting: aboutInView } = useIntersectionObserver()

  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate min-h-screen bg-background">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/investigator-at-desk-maps.png"
            alt="Professional investigation workspace"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8">
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[900px]">
              <Image
                src="/logo.jpg"
                alt="Insight Investigations"
                width={900}
                height={338}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Hero content */}
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              ref={heroRef}
              className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl font-serif mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {heroInView ? (
                <TypewriterText 
                  text="Shining light on the truth" 
                  speed={80}
                  delay={500}
                />
              ) : (
                "Shining light on the truth"
              )}
            </motion.h1>
            
            <motion.p
              className="text-xl leading-8 text-secondary mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Professional, discreet private investigation services across New Zealand. 
              When you need answers, we provide clarity with complete confidentiality.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                href="/contact"
                className="rounded-lg bg-accent/10 px-8 py-4 text-lg font-semibold text-accent shadow-lg hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-200 transform hover:scale-105"
              >
                Start Your Investigation
              </Link>
              <Link 
                href="/services" 
                className="text-lg font-semibold leading-6 text-secondary hover:text-foreground transition-colors duration-200 flex items-center"
              >
                View Our Services 
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            className="mx-auto max-w-4xl mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground mb-2">Licensed</div>
              <div className="text-secondary">New Zealand Private Investigator</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground mb-2">Nationwide</div>
              <div className="text-secondary">Services Across New Zealand</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground mb-2">Confidential</div>
              <div className="text-secondary">Complete Discretion Guaranteed</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services section */}
      <div className="relative w-full pt-12 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            ref={servicesRef}
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-secondary uppercase tracking-wide">Our Services</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
              Professional Investigation Services
            </p>
            <p className="mt-6 text-xl leading-8 text-secondary">
              Whether you need clarity in personal matters, support for schools or employers, or evidence for legal purposes, we're here to help.
            </p>
          </motion.div>
          
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <div 
                  key={service.name}
                  className="group relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Link href={service.href} className="block p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-200">
                          <service.icon
                            className="w-8 h-8 text-gray-300"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-200 font-serif">
                          {service.name}
                        </h3>
                        <p className="mt-3 text-base text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm font-semibold text-white group-hover:text-gray-200">
                          Learn more 
                          <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            className="mx-auto mt-16 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-secondary mb-8">
              Don't see what you're looking for? We handle a wide range of investigation needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              Discuss Your Case
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div ref={aboutRef} className="relative bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-400 uppercase tracking-wide">Why Choose Us</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
              What Sets Us Apart
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Professional expertise combined with a modern, client-focused approach to private investigation.
            </p>
          </motion.div>

          {/* Professional workspace image */}
          <motion.div
            className="mx-auto mt-16 mb-16 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/investigator-at-desk.png"
                alt="Professional private investigator at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Modern Approach',
                  description: 'Fresh perspective with innovative solutions, free from traditional law enforcement constraints.',
                  icon: LightBulbIcon
                },
                {
                  name: 'Total Discretion',
                  description: 'Complete confidentiality guaranteed throughout every investigation, protecting your privacy.',
                  icon: ShieldCheckIcon
                },
                {
                  name: 'Female Investigator Available',
                  description: 'Option to speak with a woman for sensitive matters, ensuring your comfort and trust.',
                  icon: UserGroupIcon
                },
                {
                  name: 'Court-Ready Evidence',
                  description: 'Professional documentation meeting legal standards for court proceedings when required.',
                  icon: ClipboardDocumentCheckIcon
                },
                {
                  name: 'Diverse Clientele',
                  description: 'Serving individuals, schools, employers, and legal firms with tailored solutions.',
                  icon: BuildingOfficeIcon
                },
                {
                  name: 'Licensed Professional',
                  description: 'Licensed Private Investigator with proven expertise in criminal and insurance investigations.',
                  icon: CheckBadgeIcon
                }
              ].map((feature, index) => (
                <div
                  key={feature.name}
                  className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-4">
                    <feature.icon className="w-10 h-10 text-gray-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-serif">
                    {feature.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <motion.div
            className="mx-auto mt-20 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-8 font-serif">
                Trusted Across New Zealand
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-300">Confidential</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">Licensed</div>
                  <div className="text-gray-300">Professional</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">Nationwide</div>
                  <div className="text-gray-300">Coverage</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-serif">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Every investigation begins with a free, confidential consultation to understand your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Get Your Free Consultation
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-lg border border-gray-600 bg-gray-800 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* How We Work section */}
      <div className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold leading-7 text-secondary uppercase tracking-wide">Our Process</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
              How We Work
            </p>
            <p className="mt-6 text-xl leading-8 text-secondary">
              A clear, professional process designed to get you the answers you need with complete discretion.
            </p>
          </motion.div>

          {/* Professional investigation image */}
          <motion.div
            className="mx-auto mt-16 mb-16 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/Background Checks.png"
                alt="Professional investigation workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          <div className="mx-auto mt-20 max-w-6xl">
            {/* Timeline container */}
            <div className="relative">
              {/* Horizontal timeline line */}
              <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-gray-200 z-0" style={{ top: '32px' }} />
              
              {/* Timeline steps positioned along the line */}
              <div className="flex justify-between items-start relative">
                {[
                  {
                    step: '01',
                    title: 'Free Consultation',
                    description: 'We discuss your situation in complete confidence, understand your needs, and explain how we can help.',
                    icon: ChatBubbleLeftRightIcon,
                    position: 'left'
                  },
                  {
                    step: '02',
                    title: 'Strategy & Quote',
                    description: 'We develop a tailored investigation plan and provide transparent pricing with no hidden costs.',
                    icon: DocumentTextIcon,
                    position: 'left-center'
                  },
                  {
                    step: '03',
                    title: 'Investigation',
                    description: 'Our licensed investigator conducts professional, discreet work using proven methods and technology.',
                    icon: MagnifyingGlassIcon,
                    position: 'right-center'
                  },
                  {
                    step: '04',
                    title: 'Results & Report',
                    description: 'You receive clear documentation of findings, with court-ready evidence if required.',
                    icon: ChartBarIcon,
                    position: 'right'
                  }
                ].map((process, index) => (
                  <div
                    key={process.step}
                    className="flex-1 text-center relative z-10 max-w-xs opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Step circle positioned on the line */}
                    <div className="mx-auto w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 relative z-20 border-4 border-white shadow-lg">
                      {process.step}
                    </div>
                    <div className="mb-4">
                      <process.icon className="w-8 h-8 text-gray-500 mx-auto" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                      {process.title}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            className="mx-auto mt-20 max-w-3xl text-center bg-gray-800 border border-gray-700 rounded-2xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-serif">
              Ready to Uncover the Truth?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Every case is unique. Let's discuss how we can help you get the clarity and answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
              >
                Book Your Free Consultation
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center rounded-lg border border-gray-600 bg-gray-800 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-200"
              >
                Common Questions
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              All consultations are completely confidential • No obligation • Licensed professional
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}