"use client"

import type React from "react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  hoverEffect?: boolean
  delay?: number
  index?: number
}

/**
 * Enhanced card component with animations and hover effects
 */
export function AnimatedCard({
  children,
  className,
  header,
  footer,
  hoverEffect = true,
  delay = 0,
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay || index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={hoverEffect ? { y: -10, transition: { duration: 0.3 } } : {}}
      className="h-full"
    >
      <Card className={cn("h-full relative overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm", className)}>
        {header && <CardHeader>{header}</CardHeader>}
        <CardContent className={cn(!header && "pt-6")}>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}

        {hoverEffect && (
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-purple-500 opacity-0 blur transition duration-300 z-[-1]"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />
        )}
      </Card>
    </motion.div>
  )
}
