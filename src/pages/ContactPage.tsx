import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQSection } from "@/components/seo/FAQSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { BecomePartnerSection } from "@/components/sections/BecomePartnerSection";
import { siteConfig, sitePageMap, type FAQItem } from "@/config/site";
import { buildPageStructuredData } from "@/utils/seoHelpers";

const contactCards = [
  {
    title: "Call Moto Node",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phoneE164}`,
    icon: Phone,
  },
  {
    title: "Email Support",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
  },
  {
    title: "WhatsApp Enquiry",
    value: "Chat with the team",
    href: "https://wa.me/919573759696",
    icon: MessageCircle,
  },
  {
    title: "Visit or write to us",
    value: `${siteConfig.contact.streetAddress}, ${siteConfig.contact.locality}, ${siteConfig.contact.region} ${siteConfig.contact.postalCode}`,
    href: "https://maps.google.com/?q=Hyderabad+Telangana+501505",
    icon: MapPin,
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How can I contact Moto Node for dealer partnerships?",
    answer:
      "Use the partnership form on this page or contact Moto Node directly by phone, email, or WhatsApp for dealer and business conversations.",
  },
  {
    question: "Can I contact Moto Node for service-related questions?",
    answer:
      "Yes. Moto Node can be contacted for help around services, dealer support, and general platform enquiries.",
  },
  {
    question: "Does Moto Node support local business onboarding?",
    answer:
      "Yes. Local workshops, dealers, and related businesses can share their details through the partner application flow.",
  },
];

export default function ContactPage() {
  const page = sitePageMap.contact;

  return (
    <SiteLayout>
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={buildPageStructuredData("contact", { faqItems })}
      />

      <PageHeader
        eyebrow="Contact Moto Node"
        title="Talk to the team about support, partnerships, and dealer onboarding"
        description="Reach Moto Node for service questions, platform enquiries, or business partnerships. We have made the contact journey simple across phone, email, WhatsApp, and form submission."
      />

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <FadeIn key={card.title} delay={index * 0.08}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block rounded-3xl border border-white/10 bg-zinc-950/60 p-8 h-full hover:border-primary/40 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-semibold text-white mb-3">{card.title}</h2>
                  <p className="text-muted-foreground leading-relaxed break-words">{card.value}</p>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <BecomePartnerSection />

      <FAQSection
        title="Contact & Partnership FAQs"
        description="Common questions around getting in touch with Moto Node."
        items={faqItems}
      />
    </SiteLayout>
  );
}
