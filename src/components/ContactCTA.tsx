const ContactCTA = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-4">
          Ready to Accelerate Your Vision?
        </h2>
        <p className="text-muted-foreground text-lg italic mb-12">
          Tell us about your project. Our experts are ready to help.
        </p>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">First Name *</label>
              <input className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">Last Name *</label>
              <input className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">Email *</label>
              <input type="email" className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">Phone *</label>
              <input type="tel" className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-heading font-bold text-foreground mb-2">Project Description *</label>
            <input className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-heading font-bold text-foreground mb-2">Estimated Budget *</label>
            <select className="w-full border border-border py-3 px-4 rounded text-muted-foreground bg-background focus:outline-none focus:border-accent transition-colors">
              <option>Select</option>
              <option>$10,000 - $25,000</option>
              <option>$25,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>$100,000+</option>
            </select>
          </div>
          <button type="submit" className="bg-accent text-foreground font-heading font-bold py-3 px-10 rounded hover:brightness-110 transition-all">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
