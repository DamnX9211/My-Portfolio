"use client"

import { useEffect } from "react"
import Script from "next/script"

export function SpeedInsights() {
  useEffect(() => {
    // Skip during development
    if (process.env.NODE_ENV === "development") return

    // Initialize performance monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      // Record key metrics
      window.addEventListener("load", () => {
        // Use Web Vitals or similar library in production
        setTimeout(() => {
          const navEntry = performance.getEntriesByType("navigation")[0]
          const paintEntries = performance.getEntriesByType("paint")

          if (navEntry) {
            console.log(`Page load time: ${navEntry.duration}ms`)
          }

          paintEntries.forEach((entry) => {
            console.log(`${entry.name}: ${entry.startTime}ms`)
          })
        }, 0)
      })
    }
  }, [])

  return (
    <>
      {/* Web Vitals or other performance monitoring script would go here */}
      <Script
        id="performance-monitoring"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring initialization
            console.log('Performance monitoring initialized');
          `,
        }}
      />
    </>
  )
}
