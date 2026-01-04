import type { Metadata } from 'next'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={spaceGrotesk.className}>
        <IOSFix />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
