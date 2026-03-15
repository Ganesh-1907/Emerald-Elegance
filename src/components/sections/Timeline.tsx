import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

const steps = [
  { num: "01", title: "Register", desc: "Create your business account." },
  { num: "02", title: "Add Details", desc: "Fill in shop info & location." },
  { num: "03", title: "Submit", desc: "Send profile for verification." },
  { num: "04", title: "Admin Review", desc: "We verify your credentials." },
  { num: "05", title: "Get Access", desc: "Profile approved & live." },
  { num: "06", title: "Add Services", desc: "List offerings & start earning." },
];

export function Timeline() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Become a <span className="text-primary">Partner</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Join thousands of businesses growing their revenue through CarConnect. Easy onboarding process.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 w-full opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative z-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-white/20 flex items-center justify-center text-xl font-display font-bold text-white mb-6 group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.6} className="mt-16 text-center">
          <Button size="lg" className="text-lg px-10" onClick={() => alert("Apply Now")}>
            Apply for Dealership
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
