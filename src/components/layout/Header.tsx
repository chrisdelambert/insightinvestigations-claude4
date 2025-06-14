'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

const services = [
  { name: 'Surveillance & Monitoring', href: '/services#surveillance' },
  { name: 'Cheating Partner Investigations', href: '/services#cheating-partner' },
  { name: 'School Zoning Checks', href: '/services#school-zoning' },
  { name: 'Background Checks', href: '/services#background-checks' },
  { name: 'Stalker & Harassment Investigations', href: '/services#stalker-harassment' },
  { name: 'Finding People', href: '/services#finding-people' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed w-full bg-[#16191c]/95 z-[100] border-b border-white/[0.1]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Insight Investigations</span>
            <motion.h1 
              className="text-xl font-serif tracking-wider text-white"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              INSIGHT <span className="text-gray-300">INVESTIGATIONS</span>
            </motion.h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 relative">
          {/* Home */}
          <Link
            href="/"
            className={`relative text-sm font-medium transition-colors duration-200 ${
              pathname === '/' 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
            {pathname === '/' && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`relative text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                pathname.startsWith('/services') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
              <ChevronDownIcon className="h-3 w-3" />
              {pathname.startsWith('/services') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </Link>
            
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-[#16191c] border border-white/10 rounded-lg shadow-xl py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* About */}
          <Link
            href="/about"
            className={`relative text-sm font-medium transition-colors duration-200 ${
              pathname === '/about' 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            About
            {pathname === '/about' && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </Link>
          
          {/* Contact */}
          <Link
            href="/contact"
            className={`relative text-sm font-medium transition-colors duration-200 ${
              pathname === '/contact' 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact
            {pathname === '/contact' && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </Link>
          
          {/* FAQ */}
          <Link
            href="/faq"
            className={`relative text-sm font-medium transition-colors duration-200 ${
              pathname === '/faq' 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            FAQ
            {pathname === '/faq' && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="button-secondary"
          >
            Get in touch <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/10"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 right-0 z-[10000] w-full overflow-y-auto bg-[#16191c] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Insight Investigations</span>
                  <h1 className="text-xl font-serif tracking-wider text-white">
                    INSIGHT <span className="text-gray-300">INVESTIGATIONS</span>
                  </h1>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {/* Home */}
                    <Link
                      href="/"
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        pathname === '/' 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    
                    {/* Mobile Services Menu */}
                    <div>
                      <button
                        className={`-mx-3 w-full flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                          pathname.startsWith('/services') 
                            ? 'text-white bg-white/10' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        Services
                        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-3 mt-2 space-y-1"
                          >
                            <Link
                              href="/services"
                              className="block rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              All Services
                            </Link>
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    {/* About */}
                    <Link
                      href="/about"
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        pathname === '/about' 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    
                    {/* Contact */}
                    <Link
                      href="/contact"
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        pathname === '/contact' 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    
                    {/* FAQ */}
                    <Link
                      href="/faq"
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        pathname === '/faq' 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="button-secondary w-full justify-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get in touch <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 