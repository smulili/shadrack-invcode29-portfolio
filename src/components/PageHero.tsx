import heroBg from "@/assets/hero-bg.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

const PageHero = ({ title, subtitle, accent }: PageHeroProps) => {
  return (
    <section className="relative min-h-[340px] md:min-h-[420px] flex items-end overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero/70 backdrop-blur-[2px]" />
      <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-16">
        {accent && (
          <p className="text-accent font-heading font-semibold text-lg mb-3">{accent}</p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/70 mt-4 max-w-2xl font-body">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
