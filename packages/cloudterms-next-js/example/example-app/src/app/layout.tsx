import "./globals.css";
import { CloudTermsProvider } from "../../../../src/index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CloudTermsProvider userId="test-user-id">
          {children}
        </CloudTermsProvider>
      </body>
    </html>
  );
}
