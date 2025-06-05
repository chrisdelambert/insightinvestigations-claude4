'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferWoman: false,
    callbackPreferred: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://rxnrcvne9l.execute-api.ap-southeast-2.amazonaws.com/dev/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferWoman: false,
        callbackPreferred: false,
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact us for a free, confidential consultation to discuss your situation and understand how we can help.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-accent/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-accent/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-foreground">
                  Phone (optional)
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-accent/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium leading-6 text-foreground">
                  Service of Interest
                </label>
                <div className="mt-2">
                  <select
                    name="service"
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-accent/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a service</option>
                    <option value="surveillance">Surveillance & Monitoring</option>
                    <option value="cheating-partner">Cheating Partner Investigations</option>
                    <option value="school-zoning">School Zoning Checks</option>
                    <option value="background-checks">Background Checks</option>
                    <option value="stalker-harassment">Stalker & Harassment Investigations</option>
                    <option value="missing-persons">Tracing Missing Persons</option>
                    <option value="document-serving">Document Serving</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-accent/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-accent/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-secondary">Brief description of your situation.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="preferWoman"
                    id="preferWoman"
                    checked={formData.preferWoman}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-accent/10 bg-accent/5 text-accent focus:ring-accent"
                  />
                  <label htmlFor="preferWoman" className="ml-3 text-sm leading-6 text-foreground">
                    I would prefer to speak with a woman
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="callbackPreferred"
                    id="callbackPreferred"
                    checked={formData.callbackPreferred}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-accent/10 bg-accent/5 text-accent focus:ring-accent"
                  />
                  <label htmlFor="callbackPreferred" className="ml-3 text-sm leading-6 text-foreground">
                    I prefer a callback over email response
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-md bg-accent/10 px-3.5 py-2.5 text-center text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="mt-4 text-sm leading-6 text-green-600 text-center">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-sm leading-6 text-red-600 text-center">
                  {errorMessage}
                </p>
              )}
              <p className="mt-4 text-sm leading-6 text-secondary text-center">
                We aim to respond to all enquiries within 24 hours.
              </p>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="mx-auto mt-24 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif">Your Privacy Matters</h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            All communication is kept strictly confidential. We'll never share your information or make contact in a way that could compromise your privacy.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 