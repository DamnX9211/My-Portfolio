"use client"
import { motion } from "framer-motion"
import { cubicBezier } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "@/components/section-heading"


interface name {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}
type SkillsSectionProps = {}

// Animation variants

const customEase = cubicBezier(0.22, 1, 0.36, 1)

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

export default function SkillsSection({}: SkillsSectionProps) {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <motion.div
        className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="container px-4 md:px-6 relative">
        <SectionHeading
          title="Technical Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiencies."
          badge="Skills"
        />

        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 p-1 bg-white/5 rounded-xl">
              {[
                { value: "web", label: "Web Development" },
                { value: "data", label: "Data Science" },
                { value: "tools", label: "Tools & Platforms" },
                { value: "soft", label: "Soft Skills" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="web" className="mt-8 space-y-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-6"
              >
                {[
                  { name: "JavaScript", level: 95 },
                  { name: "React", level: 90 },
                  { name: "TypeScript", level: 85 },
                  { name: "Next.js", level: 88 },
                  { name: "HTML/CSS", level: 92 },
                  { name: "Node.js", level: 80 },
                ].map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} index={index} inView={isInView}  />
                ))}
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8"
              >
                {["Tailwind CSS", "GraphQL", "Vue.js", "Angular", "Express", "MongoDB", "Redux", "Gatsby"].map(
                  (skill, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center justify-center p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {skill}
                    </motion.div>
                  ),
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="data" className="mt-8 space-y-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-6"
              >
                {[
                  { name: "Python", level: 92 },
                  { name: "Pandas", level: 88 },
                  { name: "Scikit-learn", level: 85 },
                  { name: "SQL", level: 90 },
                  { name: "TensorFlow", level: 75 },
                  { name: "Data Visualization", level: 87 },
                ].map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} index={index} inView={isInView}  />
                ))}
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8"
              >
                {["NumPy", "PyTorch", "R", "Matplotlib", "Seaborn", "Tableau", "Power BI", "Big Data"].map(
                  (skill, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center justify-center p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {skill}
                    </motion.div>
                  ),
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="tools" className="mt-8 space-y-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              >
                {[
                  { name: "Git", icon: "github" },
                  { name: "Docker", icon: "box" },
                  { name: "AWS", icon: "cloud" },
                  { name: "VS Code", icon: "code" },
                  { name: "Figma", icon: "pen-tool" },
                  { name: "Jira", icon: "trello" },
                  { name: "Vercel", icon: "triangle" },
                  { name: "Netlify", icon: "globe" },
                  { name: "Azure", icon: "cloud" },
                  { name: "GCP", icon: "cloud" },
                  { name: "Heroku", icon: "server" },
                  { name: "CI/CD", icon: "git-branch" },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl opacity-0 blur transition duration-300"
                      whileHover={{ opacity: 0.8 }}
                      aria-hidden="true"
                    />
                    <div className="relative flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-black h-full">
                      <div
                        className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3"
                        aria-hidden="true"
                      >
                        <span className="text-primary text-xl">{tool.icon.charAt(0).toUpperCase()}</span>
                      </div>
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="soft" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
                  <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
                    <h4 className="text-xl font-bold mb-4">Communication & Collaboration</h4>
                    <ul className="space-y-3">
                      {[
                        "Clear and effective communication with clients and team members",
                        "Ability to explain complex technical concepts in simple terms",
                        "Collaborative approach to problem-solving",
                        "Experience working in cross-functional teams",
                        "Strong presentation and documentation skills",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                          <motion.div
                            className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                            aria-hidden="true"
                          />
                          <span className="text-white/70">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                  <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
                    <h4 className="text-xl font-bold mb-4">Problem Solving & Leadership</h4>
                    <ul className="space-y-3">
                      {[
                        "Analytical approach to problem identification and resolution",
                        "Creative thinking and innovative solution development",
                        "Ability to lead and mentor junior team members",
                        "Project management and organizational skills",
                        "Adaptability and resilience in fast-paced environments",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="mr-3 mt-1 w-2 h-2 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            aria-hidden="true"
                          />
                          <span className="text-white/70">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}



// Skill Bar Component
function SkillBar({ name, level, index, inView }: { name: string; level: number; index: number; inView: boolean;  }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-white/50">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full will-change-transform"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  )
}
