import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/ThemeContext'
import IOSFix from '@/components/IOSFix'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Schronisko Orzechowce - Adopcje',
  description: 'Znajdź swojego nowego przyjaciela! Psy i koty czekają na adopcję w Schronisku Orzechowce.',
  keywords: 'schronisko, adopcja, psy, koty, zwierzęta, Orzechowce',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        <IOSFix />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
