import { Link } from "wouter";
import { MessageSquare, Route, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQSection } from "@/components/seo/FAQSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { sitePageMap, type FAQItem } from "@/config/site";
import { buildPageStructuredData } from "@/utils/seoHelpers";

const communityFeatures = [
  {
    title: "Meet fellow riders",
    description: "Discover people who care about maintenance, mods, road trips, and everyday vehicle life.",
    icon: Users,
  },
  {
    title: "Stay in touch easily",
    description: "Moto Node brings messaging, updates, and shared conversations closer to the driving experience.",
    icon: MessageSquare,
  },
  {
    title: "Plan better journeys",
    description: "Community-led ride ideas and group coordination help every trip feel more connected.",
    icon: Route,
  },
  {
    title: "Build trust through the platform",
    description: "Combine social discovery with service and dealer support in the same ecosystem.",
    icon: ShieldCheck,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the Moto Node community for?",
    answer:
      "The Moto Node community is for riders and vehicle enthusiasts who want to connect, share experiences, stay updated, and coordinate around automotive interests.",
  },
  {
    question: "Can community members also discover services and parts?",
    answer:
      "Yes. Moto Node combines community features with parts, services, and dealer connectivity in one platform.",
  },
  {
    question: "Is the community useful for local riding groups?",
    answer:
      "Yes. Moto Node is well suited for conversations, meetup planning, and building automotive relationships around local ride experiences.",
  },
];

export default function CommunityPage() {
  const page = sitePageMap.community;

  return (
    <SiteLayout>
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={buildPageStructuredData("community", { faqItems })}
      />

      <PageHeader
        eyebrow="Community"
        title="A rider-first community built into your automobile app"
        description="Moto Node is more than a service finder. It is a place where riders and vehicle owners can connect, share, plan, and stay in sync with automotive life."
      />

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {communityFeatures.map((feature, index) => {
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
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Discover how community, services, and rides fit together
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                The Moto Node experience becomes stronger when users can move from conversations to service support and ride planning without jumping between separate apps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/rides">Explore Rides</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">See Service Options</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection
        title="Community FAQs"
        description="Quick answers about the rider and enthusiast side of Moto Node."
        items={faqItems}
      />
    </SiteLayout>
  );
}
