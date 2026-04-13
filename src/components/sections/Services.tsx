import { Wrench, Bike, Droplets, Disc, BatteryCharging } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const services = [
  { id: 1, title: "Car Services", icon: Wrench, desc: "Full mechanical repairs and regular maintenance for all car brands." },
  { id: 2, title: "Bike Services", icon: Bike, desc: "Specialized tuning, repair, and modification for motorcycles." },
  { id: 3, title: "Car Wash & Detail", icon: Droplets, desc: "Premium exterior washing and interior deep cleaning." },
  { id: 4, title: "Tire Services", icon: Disc, desc: "Wheel alignment, balancing, and tire replacement." },
  { id: 5, title: "Battery & Electrical", icon: BatteryCharging, desc: "Diagnostics, battery replacement, and wiring fixes." },
];

export function Services() {
  return (
    <section id="services" className="pt-14 pb-24 md:pt-16 border-t border-white/5 relative">
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
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <FadeIn className="h-full">
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 h-full min-h-[400px] bg-black">
                  <img 
                    src="/images/services.png" 
                    alt="Professional car maintenance service by Moto Node" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    width="2048"
                    height="2048"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-semibold text-white/90">
                      Expert mechanics at work ensuring your vehicle&apos;s peak performance.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 h-full">
              {services.map((service, index) => (
                <FadeIn key={service.id} delay={0.1 * index} className="flex-1">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group flex flex-col justify-center h-full">
                    <div className="flex items-center gap-4 mb-2">
                      <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-10">{service.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
