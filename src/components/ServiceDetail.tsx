import { ArrowRight, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
  linkText: string;
}

const ServiceDetail = ({ icon: Icon, title, description, capabilities, linkText }: ServiceDetailProps) => {
  const navigate = useNavigate();

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-foreground/70" />
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight mb-6">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {description}
            </p>
            <button onClick={() => navigate("/")} className="inline-flex items-center gap-2 text-teal-link font-heading font-semibold hover:gap-3 transition-all">
              {linkText} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <button
                key={i}
                onClick={() => navigate("/")}
                className="flex items-center gap-3 text-teal-link font-semibold hover:underline text-left"
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                {cap}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
