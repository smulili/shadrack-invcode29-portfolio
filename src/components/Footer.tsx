import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });
    setSubscribing(false);
    if (error) {
      if (error.code === "23505") {
        toast.info("You're already subscribed!");
      } else {
        toast.error("Failed to subscribe");
      }
    } else {
      toast.success("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-black text-xl mb-4">PORTFOLIO</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed mb-6">
              Software & Digital Innovation. Building solutions that make an impact.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: MessageCircle, href: "https://wa.me/254702276873" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider mb-4 text-accent">QUICK LINKS</h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block font-body text-sm transition-colors ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-primary-foreground/60 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider mb-4 text-accent">CONTACT</h4>
            <div className="space-y-3">
              <a href="mailto:hello@example.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                <Mail className="w-4 h-4" /> hello@example.com
              </a>
              <a href="tel:+254702276873" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                <Phone className="w-4 h-4" /> +254 702 276 873
              </a>
              <a href="https://wa.me/254702276873" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4" /> TRM Mirema Drive, Nairobi
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider mb-4 text-accent">NEWSLETTER</h4>
            <p className="text-primary-foreground/60 font-body text-sm italic mb-4">
              Get exclusive tech, industry & portfolio news.
            </p>
            <form onSubmit={handleNewsletter} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm px-3 py-2 rounded-l focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="bg-accent text-accent-foreground font-heading font-bold text-xs px-4 py-2 rounded-r hover:brightness-110 transition-all tracking-wider disabled:opacity-50"
              >
                {subscribing ? "..." : "SIGN UP"}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-primary-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
