"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
}

/**
 * Enhanced Image component with loading states and optimizations
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  quality = 85,
  fill = false,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Generate blur placeholder if not provided
  const generatedBlurDataURL =
    !blurDataURL && placeholder === "blur"
      ? `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="rgb(99,102,241,0.2)"/></svg>`
      : blurDataURL

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false)
    setError(false)
  }, [src])

  return (
    <div className={cn("relative overflow-hidden", fill ? "w-full h-full" : "", className)}>
      {!isLoaded && !error && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          style={{
            backgroundSize: "200% 100%",
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
            animation: "shimmer 1.5s infinite",
          }}
          aria-hidden="true"
        />
      )}

      {!error ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            fill ? "object-cover" : "",
          )}
          sizes={sizes}
          quality={quality}
          priority={priority}
          fill={fill}
          placeholder={placeholder === "blur" ? "blur" : undefined}
          blurDataURL={generatedBlurDataURL}
          onLoad={() => {
            setIsLoaded(true)
            onLoad?.()
          }}
          onError={() => setError(true)}
          {...props}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-800 rounded-md">
          <span className="text-sm text-gray-500 dark:text-gray-400">Failed to load image</span>
        </div>
      )}
    </div>
  )
}
