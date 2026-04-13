import { SiteLayout } from "@/components/layout/SiteLayout";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSection } from "@/components/seo/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Dealers } from "@/components/sections/Dealers";
import { BecomePartnerSection } from "@/components/sections/BecomePartnerSection";
import { Features } from "@/components/sections/Features";
import { AppPromo } from "@/components/sections/AppPromo";
import { homeFaqs, sitePageMap } from "@/config/site";
import { buildPageStructuredData, generateStructuredData } from "@/utils/seoHelpers";

export default function Home() {
  return (
    <SiteLayout>
      <SEOHead
        title={sitePageMap.home.title}
        description={sitePageMap.home.description}
        path={sitePageMap.home.path}
        keywords={sitePageMap.home.keywords}
        structuredData={[
          ...buildPageStructuredData("home", { faqItems: homeFaqs }),
          generateStructuredData("product"),
          generateStructuredData("service"),
        ]}
      />

      <>
        <Hero />
        <Services />
        <Products />
        <Dealers />
        <Features />
        <BecomePartnerSection />
        <AppPromo />
        <FAQSection
          title="Moto Node FAQs"
          description="Quick answers about services, spare parts, and community features available on Moto Node."
          items={homeFaqs}
        />
      </>
    </SiteLayout>
  );
}
