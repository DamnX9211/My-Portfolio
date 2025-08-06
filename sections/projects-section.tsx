"use client"
import { motion } from "framer-motion"
import { cubicBezier } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "@/components/section-heading"
import { OptimizedImage } from "@/components/optimized-image"

type ProjectsSectionProps = object

// Animation variants
const customEase = cubicBezier(0.22, 1, 0.36, 1)

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
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
      ease: customEase,
    },
  },
} as const;

export default function ProjectsSection({}: ProjectsSectionProps) {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const projects = [
    {
      title: "Car Rental Website",
      description:
        "A full-stack car rental solution with vehicle management, user authentication, and booking system.",
      image: "/car-rental.jpg?height=300&width=400",
      tags: ["Next", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://car-rental-murex-six.vercel.app/",
      codeLink: "https://github.com/DamnX9211/Car-Rental",
      category: "Web Development",
    },
    {
      title: "Tesla Stock Price Financial Analysis",
      description:
        " A data analysis project using Python and Pandas to analyze Tesla's stock price and identify trends.",
      image: "/tesla.jpg?height=300&width=400",
      tags: ["Python", "Numpy", "Pandas", "Matplotlib"],
      demoLink: "https://github.com/DamnX9211/Tesla_Stock_Price_Financial_Analysis",
      codeLink: "https://github.com/DamnX9211/Tesla_Stock_Price_Financial_Analysis",
      category: "Data Science",
    },
    {
      title: "Netflix Movies & TV Shows Clustering & EDA",
      description:
        "An exploratory data analysis project that clusters Netflix movies and TV shows based on various features.",
      image: "/netflix.jpg?height=800&width=400",
      tags: ["Python", "Pandas", "Numpy", "EDA"],
      demoLink: "https://github.com/DamnX9211/Netflix_Movies_and_TVshows_Clustring",
      codeLink: "https://github.com/DamnX9211/Netflix_Movies_and_TVshows_Clustring",
      category: "Data Science",
    },
    {
      title: "Delhivery Analysis",
      description: "A comprehensive analysis of Delhivery's logistics data using Python and machine learning.",
      image: "/delhivery.jpg?height=300&width=400",
      tags: ["Python", "Pandas", "Seaborn", "Numpy", "Matplotlib"],
      demoLink: "https://github.com/DamnX9211/Delhivery-Analysis",
      codeLink: "https://github.com/DamnX9211/Delhivery-Analysis",
      category: "Data Science",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS (this website).",
      image: "/portfolio1.jpg?height=300&width=400",
      tags: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
      demoLink: "https://my-portfolio-1-plum.vercel.app/",
      codeLink: "https://github.com/DamnX9211/MyPortfolio",
      category: "Web Development",
    },
    {
      title: "Time Series Analysis of Stock Data",
      description: "A comprehensive analysis of stock price movements using time series techniques.",
      image: "/time-series.png?height=300&width=400",
      tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
      demoLink: "https://github.com/DamnX9211/Time_Series_Analysis/blob/main/Time_Series_Analysis.ipynb",
      codeLink: "https://github.com/DamnX9211/Time_Series_Analysis",
      category: "Data Science",
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      aria-labelledby="projects-heading"
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
          title="Featured Projects"
          subtitle="A showcase of my recent work across web development and data science."
          badge="Portfolio"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} inView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Project Card Component
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}

function ProjectCard({ project }: { project: Project; index: number; inView: boolean }) {
  return (
    <motion.div variants={fadeInUp} className="group relative" whileHover={{ y: -10 }}>
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-purple-500 opacity-0 blur transition duration-300"
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
      <Card className="relative overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 0.6 }}
            aria-hidden="true"
          />
          <Badge className="absolute top-2 right-2 bg-transparent text-white/70">{project.category}</Badge>

          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          >
            <div className="flex gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-white text-black hover:bg-white/90" asChild>
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" /> Demo
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" aria-hidden="true" /> Code
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-white/20 text-white/70">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
