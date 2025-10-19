import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Arnold Agura | Senior Frontend Developer - Nuxt, Vue.js, React Expert',
    template: '%s | Arnold Agura - Senior Frontend Developer'
  },
  description: 'Senior Frontend Developer with 6+ years building production-grade applications serving 100K+ users. Expert in Nuxt.js, Vue.js, React & TypeScript for fintech, banking & enterprise. Proven track record: 500+ code reviews, 15+ developers mentored, 8 major migrations led. Available for remote opportunities.',
  keywords: ['Senior Frontend Developer', 'Nuxt.js Expert', 'Vue.js Developer', 'React Developer', 'TypeScript Specialist', 'Frontend Architect', 'Vue 2 to Vue 3 Migration', 'Performance Optimization', 'Fintech Developer', 'Banking Applications', 'Remote Frontend Developer', 'Full-stack Developer', 'Tailwind CSS', 'Next.js', 'Arnold Agura', 'Frontend Team Lead', 'JavaScript Expert', 'Web Performance', 'Code Review', 'Technical Mentorship'],
  authors: [{ name: 'Arnold Agura' }],
  creator: 'Arnold Agura',
  publisher: 'Arnold Agura',
  metadataBase: new URL('https://arnoldagura.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arnoldagura.dev',
    title: 'Arnold Agura | Senior Frontend Developer - Hire Me',
    description: 'Senior Frontend Developer: 6+ years | 100K+ users served | Nuxt.js, Vue.js, React & TypeScript expert | 500+ code reviews | Available for remote work',
    siteName: 'Arnold Agura - Senior Frontend Developer Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arnold Agura - Senior Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arnold Agura | Senior Frontend Developer',
    description: 'Senior Frontend Developer with 6+ years of experience building exceptional web applications.',
    images: ['/og-image.jpg'],
    creator: '@arnoldagura',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // other: 'your-other-verification-codes',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arnold Agura',
    jobTitle: 'Senior Frontend Developer',
    description: 'Senior Frontend Developer with 6+ years of experience building production-grade applications serving 100K+ users. Expert in Nuxt.js, Vue.js, React, and TypeScript.',
    url: 'https://arnoldagura.dev',
    email: 'arnold.agura@email.com',
    sameAs: [
      'https://github.com/arnoldagura',
      'https://linkedin.com/in/arnoldagura',
      'https://twitter.com/arnoldagura',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cebu City',
      addressRegion: 'Central Visayas',
      addressCountry: 'Philippines',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of San Jose - Recoletos',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Frontend Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Remote (Global)',
      },
      estimatedSalary: {
        '@type': 'MonetaryAmountDistribution',
        name: 'Senior Frontend Developer Salary',
        currency: 'USD',
      },
      skills: 'Nuxt.js, Vue.js, React, TypeScript, JavaScript, Frontend Architecture, Performance Optimization, Code Review, Technical Leadership',
    },
    knowsAbout: [
      'Nuxt.js',
      'Vue.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Frontend Development',
      'Web Development',
      'Tailwind CSS',
      'Next.js',
      'Performance Optimization',
      'Vue 2 to Vue 3 Migration',
      'Fintech Development',
      'Banking Applications',
      'Code Review',
      'Technical Mentorship',
      'Component Architecture',
      'State Management',
      'REST APIs',
    ],
    workExample: [
      {
        '@type': 'CreativeWork',
        name: 'Client Onboarding Platform',
        description: 'Enterprise-grade onboarding platform serving 200+ organizations with 60% reduction in onboarding time',
        url: 'https://arnoldagura.dev/#projects',
      },
      {
        '@type': 'CreativeWork',
        name: 'Banking Application Migration',
        description: 'Led Vue 2 to Vue 3 migration serving 100K+ users with zero downtime and 35% bundle size reduction',
        url: 'https://arnoldagura.dev/#projects',
      },
    ],
  };

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
