import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export function AppPromo() {

  return (
    <section className="py-24 bg-zinc-950/50 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-black to-zinc-900 border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Your Garage in your <span className="text-primary">Pocket</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Download the MotoNode app to book services, track maintenance history, and order parts on the go. Available for iOS and Android.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="w-full sm:w-auto h-16 px-8 gap-3" onClick={() => window.open("https://apps.apple.com", "_blank")}>
                  <Apple className="w-6 h-6" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] leading-none font-normal">Download on the</span>
                    <span className="text-base leading-none">App Store</span>
                  </div>
                </Button>
                <Button size="lg" className="w-full sm:w-auto h-16 px-8 gap-3 bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" onClick={() => window.open("https://play.google.com/store", "_blank")}>
                  <Play className="w-6 h-6 text-primary" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] leading-none font-normal">GET IT ON</span>
                    <span className="text-base leading-none">Play Store</span>
                  </div>
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 relative z-10 flex justify-center">
            <FadeIn delay={0.2} direction="up">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10" />
                <img 
                  src="/images/app-mockup.png" 
                  alt="MotoNode Mobile App" 
                  className="w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
