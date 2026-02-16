'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const whoIsItFor = [
  'Gyms, fitness centres, and wellness facilities — privacy audits for businesses',
  'Short-term accommodation providers and Airbnb hosts — Airbnb hidden camera detection',
  'Hotels, motels, and serviced apartments — accommodation hidden camera checks',
  'Corporate offices and shared workspaces — workplace privacy inspection',
  'Property managers and commercial landlords',
  'Legal, medical, counselling, and advisory practices',
]

const benefits = [
  'Clear reassurance you can offer customers, members, or guests',
  'Protection for your reputation if concerns or complaints arise',
  'Documented evidence of due diligence, not just verbal assurances',
  'Confidence for owners and managers that privacy risks have been assessed',
  'A proactive position, rather than reacting after trust has been shaken',
]

const staffBenefits = [
  'Giving staff confidence that their workplace has been professionally inspected',
  'Demonstrating that management takes privacy concerns seriously',
  'Reducing suspicion, rumour, or speculation if an issue is raised',
  'Supporting a safer, more trusted working environment',
]

const detectionCapabilities = [
  'Hidden wireless cameras and covert listening devices',
  'Covert microphones and audio recording devices',
  'Wi-Fi, Bluetooth, and cellular-based transmitters',
  'Active GPS tracking devices that transmit via cellular or radio-frequency signals',
]

const deviceFoundSteps = [
  'The finding is documented and photographed',
  'The client is informed discreetly',
  'All findings are handled in accordance with New Zealand privacy and surveillance laws',
  'Devices are not removed or interfered with unless expressly authorised',
  'Options are discussed, which may include removal, further examination, or referral to appropriate authorities',
]

const certificationMeans = [
  'The nominated areas were professionally inspected',
  'Specialist detection equipment was used',
  'No unauthorised electronic monitoring devices were identified',
]

export default function PrivacyCertificationPage() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-3xl text-center">
              {/* Logo */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/privacy-logo.png"
                  alt="Privacy Certification"
                  width={300}
                  height={300}
                  className="w-auto h-48 object-contain"
                />
              </motion.div>

              <motion.h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Privacy Certification
              </motion.h1>
              <motion.p
                className="mt-6 text-xl leading-8 text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                When Privacy Concerns Become Questions, You Have an Answer
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Introduction */}
          <motion.div
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              People are more alert to privacy risks than ever before. Surveys consistently show that a majority of people are more concerned about privacy now than they were a few years ago, and that a significant proportion worry about hidden cameras or recording devices in places where they reasonably expect privacy — such as gyms, accommodation, workplaces, and meeting spaces. For businesses in Christchurch, Canterbury, and across New Zealand, hidden camera detection is no longer optional — it's expected.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              For businesses, those concerns often surface as questions, assumptions, and sometimes allegations.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Privacy Certification from Insight Investigations exists to help you get ahead of that conversation. It allows you to demonstrate — clearly and professionally — that your premises have been independently inspected for indicators of hidden cameras and other covert surveillance devices, and that privacy has been actively addressed rather than assumed.
            </p>
            <p className="text-white font-semibold text-lg mb-12">
              This is reassurance you can offer with confidence.
            </p>
          </motion.div>

          {/* Who Is It For */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">Who Privacy Certification Is For</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Privacy Certification is designed for organisations that are responsible for other people's privacy, including:
            </p>
            <ul className="space-y-3 mb-6">
              {whoIsItFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed">
              If people change clothes, hold private conversations, attend appointments, or spend extended time in your space, privacy expectations are high — and the impact of those expectations being questioned can be significant.
            </p>
          </motion.section>

          {/* Why This Matters */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">Why This Matters for Your Business</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Consumer research consistently shows that:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Most people say privacy is more important to them now than ever before</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Many people actively worry about hidden cameras in shared or semi-private spaces</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">A growing number check for surveillance or avoid spaces where privacy feels uncertain</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Privacy Certification helps you respond to those concerns in a measured, professional way by providing:
            </p>
            <ul className="space-y-3">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Benefits for Staff */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">Benefits for Your Staff</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Privacy Certification is not only about customers and clients — it also protects the people who work for you.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">It helps by:</p>
            <ul className="space-y-3 mb-6">
              {staffBenefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white font-medium">
              Staff who feel protected are more confident, more professional, and better supported.
            </p>
          </motion.section>

          {/* Bug Hunter Device Image */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-xl bg-background p-8">
              <Image
                src="/images/Bug_Hunter_NoBackground.png"
                alt="BugHunter Pro Detection Equipment"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* How Certification Is Achieved */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">How Privacy Certification Is Achieved</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Privacy Certification is based on a professional bug sweep carried out by a licensed Private Investigator operating in Christchurch and throughout Canterbury. Our TSCM inspection process combines physical examination, RF scanning for surveillance devices, investigative judgement, and specialist electronic counter-surveillance equipment, including the BugHunter Pro. This equipment is designed to detect active signals from covert surveillance devices such as:
            </p>
            <ul className="space-y-3 mb-6">
              {detectionCapabilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Like all electronic counter-surveillance equipment, detection is focused on devices that are powered on or actively transmitting at the time of inspection. This approach identifies risks that visual checks or consumer-grade tools commonly miss.
            </p>
          </motion.section>

          {/* What Happens If a Device Is Detected */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">What Happens If a Device Is Detected?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If a suspected surveillance device or anomaly is identified during an inspection, Privacy Certification is not issued at that stage.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">Instead:</p>
            <ul className="space-y-3 mb-6">
              {deviceFoundSteps.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Certification is issued only once the identified issue has been appropriately resolved. Any further action — including removal, technical analysis, or follow-up work — is undertaken separately and only with the client's consent.
            </p>
          </motion.section>

          {/* What the Certification Means */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">What the Certification Means</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Where no unauthorised surveillance devices are detected, a Privacy Certification is issued confirming that, at the time of inspection:
            </p>
            <ul className="space-y-3 mb-6">
              {certificationMeans.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              The certification reflects conditions at a specific point in time. It does not guarantee future privacy, nor does it detect devices that are inactive, shielded, or installed after the inspection.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              What it does demonstrate is that reasonable, professional steps were taken to assess privacy risks.
            </p>
            <p className="text-white font-medium mb-6">
              That distinction matters — particularly if privacy is ever questioned.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Many clients choose to renew Privacy Certification periodically, or following changes such as renovations, staff turnover, or reported concerns.
            </p>
          </motion.section>

          {/* Professional Approach */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">A Professional, Measured Approach</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Insight Investigations provides bug sweep services NZ-wide as part of a licensed investigative practice operating in Christchurch and throughout New Zealand. Our electronic counter-surveillance and TSCM inspections are conducted with specialist equipment, independent reporting, and a confidential process. We do not rely on exaggerated claims or guarantees. Our role is to inspect, document, and report — lawfully, independently, and professionally.
            </p>
            <p className="text-white font-medium text-lg">
              The result is reassurance you can stand behind, and confidence your customers and staff can rely on.
            </p>
          </motion.section>

          {/* CTA */}
          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Ready to Get Certified?
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us to discuss your premises, the areas to be inspected, and the most appropriate scope for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-200"
              >
                Get in Touch
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/privacy-certification/faq"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800 px-6 py-3 text-base font-semibold text-white hover:bg-gray-700 transition-all duration-200"
              >
                View FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
