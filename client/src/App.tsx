
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Loading from "@/components/ui/loading";
import { AuthProvider } from "./hooks/use-auth";
import { Suspense, lazy } from "react";

// Lazy load all page components
const NotFound = lazy(() => import("@/pages/not-found"));
const HomePage = lazy(() => import("@/pages/home-page"));
const ServicesPage = lazy(() => import("@/pages/all-services/services-page"));
const WashFoldPage = lazy(() => import("@/pages/all-services/wash-fold-page"));
const ShoeRepairPage = lazy(() => import("@/pages/all-services/shoe-repair-page"));
const AlterationTailoringPage = lazy(() => import("@/pages/all-services/alteration-tailoring-page"));
const WeddingGownPage = lazy(() => import("@/pages/all-services/wedding-gown-page"));
const DryCleaningPage = lazy(() => import("@/pages/all-services/dry-cleaning-page"));
const CleanHouseholdItemsPage = lazy(() => import("@/pages/all-services/clean-household-items-page"));
const AboutPage = lazy(() => import("@/pages/about-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const SchedulePage = lazy(() => import("@/pages/schedule-page"));
const AuthPage = lazy(() => import("@/pages/auth-page"));
const DeliveryPage = lazy(() => import("@/pages/all-services/delivery-page"));
const AccessibilityPage = lazy(() => import("@/pages/legal/accessibility-page"));
const TermsPage = lazy(() => import("@/pages/legal/terms-page"));
const PrivacyPage = lazy(() => import("@/pages/legal/privacy-page"));
const CityPage = lazy(() => import("@/pages/locations/CityPage"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          path="/sitemap.xml"
          component={() => {
            window.location.href = "/sitemap.xml";
            return null;
          }}
        />
        <Route path="/" component={HomePage} />
        <Route path="/all-services/all-services" component={ServicesPage} />
        <Route path="/all-services/wash-fold" component={WashFoldPage} />
        <Route
          path="/all-services/alteration-tailoring"
          component={AlterationTailoringPage}
        />
        <Route path="/all-services/shoe-repair" component={ShoeRepairPage} />
        <Route path="/all-services/delivery" component={DeliveryPage} />
        <Route path="/all-services/wedding-gown" component={WeddingGownPage} />
        <Route path="/all-services/dry-cleaning" component={DryCleaningPage} />
        <Route
          path="/all-services/clean-household-items"
          component={CleanHouseholdItemsPage}
        />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/contact-us" component={ContactPage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/my-account" component={AuthPage} />
        <Route
          path="/legal/accessibility-statement"
          component={AccessibilityPage}
        />
        <Route path="/legal/terms-and-conditions" component={TermsPage} />
        <Route path="/legal/privacy-policy" component={PrivacyPage} />

        {/* Location-based pages */}
        <Route path="/:city" component={CityPage} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ScrollToTop />
          <Router />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
