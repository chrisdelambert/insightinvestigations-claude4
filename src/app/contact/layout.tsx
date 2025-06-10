import { contactMetadata as metadata } from '@/lib/metadata'
export { metadata }

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}