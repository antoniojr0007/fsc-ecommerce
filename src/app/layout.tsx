import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

//components
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AuthProvider } from '@/providers/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FSC - E-COMMERCE',
  description: 'LOJA VIRTUAL FSC - ECOMMERCE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
          <AuthProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </AuthProvider>
      </body>
    </html>
  )
}
