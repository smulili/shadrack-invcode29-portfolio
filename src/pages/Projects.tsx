import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user auth, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "",
  },
  {
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot powered by machine learning for customer support automation.",
    tags: ["Python", "TensorFlow", "Flask"],
    link: "",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects, skills, and professional experience.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout plans and progress analytics.",
    tags: ["React Native", "Firebase"],
    link: "",
  },
  {
    title: "Task Management System",
    description: "A collaborative project management tool with real-time updates and team workflows.",
    tags: ["Next.js", "PostgreSQL", "WebSocket"],
    link: "",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard for business intelligence with dynamic charts and filters.",
    tags: ["React", "D3.js", "REST API"],
    link: "",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (link: string) => {
    if (link && link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="My Projects"
        accent="Portfolio"
        subtitle="A showcase of my work, side projects, and contributions."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="h-48 bg-hero/80 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary-foreground/40 text-sm tracking-wider">
                    PROJECT PREVIEW
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="bg-secondary text-muted-foreground font-heading text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleProjectClick(project.link)}
                    className="inline-flex items-center gap-2 text-teal-link font-heading font-semibold text-sm hover:underline"
                  >
                    View Website <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
