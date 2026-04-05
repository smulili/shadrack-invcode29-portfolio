import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-heading font-black text-xl text-primary-foreground tracking-wide">
          PORTFOLIO
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading font-semibold text-sm tracking-wider transition-colors ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-accent"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/about#contact"
            className="bg-accent text-accent-foreground font-heading font-bold text-sm px-5 py-2 rounded hover:brightness-110 transition-all"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-hero border-t border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-3 font-heading font-semibold text-sm tracking-wider ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/about#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 bg-accent text-accent-foreground font-heading font-bold text-sm px-5 py-2 rounded text-center"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
