import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Palette, Globe, Zap, Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import karenImage from "@/assets/aurin.png";
import { certifications } from "./Certifications";

const techStack = ["React", "Angular", "Node.js", "TypeScript", "Tailwind CSS", "Flutter", "AWS", "Supabase", "Figma", "WordPress"];
const services = [{
  icon: Code,
  title: "Web Development",
  description: "Modern, responsive websites and web applications"
}, {
  icon: Smartphone,
  title: "Mobile Apps",
  description: "Cross-platform mobile solutions for iOS & Android"
}, {
  icon: Palette,
  title: "UI/UX Design",
  description: "User-centered design that drives engagement"
}, {
  icon: Globe,
  title: "WordPress",
  description: "Custom WordPress development and optimization"
}];
const Index = () => {
  return <Layout>
      <HeroSection
        badge="Full-Stack Developer"
        title=" &amp; Empowering Communities"
        description="Building modern, responsive, and user-focused web applications that transform ideas into reliable digital solutions."
        primaryCta={{
          text: "View Services",
          link: "/services"
        }}
        secondaryCta={{
          text: "Get in Touch",
          link: "/contact"
        }}
        image={karenImage}
        showDownloads={false}
      />

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Technology" title="Tech Stack" description="A diverse toolkit for building modern, scalable digital solutions" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="flex flex-wrap gap-3">
            {techStack.map(tech => <motion.span key={tech} variants={staggerItem} whileHover={{
            scale: 1.05
          }} className="px-5 py-2.5 bg-secondary rounded-lg border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default">
                {tech}
              </motion.span>)}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader badge="Services" title="What's I Offered" description="Comprehensive development and design services" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => <motion.div key={service.title} variants={staggerItem} whileHover={{
            y: -8
          }} className="group p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>)}
          </motion.div>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/services">View All Services<ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
            once: true
          }}>
              <SectionHeader badge="Projects" title="Giving Back to the Community" description="Free projects programs designed to help aspiring developers." />
              <ul className="space-y-4 mb-8">
                {[{
                icon: Zap,
                text: "Virtual sessions with hands-on projects"
              }, {
                icon: Calendar,
                text: "Flexible scheduling"
              }, {
                icon: BookOpen,
                text: "Certificates upon completion"
              }].map((item, i) => <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>)}
              </ul>
              <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/projects">Explore Programs<ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <div className="aspect-square bg-background rounded-2xl p-8 flex items-center justify-center border border-border shadow-lg">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-primary mb-2">6+</div>
                  <p className="text-muted-foreground">Projects Programs</p>
                  <p className="text-sm text-primary mt-2 font-medium">100% Free</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Credentials" title="Certifications" description="Continuous learning across development, design, and cloud technology" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.slice(0, 3).map(certification => <motion.div key={certification.title} variants={staggerItem}>
                <Link to="/certifications" className="group block">
                  <motion.article whileHover={{
                y: -5
              }} className="h-full overflow-hidden bg-card rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={certification.image}
                        alt={`${certification.title} certificate`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{certification.issuer}</span>
                      <h3 className="text-lg font-display font-semibold mt-2 mb-2">{certification.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">View certificate details and the skills covered.</p>
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                        View Credential<ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>)}
          </motion.div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-border hover:bg-secondary">
              <Link to="/certifications">View All Certifications<ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>;
};
export default Index;
