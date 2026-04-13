import { ArrowRight, Clock3, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "wouter";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQSection } from "@/components/seo/FAQSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { Services } from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import { sitePageMap, type FAQItem } from "@/config/site";
import { buildPageStructuredData } from "@/utils/seoHelpers";

const serviceHighlights = [
  {
    title: "Verified Workshops",
    description: "Book trusted service partners for maintenance, repairs, and diagnostics.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Bookings",
    description: "Simplify service discovery and connect with providers without long back-and-forth.",
    icon: Clock3,
  },
  {
    title: "Complete Auto Care",
    description: "From routine care to urgent fixes, Moto Node helps you manage every service need.",
    icon: Wrench,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What kinds of vehicle services can I explore on Moto Node?",
    answer:
      "Moto Node highlights car servicing, bike maintenance, tire care, battery support, diagnostics, and detailing-oriented support for everyday vehicle needs.",
  },
  {
    question: "Does Moto Node focus on trusted service providers?",
    answer:
      "Yes. The platform emphasizes verified dealers and workshops so users can find more reliable service partners faster.",
  },
  {
    question: "Can dealers join Moto Node to offer services?",
    answer:
      "Yes. Service businesses can contact Moto Node through the partnership flow to share business details and start the onboarding process.",
  },
];

export default function ServicesPage() {
  const page = sitePageMap.services;

  return (
    <SiteLayout>
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={buildPageStructuredData("services", {
          faqItems,
          serviceData: {
            name: "Vehicle Services",
            description:
              "Moto Node helps drivers and riders book maintenance, repairs, diagnostics, and detailing support with trusted partners.",
          },
        })}
      />

      <PageHeader
        eyebrow="Vehicle Services"
        title="Book trusted car and bike services with less friction"
        description="Moto Node brings service discovery, dealer connections, and maintenance support into one automobile-first experience built for Indian riders and drivers."
      />

      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-semibold text-white mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <Services />

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <p className="text-primary uppercase tracking-[0.28em] text-xs font-semibold mb-4">
                Explore More
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Need parts or dealer support as well?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Moto Node goes beyond service bookings with spare parts discovery, dealer partnerships,
                community features, and ride-oriented support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/parts">Explore Spare Parts</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Partner With Moto Node <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection
        title="Service Booking FAQs"
        description="Answers to common questions about vehicle services on Moto Node."
        items={faqItems}
      />
    </SiteLayout>
  );
}
