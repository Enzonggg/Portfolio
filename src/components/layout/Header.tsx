import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Linkedin, Github, Facebook, Instagram, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenuVariants } from "@/lib/animations";

const navLinks = [
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            enzo
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right side - Social Links + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
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
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border overflow-hidden"
          >
            <nav className="container-custom py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
