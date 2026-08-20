import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Linkedin, Github, Facebook, Instagram, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import karenImage from "@/assets/aurin.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/aurin-lorenzo-a1b805365/" },
  { name: "GitHub", icon: Github, url: "https://github.com/Enzonggg" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/lorenzo.aurin.2025" },
  { name: "Instagram", icon: Instagram, url: "#" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubscribed(true);
    
    toast.success("Successfully subscribed!", {
      description: "Thank you for joining the newsletter.",
    });
    
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-16">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
        >
          {/* Logo & Description */}
          <motion.div variants={staggerItem} className="lg:col-span-3">
            <img 
              src={karenImage} 
              alt="Karen Pearl" 
              className="w-20 h-20 rounded-full object-cover mb-5 border-2 border-primary/20"
            />
            <button 
              onClick={handleLogoClick}
              className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              enzo
            </button>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Delivering web development and design solutions for clients, while supporting 
              the community through giving-back initiatives and projects programs.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h4 className="font-display font-semibold mb-5 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Let's Connect */}
          <motion.div variants={staggerItem} className="lg:col-span-3">
            <h4 className="font-display font-semibold mb-5 text-foreground">Contact Information</h4>
            <div className="space-y-3 mb-8">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@aurinlorenzo699@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                contact@aurinlorenzo@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Laguna, Philippines
              </div>
            </div>

            <h4 className="font-display font-semibold mb-4 text-foreground">Let's Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={staggerItem} className="lg:col-span-4">
            <h4 className="font-display font-semibold mb-5 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-5">
              Subscribe to receive the latest newsletter, blogs, and updates on tech projects program and development.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-secondary border-border w-full"
              />
              <Button
                type="submit"
                className="w-full h-11"
                disabled={isSubmitting || isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Subscribed
                  </>
                ) : isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} enzo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
