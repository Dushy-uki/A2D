import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'A2D - Study in Germany Consultancy',
  description: 'Expert study abroad consultancy for Germany. We guide you through university admissions, visa applications, and successful academic journeys in Germany. Free consultation available.',
  keywords: 'study in Germany, German university admission, study abroad consultancy, German student visa, higher education Germany, MS in Germany, Bachelor in Germany',
  icons: {
    icon: [
      {
        url: '/images/logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/logo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
