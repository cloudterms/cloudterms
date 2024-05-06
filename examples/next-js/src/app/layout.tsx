import { CloudTermsProvider } from '@cloudterms/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userId = 'next-app-user-id'

  return (
    <html lang="en">
      <body>
        <CloudTermsProvider userId={userId}>{children}</CloudTermsProvider>
      </body>
    </html>
  )
}
