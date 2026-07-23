import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const projects = [
  {
    title: "Recipehub",
    description:
      "A web application that allows users to create, share, and discover recipes with a focus on community engagement and personalized recommendations.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS","DaisyUI"],
    category: "Web Application",
    highlights: ["Recipe creation", "Community sharing", "Personalized recommendations"],
    image: "/images/recipehub-project.png",
  },
  {
    title: "Cake Reservation System",
    description:
      "A web application for managing cake orders, inventory, and customer reservations with a user-friendly interface.",
    technologies: ["PHP", "CSS", "MySQL"],
    category: "E-commerce",
    highlights: ["Order management", "Inventory tracking", "Customer reservations"],
    image: "/images/cake.png",
  },
  {
    title: "Student Clearance and Monitoring System",
    description:
      "A web application designed to streamline the student clearance process, track progress, and provide real-time updates for students and administrators.",
    technologies: ["Angular","PHP", "MySQL"],
    category: "Web Application",
    highlights: ["Student clearance tracking", "Real-time updates", "Administrator dashboard"],
    image: "/images/scams.png",
  },
  {
    title: "Web E-learning System",
    description:
      "A web-based e-learning platform that provides interactive courses, quizzes, and progress tracking for students.",
    technologies: ["React", "TypeScript", "Vite"],
    category: "E-learning",
    highlights: ["Interactive courses", "Quizzes and assessments", "Progress tracking"],
    image: "/images/elearning-project.png",
  },
  {
    title: "Clinic Management System",
    description:
      "A comprehensive web-based solution for managing clinic operations, including patient records, appointments, and billing.",
    technologies: ["Next.js", "Tailwind CSS",],
    category: "Healthcare",
    highlights: ["Patient record management", "Appointment scheduling", "Billing and invoicing"],
    image: "/images/clinic-project.png",
  }
];

const strengths = [
  {
    icon: Lightbulb,
    title: "Purpose-driven",
    description: "Every project starts with a clear problem and a practical outcome for the people using it.",
  },
  {
    icon: Layers3,
    title: "Thoughtfully designed",
    description: "Simple, responsive interfaces make each experience easier to understand and use.",
  },
  {
    icon: Rocket,
    title: "Built to grow",
    description: "Scalable tools and maintainable code provide a strong foundation for future improvements.",
  },
];

const processSteps = [
  { icon: Users, title: "Discover", description: "Understand the goals, users, and workflows behind the project." },
  { icon: Lightbulb, title: "Plan", description: "Define the features, user experience, and technical direction." },
  { icon: Code2, title: "Build", description: "Develop responsive, reliable features with attention to detail." },
  { icon: CheckCircle2, title: "Refine", description: "Test the experience, incorporate feedback, and prepare for launch." },
];

const Projects = () => (
  <Layout>
    <section className="section-padding bg-card">
      <div className="container-custom">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          description="Digital solutions designed to make everyday work simpler, clearer, and more effective."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group flex flex-col overflow-hidden bg-background rounded-2xl border-2 border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="flex flex-col flex-1 p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{project.category}</p>
                <h2 className="font-display font-bold text-xl mb-3 leading-tight">{project.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{project.description}</p>

                <div className="pt-5 border-t border-border mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key features</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Approach"
          title="Built for Real-world Use"
          description="The focus is on solutions that are useful today and flexible enough for what comes next."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {strengths.map((strength) => (
            <motion.div key={strength.title} variants={staggerItem} whileHover={{ y: -8 }} className="group p-7 bg-card rounded-2xl border-2 border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <strength.icon className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg mb-2">{strength.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-custom">
        <SectionHeader
          badge="Workflow"
          title="From Idea to Launch"
          description="A collaborative process keeps the work focused on the goals that matter most."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((step, index) => (
            <motion.div key={step.title} variants={staggerItem} className="relative p-6 bg-background rounded-2xl border-2 border-border text-center shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <span className="absolute top-4 right-5 text-xs font-bold text-primary">0{index + 1}</span>
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                <step.icon className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg mb-2">{step.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Globe2 className="w-8 h-8" />
          </div>
          <SectionHeader badge="Let's Build" title="Have a Project in Mind?" description="Let's talk about how a thoughtful digital solution can move your idea forward." align="center" />
          <Button asChild size="lg" className="h-12 px-8">
            <Link to="/contact">Start a Conversation <ArrowUpRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Projects;
