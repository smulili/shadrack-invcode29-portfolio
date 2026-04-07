import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LetsTalkDialog from "./LetsTalkDialog";
import logo from "../assets/logo.svg";

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
  const navigate = useNavigate();

  // This function ensures that every time a user clicks a link, 
  // they start at the top of the new page.
  const handleNavigation = (path: string) => {
    setOpen(false); // Close mobile menu if open

    navigate(path);
    
    // Force the browser to scroll to the absolute top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "instant" to ensure they don't see the scroll happening
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">

          {/* ✅ Logo: Navigates to Home (Index.tsx) and resets scroll */}
          <button 
            onClick={() => handleNavigation("/")} 
            className="flex items-center h-full focus:outline-none"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto transition-transform duration-200 hover:scale-105"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`font-heading font-semibold text-sm tracking-wider transition-colors hover:text-accent focus:outline-none ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-gray-600"
                }`}
              >
                {link.label.toUpperCase()}
              </button>
            ))}

            {/* Let's Talk Button */}
            <button
              onClick={() => setShowDialog(true)}
              style={{ backgroundColor: "#2098D1" }}
              className="text-white font-heading font-bold text-sm px-5 py-2 rounded hover:brightness-110 transition-all shadow-md"
            >
              Let's Talk →
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black focus:outline-none"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-4 pb-4 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`block w-full text-left py-4 font-heading font-semibold text-sm tracking-wider border-b border-gray-50 ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-gray-600"
                }`}
              >
                {link.label.toUpperCase()}
              </button>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                setShowDialog(true);
              }}
              style={{ backgroundColor: "#2098D1" }}
              className="block mt-4 w-full text-white font-heading font-bold text-sm px-5 py-4 rounded text-center"
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