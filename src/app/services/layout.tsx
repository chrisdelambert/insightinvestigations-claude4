import { servicesMetadata as metadata } from '@/lib/metadata'
export { metadata }

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}