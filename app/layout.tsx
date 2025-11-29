export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#000', color: '#fff', margin: 0, minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}
