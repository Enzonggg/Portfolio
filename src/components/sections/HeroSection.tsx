import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: { text: string; link: string; download?: boolean; openInNewTab?: boolean };
  secondaryCta?: { text: string; link: string; download?: boolean; openInNewTab?: boolean };
  variant?: "default" | "compact" | "centered";
  image?: string;
}

const HeroSection = ({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
  image,
}: HeroSectionProps) => {
  const isCompact = variant === "compact";
  const isCentered = variant === "centered";
  const isDefault = variant === "default";

  return (
    <section 
      className={`relative overflow-hidden ${
        isCompact ? "pt-8 pb-10" : isCentered ? "pt-12 pb-12" : "min-h-[calc(100vh-5rem)] flex items-center py-8"
      }`}
    >
      <div className="container-custom relative z-10">
        <div className={`${isDefault && image ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" : ""} ${isCentered ? "text-center max-w-3xl mx-auto" : ""}`}>
          <div className={`${isCentered ? "" : "max-w-xl"}`}>
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-accent-foreground">{badge}</span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`font-display font-semibold leading-[1.2] tracking-tight mb-5 ${
                isCompact ? "text-3xl md:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"
              }`}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-muted-foreground leading-relaxed mb-8 ${
                isCompact ? "text-base" : "text-lg"
              } ${isCentered ? "mx-auto max-w-xl" : ""}`}
            >
              {description}
            </motion.p>

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`flex flex-wrap gap-4 ${isCentered ? "justify-center" : ""}`}
              >
                {primaryCta && (
                  <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                    {primaryCta.download || primaryCta.openInNewTab ? (
                      <a href={primaryCta.link} download={primaryCta.download ? "Aurin-Lorenzo-Resume.html" : undefined} target={primaryCta.openInNewTab ? "_blank" : undefined} rel={primaryCta.openInNewTab ? "noopener noreferrer" : undefined}>
                        {primaryCta.text}
                        {primaryCta.download ? <Download className="w-4 h-4 ml-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                      </a>
                    ) : (
                      <Link to={primaryCta.link}>
                        {primaryCta.text}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    )}
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 border-border hover:bg-secondary">
                    {secondaryCta.download || secondaryCta.openInNewTab ? (
                      <a href={secondaryCta.link} download={secondaryCta.download ? "Aurin-Lorenzo-Resume.html" : undefined} target={secondaryCta.openInNewTab ? "_blank" : undefined} rel={secondaryCta.openInNewTab ? "noopener noreferrer" : undefined}>{secondaryCta.text}{secondaryCta.download && <Download className="w-4 h-4 ml-2" />}</a>
                    ) : <Link to={secondaryCta.link}>{secondaryCta.text}</Link>}
                  </Button>
                )}
              </motion.div>
            )}
          </div>

          {/* Image Section */}
          {isDefault && image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
                
                {/* Main image container */}
                <div className="relative">
                  {/* Geometric frame */}
                  <div className="absolute -inset-3 border-2 border-primary/20 rounded-2xl rotate-3" />
                  <div className="absolute -inset-3 border-2 border-primary/10 rounded-2xl -rotate-3" />
                  
                  {/* Image */}
                  <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                    <img 
                      src={image} 
                      alt="Karen Pearl" 
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating accent dots */}
                  <div className="absolute -top-4 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div className="absolute top-1/4 -right-6 w-2 h-2 bg-primary/60 rounded-full" />
                  <div className="absolute bottom-1/4 -left-4 w-2.5 h-2.5 bg-primary/80 rounded-full" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
