import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JoePusherPrivateVault',
  description: 'Exclusive 4K Adult Content – Crypto Only',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
