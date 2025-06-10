import { aboutMetadata as metadata } from '@/lib/metadata'
export { metadata }

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}