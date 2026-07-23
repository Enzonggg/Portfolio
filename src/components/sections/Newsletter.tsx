import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubscribed(true);
    toast.success("Successfully subscribed!", {
      description: "Thank you for joining the newsletter."
    });
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };
  return <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Stay <span className="text-primary">Updated</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Subscribe to receive the latest insights, industry trends, tutorials, and development resources delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 h-12 bg-background border-border focus:border-primary text-base px-5" />
            <Button type="submit" size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap font-semibold px-8" disabled={isSubmitting || isSubscribed}>
              {isSubscribed ? <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Subscribed
                </> : isSubmitting ? "Subscribing..." : <>
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>;
};
export default Newsletter;