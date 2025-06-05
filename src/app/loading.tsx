import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative">
        <div className="h-16 w-16">
          <div className="absolute h-16 w-16 rounded-full border-4 border-accent/20"></div>
          <div className="absolute h-16 w-16 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
        </div>
        <div className="mt-4 text-center text-sm text-secondary">Loading...</div>
      </div>
    </div>
  )
} 