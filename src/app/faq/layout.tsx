import { faqMetadata as metadata } from '@/lib/metadata'
export { metadata }

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}