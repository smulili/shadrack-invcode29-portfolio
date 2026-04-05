import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    quote: "I don't believe that we would have been successful without our collaboration with Orases.",
    name: "Sarah Mitchell",
    title: "CEO & Founder",
  },
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
  {
    quote: "Their team exceeded our expectations in every aspect of the project delivery.",
    name: "Jessica Taylor",
    title: "Director of Technology",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const getIndex = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length;

  const slide = useCallback(
    (dir: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  useEffect(() => {
    const interval = setInterval(() => slide(1), 6000);
    return () => clearInterval(interval);
  }, [slide]);

  const positions = [
    { offset: -1 },
    { offset: 0 },
    { offset: 1 },
  ];

  return (
    <section className="bg-secondary/30 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-2">
          Real <span className="text-accent">Impact</span>.
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-16">
          Straight from Our Clients.
        </p>

        <div className="relative flex items-center justify-center min-h-[420px]">
          <button
            onClick={() => slide(-1)}
            className="absolute left-2 md:left-8 z-20 p-2 text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl flex items-center justify-center" style={{ perspective: "1200px" }}>
            {positions.map(({ offset }) => {
              const idx = getIndex(offset);
              const t = testimonials[idx];
              const isCenter = offset === 0;
              const isLeft = offset === -1;

              return (
                <div
                  key={`${offset}-${idx}`}
                  className="absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg"
                  style={{
                    width: isCenter ? "min(440px, 85vw)" : "min(380px, 72vw)",
                    transform: isCenter
                      ? "translateX(0) scale(1) translateZ(0)"
                      : isLeft
                      ? "translateX(-68%) scale(0.85) translateZ(-80px)"
                      : "translateX(68%) scale(0.85) translateZ(-80px)",
                    zIndex: isCenter ? 10 : 0,
                    opacity: isCenter ? 1 : 0.5,
                    filter: isCenter ? "none" : "blur(1px)",
                    backgroundColor: isCenter ? "hsl(var(--card))" : "hsl(var(--muted))",
                  }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs font-heading text-muted-foreground tracking-wider uppercase">
                        Reviewed on
                      </span>
                      <span className="font-heading font-bold text-lg text-foreground">
                        Clutch
                      </span>
                      <div className="flex ml-1">
                        {[...Array(5)].map((_, si) => (
                          <Star
                            key={si}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-1">
                        71 REVIEWS
                      </span>
                    </div>

                    <div className="text-accent text-5xl font-serif leading-none mb-2">
                      "
                    </div>
                    <p
                      className={`text-foreground italic leading-relaxed mb-4 ${
                        isCenter ? "text-base md:text-lg" : "text-sm"
                      }`}
                    >
                      {t.quote}
                    </p>
                    <div className="text-accent text-5xl font-serif text-right leading-none mb-4">
                      "
                    </div>

                    <button
                      onClick={() => navigate("/")}
                      className="text-teal-link font-heading font-semibold text-sm flex items-center gap-1 mb-4 hover:underline"
                    >
                      See the project →
                    </button>

                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-heading font-bold text-sm text-muted-foreground">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-sm text-foreground">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => slide(1)}
            className="absolute right-2 md:right-8 z-20 p-2 text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrent(i);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
