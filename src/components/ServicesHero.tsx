import { Code, Monitor, Smartphone, Layout, GraduationCap, GitBranch, Building, Brain, BarChart3, ArrowRight } from "lucide-react";

const services = [
  { icon: Code, title: "Software Development" },
  { icon: Monitor, title: "Web App Development" },
  { icon: Smartphone, title: "Mobile App Development" },
  { icon: Layout, title: "UI/UX Design" },
  { icon: GraduationCap, title: "Consulting & Advisory" },
  { icon: GitBranch, title: "Integration & Modernization" },
  { icon: Building, title: "Infrastructure Services" },
  { icon: Brain, title: "AI & Machine Learning Services" },
  { icon: BarChart3, title: "Data Strategy Services" },
];

const ServicesHero = () => {
  return (
    <section className="bg-hero">
      <div className="flex flex-col lg:flex-row">
        {/* Left - Hero image area */}
        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] bg-hero flex items-end">
          <div className="absolute inset-0 bg-gradient-to-r from-hero/80 to-hero/60" />
          <h1 className="relative z-10 p-8 lg:p-16 text-5xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight">
            Services
          </h1>
        </div>

        {/* Right - Contact Form */}
        <div className="lg:w-1/2 bg-hero p-8 lg:p-12">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-8">
              <Monitor className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-heading font-bold text-accent">Tell us about your project.</h2>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">FIRST NAME *</label>
                  <input className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">LAST NAME *</label>
                  <input className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">EMAIL *</label>
                  <input type="email" className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">PHONE *</label>
                  <input type="tel" className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">PROJECT DESCRIPTION *</label>
                <input className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground py-2 focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold text-primary-foreground tracking-wider mb-2">ESTIMATED BUDGET *</label>
                <select className="w-full bg-hero border border-primary-foreground/30 text-primary-foreground/60 py-3 px-4 rounded focus:outline-none focus:border-accent transition-colors">
                  <option>Select</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
              <button type="submit" className="bg-accent text-foreground font-heading font-bold py-3 px-8 rounded hover:brightness-110 transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border">
            {services.map((service, i) => (
              <a
                key={i}
                href="#"
                className={`group p-8 lg:p-12 border-b border-r border-border hover:bg-secondary transition-colors ${i === 1 ? 'bg-secondary' : ''}`}
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-foreground/70" />
                </div>
                <h3 className="text-lg font-heading font-bold text-teal-link flex items-center gap-2">
                  {service.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
