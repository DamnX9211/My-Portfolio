"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  icon?: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  ariaLabel?: string
  type?: "button" | "submit" | "reset"
}

/**
 * Enhanced button with animations and hover effects
 */
export function AnimatedButton({
  children,
  icon,
  variant = "default",
  size = "default",
  className,
  onClick,
  href,
  disabled = false,
  ariaLabel,
  type = "button",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      className={cn("group relative overflow-hidden", className)}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type={type}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      asChild={!!href}
    >
      <motion.span
        className="absolute inset-0 bg-white/10 rounded-md"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1.5 : 0,
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      />

      {icon && (
        <motion.span
          className="mr-2"
          animate={{
            x: isHovered ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.span>
      )}

      {children}
    </Button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}
