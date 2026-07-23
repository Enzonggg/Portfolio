import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Building2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import karenImage from "@/assets/aurin.png";
const techStack = {
  languages: [{
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  }, {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
  }, {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  }, {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  }, {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  }, {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  }, {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  }],
  frameworks: [{
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }, {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  }, {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg"
  }, {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  }, {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  }, {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  }],
  databases: [{
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  }, {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  }, {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
  }],
  tools: [{
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  }, {
    name: "Adobe XD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
  }, {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  }, {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  }, {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  }, {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
  }, {
    name: "Zapier",
    icon: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg"
  }]
};
const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  databases: "Databases",
  tools: "Tools & Platforms"
};
const workExperience = [{
  title: "Freelance / Client-Based System Developer",
  company: "Freelance",
  period: "2023 – Present",
  description: "Developing tailored web applications and database-driven systems for client needs.",
  responsibilities: ["Built responsive web applications and system interfaces", "Designed and maintained database-driven features", "Collaborated with clients from requirements gathering through delivery"]
}, {
  title: "Customer Support Virtual Assistant",
  company: "WFH Part-Time",
  period: "2026 – Present",
  description: "Providing remote customer support and helping maintain a positive client experience.",
  responsibilities: ["Respond to customer inquiries through online communication channels", "Assist with issue resolution and follow-up", "Maintain accurate support records and client information"]
}];
const About = () => {
  return <Layout>
      {/* Professional Journey */}
    <section className="section-padding bg-card">
  <div className="container-custom">
    <SectionHeader badge="Background" title="Professional Journey" />
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row gap-12 items-center"
    >
      <div className="lg:w-1/3 flex-shrink-0">
        <img
          src={karenImage}
          alt="Lorenzo Aurin - Full-Stack Developer"
          className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl object-cover border-2 border-primary/20 shadow-lg mx-auto"
        />
      </div>

      <div className="lg:w-2/3">
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          I am a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. My journey in web development has been driven by a desire to create impactful digital experiences that solve real-world problems. With expertise in modern frameworks, programming languages, and database management, I strive to deliver high-quality solutions that meet client needs and exceed expectations.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          My professional experience includes working on diverse projects, from building responsive web applications to developing complex database-driven systems. I am committed to continuous learning and staying updated with the latest industry trends, ensuring that I can provide innovative solutions and maintain a competitive edge in the ever-evolving tech landscape.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* Work Experience */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Career" title="Work Experience" description="Professional roles and projects that have shaped my development journey" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="space-y-6">
            {workExperience.map((job, index) => <motion.div key={index} variants={staggerItem} whileHover={{
            y: -5
          }} className="group p-8 bg-card rounded-2xl border-2 border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>)}
                </ul>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader badge="Skills" title="Technical Stack" description="A comprehensive toolkit for building modern digital solutions" />
          <div className="space-y-10">
            {Object.entries(techStack).map(([category, items]) => <motion.div key={category} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
            once: true
          }}>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{categoryLabels[category]}</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                  {items.map(tech => <motion.div key={tech.name} whileHover={{
                scale: 1.1
              }} className="group flex flex-col items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" onError={e => {
                    e.currentTarget.style.display = 'none';
                  }} />
                      </div>
                      <span className="text-xs font-medium text-center text-muted-foreground">{tech.name}</span>
                    </motion.div>)}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

    </Layout>;
};
export default About;
