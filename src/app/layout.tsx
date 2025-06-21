import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '映画館 - ホームページ',
  description: '素晴らしい映画体験をお届けする映画館です',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}