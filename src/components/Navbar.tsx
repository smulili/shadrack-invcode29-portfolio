import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LetsTalkDialog from "./LetsTalkDialog";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="font-heading font-black text-xl text-foreground tracking-wide">
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
                    : "text-foreground/70 hover:text-accent"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <button
              onClick={() => setShowDialog(true)}
              className="bg-accent text-accent-foreground font-heading font-bold text-sm px-5 py-2 rounded hover:brightness-110 transition-all"
            >
              Let's Talk →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block py-3 font-heading font-semibold text-sm tracking-wider ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground/70"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); setShowDialog(true); }}
              className="block mt-2 w-full bg-accent text-accent-foreground font-heading font-bold text-sm px-5 py-2 rounded text-center"
            >
              Let's Talk →
            </button>
          </div>
        )}
      </nav>

      <LetsTalkDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </>
  );
};

export default Navbar;
