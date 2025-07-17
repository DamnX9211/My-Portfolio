"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  badge?: string
  className?: string
  align?: "left" | "center" | "right"
  id?: string
}

/**
 * Consistent section heading component with animations
 */
export function SectionHeading({ title, subtitle, badge, className, align = "center", id }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col space-y-4 mb-12", alignmentClasses[align], className)}
    >
      <div className="space-y-2">
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary"
          >
            {badge}
          </motion.div>
        )}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
        <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">{subtitle}</p>
      </div>
    </motion.div>
  )
}
