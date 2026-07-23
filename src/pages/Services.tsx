import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Code, Smartphone, Palette, Globe, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
const services = [{
  icon: Code,
  title: "Web Development",
  description: "Custom-coded, client-facing websites built from scratch",
  includes: ["Project discovery and technical planning", "Custom, responsive website development", "Interactive features and API integrations", "Performance, accessibility, and SEO foundations", "Deployment and hosting support", "Post-launch fixes and handover guidance"],
  featured: true
}, {
  icon: Smartphone,
  title: "Mobile Application Development",
  description: "Native apps for Android and iOS",
  includes: ["Cross-platform application development", "Responsive screens and intuitive user flows", "Custom features tailored to your requirements", "Backend and API integration support", "Testing for a reliable user experience", "Deployment preparation for Android and iOS"],
  featured: true
}, {
  icon: Palette,
  title: "UI/UX Design (Figma)",
  description: "Designing intuitive interfaces and engaging user experiences",
  includes: ["User flows and information architecture", "Wireframes for key screens and interactions", "High-fidelity Figma designs", "Clickable prototypes for review", "Consistent visual styles and components", "Developer-ready design handoff"],
  featured: false
}, {
  icon: Globe,
  title: "WordPress Development",
  description: "Custom WordPress solutions for businesses and portfolios",
  includes: ["WordPress setup and configuration", "Custom pages that match your brand", "Mobile-responsive layouts", "Easy-to-manage content sections", "Performance and basic SEO optimization", "Launch support and site handover"],
  featured: false
}];
const processSteps = [{
  step: "01",
  title: "Discovery",
  description: "Understanding requirements and goals"
}, {
  step: "02",
  title: "Design",
  description: "Creating wireframes and prototypes"
}, {
  step: "03",
  title: "Development",
  description: "Building with clean code and testing"
}, {
  step: "04",
  title: "Launch",
  description: "Deploying and optimizing"
}, {
  step: "05",
  title: "Support",
  description: "Ongoing maintenance and updates"
}];
const Services = () => {
  return <Layout>
      <HeroSection badge="Services" title="Digital Solutions for Modern Businesses" description="Comprehensive web development and design services tailored to help clients achieve their digital goals." variant="compact" />

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader badge="What's Offered" title="Services" description="From concept to deployment, delivering solutions that drive results" align="center" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map(service => <motion.div key={service.title} variants={staggerItem} whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }} className={`group relative p-8 bg-background rounded-2xl border-2 transition-all duration-500 ${service.featured ? "border-primary/30 shadow-lg hover:shadow-2xl" : "border-border shadow-sm hover:shadow-xl hover:border-primary/20"}`}>
                {service.featured && <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </span>
                  </div>}

                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mb-7 pl-19">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">What's Included</h4>
                  <ul className="space-y-2.5">
                    {service.includes.map((item, i) => <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>)}
                  </ul>
                </div>

                <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm hover:shadow-md transition-all">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Process" title="How It Works" description="A structured approach to delivering quality digital solutions" align="center" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {processSteps.map((item, index) => <motion.div key={item.step} variants={staggerItem} className="relative">
                <motion.div whileHover={{ y: -8, scale: 1.05 }} className="relative p-6 bg-card rounded-2xl border-2 border-border text-center shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-2xl shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </motion.div>
                {index < processSteps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-10" />}
              </motion.div>)}
          </motion.div>
        </div>
      </section>

    </Layout>;
};
export default Services;
