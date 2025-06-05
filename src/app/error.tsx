'use client'

import React from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-8 text-accent">There was a problem</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-secondary sm:mt-6">
          {error.message || 'Sorry, we ran into an issue. Please try again.'}
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <button
            onClick={reset}
            className="rounded-md bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-primary"
          >
            Go back home <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 