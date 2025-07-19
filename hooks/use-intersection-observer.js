"use client"

import { useEffect, useState, useRef } from "react"

/**
 * Custom hook for intersection observer with performance optimizations
 * @typedef {Object} UseIntersectionObserverProps
 * @property {Element|null} [root] - Root element to observe from
 * @property {number} [threshold] - Threshold for triggering the callback
 * @property {string} [rootMargin] - Margin around the root
 * @property {boolean} [freezeOnceVisible] - Whether to stop observing once visible
 * @param {UseIntersectionObserverProps} options - IntersectionObserver options
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
