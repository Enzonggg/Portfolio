import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Linkedin, Github, Facebook, Instagram, Send, CheckCircle, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
const inquiryTypes = [{
  value: "services",
  label: "Services"
}, {
  value: "projects",
  label: "Projects"
}, {
  value: "collaboration",
  label: "Collaboration"
}, {
  value: "job",
  label: "Job Offer"
}, {
  value: "newsletter",
  label: "Newsletter"
}];
const socialLinks = [{
  icon: Linkedin,
  url: "https://www.linkedin.com/in/aurin-lorenzo-a1b805365/"
}, {
  icon: Github,
  url: "https://github.com/Enzonggg"
}, {
  icon: Facebook,
  url: "https://www.facebook.com/lorenzo.aurin.2025"
}, {
  icon: Instagram,
  url: "#"
}];
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.inquiryType || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out!"
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      inquiryType: "",
      message: ""
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  return <Layout>
      <HeroSection badge="Contact" title="Get in Touch" description="Have a project in mind or questions about services and projects? Reach out and let's start a conversation." variant="compact" />

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} className="order-1">
              <h2 className="text-xl font-display font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name <span className="text-destructive">*</span></label>
                    <Input id="firstName" value={formData.firstName} onChange={e => setFormData({
                    ...formData,
                    firstName: e.target.value
                  })} placeholder="Enter first name" required className="h-11" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name <span className="text-destructive">*</span></label>
                    <Input id="lastName" value={formData.lastName} onChange={e => setFormData({
                    ...formData,
                    lastName: e.target.value
                  })} placeholder="Enter last name" required className="h-11" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address <span className="text-destructive">*</span></label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="Enter email address" required className="h-11" />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">Inquiry Type <span className="text-destructive">*</span></label>
                  <Select value={formData.inquiryType} onValueChange={value => setFormData({
                  ...formData,
                  inquiryType: value
                })}>
                    <SelectTrigger className="h-11"><SelectValue placeholder="Select inquiry type" /></SelectTrigger>
                    <SelectContent>{inquiryTypes.map(type => <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-destructive">*</span></label>
                  <Textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Tell me about your project or inquiry..." required className="min-h-[120px] resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting || isSubmitted}>
                  {isSubmitted ? <><CheckCircle className="w-4 h-4 mr-2" />Message Sent</> : isSubmitting ? "Sending..." : <>Send Message<Send className="w-4 h-4 ml-2" /></>}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="order-2">
              <h2 className="text-xl font-display font-semibold mb-6">Additional Information</h2>
              <div className="space-y-4 mb-8">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@aurinlorenzo699@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                  <span className="text-sm">contact@aurinlorenzo@gmail.com</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center"><MessageCircle className="w-4 h-4" /></div>
                  <span className="text-sm">Message on WhatsApp</span>
                </a>
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
                  <span className="text-sm">Laguna, Philippines</span>
                </div>
              </div>
              <h3 className="text-lg font-display font-semibold mb-4">Let's Connect</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1
              }} className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <social.icon className="w-5 h-5" />
                  </motion.a>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;