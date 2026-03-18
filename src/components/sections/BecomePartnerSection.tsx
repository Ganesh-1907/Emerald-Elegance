import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const steps = [
  { num: "01", title: "Register", desc: "Create your business account." },
  { num: "02", title: "Add Details", desc: "Fill in shop info & location." },
  { num: "03", title: "Submit", desc: "Send profile for verification." },
  { num: "04", title: "Admin Review", desc: "We verify your credentials." },
  { num: "05", title: "Get Access", desc: "Profile approved & live." },
  { num: "06", title: "Add Services", desc: "List offerings & start earning." },
];

export function BecomePartnerSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    businessName: "",
    businessDescription: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Partnership Application*%0A%0A` +
      `*Full Name:* ${formData.fullName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Mobile Number:* ${formData.mobileNumber}%0A` +
      `*Business Name:* ${formData.businessName}%0A` +
      `*Business Description:* ${formData.businessDescription}`;
    
    window.open(`https://wa.me/919014366645?text=${message}`, "_blank");
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("partnership-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="become-partner" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -mr-16 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Step Flow (1-6) */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white">
                How to Become a <span className="text-primary">Dealer</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our simple 6-step process to get your business live on MotoNode.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2">
              <div className="h-full bg-gradient-to-r from-primary/30 via-primary to-primary/30 w-full opacity-40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-black border-2 border-white/20 flex items-center justify-center text-xl font-display font-bold text-white mb-6 group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="text-lg px-10 h-14 rounded-full font-bold" onClick={scrollToForm}>
              Become a Dealer Now
            </Button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">Why Partner with Us?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reach More Customers",
                description: "Get access to thousands of vehicle owners looking for your services.",
                icon: Globe
              },
              {
                title: "Boost Your Revenue",
                description: "Our platform helps you streamline operations and increase bookings.",
                icon: Zap
              },
              {
                title: "Trusted Reputation",
                description: "Partner with a brand known for quality and reliability in the industry.",
                icon: Shield
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form (Merged) */}
        <motion.div 
          id="partnership-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative scroll-mt-32"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-3xl -z-10" />
          
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-bold mb-3 text-white">Partner Application Form</h3>
            <p className="text-muted-foreground text-sm">Fill out the form below to connect with us via WhatsApp.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 focus:border-primary outline-none transition-all focus:ring-1 focus:ring-primary/30" 
                  placeholder="Enter your name" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 focus:border-primary outline-none transition-all focus:ring-1 focus:ring-primary/30" 
                  placeholder="work@email.com" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Mobile Number</label>
                <input 
                  type="tel" 
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 focus:border-primary outline-none transition-all focus:ring-1 focus:ring-primary/30" 
                  placeholder="Enter mobile number" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Business Name</label>
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 focus:border-primary outline-none transition-all focus:ring-1 focus:ring-primary/30" 
                  placeholder="Enter business name" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Business Description</label>
              <textarea 
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleChange}
                required
                className="w-full h-28 bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all focus:ring-1 focus:ring-primary/30 resize-none" 
                placeholder="Briefly describe your services..." 
              />
            </div>
            <Button type="submit" className="w-full h-12 text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all">
              Submit & Message on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
