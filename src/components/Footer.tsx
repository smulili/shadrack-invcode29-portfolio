import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const location = useLocation();

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
              <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                <Phone className="w-4 h-4" /> +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4" /> Your Location
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider mb-4 text-accent">NEWSLETTER</h4>
            <p className="text-primary-foreground/60 font-body text-sm italic mb-4">
              Get exclusive tech, industry & portfolio news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm px-3 py-2 rounded-l focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground font-heading font-bold text-xs px-4 py-2 rounded-r hover:brightness-110 transition-all tracking-wider"
              >
                SIGN UP
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
