import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
  linkText: string;
}

const ServiceDetail = ({ icon: Icon, title, description, capabilities, linkText }: ServiceDetailProps) => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        {/* Icon + divider */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-foreground/70" />
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Title + Description */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight mb-6">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {description}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-teal-link font-heading font-semibold hover:gap-3 transition-all">
              {linkText} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Capabilities */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-3 text-teal-link font-semibold hover:underline"
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                {cap}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
