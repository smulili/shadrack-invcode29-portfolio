import {
  Award,
  MapPin,
  Mail,
  Phone,
  Send,
  Trophy,
  Briefcase,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";

const leadership = [
  {
    icon: Briefcase,
    title: "Software & Digital Innovator",
    description:
      "Passionate about building impactful digital solutions that solve real-world problems. Experienced in full-stack development, AI, and modern web technologies.",
  },
  {
    icon: Trophy,
    title: "Tennis Player",
    description:
      "Competitive tennis player with a disciplined approach to training and strategy — the same mindset I bring to software engineering.",
  },
  {
    icon: Award,
    title: "AYLF Member",
    description:
      "Active member of the African Youth Leadership Forum, committed to leadership development, community impact, and empowering the next generation.",
  },
  {
    icon: Heart,
    title: "Community & Mentorship",
    description:
      "Dedicated to mentoring aspiring developers and contributing to open-source projects that make technology accessible to everyone.",
  },
];

const About = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email) {
      toast.error("Please fill required fields");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      first_name: contactForm.firstName,
      last_name: contactForm.lastName,
      email: contactForm.email,
      phone: contactForm.phone || null,
      message: contactForm.message || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Failed to send message");
    } else {
      toast.success("Message sent successfully!");
      setContactForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="About Me"
        accent="Get to know me"
        subtitle="Software developer, innovator, and lifelong learner passionate about creating technology that matters."
      />

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-14 leading-tight">
            <span className="text-accent">Leadership</span> & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Map Section - TRM Mirema Drive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-10 leading-tight">
            <span className="text-accent">Find</span> Me
          </h2>
          <div className="rounded-lg overflow-hidden border border-border h-[400px]">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.8774!3d-1.2178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fa7c7eb8c1d%3A0x8c9b5e0e4f4b5f1a!2sTRM%20-%20Thika%20Road%20Mall!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact - white form style */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-6 leading-tight text-foreground">
                Get in <span className="text-accent">Touch</span>
              </h2>
              <p className="text-muted-foreground font-body mb-10 max-w-md leading-relaxed">
                Have a project in mind or just want to say hello? Reach out and let's connect.
              </p>
              <div className="space-y-5">
                <a
                  href="mailto:smuili77@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-body">smuili77@gmail.com</span>
                </a>
                <a
                  href="tel:+254702276873"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-body">+254 702 276 873</span>
                </a>
                <a
                  href="https://wa.me/254702276873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-body">WhatsApp</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-body">TRM Mirema Drive, Nairobi</span>
                </div>
              </div>
            </div>

            <form className="bg-card border border-border rounded-lg p-8 shadow-lg space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">
                    FIRST NAME *
                  </label>
                  <input
                    name="firstName"
                    value={contactForm.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">
                    LAST NAME *
                  </label>
                  <input
                    name="lastName"
                    value={contactForm.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">
                  EMAIL *
                </label>
                <input
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">
                  PHONE
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={contactForm.phone}
                  onChange={handleChange}
                  className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold tracking-wider mb-1 text-foreground">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
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
                <Send className="w-4 h-4" /> {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
