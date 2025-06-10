'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
      const response = await fetch('https://nxcwo4svd6.execute-api.ap-southeast-2.amazonaws.com/main/contact', {
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
          className="mx-auto mt-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors sm:text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors sm:text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Phone <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors sm:text-sm"
                  placeholder="021 123 4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Service of Interest *
                </label>
                <select
                  name="service"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors sm:text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="surveillance">Surveillance & Monitoring</option>
                  <option value="cheating-partner">Cheating Partner Investigations</option>
                  <option value="school-zoning">School Zoning Checks</option>
                  <option value="background-checks">Background Checks</option>
                  <option value="stalker-harassment">Stalker & Harassment Investigations</option>
                  <option value="finding-people">Finding People</option>
                  <option value="document-serving">Document Serving</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors sm:text-sm resize-none"
                  placeholder="Please provide a brief description of your situation and how we can help..."
                />
                <p className="mt-2 text-sm leading-6 text-gray-600">All communication is kept strictly confidential.</p>
              </div>

              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="preferWoman"
                    id="preferWoman"
                    checked={formData.preferWoman}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 mt-0.5"
                  />
                  <label htmlFor="preferWoman" className="ml-3 text-sm leading-6 text-gray-700">
                    I would prefer to speak with a woman
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="callbackPreferred"
                    id="callbackPreferred"
                    checked={formData.callbackPreferred}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 mt-0.5"
                  />
                  <label htmlFor="callbackPreferred" className="ml-3 text-sm leading-6 text-gray-700">
                    I prefer a callback over email response
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-lg bg-gray-900 px-6 py-4 text-center text-base font-semibold text-white shadow-lg hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Confidential Message'
                )}
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
              <p className="mt-4 text-sm leading-6 text-gray-600 text-center">
                We aim to respond to all enquiries within 24 hours.
              </p>
            </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-24 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif mb-8">Alternative Contact Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg font-semibold text-foreground">Phone:</span>
              <a href="tel:0272268728" className="text-lg text-accent hover:text-accent/80 transition-colors">027 226 8728</a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg font-semibold text-foreground">Email:</span>
              <a href="mailto:luke@insightinvestigations.co.nz" className="text-lg text-accent hover:text-accent/80 transition-colors">luke@insightinvestigations.co.nz</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-24 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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