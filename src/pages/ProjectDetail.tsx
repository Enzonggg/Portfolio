import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProject } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return <Layout><section className="section-padding"><div className="container-custom text-center"><h1 className="text-3xl font-display font-bold mb-4">Project not found</h1><Button asChild><Link to="/projects">Back to projects</Link></Button></div></section></Layout>;
  }

  return <Layout>
    <article className="section-padding">
      <div className="container-custom max-w-5xl">
        <Button asChild variant="ghost" className="mb-8 -ml-3"><Link to="/projects"><ArrowLeft className="w-4 h-4 mr-2" />All projects</Link></Button>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{project.category}</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">{project.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">{project.description}</p>
        <img src={project.image} alt={`${project.title} preview`} className="w-full max-h-[520px] object-cover rounded-2xl border border-border shadow-lg" onError={(event) => { event.currentTarget.src = "/placeholder.svg"; }} />
        <div className="grid md:grid-cols-3 gap-6 my-12">
          {[{ title: "The challenge", content: project.problem }, { title: "The approach", content: project.solution }, { title: "The outcome", content: project.outcome }].map((item) => <section key={item.title} className="p-6 bg-card border border-border rounded-2xl"><h2 className="font-display font-bold text-lg mb-3">{item.title}</h2><p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p></section>)}
        </div>
        <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-10">
          <section><h2 className="font-display text-2xl font-bold mb-5">Key features</h2><ul className="space-y-3">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" />{highlight}</li>)}</ul></section>
          <section><h2 className="font-display text-2xl font-bold mb-5">Technology</h2><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">{technology}</span>)}</div><p className="text-sm text-muted-foreground mt-6">Want to build something similar?</p><Button asChild className="mt-3"><Link to="/contact">Start a conversation <ExternalLink className="w-4 h-4 ml-2" /></Link></Button></section>
        </div>
      </div>
    </article>
  </Layout>;
};

export default ProjectDetail;
