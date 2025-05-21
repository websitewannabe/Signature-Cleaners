import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from 'react';
import ScrollToTop from "@/components/ui/scroll-to-top";
import HomePage from "@/pages/home-page";
import { AuthProvider } from "./hooks/use-auth";

const queryClient = new QueryClient();

// Lazy load all non-critical routes
const NotFound = lazy(() => import("@/pages/not-found"));
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
const DoylestownPage = lazy(() => import("@/pages/locations/doylestown"));
const BuckinghamPage = lazy(() => import("@/pages/locations/buckingham"));
const CityPage = lazy(() => import("@/pages/locations/CityPage"));

function Router() {
  return (
    <Switch>
      <Route
        path="/sitemap.xml"
        component={() => {
          window.location.href = "/sitemap.xml";
          return null;
        }}
      />
      <Route path="/" component={HomePage} />
      <Route path="/all-services/all-services" component={() => <Suspense fallback={<div>Loading...</div>}><ServicesPage /></Suspense>} />
      <Route path="/all-services/wash-fold" component={() => <Suspense fallback={<div>Loading...</div>}><WashFoldPage /></Suspense>} />
      <Route
        path="/all-services/alteration-tailoring"
        component={() => <Suspense fallback={<div>Loading...</div>}><AlterationTailoringPage /></Suspense>}
      />
      <Route path="/all-services/shoe-repair" component={() => <Suspense fallback={<div>Loading...</div>}><ShoeRepairPage /></Suspense>} />
      <Route path="/all-services/delivery" component={() => <Suspense fallback={<div>Loading...</div>}><DeliveryPage /></Suspense>} />
      <Route path="/all-services/wedding-gown" component={() => <Suspense fallback={<div>Loading...</div>}><WeddingGownPage /></Suspense>} />
      <Route path="/all-services/dry-cleaning" component={() => <Suspense fallback={<div>Loading...</div>}><DryCleaningPage /></Suspense>} />
      <Route
        path="/all-services/clean-household-items"
        component={() => <Suspense fallback={<div>Loading...</div>}><CleanHouseholdItemsPage /></Suspense>}
      />
      <Route path="/about-us" component={() => <Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>} />
      <Route path="/contact-us" component={() => <Suspense fallback={<div>Loading...</div>}><ContactPage /></Suspense>} />
      <Route path="/schedule" component={() => <Suspense fallback={<div>Loading...</div>}><SchedulePage /></Suspense>} />
      <Route path="/my-account" component={() => <Suspense fallback={<div>Loading...</div>}><AuthPage /></Suspense>} />
      <Route
        path="/legal/accessibility-statement"
        component={() => <Suspense fallback={<div>Loading...</div>}><AccessibilityPage /></Suspense>}
      />
      <Route path="/legal/terms-and-conditions" component={() => <Suspense fallback={<div>Loading...</div>}><TermsPage /></Suspense>} />
      <Route path="/legal/privacy-policy" component={() => <Suspense fallback={<div>Loading...</div>}><PrivacyPage /></Suspense>} />

      {/* Location-based pages */}
      <Route path="/:city" component={() => <Suspense fallback={<div>Loading...</div>}><CityPage /></Suspense>} />

      <Route component={() => <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />
    </Switch>
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