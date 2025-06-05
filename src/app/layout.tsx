import React from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'
export { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <ClientLayout className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </ClientLayout>
    </html>
  )
} 