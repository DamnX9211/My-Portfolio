"use client"

import { useEffect, useState, useCallback } from "react"
import { debounce } from "@/lib/utils"

/**
 * Custom hook for responsive media queries with optimized performance
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Memoized handler with debounce for performance
  const handleChange = useCallback(
    debounce((event) => {
      setMatches(event.matches)
    }, 100),
    [],
  )

  useEffect(() => {
    setMounted(true)

    // Check if we're in a browser environment
    if (typeof window === "undefined") {
      return
    }

    const media = window.matchMedia(query)

    // Initial check
    setMatches(media.matches)

    // Add listener
    if (media.addEventListener) {
      media.addEventListener("change", handleChange)
    } else {
      // Fallback for older browsers
      media.addListener(handleChange)
    }

    // Cleanup
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange)
      } else {
        // Fallback for older browsers
        media.removeListener(handleChange)
      }
    }
  }, [query, handleChange])

  // Return false on first render to avoid hydration mismatch
  return mounted ? matches : false
}
