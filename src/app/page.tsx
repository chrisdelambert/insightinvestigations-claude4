'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import TypewriterText from '../components/TypewriterText'
import { LocalBusinessSchema } from '../components/structured-data/LocalBusinessSchema'
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
  ChartBarIcon,
  SignalIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Bug Sweeper',
    description: 'Christchurch and the South Island\'s only professional bug-sweeping tech to protect your privacy. The Bug Hunter Pro scans for hidden cameras, GPS trackers, and covert listening devices concealed in walls, vehicles, and everyday objects.',
    href: '/services/bug-sweeping',
    icon: SignalIcon,
  },
  {
    name: 'Cheating Partner Investigations',
    description: 'Discreet relationship investigations with modern approach and female support available.',
    href: '/services/cheating-partner',
    icon: HeartIcon,
  },
  {
    name: 'School Zoning Verification',
    description: 'Professional address verification supporting fair school enrollment across Canterbury.',
    href: '/services/school-zoning',
    icon: HomeIcon,
  },
  {
    name: 'Surveillance & Monitoring',
    description: 'Professional observation and evidence gathering with complete discretion.',
    href: '/services/surveillance',
    icon: EyeIcon,
  },
  {
    name: 'Background Checks',
    description: 'Know who you\'re dealing with before it matters.',
    href: '/services/background-checks',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Stalker & Harassment Investigations',
    description: 'Professional support to help you feel safe again.',
    href: '/services/stalker-harassment',
    icon: ShieldExclamationIcon,
  },
  {
    name: 'Finding People',
    description: 'Reconnecting people and recovering truth with care and discretion.',
    href: '/services/finding-people',
    icon: UserIcon,
  },
]

export default function Home() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver()
  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver()
  const { ref: aboutRef, isIntersecting: aboutInView } = useIntersectionObserver()

  return (
    <div className="relative isolate">
      <LocalBusinessSchema />
      {/* Hero section */}
      <div className="relative isolate min-h-screen bg-background">
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
                  text="Professional investigations across Christchurch" 
                  speed={80}
                  delay={500}
                />
              ) : (
                "Professional investigations across Christchurch"
              )}
            </motion.h1>
            
            <motion.p
              className="text-lg leading-8 text-secondary mb-6 max-w-3xl mx-auto font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Member of the NZIPI – New Zealand Institute of Private Investigators
            </motion.p>

            <motion.p
              className="text-xl leading-8 text-secondary mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Based in Christchurch, we specialize in bug sweeping, cheating partner investigations and school zoning verification throughout Canterbury.
              When you need answers, and closure, we provide clarity with complete confidentiality and a modern approach.
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
              <div className="text-3xl font-bold text-foreground mb-2">Canterbury</div>
              <div className="text-secondary">Based & Specialized</div>
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
            {/* Featured Service - Bug Sweeper */}
            {(() => {
              const featuredService = services[0]
              const FeaturedIcon = featuredService.icon
              return (
                <div className="mb-12 opacity-0 animate-fade-in">
                  <div className="group relative bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border-2 border-accent/30">
                    <Link href={featuredService.href} className="block p-10 lg:p-12">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200 border border-accent/40">
                            <FeaturedIcon
                              className="w-10 h-10 lg:w-12 lg:h-12 text-accent"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-accent bg-accent/10 rounded-full border border-accent/30">
                            FEATURED SERVICE
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 font-serif mb-4">
                            {featuredService.name}
                          </h3>
                          <p className="text-base lg:text-lg text-secondary leading-relaxed">
                            {featuredService.description}
                          </p>
                          <div className="mt-6 flex items-center text-base font-semibold text-accent group-hover:text-accent/80">
                            Learn more about our bug sweeping service
                            <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })()}

            {/* Other Services */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.slice(1).map((service, index) => (
                <div
                  key={service.name}
                  className="group relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
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
              We specialise in cheating partner investigations, bug sweeping, and school zoning verification. We are the only investigators based in the South Island with bug sweeping equipment.
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
                  name: 'Female Support Available',
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
              {/* Horizontal timeline line - desktop only */}
              <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-gray-200 z-0" style={{ top: '32px' }} />
              
              {/* Timeline steps - responsive layout */}
              <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start relative space-y-12 lg:space-y-0">
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
                    className="w-full lg:flex-1 text-center relative z-10 max-w-sm lg:max-w-xs opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Mobile: Add connecting line between steps */}
                    {index > 0 && (
                      <div className="lg:hidden absolute -top-6 left-1/2 transform -translate-x-0.5 w-0.5 h-12 bg-gray-200 z-0" />
                    )}
                    
                    {/* Step circle */}
                    <div className="mx-auto w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 relative z-20 border-4 border-white shadow-lg">
                      {process.step}
                    </div>
                    <div className="mb-4">
                      <process.icon className="w-8 h-8 text-gray-500 mx-auto" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                      {process.title}
                    </h3>
                    <p className="text-secondary leading-relaxed px-4 lg:px-0">
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

      {/* Instagram section */}
      <div className="relative isolate py-24 px-6 lg:px-8 bg-background">
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
    </div>
  )
}