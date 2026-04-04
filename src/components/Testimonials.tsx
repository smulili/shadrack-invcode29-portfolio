import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "They plug in seamlessly to a team and can handle the full project end-to-end.",
    name: "Ken Isaacson",
    title: "VP of Project Management",
  },
  {
    quote: "They're honorable, reputable, and easy to work with. They genuinely care about the outcome and want to do a good job.",
    name: "Matt Owings",
    title: "President",
  },
  {
    quote: "Orases successfully built efficiencies into our prototype and delivered a high-quality platform.",
    name: "Logan Gerber",
    title: "Marketing Director",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(1);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          <button onClick={prev} className="absolute left-0 z-10 p-2 text-foreground/40 hover:text-foreground transition-colors">
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="flex items-center justify-center gap-6 overflow-hidden max-w-5xl w-full">
            {testimonials.map((t, i) => {
              const isCenter = i === current;
              return (
                <div
                  key={i}
                  className={`transition-all duration-300 shrink-0 ${
                    isCenter
                      ? "w-full max-w-md bg-card shadow-xl rounded-lg p-8 scale-105 z-10"
                      : "hidden lg:block w-full max-w-xs bg-card/60 rounded-lg p-6 scale-95 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-heading text-muted-foreground tracking-wider">REVIEWED ON</span>
                    <span className="font-heading font-bold text-lg text-foreground">Clutch</span>
                    <div className="flex ml-2">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">71 REVIEWS</span>
                  </div>
                  <div className="text-accent text-4xl font-serif leading-none mb-2">"</div>
                  <p className={`text-foreground italic leading-relaxed mb-4 ${isCenter ? 'text-lg' : 'text-sm'}`}>
                    {t.quote}
                  </p>
                  <div className="text-accent text-4xl font-serif text-right leading-none mb-4">"</div>
                  <a href="#" className="text-teal-link font-heading font-semibold text-sm flex items-center gap-1 mb-4">
                    See the project →
                  </a>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-muted" />
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={next} className="absolute right-0 z-10 p-2 text-foreground/40 hover:text-foreground transition-colors">
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
