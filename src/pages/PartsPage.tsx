import { CheckCircle2, PackageCheck, Shield, Truck } from "lucide-react";
import { Link } from "wouter";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQSection } from "@/components/seo/FAQSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { Products } from "@/components/sections/Products";
import { Button } from "@/components/ui/button";
import { sitePageMap, type FAQItem } from "@/config/site";
import { buildPageStructuredData } from "@/utils/seoHelpers";

const sellingPoints = [
  {
    title: "Verified Categories",
    description: "Explore oils, brakes, tires, accessories, and other essential vehicle parts in one place.",
    icon: PackageCheck,
  },
  {
    title: "Confidence in Quality",
    description: "Moto Node is designed to help customers find genuine products and trustworthy sellers faster.",
    icon: Shield,
  },
  {
    title: "Smoother Fulfilment",
    description: "Compare needs, prepare before service visits, and reduce delays in routine maintenance planning.",
    icon: Truck,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What types of spare parts can I explore on Moto Node?",
    answer:
      "Moto Node showcases common high-demand categories such as engine oil, brakes, tires, suspension needs, and interior accessories.",
  },
  {
    question: "Is Moto Node useful for both bikes and cars?",
    answer:
      "Yes. The platform is positioned as an automobile super app, so the parts and services experience is built for a wide range of vehicle owners.",
  },
  {
    question: "Can I combine parts discovery with service planning?",
    answer:
      "Yes. Moto Node is designed so parts, services, and dealer support work together, helping users prepare for maintenance more efficiently.",
  },
];

export default function PartsPage() {
  const page = sitePageMap.parts;

  return (
    <SiteLayout>
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={buildPageStructuredData("parts", {
          faqItems,
          productData: {
            name: "Automobile Spare Parts",
            description:
              "Moto Node helps users discover genuine automobile parts, verified categories, and smarter maintenance-ready purchases.",
          },
        })}
      />

      <PageHeader
        eyebrow="Spare Parts"
        title="Find the right automobile parts without the usual guesswork"
        description="Moto Node brings popular parts categories, dealer support, and automobile convenience together so riders and drivers can buy smarter."
      />

      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {sellingPoints.map((item, index) => {
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

      <Products />

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 md:p-10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Why parts discovery matters on Moto Node
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Compare service readiness before visiting a workshop.",
                  "Discover fast-moving parts categories in one automobile-focused app.",
                  "Support vehicle upkeep with community and ride insights nearby.",
                  "Move from parts browsing to partnerships or service enquiries quickly.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/community">Join the Community</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection
        title="Spare Parts FAQs"
        description="Helpful answers for customers browsing products on Moto Node."
        items={faqItems}
      />
    </SiteLayout>
  );
}
