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
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    year: "2020 - 2024",
    icon: GraduationCap,
  },
  {
    degree: "High School Diploma",
    institution: "High School Name",
    year: "2016 - 2020",
    icon: GraduationCap,
  },
];

const certifications = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", file: "#" },
  { name: "Google IT Support", issuer: "Google / Coursera", file: "#" },
  { name: "Meta Front-End Developer", issuer: "Meta / Coursera", file: "#" },
  { name: "CompTIA Security+", issuer: "CompTIA", file: "#" },
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
    // Paystack integration placeholder — user will integrate themselves
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
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight mb-6">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/70 font-body mb-8 max-w-lg">
              Software Developer & Digital Innovator
            </p>
            <div className="flex gap-4">
              <a
                href="#support"
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
      </section>

      {/* Education */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-secondary/30">
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
      <section className="py-20 bg-background">
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

      {/* Support My Career */}
      <section id="support" className="py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 leading-tight text-center">
            Support My <span className="text-accent">Career & Work</span>
          </h2>
          <p className="text-primary-foreground/60 font-body text-center mb-12">
            Leave a comment or support my journey.
          </p>

          <form className="space-y-6" onSubmit={handleComment}>
            <div>
              <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">
                FULL NAME *
              </label>
              <input
                name="fullName"
                value={supportForm.fullName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">
                EMAIL *
              </label>
              <input
                name="email"
                type="email"
                value={supportForm.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">
                COMMENTS *
              </label>
              <textarea
                name="comments"
                value={supportForm.comments}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <div className="flex gap-4 pt-4">
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
