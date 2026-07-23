import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  badge,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("mb-16", align === "center" && "text-center", className)}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6`}>
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-accent-foreground">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-muted-foreground text-lg max-w-2xl",
          align === "center" && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
