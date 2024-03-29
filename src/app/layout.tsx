import Nav from "@/components/Nav/Nav"
import type { Metadata } from "next"
import AuthProvider from "providers/AuthProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="container">
        <AuthProvider>
          <Nav />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
