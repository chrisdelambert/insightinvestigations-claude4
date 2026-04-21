import { Metadata } from 'next'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import { getBlogPostMeta } from '@/lib/blog-data'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostMeta(params.slug)

  if (!post) {
    return generateSiteMetadata({ title: 'Post Not Found', noIndex: true })
  }

  return generateSiteMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
  })
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
