import { FadeIn } from "@/components/animations/FadeIn";
import { Store, CheckCircle2 } from "lucide-react";

const dealerTypes = [
  "Automobile Dealers",
  "Bike Dealers",
  "Vehicle Wash Dealers",
  "Mechanical Workshops",
  "Detailing Centers",
  "Spare Parts Dealers",
  "Riding Gear Stores",
];

export function Dealers() {
  return (
    <section id="dealers" className="py-24 bg-zinc-950/80 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Our Verified <span className="text-primary">Dealer Network</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We partner with the best in the business. Every dealer and workshop on CarConnect goes through a strict verification process to ensure you get top-tier service.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dealerTypes.map((type, idx) => (
                <FadeIn key={idx} delay={idx * 0.05} direction="left">
                  <div className="flex items-center gap-3 bg-black border border-white/10 p-4 rounded-xl hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white font-medium">{type}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="relative">
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                {/* using unsplash for a premium garage photo */}
                {/* premium modern clean auto workshop garage */}
                <img 
                  src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=1200&h=900&fit=crop" 
                  alt="Modern Auto Workshop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="glass-panel p-6 rounded-xl border border-white/10 w-full backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                        <Store className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Elite Motors Garage</h4>
                        <div className="flex text-primary text-sm">
                          ★★★★★ <span className="text-muted-foreground ml-2">(4.9)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
