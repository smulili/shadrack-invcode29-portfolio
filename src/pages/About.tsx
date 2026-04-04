import {
  Handshake,
  Award,
  CheckCircle,
  Users,
  Building2,
  Lightbulb,
  Clock,
  UserCheck,
  BarChart3,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

const driveItems = [
  { letter: "D", word: "efine the vision" },
  { letter: "R", word: "eview the reality" },
  { letter: "I", word: "dentify the risks" },
  { letter: "V", word: "erify the value" },
  { letter: "E", word: "xecute with precision" },
];

const values = [
  {
    icon: Handshake,
    title: "100% Transparency & Clarity",
    description:
      "No surprises. No hidden fees. With full project clarity, you know exactly where your investment goes. Transparency fosters the trust that underpins every successful partnership.",
  },
  {
    icon: Award,
    title: "25+ Years Delivering Results",
    description:
      "Our depth of experience allows us to tackle complex challenges with confidence, anticipate risks before they arise, and deliver solutions that create lasting value.",
  },
  {
    icon: CheckCircle,
    title: "Quality that Drives ROI",
    description:
      "Every feature we build is intentional, purposeful, and designed to create measurable value. Success comes from building the right solutions, the right way.",
  },
  {
    icon: Users,
    title: "Passionate US-Based Experts",
    description:
      "Our team of dedicated professionals brings deep expertise and genuine passion to every project, ensuring exceptional results and seamless communication.",
  },
  {
    icon: Building2,
    title: "Cross-Industry Perspective",
    description:
      "Working across diverse industries gives us unique insights and innovative approaches to your vision, bringing best practices from multiple domains.",
  },
  {
    icon: Lightbulb,
    title: "Committed to Your Success",
    description:
      "We measure our success by yours. Our long-term partnerships are built on a genuine commitment to helping you achieve your goals for years to come.",
  },
];

const stats = [
  { icon: Clock, label: "Established", value: "2000", link: "About us" },
  { icon: Users, label: "Client Retention Rate", value: "96%", link: "Approach" },
  { icon: UserCheck, label: "Clients", value: "950", link: "Results" },
  { icon: BarChart3, label: "Net Promoter Score", value: "84", link: "Awards" },
  { icon: MapPin, label: "USA Based", value: "100%", link: "Culture" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-hero text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 text-[8rem] md:text-[12rem] font-heading font-black text-white/5 leading-none flex flex-col justify-center items-center pointer-events-none select-none">
            <span>IS CREATED BY WHAT</span>
            <span>YOU DO TODAY</span>
            <span>NOT TOMORROW</span>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-accent font-heading font-semibold text-lg mb-4">
            About Orases
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 max-w-2xl">
            Custom Software to Reach Your Vision
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 font-body leading-relaxed">
            Derived from the Ancient Greek word for "vision," Orases transforms
            ideas into tangible realities through custom software and AI
            solutions. We align technology with business goals to modernize
            processes, empower people, and help organizations achieve the future
            they envision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded hover:brightness-110 transition-all"
          >
            Turn Your Vision into Reality
          </a>
        </div>
      </section>

      {/* D.R.I.V.E. Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-2">
                The Code that Fuels Us:
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-accent mb-6">
                D.R.I.V.E.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                Orases lives by the <strong className="text-foreground">D.R.I.V.E.</strong> code to propel every project
                forward with purpose, precision, and measurable impact. Through
                best-practice methods and an unwavering commitment to excellence,
                we develop high-quality products and solutions that consistently
                exceed expectations.
              </p>
              <a
                href="#"
                className="text-teal-link font-heading font-semibold flex items-center gap-2 hover:underline"
              >
                Our Vision to Value Accelerator <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              {driveItems.map((item, i) => (
                <div key={i} className="flex items-center gap-1 text-xl md:text-2xl">
                  <span className="text-accent font-heading font-bold text-2xl md:text-3xl">•</span>
                  <span className="font-heading font-bold text-foreground ml-2">
                    {item.letter}
                  </span>
                  <span className="text-foreground font-heading">
                    {item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  {v.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="text-teal-link font-heading font-semibold flex items-center gap-2 hover:underline"
            >
              Your Business is Unique, So Are We <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <a
            href="#contact"
            className="inline-block bg-hero text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg hover:brightness-110 transition-all"
          >
            Let's Build Your Vision Together
          </a>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-6">
            We Face <span className="text-accent">Challenges</span> Head On
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl font-body leading-relaxed">
            When storms approach, cattle huddle together and wait out the
            weather. Bison, on the other hand, charge directly into the storm.
            Orases embodies that same courage and resilience. We do not shy away
            from complexity — we embrace it, running toward challenges with
            determination and purpose.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-12">
            You'll be in <span className="text-accent">Good</span> Hands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="text-center px-4">
                <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground font-heading mb-1">
                  {s.label}
                </p>
                <p className="text-3xl md:text-4xl font-heading font-black text-accent mb-2">
                  {s.value}
                </p>
                <a
                  href="#"
                  className="text-teal-link font-heading font-semibold text-sm flex items-center justify-center gap-1 hover:underline"
                >
                  {s.link} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden">
            <div className="bg-hero text-primary-foreground p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
                Proven <span className="text-accent">Results</span>
                <br />
                Executed at Speed
              </h2>
              <a
                href="#"
                className="text-accent font-heading font-semibold flex items-center gap-2 hover:underline mt-4"
              >
                All Results <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-hero/90 h-64 md:h-auto flex items-center justify-center">
              <div className="text-primary-foreground/20 font-heading text-6xl font-black">
                Case Study
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-12">
            <span className="text-accent">Value</span> that is Recognized
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Inc. 5000 Top Fastest Growing Companies",
              "Clutch Top AI Consulting Company",
              "SoftwareWorld Top Rated Custom Software Development",
              "GoodFirms Top Software Development Companies",
            ].map((award, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Award className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="font-heading font-bold text-sm text-foreground">
                  {award}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <div id="contact">
        <ContactCTA />
      </div>
    </div>
  );
};

export default About;
