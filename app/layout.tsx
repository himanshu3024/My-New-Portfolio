import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"
import FloatingNavigation from "@/components/floating-navigation"
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Himanshu Gandhi | Advanced Cloud Computing Specialist & DevOps Engineer",
  description:
    "Professional portfolio of Himanshu Gandhi - Advanced Cloud Computing Specialist with expertise in Azure, AWS, GCP, Kubernetes, and DevOps. Featuring live analytics, interactive cloud console, AI-powered assistance, and real-time performance monitoring.",
  keywords: [
    "cloud computing",
    "Azure",
    "AWS",
    "GCP",
    "DevOps",
    "Kubernetes",
    "Docker",
    "Terraform",
    "serverless",
    "microservices",
    "Toronto",
    "Canada",
    "cloud architect",
    "infrastructure as code",
    "CI/CD",
    "containerization",
    "live analytics",
    "interactive console",
    "AI chatbot",
    "performance monitoring",
    "real-time metrics",
    "cloud automation",
    "DevOps automation",
    "cloud security",
    "cost optimization"
  ].join(", "),
  authors: [{ name: "Himanshu Gandhi" }],
  creator: "Himanshu Gandhi",
  publisher: "Himanshu Gandhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yellow-forest-08fad6510.6.azurestaticapps.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yellow-forest-08fad6510.6.azurestaticapps.net",
    title: "Himanshu Gandhi | Cloud Computing Specialist & DevOps Engineer",
    description: "Professional portfolio showcasing cloud computing expertise, multi-cloud solutions, and innovative DevOps practices. Specializing in Azure, AWS, and modern infrastructure.",
    siteName: "Himanshu Gandhi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himanshu Gandhi - Cloud Computing Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Gandhi | Cloud Computing Specialist & DevOps Engineer",
    description: "Professional portfolio showcasing cloud computing expertise, multi-cloud solutions, and innovative DevOps practices.",
    creator: "@himanshu_gandhi",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  generator: "Next.js 15.2.4",
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Himanshu Gandhi",
  jobTitle: "Cloud Computing Specialist",
  description: "Cloud Computing Specialist with expertise in Azure, AWS, GCP, and DevOps practices",
  url: "https://yellow-forest-08fad6510.6.azurestaticapps.net",
  image: "https://yellow-forest-08fad6510.6.azurestaticapps.net/profile-image.jpg",
  sameAs: [
    "https://github.com/himanshu3024",
    "https://www.linkedin.com/in/himanshu-gandhi-891204160/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Available for Opportunities",
  },
  knowsAbout: [
    "Cloud Computing",
    "Microsoft Azure",
    "Amazon Web Services",
    "Google Cloud Platform",
    "Kubernetes",
    "Docker",
    "Terraform",
    "DevOps",
    "CI/CD",
    "Serverless Architecture",
    "Microservices",
    "Infrastructure as Code",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "AWS Certified Solutions Architect - Associate",
      issuedBy: {
        "@type": "Organization",
        name: "Amazon Web Services",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "Microsoft Azure Administrator Associate",
      issuedBy: {
        "@type": "Organization",
        name: "Microsoft",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "Google Cloud Professional Cloud Architect",
      issuedBy: {
        "@type": "Organization",
        name: "Google Cloud",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressCountry: "Canada",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-437-267-3965",
    contactType: "personal",
    email: "gandhi111000@hotmail.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Global Navigation Bar */}
        <FloatingNavigation />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Toaster position="top-right" toastOptions={{ duration: 4000, style: { fontSize: '1rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.95)', color: '#1e293b', boxShadow: '0 8px 32px 0 rgba(30,41,59,0.12)' } }} />
      </body>
    </html>
  );
}
