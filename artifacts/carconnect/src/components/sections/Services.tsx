import React, { useRef } from "react";
import { Wrench, Bike, Droplets, Disc, BatteryCharging, ArrowRight, ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const services = [
  { id: 1, title: "Car Services", icon: Wrench, desc: "Full mechanical repairs and regular maintenance for all car brands." },
  { id: 2, title: "Bike Services", icon: Bike, desc: "Specialized tuning, repair, and modification for motorcycles." },
  { id: 3, title: "Car Wash & Detail", icon: Droplets, desc: "Premium exterior washing and interior deep cleaning." },
  { id: 4, title: "Tire Services", icon: Disc, desc: "Wheel alignment, balancing, and tire replacement." },
  { id: 5, title: "Battery & Electrical", icon: BatteryCharging, desc: "Diagnostics, battery replacement, and wiring fixes." },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-zinc-950/50 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Premium <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Book top-rated professionals for any vehicle need, directly from our platform.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors box-glow"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </FadeIn>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn 
                key={service.id} 
                delay={index * 0.1} 
                className="min-w-[280px] sm:min-w-[320px] shrink-0"
              >
                <div className="h-full group relative bg-black border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <button className="flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors mt-auto">
                    Book Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
