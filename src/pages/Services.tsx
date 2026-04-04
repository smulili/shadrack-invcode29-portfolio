import { Code, Monitor, Smartphone, Layout, GraduationCap, GitBranch, Building, Brain, BarChart3 } from "lucide-react";
import ServicesHero from "@/components/ServicesHero";
import ServiceDetail from "@/components/ServiceDetail";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

const serviceDetails = [
  {
    icon: Code,
    title: "Software Development",
    description: "Our software development solutions allow companies to bring their ideas to life as quickly and efficiently as possible. We are committed to helping organizations grow through the creation of unique software that can be used to benefit individuals, families, industries or the entire business landscape.",
    capabilities: ["Custom Software", "Blockchain", "Human Machine Interface", "Data Analytics & Visualization", "Big Data", "Internet of Things", "AI & Machine Learning", "Business Intelligence"],
    linkText: "View Software Development Services",
  },
  {
    icon: Monitor,
    title: "Web App Development",
    description: "Orases creates tailor-made, highly functional applications that cater to our clients' unique needs. We employ cutting-edge technologies to develop custom web applications that feature seamless integration, enhanced user experience and robust security to drive digital transformation.",
    capabilities: ["Asset Management Software", "ETO Software", "Audit Software", "Grant Management Software", "Automated Billing Software", "HIPAA Compliant Applications", "Business Process Automation", "Inventory Management Software", "Case Management Software", "Laboratory Information Management Systems", "Claims Management Software", "Manufacturing Execution Systems"],
    linkText: "View Web App Development Services",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "We design and develop mobile applications that provide seamless experiences across iOS and Android platforms. Our team creates intuitive, high-performance apps that keep users engaged and drive business growth.",
    capabilities: ["iOS Development", "Android Development", "Cross-Platform Apps", "Progressive Web Apps", "Mobile UI/UX", "App Maintenance"],
    linkText: "View Mobile App Development Services",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Our design team creates intuitive, visually stunning interfaces that enhance user engagement and satisfaction. We follow a human-centered design approach to deliver experiences that are both beautiful and functional.",
    capabilities: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing", "Design Systems"],
    linkText: "View UI/UX Design Services",
  },
  {
    icon: GraduationCap,
    title: "Consulting & Advisory",
    description: "Our experts provide strategic technology consulting to help organizations navigate complex digital landscapes. We offer insights and recommendations that align technology investments with business objectives.",
    capabilities: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Vendor Selection", "Risk Assessment", "IT Governance"],
    linkText: "View Consulting & Advisory Services",
  },
  {
    icon: GitBranch,
    title: "Integration & Modernization",
    description: "We help organizations modernize legacy systems and integrate disparate technologies into cohesive, efficient platforms. Our approach ensures minimal disruption while maximizing the value of existing investments.",
    capabilities: ["Legacy Modernization", "API Integration", "Cloud Migration", "System Architecture", "Data Migration", "DevOps"],
    linkText: "View Integration & Modernization Services",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServicesHero />
      {serviceDetails.map((service, i) => (
        <ServiceDetail key={i} {...service} />
      ))}
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Services;
