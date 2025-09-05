import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BOND - Decentralized Limit Orders on Monad',
  description: 'Trade with precision using automated limit orders on Monad blockchain. Set your target price and let BOND execute your trades automatically.',
  keywords: ['DeFi', 'Limit Orders', 'Monad', 'Cryptocurrency', 'Trading'],
  authors: [{ name: 'BOND Team' }],
  openGraph: {
    title: 'BOND - Limit Orders on Monad',
    description: 'Decentralized limit orders with automated execution',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
