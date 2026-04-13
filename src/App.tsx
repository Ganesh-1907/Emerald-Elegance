import { Suspense, lazy } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { RouteScrollManager } from "@/components/seo/RouteScrollManager";

const queryClient = new QueryClient();
const Home = lazy(() => import("@/pages/Home"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const PartsPage = lazy(() => import("@/pages/PartsPage"));
const CommunityPage = lazy(() => import("@/pages/CommunityPage"));
const RidesPage = lazy(() => import("@/pages/RidesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
            <Spinner className="size-7 text-primary" />
          </div>
        </div>
      }
    >
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/parts" component={PartsPage} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/rides" component={RidesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/search" component={SearchPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <RouteScrollManager />
          <AnalyticsScripts />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
