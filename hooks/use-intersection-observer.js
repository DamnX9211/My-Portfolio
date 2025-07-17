"use client"

import { useEffect, useState, useRef } from "react"

/**
 * Custom hook for intersection observer with performance optimizations
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Threshold for triggering the callback
 * @param {string} options.root - Root element to observe from
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} options.freezeOnceVisible - Whether to stop observing once visible
 * @returns {[React.RefObject, boolean]} - [ref, isIntersecting]
 */
export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
} = {}) {
  const [isIntersecting, setIntersecting] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef(null)
  const frozen = freezeOnceVisible && hasBeenVisible

  useEffect(() => {
    const element = elementRef.current
    if (!element || frozen) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        setIntersecting(isElementIntersecting)

        if (isElementIntersecting && freezeOnceVisible) {
          setHasBeenVisible(true)
        }
      },
      {
        threshold,
        root: root ? document.querySelector(root) : null,
        rootMargin,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, frozen, freezeOnceVisible])

  return [elementRef, isIntersecting]
}
