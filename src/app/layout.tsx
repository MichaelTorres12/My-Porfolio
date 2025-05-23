import '@/app/styles/globals.css'
import '@/app/styles/xp.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michael F. Torres · Portfolio',
  description: 'Windows XP‑style desktop portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
