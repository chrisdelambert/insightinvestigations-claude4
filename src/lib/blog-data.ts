export interface BlogPostMeta {
  id: number
  slug: string
  title: string
  subtitle: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  keywords?: string[]
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    id: 4,
    slug: 'watching-chloe',
    title: 'Watching Chloe',
    subtitle: 'A story about suspicion, fear, and the moment everything changed.',
    excerpt: 'He seemed to know what she was wearing, when she was going out, even how she looked. At first she tried to explain it away. Coincidence. Guesswork. But the feeling didn\'t go away. It followed her into her own home. That\'s when she called us.',
    date: '2026-04-21',
    readTime: '5 min read',
    image: '/images/Watching Chloe.png',
    category: 'Privacy & Security',
    keywords: ['hidden cameras', 'bug sweeping', 'covert surveillance', 'privacy invasion', 'TSCM', 'hidden camera detection', 'Christchurch', 'New Zealand'],
  },
  {
    id: 3,
    slug: 'reconnecting-the-missing-pieces',
    title: 'Reconnecting the Missing Pieces',
    subtitle: 'Because some questions don\'t fade.',
    excerpt: 'If someone disappeared from your life and you\'ve never stopped wondering why, you\'re not alone. Family estrangement and long-term loss of contact affect millions of people. Insight Investigations helps you uncover answers through lawful research, digital analysis, and discreet inquiries.',
    date: '2026-01-24',
    readTime: '5 min read',
    image: '/images/Faded memories and quiet moments.png',
    category: 'Investigations',
    keywords: ['missing person', 'find someone', 'tracing people', 'family reunification', 'lost contact', 'private investigator', 'Christchurch', 'New Zealand'],
  },
  {
    id: 2,
    slug: 'bug-sweeping-protecting-your-privacy',
    title: 'Bug Sweeping – Protecting Your Privacy',
    subtitle: 'Peace of Mind. Comprehensive. Secure.',
    excerpt: 'Hidden cameras and listening devices are more common than most realise. Using professional TSCM equipment, Insight Investigations detects and removes covert devices from homes, rentals, vehicles, and offices — restoring your privacy and peace of mind.',
    date: '2025-10-22',
    readTime: '5 min read',
    image: '/images/bug_detector_device.jpg',
    category: 'Privacy & Security',
    keywords: ['bug sweeping', 'hidden camera detection', 'TSCM', 'listening devices', 'GPS tracker detection', 'privacy', 'Christchurch', 'New Zealand'],
  },
  {
    id: 1,
    slug: 'cheating-partner-investigations',
    title: 'Our Cheating Partner Investigations',
    subtitle: 'Because living in doubt is worse than knowing the truth.',
    excerpt: 'At Insight Investigations, we specialise in one of the most emotionally difficult areas of private investigation: cheating partners. If you suspect your partner is being unfaithful, you\'re not alone and you\'re not wrong for wanting answers.',
    date: '2025-08-23',
    readTime: '5 min read',
    image: '/images/cheating_partner_image_converted.jpg',
    category: 'Investigations',
    keywords: ['cheating partner', 'infidelity investigation', 'relationship investigation', 'surveillance', 'private investigator', 'Christchurch', 'New Zealand'],
  },
]

export function getBlogPostMeta(slug: string): BlogPostMeta | undefined {
  return blogPostsMeta.find(post => post.slug === slug)
}
