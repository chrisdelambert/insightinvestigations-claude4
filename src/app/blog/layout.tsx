import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Blog - Investigation Insights & Case Studies',
  description: 'Expert insights, case studies, and professional guidance from New Zealand\'s trusted private investigators. Read about bug sweeping, cheating partner investigations, and more.',
  path: '/blog',
  type: 'website',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
