import { useState } from "react";
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
  ChevronDown, // Added for the scroll arrow
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const education = [
  {
    degree: "Bachelor of Science in Information Communication Technology",
    institution: "KCA University",
    year: "2021 - 2025",
    icon: GraduationCap,
  },
  {
    degree: "High School Diploma",
    institution: "Kenya high school",
    year: "2016 - 2020",
    icon: GraduationCap,
  },
];

const certifications = [
  { name: "Acumatica Support Specialist", issuer: "Acumatica", file: "#" },
  { name: "Acumatica Tech specialist", issuer: "Acumatica", file: "#" },
  { name: "Bsc .ICT honours", issuer: "KCA University", file: "#" },
  { name: "Data analysis data fundamentals", issuer: "IBM ", file: "#" },
  { name: "SPSS and STATA", issuer: "KESAP Research ltd ", file: "#" },
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
    title: "Scolaro Law Redesign & SEO",
    description: "In 2024, operating under the domain UsInjury.Law, partnered for a comprehensive website redesign and SEO overhaul.",
    category: "Software & Web Dev",
    // Generic high-quality image from Unsplash
    image: "https://three29.com/wp-content/uploads/2025/09/Scolaro.png",
  },
  {
    title: "AI Chatbot Assistant",
    description: "ML-powered chatbot for customer support automation using NLP for intelligent query handling.",
    category: "AI / Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Enterprise ERP System",
    description: "Technical implementation and customization of Acumatica ERP for streamlined business operations.",
    category: "Architecture & Data",
    image: "https://orases2024stg.wpenginepowered.com/nitropack_static/GDbftNJaDDDTrNmdGDxhqTlIYKwlMYcT/assets/images/optimized/rev-0903514/orases2024stg.wpenginepowered.com/wp-content/uploads/2024/08/Orases-CaseStudy-Spectrum-LapMock.webp",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [supportForm, setSupportForm] = useState({
    fullName: "",
    email: "",
    comments: "",
  });
  const [submitting, setSubmitting] = useState(false);

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
    toast.info("Paystack payment gateway will be integrated here.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-hero/60 backdrop-blur-[2px]" />
        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div>
            <p className="text-accent font-heading font-semibold text-lg mb-4">
              Technological Problem Solver
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight mb-6">
              Shadrack Richards
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/70 font-body mb-8 max-w-lg">
              Fullstack Software Developer & Digital Innovator
              Engineering high-impact solutions through intelligent systems.
            </p>
            
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-accent text-accent-foreground font-heading font-bold px-8 py-3 rounded hover:brightness-110 transition-all"
              >
                Support My Work
              </a>
              <button
                onClick={() => navigate("/projects")}
                className="border border-primary-foreground/30 text-primary-foreground font-heading font-bold px-8 py-3 rounded hover:border-accent hover:text-accent transition-all"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-accent/30 bg-hero/40 flex items-center justify-center overflow-hidden">
              <User className="w-32 h-32 text-primary-foreground/30" />
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <a href="#results">
            <ChevronDown className="w-12 h-12 text-accent" />
          </a>
        </div>
      </section>

      {/* Featured Projects - Restored Image tiles with Blur Overlay */}
      <section id="results" className="py-20 bg-background relative overflow-hidden">
        {/* Subtle Background Blur related to palette */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-14 leading-tight">
            Proven <span className="text-accent">Results</span> Executed at Speed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => navigate("/projects")}
                className="group relative h-[420px] cursor-pointer rounded-2xl overflow-hidden border border-hero transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Full-size Image Background */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40" 
                  />
                  {/* The integrated Gradient Overlay - blending from palette colors into dark */}
                  <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/70 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="bg-accent text-accent-foreground font-heading font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-body text-sm line-clamp-3 mb-6 group-hover:text-gray-100 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-accent font-heading font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
            
            {/* CTA Tile */}
            <div
              onClick={() => navigate("/projects")}
              className="cursor-pointer rounded-2xl overflow-hidden bg-accent p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:brightness-110 group h-[420px]"
            >
              <Terminal className="w-12 h-12 text-black mb-6 group-hover:rotate-12 transition-transform opacity-70" />
              <h3 className="font-heading font-black text-2xl text-black uppercase tracking-tight">Full Archive</h3>
              <p className="text-black/60 font-body text-xs font-bold uppercase tracking-widest mt-2">Explore Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-14 leading-tight">
            Education & <span className="text-accent">Qualifications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((ed, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center mb-5">
                  <ed.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                  {ed.degree}
                </h3>
                <p className="text-muted-foreground font-body">{ed.institution}</p>
                <p className="text-accent font-heading font-semibold text-sm mt-2">
                  {ed.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-14 leading-tight">
            <span className="text-accent">Certifications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-base mb-1 text-foreground">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body mb-4 flex-1">
                  {cert.issuer}
                </p>
                <a
                  href={cert.file}
                  download
                  className="inline-flex items-center gap-2 text-teal-link font-heading font-semibold text-sm hover:underline"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-14 leading-tight">
            Skills & <span className="text-accent">Languages</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-4 flex flex-col items-center text-center hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                  <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="font-heading font-semibold text-xs text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support My Career - form */}
      <section id="support" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 leading-tight text-center text-foreground">
            Support My <span className="text-accent">Career & Work</span>
          </h2>
          <p className="text-muted-foreground font-body text-center mb-12">
            Leave a comment or support my journey.
          </p>

          <form className="bg-card border border-border rounded-lg p-8 shadow-lg space-y-5" onSubmit={handleComment}>
            <div>
              <label className="block text-xs font-heading font-bold text-foreground tracking-wider mb-2">
                FULL NAME *
              </label>
              <input
                name="fullName"
                value={supportForm.fullName}
                onChange={handleChange}
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold text-foreground tracking-wider mb-2">
                EMAIL *
              </label>
              <input
                name="email"
                type="email"
                value={supportForm.email}
                onChange={handleChange}
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold text-foreground tracking-wider mb-2">
                COMMENTS *
              </label>
              <textarea
                name="comments"
                value={supportForm.comments}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold py-3 px-6 rounded hover:brightness-110 transition-all disabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4" /> {submitting ? "Sending..." : "Comment"}
              </button>
              <button
                type="button"
                onClick={handleSupportMe}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-accent text-accent font-heading font-bold py-3 px-6 rounded hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Heart className="w-4 h-4" /> Support Me
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