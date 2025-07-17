import type React from "react"
import "@/app/globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from "@/components/speed-insights"
import { Suspense } from "react"

// Optimize font loading with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "Rohit Kumar | Web Developer & Data Scientist",
  description:
    "Professional portfolio of Rohit Kumar, a skilled web developer and data scientist specializing in React, Next.js, and machine learning solutions.",
  keywords: [
    "web developer",
    "data scientist",
    "portfolio",
    "react",
    "next.js",
    "javascript",
    "python",
    "machine learning",
    "full stack developer",
  ],
  authors: [{ name: "Rohit Kumar" }],
  creator: "Rohit Kumar",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohitkumar.dev",
    title: "Rohit Kumar | Web Developer & Data Scientist",
    description: "Professional portfolio showcasing web development and data science expertise",
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar | Web Developer & Data Scientist",
    description: "Professional portfolio showcasing web development and data science expertise",
    images: ["/og-image.jpg"],
    creator: "@rohitkumar",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Suspense fallback={null}>
            {children}
            <Analytics />
            <SpeedInsights />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
