import React from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ShieldCheck, CalendarClock, PenTool, Zap, CheckCircle, Smartphone } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Trusted Providers", desc: "All service providers are vetted for quality." },
  { icon: CalendarClock, title: "Easy Booking", desc: "Schedule appointments with a few taps." },
  { icon: PenTool, title: "Genuine Parts", desc: "Guarantee of authentic OEM and aftermarket parts." },
  { icon: Zap, title: "Fast Services", desc: "Quick turnaround times for standard maintenance." },
  { icon: CheckCircle, title: "Verified Dealers", desc: "Buy directly from authorized local dealers." },
  { icon: Smartphone, title: "Mobile App", desc: "Manage everything from our sleek mobile app." },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose <span className="text-primary">CarConnect</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-zinc-950 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-muted-foreground">{feat.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
