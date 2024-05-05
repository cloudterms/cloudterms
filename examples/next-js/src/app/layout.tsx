import './globals.css'

import { CloudTermsProvider } from '@cloudterms/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <CloudTermsProvider userId="next-app-user-id">
          {children}
        </CloudTermsProvider>
      </body>
    </html>
  )
}
