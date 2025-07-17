"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Rocket, Brain, Heart, Zap, Code2, Database, Palette, Users } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

export default function AboutSection() {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const stats = [
    { number: "5+", label: "Years Experience", icon: <Zap className="h-5 w-5" /> },
    { number: "50+", label: "Projects Completed", icon: <Code2 className="h-5 w-5" /> },
    { number: "20+", label: "Happy Clients", icon: <Heart className="h-5 w-5" /> },
    { number: "15+", label: "Technologies", icon: <Database className="h-5 w-5" /> },
  ]

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation First",
      description: "Always exploring cutting-edge technologies and methodologies to deliver exceptional solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal-Oriented",
      description: "Focused on achieving measurable results that drive business growth and user satisfaction.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Spirit",
      description: "Believing in the power of teamwork and open communication to achieve extraordinary outcomes.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Committed to staying ahead of industry trends and continuously expanding my skill set.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const journey = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Started my journey in tech with a Computer Science degree and passion for problem-solving.",
    },
    {
      year: "2018",
      title: "First Breakthrough",
      description: "Landed my first major project, developing a web application that served 10K+ users.",
    },
    {
      year: "2020",
      title: "Data Science Pivot",
      description: "Expanded into data science, combining my development skills with analytical expertise.",
    },
    {
      year: "2022",
      title: "Leadership Role",
      description: "Became a senior developer, leading teams and mentoring junior developers.",
    },
    {
      year: "2024",
      title: "Full-Stack Mastery",
      description: "Achieved expertise in both web development and data science, creating end-to-end solutions.",
    },
  ]

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-muted/30">
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="container px-4 md:px-6 relative">
        <SectionHeading
          title="My Creative Journey"
          subtitle="From curiosity to expertise - discover the passion and principles that drive my work."
          badge="About Me"
        />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-0">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-foreground mb-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-50 blur-lg"
              animate={
                isInView
                  ? {
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.02, 1],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Rocket className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>

              <div className="space-y-6">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary text-sm font-bold"
                        whileHover={{ scale: 1.2 }}
                      >
                        {item.year.slice(-2)}
                      </motion.div>
                      {index < journey.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {item.year}
                      </Badge>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Values Grid */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Palette className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold">Core Values</h3>
              </div>
              <p className="text-muted-foreground">
                The principles that guide my work and define my approach to every project and collaboration.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-4 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white flex-shrink-0`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {value.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {value.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
