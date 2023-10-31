import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FSC - ECOMMERCE',
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
        <div className="flex h-full flex-col">

        </div>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  )
}
