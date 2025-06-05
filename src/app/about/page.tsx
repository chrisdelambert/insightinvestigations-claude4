'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Insight Investigations
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-secondary italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shining light on the truth.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative h-96 overflow-hidden rounded-xl">
            <Image
              src="/images/Background Checks.png"
              alt="Professional investigation workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif">Our Approach</h2>
              <p className="mt-6 text-base leading-7 text-secondary">
                Based in Christchurch and offering services nationwide, Insight Investigations helps people get the answers they need — with professionalism, integrity, and complete discretion.
              </p>
              <p className="mt-6 text-base leading-7 text-secondary">
                We work with a wide range of clients including individuals, schools, employers, and legal professionals. Whether you're facing uncertainty in a relationship, dealing with workplace concerns, or seeking clarity in a sensitive situation, we're here to support you.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif">Led by Luke Valentine</h2>
              <p className="mt-6 text-base leading-7 text-secondary">
                Luke Valentine is a Licensed Private Investigator with a background in criminal and insurance investigations, alongside years of experience in the communications industry. His diverse skill set means every case is approached with clear insight, attention to detail, and strong interpersonal awareness.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif">What Sets Us Apart</h2>
            <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Modern Approach',
                  description: 'A fresh perspective without the traditional law enforcement background, bringing innovative solutions to modern challenges.',
                },
                {
                  name: 'Total Discretion',
                  description: 'Complete confidentiality in every case, protecting your privacy from start to finish.',
                },
                {
                  name: 'Tailored Support',
                  description: 'Customized investigation strategies for both private individuals and businesses.',
                },
                {
                  name: 'Female Investigator Option',
                  description: 'Option to speak with a woman for sensitive matters, ensuring your comfort throughout the process.',
                },
                {
                  name: 'Clear Communication',
                  description: 'Transparent process and honest communication at every step.',
                },
                {
                  name: 'Professional Documentation',
                  description: 'Clear, court-ready documentation where needed, meeting legal standards.',
                },
              ].map((feature) => (
                <motion.div
                  key={feature.name}
                  className="relative pl-9"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <dt className="font-semibold text-foreground">
                    <svg viewBox="0 0 32 32" fill="none" className="absolute left-0 top-1 h-5 w-5 text-accent" aria-hidden="true">
                      <path d="M16 4L19.2929 7.29289L16 10.5858L12.7071 7.29289L16 4Z" fill="currentColor" />
                      <path d="M16 4L19.2929 7.29289L16 10.5858L12.7071 7.29289L16 4Z" fill="currentColor" transform="rotate(90 16 16)" />
                      <path d="M16 4L19.2929 7.29289L16 10.5858L12.7071 7.29289L16 4Z" fill="currentColor" transform="rotate(180 16 16)" />
                      <path d="M16 4L19.2929 7.29289L16 10.5858L12.7071 7.29289L16 4Z" fill="currentColor" transform="rotate(270 16 16)" />
                    </svg>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-secondary">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Ready to work with us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary">
              Whether you're looking for clarity, closure, or evidence — Insight Investigations is here to help you move forward with confidence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-primary"
              >
                View our services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 