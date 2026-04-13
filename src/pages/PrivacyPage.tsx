import { PageHeader } from "@/components/layout/PageHeader";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/animations/FadeIn";
import { SEOHead } from "@/components/seo/SEOHead";
import { sitePageMap } from "@/config/site";
import { buildPageStructuredData } from "@/utils/seoHelpers";

const privacySections = [
  {
    title: "Information we collect",
    body:
      "Moto Node may collect information you share directly with us, including contact details, account information, business onboarding details, and messages sent through forms or support channels.",
  },
  {
    title: "How we use information",
    body:
      "We use information to operate the platform, respond to enquiries, improve user experience, support partnerships, and provide relevant automobile-related services and updates.",
  },
  {
    title: "How we protect information",
    body:
      "Moto Node works to protect personal information with reasonable technical and organisational safeguards, while continuously improving platform security and data handling practices.",
  },
  {
    title: "Your choices",
    body:
      "You can contact Moto Node to update your information, request support, or ask questions about how your details are used across the platform experience.",
  },
];

export default function PrivacyPage() {
  const page = sitePageMap.privacy;

  return (
    <SiteLayout>
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={buildPageStructuredData("privacy")}
      />

      <PageHeader
        eyebrow="Privacy Policy"
        title="How Moto Node handles platform and contact information"
        description="This privacy policy explains, at a high level, how Moto Node may collect, use, and protect information across the website and connected automobile services."
      />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          {privacySections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.08}>
              <article className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
