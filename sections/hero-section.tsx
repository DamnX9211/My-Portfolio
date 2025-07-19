"use client"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Play, Code, Database, Sparkles } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { AnimatedButton } from "@/components/animated-button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HeroSection() {
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  // Social links
  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
      url: "https://github.com/DamnX9211",
      label: "GitHub",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "https://www.linkedin.com/in/rohit-kumar-99abc99/",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
      url: "https://twitter.com",
      label: "Twitter",
    },
  ]

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20"
    >
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Animated background with parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: heroOpacity, y: heroY }}>
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{
                opacity: 0,
                scale: 0.8 + Math.random() * 0.4,
              }}
              animate={{
                opacity: 0.6 + Math.random() * 0.4,
                scale: 1 + Math.random() * 0.2,
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 70%)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="space-y-2"
            >
              <motion.div
                className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/20 text-primary mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Web Developer & Data Scientist
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Rohit Kumar
                </motion.span>
              </h1>
              <motion.p
                className="max-w-[600px] text-xl text-muted-foreground mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Crafting digital experiences that combine cutting-edge web development with powerful data science
                solutions.
              </motion.p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <AnimatedButton icon={<ArrowRight className="h-4 w-4" />} onClick={() => scrollToSection("contact")}>
                Get in Touch
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                icon={<Play className="h-4 w-4" />}
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </AnimatedButton>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="flex gap-4 mt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full border border-border hover:bg-accent">
                      {social.icon}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Photo Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Background Elements */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Code className="h-8 w-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute -top-5 -right-15 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Database className="h-6 w-6 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Sparkles className="h-5 w-5 text-white" />
            </motion.div>

            {/* Main Photo Container */}
            <div className="relative z-10">
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                {/* Gradient Border */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full opacity-75 blur-sm"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <OptimizedImage
                    src="/Photo.jpg?height=500&width=500"
                    alt="Rohit Kumar"
                    width={500}
                    height={500}
                    className="aspect-square overflow-hidden rounded-full object-cover border-4 border-background shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  />
                </motion.div>

                {/* Status Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-background border border-border p-3 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.5, duration: 0.6 },
        }}
        whileHover={{ y: 5 }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border hover:bg-accent"
            onClick={() => scrollToSection("about")}
          >
            <ChevronRight className="h-5 w-5 rotate-90" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
