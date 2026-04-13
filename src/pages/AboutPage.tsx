import { Gauge, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/animations/FadeIn";
import { SEOHead } from "@/components/seo/SEOHead";
import { Features } from "@/components/sections/Features";
import { Button } from "@/components/ui/button";
import { sitePageMap } from "@/config/site";
import { buildPageStructuredData } from "@/utils/seoHelpers";

const valuePoints = [
  {
    title: "One platform for automobile life",
    description: "Moto Node is designed to bring parts, services, community, and ride experiences together.",
    icon: Sparkles,
  },
  {
    title: "Built for India",
    description: "The platform focuses on the needs of Indian riders, drivers, workshops, and dealers.",
    icon: Globe,
  },
  {
    title: "Trust-driven experience",
    description: "Verified partners and stronger discovery flows help reduce uncertainty for customers.",
    icon: ShieldCheck,
  },
  {
    title: "Faster everyday utility",
    description: "From maintenance planning to community engagement, Moto Node aims to simplify routine decisions.",
    icon: Gauge,
  },
];

export default function AboutPage() {
  const page = sitePageMap.about;

  return (
    <SiteLayout>
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={buildPageStructuredData("about")}
      />

      <PageHeader
        eyebrow="About Moto Node"
        title="India's 1st Automobile Super App, built to simplify every vehicle touchpoint"
        description="Moto Node helps users manage automobile life faster and smarter through parts discovery, service access, community engagement, and better ride readiness."
      />

      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {valuePoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <FadeIn key={point.title} delay={index * 0.08}>
                <article className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-semibold text-white mb-3">{point.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <Features />

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to explore the platform?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Start with services, browse parts, join the community, or contact Moto Node to discuss a dealership or partnership opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact the Team</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
}
