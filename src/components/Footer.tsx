import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-black text-xl mb-4">PORTFOLIO</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Software & Digital Innovation. Building solutions that make an impact.
            </p>
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
                  className="block text-primary-foreground/60 hover:text-accent transition-colors font-body text-sm"
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

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider mb-4 text-accent">CONNECT</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
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
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-primary-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
