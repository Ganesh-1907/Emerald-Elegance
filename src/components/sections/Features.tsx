import { FadeIn } from "@/components/animations/FadeIn";
import { 
  Wallet, Users, MessageSquare, 
  ShieldCheck, CalendarClock, PenTool, 
  Zap, CheckCircle, Smartphone 
} from "lucide-react";

const newFeatures = [
  { 
    icon: Wallet, 
    title: "Document Wallet", 
    desc: "Keep digital copies of your essential documents, like your driving license, vehicle registration (RC), and pollution certificates, securely in one place." 
  },
  { 
    icon: Users, 
    title: "Friends & Groups", 
    desc: "Build your network of friends, create trip groups for weekend getaways, and stay in touch with dedicated group chats." 
  },
  { 
    icon: MessageSquare, 
    title: "Connect & Communicate", 
    desc: "Instantly find and contact other vehicle owners using their number plate—perfect for resolving parking issues or connecting with people on the go." 
  },
];

const originalFeatures = [
  { icon: ShieldCheck, title: "Trusted Providers", desc: "All service providers are vetted for quality and reliability." },
  { icon: CalendarClock, title: "Easy Booking", desc: "Schedule appointments with a few taps on your device." },
  { icon: PenTool, title: "Genuine Parts", desc: "Guarantee of authentic OEM and aftermarket parts." },
  { icon: Zap, title: "Fast Services", desc: "Quick turnaround times for standard maintenance." },
  { icon: CheckCircle, title: "Verified Dealers", desc: "Buy directly from authorized local dealers." },
  { icon: Smartphone, title: "Mobile App", desc: "Manage everything from our sleek mobile app." },
];

export function Features() {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose <span className="text-primary">MotoNode</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive features designed to enhance your vehicle ownership, connection, and service experience.
            </p>
          </FadeIn>
        </div>

        {/* New Features (3 Cards Highlighted) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {newFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-zinc-900 border border-primary/20 p-8 rounded-3xl hover:border-primary/50 transition-all group h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-glow transition-all">
                      {feat.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Original Features (2 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {originalFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.05 + 0.3}>
                <div className="bg-zinc-950/50 border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all group h-full flex flex-col relative overflow-hidden">
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
