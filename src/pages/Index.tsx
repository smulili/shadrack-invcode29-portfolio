import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Award,
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Terminal,
  GitBranch,
  Brain,
  Heart,
  MessageSquare,
  User,
  ArrowRight,
  Camera,
  Video,
  Clapperboard,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

// --- DATA CONFIGURATION ---

const education = [
  {
    degree: "Bachelor of Science in Information Communication Technology",
    institution: "KCA University",
    year: "2021 - 2025",
    icon: GraduationCap,
  },
  {
    degree: "High School Diploma",
    institution: "Kenya High School",
    year: "2016 - 2020",
    icon: GraduationCap,
  },
];

const certifications = [
  { name: "Acumatica Support Specialist", issuer: "Acumatica", file: "#" },
  { name: "Acumatica Tech Specialist", issuer: "Acumatica", file: "#" },
  { name: "Bsc. ICT Honours", issuer: "KCA University", file: "#" },
  { name: "Data Analysis Fundamentals", issuer: "IBM", file: "#" },
  { name: "SPSS and STATA", issuer: "KESAP Research Ltd", file: "#" },
];

const skills = [
  { name: "React", icon: Code },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code },
  { name: "Java", icon: Code },
  { name: "SQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "AWS", icon: Globe },
  { name: "Docker", icon: Server },
  { name: "React Native", icon: Smartphone },
  { name: "Figma", icon: Palette },
  { name: "Next.js", icon: Globe },
  { name: "TailwindCSS", icon: Palette },
  { name: "AI / ML", icon: Brain },
  { name: "REST APIs", icon: Globe },
];

const featuredProjects = [
  {
    title: "Scolaro Law Brand Film",
    description: "A cinematic brand documentary and visual strategy for UsInjury.Law, focusing on high-impact narrative storytelling.",
    category: "Videography",
    icon: Video,
  },
  {
    title: "AI Product Campaign",
    description: "Studio-grade product photography and motion graphics for tech startups, emphasizing minimalist aesthetics.",
    category: "Cinematography",
    icon: Clapperboard,
  },
  {
    title: "Architectural Visual Series",
    description: "Professional high-resolution photography capturing modern structural designs with a focus on lighting.",
    category: "Photography",
    icon: Camera,
  },
];

// --- MAIN COMPONENT ---

const Index = () => {
  const navigate = useNavigate();
  const [supportForm, setSupportForm] = useState({
    fullName: "",
    email: "",
    comments: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // SECURITY: Disable Inspect Element & Right Click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSupportForm({ ...supportForm, [e.target.name]: e.target.value });
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportForm.fullName || !supportForm.email || !supportForm.comments) {
      toast.error("Please fill all fields");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("comments").insert({
      full_name: supportForm.fullName,
      email: supportForm.email,
      message: supportForm.comments,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Failed to submit comment");
    } else {
      toast.success("Comment submitted successfully!");
      setSupportForm({ fullName: "", email: "", comments: "" });
    }
  };

  const handleSupportMe = () => {
    toast.info("Payment gateway integration coming soon.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div>
            <p className="text-accent font-heading font-semibold text-lg mb-4 tracking-widest uppercase">
              InvCode29 Studios
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-6 tracking-tighter">
              SHADRACK <br /> RICHARDS
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-body mb-8 max-w-lg">
              Cinematic Videographer & Visual Storyteller. 
              Capturing moments through a professional lens.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#support"
                className="bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-sm hover:brightness-110 transition-all uppercase text-sm tracking-widest"
              >
                Support My Work
              </a>
              <button
                onClick={() => navigate("/projects")}
                className="border border-white/30 text-white font-heading font-bold px-8 py-4 rounded-sm hover:border-accent hover:text-accent transition-all uppercase text-sm tracking-widest"
              >
                View Portfolio
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-accent/20 bg-white/5 flex items-center justify-center overflow-hidden backdrop-blur-md">
              <User className="w-32 h-32 text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-16 leading-tight uppercase tracking-tighter">
            Proven <span className="text-accent">Visuals</span> Executed at Speed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => navigate("/projects")}
                className="relative cursor-pointer rounded-lg overflow-hidden bg-[#0a0a0a] min-h-[320px] flex flex-col justify-end hover:shadow-2xl transition-all group border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-5 left-5 z-20">
                  <span className="bg-accent text-accent-foreground font-heading font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <div className="relative z-20 p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <project.icon className="w-8 h-8 text-accent mb-4 opacity-80" />
                  <h3 className="font-heading font-black text-xl text-white mb-2 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-body text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-heading font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    View Project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
            
            {/* CTA Tile */}
            <div
              onClick={() => navigate("/projects")}
              className="cursor-pointer rounded-lg overflow-hidden bg-accent min-h-[320px] flex flex-col items-center justify-center hover:brightness-110 transition-all group p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-accent-foreground/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-black text-2xl text-accent-foreground mb-1 uppercase">
                Full Gallery
              </h3>
              <p className="text-accent-foreground/70 font-body text-sm font-bold uppercase tracking-tighter">
                Browse All Works
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-16 leading-tight uppercase">
            Education & <span className="text-accent">Background</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((ed, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-colors shadow-sm"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <ed.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {ed.degree}
                </h3>
                <p className="text-muted-foreground font-body">{ed.institution}</p>
                <p className="text-accent font-heading font-semibold text-sm mt-4 tracking-widest">
                  {ed.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-16 leading-tight uppercase">
            Technical <span className="text-accent">Toolbox</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="font-heading font-bold text-[10px] uppercase tracking-tighter">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support / Contact Form */}
      <section id="support" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 leading-tight text-center uppercase">
            Work With <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground font-body text-center mb-16 uppercase tracking-widest text-xs">
            Let's bring your vision to life.
          </p>

          <form className="bg-card border border-border rounded-xl p-8 shadow-2xl space-y-6" onSubmit={handleComment}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-heading font-black tracking-widest uppercase opacity-50">Full Name</label>
                <input
                  name="fullName"
                  value={supportForm.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-border bg-transparent py-2 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-heading font-black tracking-widest uppercase opacity-50">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={supportForm.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-border bg-transparent py-2 focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-heading font-black tracking-widest uppercase opacity-50">Project Details / Comments</label>
              <textarea
                name="comments"
                value={supportForm.comments}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-b border-border bg-transparent py-2 focus:border-accent outline-none transition-colors resize-none"
              />
            </div>
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 flex items-center justify-center gap-3 bg-accent text-accent-foreground font-heading font-black py-4 rounded hover:brightness-110 transition-all disabled:opacity-50 uppercase tracking-widest text-xs"
              >
                <MessageSquare className="w-4 h-4" /> {submitting ? "Sending..." : "Send Message"}
              </button>
              <button
                type="button"
                onClick={handleSupportMe}
                className="flex-1 flex items-center justify-center gap-3 border-2 border-accent text-accent font-heading font-black py-4 rounded hover:bg-accent hover:text-accent-foreground transition-all uppercase tracking-widest text-xs"
              >
                <Heart className="w-4 h-4" /> Tip Me
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;