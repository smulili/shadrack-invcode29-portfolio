import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user auth, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "",
    category: "Software & Web Dev",
  },
  {
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot powered by machine learning for customer support automation.",
    tags: ["Python", "TensorFlow", "Flask"],
    link: "",
    category: "Software & Web Dev",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects, skills, and professional experience.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "",
    category: "Portfolio",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout plans and progress analytics.",
    tags: ["React Native", "Firebase"],
    link: "",
    category: "Software & Web Dev",
  },
  {
    title: "Task Management System",
    description: "A collaborative project management tool with real-time updates and team workflows.",
    tags: ["Next.js", "PostgreSQL", "WebSocket"],
    link: "",
    category: "CRM",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard for business intelligence with dynamic charts and filters.",
    tags: ["React", "D3.js", "REST API"],
    link: "",
    category: "Asset Management",
  },
];

const projectTypes = [
  "Company",
  "Portfolio",
  "Asset Management",
  "CRM",
  "ERP",
  "Portfolios & Bios",
  "Software & Web Dev",
];

const budgetRanges = [
  "Below $100",
  "$100 - $1,000",
  "$1,000 - $10,000",
  "$10,000 - $100,000",
  "$1M and above",
];

const Projects = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budget: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleProjectClick = (link: string) => {
    if (link && link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.projectType || !form.budget) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      budget: form.budget,
      project_description: `[${form.projectType}] ${form.description}`,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Failed to submit project inquiry");
    } else {
      toast.success("Project inquiry submitted successfully!");
      setForm({ firstName: "", lastName: "", email: "", projectType: "", budget: "", description: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="My Projects"
        accent="Proven Results Executed at Speed"
        subtitle="A showcase of my work, side projects, and contributions."
      />

      {/* Results heading */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => handleProjectClick(project.link)}
                className="relative group cursor-pointer rounded-lg overflow-hidden border border-border bg-hero min-h-[320px] flex flex-col justify-end hover:shadow-2xl transition-all"
              >
                {/* Dark overlay with project preview area */}
                <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/80 to-hero/40" />

                {/* Category tag */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-accent text-accent-foreground font-heading font-bold text-xs px-3 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <h3 className="font-heading font-black text-2xl text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/60 font-body text-sm mb-4 max-w-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="bg-primary-foreground/10 text-primary-foreground/70 font-heading text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm group-hover:underline">
                    View Project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Inquiry Form - white bg */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-2 text-foreground text-center">
            Start Your <span className="text-accent">Project</span>
          </h2>
          <p className="text-muted-foreground font-body text-center mb-10">
            Tell me about your project and get a quote.
          </p>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 shadow-lg space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">FIRST NAME *</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">LAST NAME *</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">EMAIL *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">PROJECT TYPE *</label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">ESTIMATED BUDGET *</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">PROJECT DESCRIPTION</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent text-accent-foreground font-heading font-bold py-3 rounded hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" /> {submitting ? "Submitting..." : "Submit Project Inquiry"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
