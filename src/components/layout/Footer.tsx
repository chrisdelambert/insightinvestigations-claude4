import React from 'react'
import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  services: [
    { name: 'Surveillance & Monitoring', href: '/services#surveillance' },
    { name: 'Cheating Partner Investigations', href: '/services#cheating-partner' },
    { name: 'School Zoning Checks', href: '/services#school-zoning' },
    { name: 'Background Checks', href: '/services#background-checks' },
    { name: 'Stalker & Harassment Investigations', href: '/services#stalker-harassment' },
    { name: 'Finding People', href: '/services#finding-people' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-secondary hover:text-foreground transition-colors duration-200">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-16 sm:mt-20">
          <p className="text-center text-xs leading-5 text-secondary">
            Licensed Private Investigators | Christchurch, New Zealand
          </p>
          <p className="mt-2 text-center text-xs leading-5 text-secondary">
            &copy; {new Date().getFullYear()} Insight Investigations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 