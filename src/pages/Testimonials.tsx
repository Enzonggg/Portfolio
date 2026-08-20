import { FormEvent, useEffect, useState } from "react";
import { Quote, Send, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type Testimonial = { name: string; relationship: string; message: string };
const storageKey = "enzo-testimonials";

const featured: Testimonial[] = [
  { name: "Add your recommendation", relationship: "Client, classmate, or collaborator", message: "Share what it was like working together, the problem solved, or the outcome you noticed." },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(featured);
  const [form, setForm] = useState({ name: "", relationship: "", message: "" });

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setTestimonials([...featured, ...JSON.parse(saved)]);
  }, []);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.relationship.trim() || form.message.trim().length < 20) {
      toast.error("Please add your name, relationship, and a recommendation of at least 20 characters.");
      return;
    }
    const testimonial = { name: form.name.trim(), relationship: form.relationship.trim(), message: form.message.trim() };
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]") as Testimonial[];
    localStorage.setItem(storageKey, JSON.stringify([testimonial, ...saved]));
    setTestimonials((current) => [current[0], testimonial, ...current.slice(1)]);
    setForm({ name: "", relationship: "", message: "" });
    toast.success("Thank you - your recommendation has been added.");
  };

  return <Layout>
    <HeroSection badge="Recommendations" title="Kind Words" description="Feedback from the people I work and learn with." variant="compact" />
    <section className="section-padding"><div className="container-custom grid lg:grid-cols-[1.15fr_.85fr] gap-12">
      <div><h2 className="font-display text-3xl font-bold mb-7">Testimonials</h2><div className="grid gap-5">{testimonials.map((testimonial, index) => <article key={`${testimonial.name}-${index}`} className="relative p-7 bg-card border border-border rounded-2xl"><Quote className="absolute top-6 right-6 w-7 h-7 text-primary/20" /><div className="flex gap-1 text-primary mb-4">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div><p className="text-muted-foreground leading-relaxed pr-8">“{testimonial.message}”</p><div className="mt-5"><p className="font-semibold">{testimonial.name}</p><p className="text-sm text-primary">{testimonial.relationship}</p></div></article>)}</div></div>
      <aside className="lg:sticky lg:top-28 h-fit p-7 bg-secondary rounded-2xl border border-border"><h2 className="font-display text-2xl font-bold mb-2">Leave a recommendation</h2><p className="text-sm text-muted-foreground mb-6">Your feedback means a lot. It will appear on this device after submission.</p><form onSubmit={submit} className="space-y-4"><div><label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label><Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div><div><label htmlFor="relationship" className="block text-sm font-medium mb-2">How did you work together?</label><Input id="relationship" value={form.relationship} onChange={(e) => setForm({ ...form, relationship: e.target.value })} /></div><div><label htmlFor="recommendation" className="block text-sm font-medium mb-2">Your recommendation</label><Textarea id="recommendation" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What stood out about the experience?" className="min-h-36 resize-none" /></div><Button type="submit" className="w-full">Submit recommendation <Send className="w-4 h-4 ml-2" /></Button></form></aside>
    </div></section>
  </Layout>;
};

export default Testimonials;
