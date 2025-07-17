"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import Script from "next/script"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Skip during development
    if (process.env.NODE_ENV === "development") return

    // Track page views
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Example tracking code - replace with your actual analytics service
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Google Analytics - replace with your actual tracking ID */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
