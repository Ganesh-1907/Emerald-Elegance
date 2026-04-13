import { Link } from "wouter";
import { Compass, MapPinned, Shield, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQSection } from "@/components/seo/FAQSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { sitePageMap, type FAQItem } from "@/config/site";
import { buildPageStructuredData } from "@/utils/seoHelpers";

const rideHighlights = [
  {
    title: "Ride planning support",
    description: "Prepare journeys with the services, parts, and community support you need before heading out.",
    icon: Compass,
  },
  {
    title: "Local discovery",
    description: "Stay closer to dealers, workshops, and automotive connections that matter on the road.",
    icon: MapPinned,
  },
  {
    title: "Group coordination",
    description: "Bring friends, groups, and conversations into the ride planning experience.",
    icon: Users,
  },
  {
    title: "Better preparedness",
    description: "Use Moto Node to keep maintenance and support top of mind for safer, smoother trips.",
    icon: Shield,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What does Moto Node offer for ride experiences?",
    answer:
      "Moto Node supports ride experiences by combining community features, service readiness, dealer support, and automobile convenience in one platform.",
  },
  {
    question: "Can riders use Moto Node before a long trip?",
    answer:
      "Yes. It can help riders check maintenance needs, review parts categories, and stay connected with groups before planning a ride.",
  },
  {
    question: "Does Moto Node focus only on motorcycles?",
    answer:
      "No. Moto Node is designed for broader automobile life, while still offering rider-friendly community and journey features.",
  },
];

export default function RidesPage() {
  const page = sitePageMap.rides;

  return (
    <SiteLayout>
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={buildPageStructuredData("rides", { faqItems })}
      />

      <PageHeader
        eyebrow="Ride Experiences"
        title="Plan smarter journeys with an app built around automobile life"
        description="Moto Node connects ride ideas, group coordination, maintenance readiness, and dealer support so every drive or ride feels more prepared."
      />

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {rideHighlights.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.08}>
                <article className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-semibold text-white mb-3">{feature.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 md:p-10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Build every ride on a stronger base
              </h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Community, services, parts, and dealer access work better when they live in one automobile ecosystem. Moto Node helps make that practical for day trips and long rides alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/community">Join the Community</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Moto Node</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection
        title="Ride Experience FAQs"
        description="Helpful guidance around journeys, group rides, and trip readiness."
        items={faqItems}
      />
    </SiteLayout>
  );
}
