import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Himanshu Gandhi | Cloud Computing Student",
  description:
    "Professional portfolio of Himanshu Gandhi - Cloud Computing Student with expertise in AWS, Azure, and modern development practices. Currently pursuing advanced cloud technologies.",
  keywords: "cloud computing, AWS, Azure, DevOps, project management, Toronto, developer",
  authors: [{ name: "Himanshu Gandhi" }],
  creator: "Himanshu Gandhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yellow-forest-08fad6510.6.azurestaticapps.net",
    title: "Himanshu Gandhi | Cloud Computing Student",
    description: "Professional portfolio showcasing cloud computing expertise and innovative projects.",
    siteName: "Himanshu Gandhi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Gandhi | Cloud Computing Student",
    description: "Professional portfolio showcasing cloud computing expertise and innovative projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>{children}</body>
    </html>
  )
}
