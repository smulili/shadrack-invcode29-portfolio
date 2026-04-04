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
  User,
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

const teamMembers = [
  { name: "Nick Damoulakis", title: "CEO/President", initials: "ND" },
  { name: "Amy Damoulakis", title: "CFO/VP of Client Success", initials: "AD" },
  { name: "Vladimir Polyanov", title: "Chief Technology Officer", initials: "VP" },
  { name: "Kathryn Murphy", title: "Director of Operations", initials: "KM" },
];

const hqDetails = [
  { stat: "10,000 square foot office", desc: "Enough room for every team member" },
  { stat: "7 meeting rooms", desc: "Set up for state-of-the-art virtual or on-site team collaboration" },
  { stat: "1 customer training room", desc: "Dedicated to change management and system training" },
];

const clientLogos = [
  "MLB", "AAMI", "Long Fence", "NFL", "Next Day Dumpsters",
  "José Andrés ThinkFoodGroup", "NPR", "American Immigration",
  "NATSO", "Disability", "American", "ASI", "FlexTrade", "US Lacrosse",
];

const caseStudies = [
  { title: "MLB Pitch, Hit & Run", category: "Sports & Entertainment" },
  { title: "Long Fence Digital Platform", category: "Home Services" },
  { title: "AAMI Member Portal", category: "Healthcare" },
  { title: "NFL Fan Engagement", category: "Sports & Entertainment" },
];

const awards = [
  "Inc. 5000 Top Fastest Growing Companies",
  "Clutch Top AI Consulting Company",
  "SoftwareWorld Top Rated Custom Software Development",
  "GoodFirms Top Software Development Companies",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-hero text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[10rem] lg:text-[12rem] font-heading font-black text-white/[0.03] leading-[0.9] whitespace-nowrap text-center">
            <div>IS CREATED BY WHAT</div>
            <div>YOU DO TODAY</div>
            <div>NOT TOMORROW</div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-accent font-heading font-semibold text-lg mb-4">
            About Orases
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 max-w-2xl leading-tight">
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
            className="inline-block bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded hover:brightness-110 transition-all text-lg"
          >
            Turn Your Vision into Reality
          </a>
        </div>
      </section>

      {/* D.R.I.V.E. Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-2 leading-tight">
                The Code that Fuels Us:
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-accent mb-8">
                D.R.I.V.E.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Orases lives by the{" "}
                <strong className="text-foreground">D.R.I.V.E.</strong> code to
                propel every project forward with purpose, precision, and
                measurable impact. Through best-practice methods and an unwavering
                commitment to excellence, we develop high-quality products and
                solutions that consistently exceed expectations.
              </p>
              <a
                href="#"
                className="text-teal-link font-heading font-semibold flex items-center gap-2 hover:underline text-base"
              >
                Our Vision to Value Accelerator{" "}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-5 pt-4">
              {driveItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-xl md:text-2xl"
                >
                  <span className="text-accent text-3xl mr-3">•</span>
                  <span className="font-heading font-black text-foreground text-2xl md:text-3xl">
                    {item.letter}
                  </span>
                  <span className="text-foreground font-heading font-medium text-xl md:text-2xl">
                    {item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {values.map((v, i) => (
              <div key={i}>
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-5">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  {v.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-base">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="#"
              className="text-teal-link font-heading font-semibold flex items-center gap-2 hover:underline text-base"
            >
              Your Business is Unique, So Are We{" "}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14">
        <div className="container mx-auto px-4 text-center">
          <a
            href="#contact"
            className="inline-block bg-hero text-primary-foreground font-heading font-bold text-lg px-12 py-5 rounded-lg hover:brightness-110 transition-all"
          >
            Let's Build Your Vision Together
          </a>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-6 leading-tight">
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

      {/* Our Home Away from Home - Headquarters */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-12 leading-tight">
            Our <span className="text-accent">Home</span> Away from Home
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Building2 className="w-16 h-16 mx-auto mb-3 text-muted-foreground/50" />
                <p className="font-heading font-bold text-lg">5728-A</p>
                <p className="text-sm">Orases Headquarters</p>
              </div>
            </div>
            <div>
              <p className="text-2xl font-heading italic text-muted-foreground mb-4">
                Headquarters
              </p>
              <div className="flex items-center gap-2 mb-8">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-heading font-bold text-2xl text-foreground">
                  Maryland
                </span>
              </div>
              <div className="space-y-6">
                {hqDetails.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent text-xl mt-0.5">•</span>
                    <div>
                      <p className="font-heading font-bold text-lg text-foreground">
                        {item.stat}
                      </p>
                      <p className="text-muted-foreground font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Orases Visionaries - Team */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-14 leading-tight">
            The Orases <span className="text-accent">Visionaries</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, i) => (
              <a key={i} href="#" className="group block">
                <div className="bg-muted rounded-lg aspect-[3/4] flex items-center justify-center mb-4 overflow-hidden group-hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                    <User className="w-10 h-10 text-muted-foreground" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base md:text-lg text-teal-link group-hover:underline">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {member.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - You'll be in Good Hands */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-14 leading-tight">
            You'll be in <span className="text-accent">Good</span> Hands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center px-4 ${
                  i > 0 ? "border-l border-border" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground font-heading mb-1">
                  {s.label}
                </p>
                <p className="text-3xl md:text-4xl font-heading font-black text-accent mb-3">
                  {s.value}
                </p>
                <a
                  href="#"
                  className="text-teal-link font-heading font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                >
                  {s.link} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-6 items-center">
            {clientLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                <span className="font-heading font-bold text-sm md:text-base text-muted-foreground text-center leading-tight">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Results Section - Proven Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden mb-6">
            <div className="bg-hero text-primary-foreground p-10 md:p-16 flex flex-col justify-center min-h-[280px]">
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-6 leading-tight">
                Proven <span className="text-accent">Results</span>
                <br />
                Executed at Speed
              </h2>
              <a
                href="#"
                className="text-accent font-heading font-semibold flex items-center gap-2 hover:underline"
              >
                All Results <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-hero/80 min-h-[280px] flex items-end p-6">
              <div className="bg-hero/90 px-4 py-2 rounded">
                <p className="font-heading font-bold text-primary-foreground text-sm">
                  {caseStudies[0].title}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.slice(1).map((cs, i) => (
              <div
                key={i}
                className="bg-hero/80 rounded-lg min-h-[220px] flex items-end p-6 group cursor-pointer hover:brightness-110 transition-all"
              >
                <div className="bg-hero/90 px-4 py-2 rounded">
                  <p className="font-heading font-bold text-primary-foreground text-sm">
                    {cs.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-12 leading-tight">
            <span className="text-accent">Value</span> that is Recognized
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 text-center flex flex-col items-center"
              >
                <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center mb-5">
                  <Award className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="font-heading font-bold text-base text-foreground leading-snug">
                  {award}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div id="contact">
        <ContactCTA />
      </div>
    </div>
  );
};

export default About;
