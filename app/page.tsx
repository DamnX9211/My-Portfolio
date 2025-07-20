"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Github, Linkedin, Twitter, Menu, X, User, Layers, MessageSquare, Sparkles, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import Link from "next/link"

// Import sections
import HeroSection from "@/sections/hero-section"
import AboutSection from "@/sections/about-section"
import SkillsSection from "@/sections/skills-section"
import ProjectsSection from "@/sections/projects-section"

import ContactSection from "@/sections/contact-section"

export default function Page() {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
 



  // Scroll tracking
  const { scrollYProgress } = useScroll()
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Active section tracking
  const activeSection = useScrollSpy(["home", "about", "skills", "projects", "experience", "contact"], { offset: 100 })

  // Navigation items with enhanced design
  const navigationItems = [
    {
      id: "home",
      icon: (
        <motion.div className="h-5 w-5">
          <Sparkles className="h-5 w-5" />
        </motion.div>
      ),
      label: "Home",
      color: "from-blue-500 to-cyan-500",
    },
    { id: "about", icon: <User className="h-5 w-5" />, label: "About", color: "from-purple-500 to-pink-500" },
    { id: "skills", icon: <Code className="h-5 w-5" />, label: "Skills", color: "from-green-500 to-emerald-500" },
    { id: "projects", icon: <Layers className="h-5 w-5" />, label: "Projects", color: "from-orange-500 to-red-500" },
    {
      id: "experience",
      icon: (
        <motion.div className="h-5 w-5">
          <Award className="h-5 w-5" />
        </motion.div>
      ),
      label: "Journey",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "contact",
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Contact",
      color: "from-pink-500 to-rose-500",
    },
  ]

  // Social links
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com", label: "Twitter" },
  ]

  

  // Initialize loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }, [])

  return (
    <>
      {/* Initial Loading Screen */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold text-white flex items-center"
            >
              <span className="mr-2">Rohit Kumar</span>
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: smoothScrollYProgress }}
      />

      <div className="flex min-h-screen flex-col bg-black text-white">
        {/* Enhanced Side Navigation */}
        <nav className="fixed top-0 bottom-0 left-0 z-40 hidden md:flex flex-col w-20 border-r border-white/10 bg-black/80 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center flex-1 gap-6 py-8">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center font-bold text-lg">
                RK
              </div>
            </motion.div>

            {/* Navigation Items */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, staggerChildren: 0.1 }}
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 overflow-hidden",
                      activeSection === item.id
                        ? "bg-white/10 text-white shadow-lg"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {/* Gradient background for active state */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeBackground"
                        className={cn("absolute inset-0 bg-gradient-to-br", item.color)}
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Icon */}
                    <span className="relative z-10">{item.icon}</span>

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 pointer-events-none whitespace-nowrap border border-white/10"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/90 rotate-45 border-l border-b border-white/10" />
                  </motion.div>

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-auto flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </nav>

        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-40 md:hidden border-b border-white/10 bg-black/80 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between">
            <motion.div
              className="font-bold text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary">R</span>ohit <span className="text-primary">K</span>umar
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-30 pt-16 bg-black/95 backdrop-blur-md md:hidden"
            >
              <nav className="container flex flex-col gap-2 p-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Button
                      variant={activeSection === item.id ? "default" : "ghost"}
                      className="justify-start gap-3 w-full h-12"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.icon}
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 md:pl-20">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="relative border-t border-white/10 py-6 md:py-0 md:pl-20">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <motion.p
              className="text-center text-sm text-white/50 md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              © {new Date().getFullYear()} Rohit Kumar. All rights reserved.
            </motion.p>
            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
