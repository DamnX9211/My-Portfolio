"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, TrendingUp, Award, Code2 } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

export default function ExperienceSection() {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechInnovate Solutions",
      period: "2021 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Leading development of scalable web applications and mentoring junior developers. Architected microservices that improved system performance by 60%.",
      achievements: [
        "Led team of 5 developers on high-traffic e-commerce platform",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Increased system scalability by 60% through microservices architecture",
      ],
      skills: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
      metrics: {
        teamSize: 5,
        projectsLed: 12,
        performanceImprovement: "60%",
      },
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Scientist",
      company: "DataViz Analytics",
      period: "2019 - 2021",
      location: "Boston, MA",
      type: "Full-time",
      description:
        "Developed machine learning models and data visualization dashboards. Created predictive models that increased customer retention by 25%.",
      achievements: [
        "Built recommendation engine increasing order value by 15%",
        "Developed NLP models with 92% accuracy for sentiment analysis",
        "Created interactive dashboards reducing reporting time by 40%",
      ],
      skills: ["Python", "TensorFlow", "Pandas", "Tableau", "SQL"],
      metrics: {
        modelsBuilt: 8,
        accuracyImprovement: "92%",
        retentionIncrease: "25%",
      },
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Web Developer",
      company: "Creative Digital Agency",
      period: "2017 - 2019",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Designed and developed responsive websites for diverse clients. Focused on performance optimization and user experience improvements.",
      achievements: [
        "Developed 20+ client websites with focus on performance",
        "Reduced page load times by 30% through optimization",
        "Implemented responsive design across all projects",
      ],
      skills: ["JavaScript", "CSS", "PHP", "WordPress", "jQuery"],
      metrics: {
        websitesBuilt: 20,
        performanceGain: "30%",
        clientSatisfaction: "98%",
      },
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2016 - 2017",
      location: "Austin, TX",
      type: "Full-time",
      description:
        "Contributed to SaaS platform development and participated in agile development processes. Focused on learning and implementing best practices.",
      achievements: [
        "Contributed to SaaS platform for small businesses",
        "Reduced bug count by 35% through improved testing",
        "Increased user engagement by 20% with new features",
      ],
      skills: ["JavaScript", "PHP", "MySQL", "Git", "Agile"],
      metrics: {
        bugReduction: "35%",
        engagementIncrease: "20%",
        featuresDelivered: 15,
      },
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="container px-4 md:px-6 relative">
        <SectionHeading
          title="My Professional Journey"
          subtitle="A timeline of growth, innovation, and impactful contributions across different roles and companies."
          badge="Experience"
        />

        <div className="mx-auto max-w-6xl">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                inView={isInView}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Experience Card Component
function ExperienceCard({ experience, index, inView, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-center mb-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white z-10 border-4 border-black"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
      />

      {/* Content Card */}
      <motion.div
        className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="relative overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm">
          {/* Gradient border effect */}
          <motion.div
            className={`absolute -inset-0.5 bg-gradient-to-r ${experience.color} opacity-0 blur-sm`}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />

          <CardContent className="relative p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                <div className="flex items-center gap-2 text-white/70">
                  <span className="font-medium">{experience.company}</span>
                  <Badge variant="outline" className="border-white/20 text-white/70 text-xs">
                    {experience.type}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <div className="flex items-center gap-1 text-sm text-white/60">
                  <Calendar className="h-3 w-3" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-1 text-sm text-white/60">
                  <MapPin className="h-3 w-3" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 mb-4">{experience.description}</p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 rounded-lg bg-white/5">
              {Object.entries(experience.metrics).map(([key, value], i) => (
                <motion.div
                  key={key}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
                >
                  <div className="text-lg font-bold text-primary">{value}</div>
                  <div className="text-xs text-white/50 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                <Award className="h-4 w-4" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 + i * 0.1 }}
                    className="flex items-start text-sm text-white/70"
                  >
                    <TrendingUp className="h-3 w-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-medium text-white/80 mb-2 flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.8 + i * 0.05 }}
                  >
                    <Badge variant="secondary" className="bg-white/10 text-white/80 text-xs">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  )
}
