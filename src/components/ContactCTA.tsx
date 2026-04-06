import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactCTA = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDescription: "",
    budget: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      toast.error("Please fill required fields");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone || null,
      project_description: form.projectDescription || null,
      budget: form.budget || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Failed to submit");
    } else {
      toast.success("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", phone: "", projectDescription: "", budget: "" });
    }
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-4">
          Ready to Accelerate Your Vision?
        </h2>
        <p className="text-muted-foreground text-lg italic mb-12">
          Tell us about your project. Our experts are ready to help.
        </p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">First Name *</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">Last Name *</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-heading font-bold text-foreground mb-2">Phone</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-heading font-bold text-foreground mb-2">Project Description</label>
            <input name="projectDescription" value={form.projectDescription} onChange={handleChange} className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-heading font-bold text-foreground mb-2">Estimated Budget</label>
            <select name="budget" value={form.budget} onChange={handleChange} className="w-full border border-border py-3 px-4 rounded text-muted-foreground bg-background focus:outline-none focus:border-accent transition-colors">
              <option value="">Select</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000 - $25,000</option>
              <option>$25,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>$100,000+</option>
              <option>$other</option>
              <option>$no idea how much</option>
            </select>
          </div>
          <button type="submit" disabled={submitting} className="bg-accent text-foreground font-heading font-bold py-3 px-10 rounded hover:brightness-110 transition-all disabled:opacity-50">
            {submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
