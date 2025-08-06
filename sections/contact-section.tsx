"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"

type ContactSectionProps = object

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
} as const;;

export default function ContactSection({}: ContactSectionProps) {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="container px-4 md:px-6 relative">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
          badge="Contact"
        />

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-purple-500 opacity-20 blur-lg"
              animate={
                isInView
                  ? {
                      opacity: [0.1, 0.2, 0.1],
                      scale: [1, 1.02, 1],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                    aria-hidden="true"
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/50">Location</p>
                    <p className="font-medium">Durgapur, West bengal</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                    aria-hidden="true"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <p className="font-medium">rohitkuumar1995@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                    aria-hidden="true"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/50">Phone</p>
                    <p className="font-medium">+91 8077783582</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <Github className="h-5 w-5" aria-hidden="true" />,
                      url: "https://github.com/DamnX9211",
                      label: "GitHub",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" aria-hidden="true" />,
                      url: "https://www.linkedin.com/in/rohit-kumar-99abc99/",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Twitter className="h-5 w-5" aria-hidden="true" />,
                      url: "https://twitter.com",
                      label: "Twitter",
                    },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5"
                        >
                          {social.icon}
                          <span className="sr-only">{social.label}</span>
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <a
            href="/https://drive.google.com/file/d/10aaEhGdPmFRWDPQyuTKNnGyc6hWqqTJf/view?usp=sharing" // Path relative to the public directory
           // Suggested filename for download
            className="mt-2 inline-flex items-center px-43 py-2 text-sm font-medium text-gray-900 bg-primary hover:bg-primary/90 transition-colors duration-200 rounded-xl shadow-sm"
            aria-label="Download Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* You can add an icon here if you want, e.g., using Heroicons: */}
            {/* <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.06L7.22 9.22a.75.75 0 00-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l3.5-3.5a.75.75 0 00-1.06-1.06L10.75 10.81V6.75z" clipRule="evenodd" />
            </svg> */}
            Download My Resume
          </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-purple-500 opacity-20 blur-lg"
              animate={
                isInView
                  ? {
                      opacity: [0.1, 0.2, 0.1],
                      scale: [1, 1.02, 1],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <motion.form
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                      aria-required="true"
                    />
                  </div>
                </motion.div>
                <motion.div className="space-y-2" variants={fadeInUp}>
                  <label htmlFor="subject" className="text-sm font-medium text-white/70">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter subject"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={fadeInUp}>
                  <label htmlFor="message" className="text-sm font-medium text-white/70">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                    aria-required="true"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <AnimatedButton
                    icon={<Send className="h-4 w-4" />}
                    type="submit"
                    className="w-full"
                    ariaLabel="Send message"
                  >
                    Send Message
                  </AnimatedButton>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
