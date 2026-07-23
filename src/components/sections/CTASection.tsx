import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
}

const CTASection = ({ title, description, primaryCta, secondaryCta }: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl border border-border bg-card text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to={primaryCta.link}>
                  {primaryCta.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              {secondaryCta && (
                <Button asChild variant="outline" size="lg" className="h-12 px-8 border-border hover:bg-secondary">
                  <Link to={secondaryCta.link}>
                    {secondaryCta.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
