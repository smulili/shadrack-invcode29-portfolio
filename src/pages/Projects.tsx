import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import assets from "../assets/portfolioscreenshot.png"; // Import custom CSS for this page

const projects = [
  {
    title: "Woden Website Redesign",
    description: "A narrative strategy agency redesign focusing on storytelling and high-conversion UX for branding industry leaders.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://woden.com/",
    category: "Software & Web Dev",
    image: "https://three29.com/wp-content/uploads/2025/09/Woden-Render.png",
  },
  {
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot powered by machine learning for customer support automation and NLP integration.",
    tags: ["Python", "TensorFlow", "Flask"],
    link: "",
    category: "Software & Web Dev",
    image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/07/Basics-of-creating-an-AI-chatbot-2.jpg",
  },
  {
    title: "Professional Videographer Portfolio",
    description: "High-end product photography for AI tech firms, focusing on sleek lighting and minimalist aesthetic for marketing campaigns.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://james-template-portfolio.onrender.com/",
    category: "Portfolio",
    image: "https://james-template-portfolio.onrender.com/assets/gallery-5-CDY4UdsE.jpg",
  },
  {
    title: "Randy Peters Rebrand",
    description: "Modernizing a 30-year legacy catering service in Sacramento through a complete digital identity overhaul.",
    tags: ["React Native", "Firebase"],
    link: "",
    category: "Software & Web Dev",
    image: "https://three29.com/wp-content/uploads/2024/12/RPCClipped.png",
  },
  {
    title: "Bogle Winery Website",
    description: "Custom-designed WordPress ecosystem for Bogle Winery, enhancing digital presence for their tasting room.",
    tags: ["Next.js", "PostgreSQL", "WebSocket"],
    link: "https://boglewinery.com/",
    category: "Software & Web Dev",
    image: "https://three29.com/wp-content/uploads/2024/02/Bogleclipped-1.png",
  },
  {
    title: "M3Components Platform",
    description: "Designed a clean and approachable interface simplifying visitor interaction for turn-key building products.",
    tags: ["React", "D3.js", "REST API"],
    link: "https://m3components.com/",
    category: "Asset Management",
    image: "https://three29.com/wp-content/uploads/2024/02/M3clipped-1.png",
  },
  {
    title: "Mikuni sushi web development ",
    description: "Mikuni Sushi came invcode29 to realize a new website (and mobile app) that tied their website, point-of-sale, and reservation system together.",
    tags: ["React", "D3.js", "REST API"],
    link: "",
    category: "software & web dev",
    image: "https://three29.com/wp-content/uploads/2024/02/Mikuniclipped-2x.png",
  },
  {
    title: "cobram estate web development ",
    description: "A new website for a growing olive oil brand whose story of conservation and quality control place their product head and shoulders above their competition.",
    tags: ["React", "D3.js", "REST API"],
    link: "https://cobramestate.com/",
    category: "software & web dev",
    image: "https://three29.com/wp-content/uploads/2024/02/Cobramclipped.png",
  },{
    title: "Watson Companies inc  development  ",
    description: "Watson wanted a site that captured their uniqueness, emphasized their human-first culture, and stood out from the typical industrial website. Our goal was to modernize their web presence with an on-brand, people-focused design, create visual depth and energy through motion, and ensure the final result was easy to use, impactful, and true to Watson’s identity. ",
    tags: ["React", "D3.js", "REST API"],
    link: "https://www.watsoncompanies.com/",
    category: "software & web dev",
    image: "https://three29.com/wp-content/uploads/2025/03/Watson-Companies-Inc.png",
  },
  {
    title: "Acumatica ERP inetgration",
    description: "Automated intercompany mapping solution for Acumatica ERP, reducing manual entry errors by 90%.",
    tags: ["Acumatica", "SQL", "DotNet"],
    link: "",
    category: "ERP",
    image: "https://orases2024stg.wpenginepowered.com/nitropack_static/GDbftNJaDDDTrNmdGDxhqTlIYKwlMYcT/assets/images/optimized/rev-0903514/orases2024stg.wpenginepowered.com/wp-content/uploads/2024/07/Orases-CaseStudy-CP-LapMock.webp",
  },
  {
    title: "Executive Bio Portal",
    description: "A secure and high-speed portal for managing and displaying executive portfolios for global teams.",
    tags: ["TypeScript", "Tailwind", "Supabase"],
    link: "",
    category: "Portfolios & Bios",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Asset Tracker IoT",
    description: "IoT-based logistics tracking system providing real-time geolocation for supply chain assets.",
    tags: ["Node.js", "IoT", "Google Maps API"],
    link: "",
    category: "Asset Management",
    image: "https://orases2024stg.wpenginepowered.com/nitropack_static/GDbftNJaDDDTrNmdGDxhqTlIYKwlMYcT/assets/images/optimized/rev-0903514/orases2024stg.wpenginepowered.com/wp-content/uploads/2026/01/Orases-CaseStudy-NPR-Laptopmock.webp",
  },
];

const projectTypes = ["Company", "Portfolio", "Asset Management", "CRM", "ERP", "Portfolios & Bios", "Software & Web Dev"];
const budgetRanges = ["Below $100", "$100 - $1,000", "$1,000 - $10,000", "$10,000 - $100,000", "$1M and above"];

const Projects = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", projectType: "", budget: "", description: "" });
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

      {/* invcode29 Style Project Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => handleProjectClick(project.link)}
                className="group cursor-pointer flex flex-col bg-card overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-[450px] w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Tag Overlay (Matching Screenshot) */}
                  <div className="absolute top-6 left-0">
                    <span className="bg-[#C2D501] text-[#101C28] font-heading font-black text-xs px-5 py-2 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info Section (High Contrast Dark Block) */}
                <div className="p-10 bg-[#101C28] min-h-[250px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-heading font-black text-white mb-4 leading-tight uppercase tracking-tighter">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-body text-base line-clamp-3 mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-[#C2D501] font-heading font-bold uppercase text-sm tracking-[0.2em] group-hover:gap-5 transition-all">
                    View Project <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-foreground text-center uppercase tracking-tighter">
            Start Your <span className="text-accent">Project</span>
          </h2>
          <p className="text-muted-foreground font-body text-center mb-12">
            Tell me about your business goals and get a custom technical quote.
          </p>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-none p-10 shadow-2xl space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-heading font-black tracking-widest mb-2 text-muted-foreground uppercase">FIRST NAME *</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border-b border-border rounded-none px-0 py-3 text-sm bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-heading font-black tracking-widest mb-2 text-muted-foreground uppercase">LAST NAME *</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border-b border-border rounded-none px-0 py-3 text-sm bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-heading font-black tracking-widest mb-2 text-muted-foreground uppercase">EMAIL ADDRESS *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border-b border-border rounded-none px-0 py-3 text-sm bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-heading font-black tracking-widest mb-2 text-muted-foreground uppercase">PROJECT TYPE *</label>
                <select name="projectType" value={form.projectType} onChange={handleChange} required className="w-full border-b border-border rounded-none px-0 py-3 text-sm bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#101C28]">Select Category</option>
                  {projectTypes.map((type) => <option key={type} value={type} className="bg-[#101C28]">{type}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-heading font-black tracking-widest mb-2 text-muted-foreground uppercase">BUDGET RANGE *</label>
                <select name="budget" value={form.budget} onChange={handleChange} required className="w-full border-b border-border rounded-none px-0 py-3 text-sm bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#101C28]">Select Range</option>
                  {budgetRanges.map((range) => <option key={range} value={range} className="bg-[#101C28]">{range}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-heading font-black tracking-widest mb-2 text-muted-foreground uppercase">PROJECT BRIEF</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full border-b border-border rounded-none px-0 py-3 text-sm bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors resize-none" />
            </div>
            <button type="submit" disabled={submitting} className="w-full bg-[#C2D501] text-[#101C28] font-heading font-black py-4 rounded-none hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 uppercase tracking-widest text-sm">
              <Send className="w-4 h-4" /> {submitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;