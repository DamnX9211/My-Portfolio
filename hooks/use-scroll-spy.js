"use client"

import { useState, useEffect, useCallback } from "react"
import { throttle } from "@/lib/utils"

/**
 * Custom hook for scroll spy functionality with performance optimizations
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {Object} options - Configuration options
 * @param {number} options.offset - Offset from the top of the viewport
 * @returns {string} - Currently active section ID
 */
export function useScrollSpy(sectionIds, { offset = 100 } = {}) {
  const [activeSection, setActiveSection] = useState("")

  // Throttled scroll handler for performance
  const handleScroll = useCallback(
    throttle(() => {
      // Find all sections
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return null

          const rect = element.getBoundingClientRect()
          return {
            id,
            top: rect.top - offset,
            bottom: rect.bottom - offset,
          }
        })
        .filter(Boolean)

      // Find the first section that's in view or above the viewport
      const currentSection =
        sections.find((section) => section.top <= 0 && section.bottom > 0) ||
        sections.find((section) => section.top > 0)

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }, 100),
    [sectionIds, offset],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return activeSection
}
