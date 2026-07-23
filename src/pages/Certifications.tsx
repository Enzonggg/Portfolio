import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { Award, CalendarDays, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export const certifications = [
  {
    title: "IT Specialist - HTML and CSS",
    issuer: "Certiport",
    date: "01/07/2026",
    image: "/images/htmlandcss.png",
    credentialUrl: "#",
  },
  {
    title: "Data Analytics Fundamentals",
    issuer: "DataSense Analytics",
    date: "05/15/2026",
    image: "/images/data analytics.jpg",
    credentialUrl: "#",
  },
  {
    title: "Getting Started with Angular",
    issuer: "Coursera",
    date: "04/29/2026",
    image: "/images/angular.png",
    credentialUrl: "#",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Coursera",
    date: "05/09/2026",
    image: "/images/project-management.png",
    credentialUrl: "#",
  },
  {
    title: "Ai Fundamentals",
    issuer: "Coursera",
    date: "06/12/2026",
    image: "/images/ai-fundamentals.png",
    credentialUrl: "#",
  }
];

const Certifications = () => (
  <Layout>
    <HeroSection
      badge="Credentials"
      title="Certifications"
      description="A collection of certifications and continued learning in web development, design, and cloud technology."
      variant="compact"
    />

    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group h-full overflow-hidden bg-background rounded-2xl border-2 border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
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
              <div className="p-6 flex flex-col flex-1">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{certification.issuer}</p>
                <h2 className="font-display font-bold text-xl leading-tight mb-4">{certification.title}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <CalendarDays className="w-4 h-4" />
                  <span>{certification.date}</span>
                </div>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                    View Credential <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Certifications;
