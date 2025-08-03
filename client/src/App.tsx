import ScrollToTop from "@/components/ui/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import { useEqualweb } from "@/hooks/use-equalweb";
import AboutPage from "@/pages/about-page";
import AlterationTailoringPage from "@/pages/all-services/alteration-tailoring-page";
import CleanHouseholdItemsPage from "@/pages/all-services/clean-household-items-page";
import DeliveryPage from "@/pages/all-services/delivery-page";
import DryCleaningPage from "@/pages/all-services/dry-cleaning-page";
import ServicesPage from "@/pages/all-services/services-page";
import ShoeRepairPage from "@/pages/all-services/shoe-repair-page";
import WashFoldPage from "@/pages/all-services/wash-fold-page";
import WeddingGownPage from "@/pages/all-services/wedding-gown-page";
import AuthPage from "@/pages/auth-page";
import ContactPage from "@/pages/contact-page";
import HomePage from "@/pages/home-page";
import AccessibilityPage from "@/pages/legal/accessibility-page";
import PrivacyPage from "@/pages/legal/privacy-page";
import TermsPage from "@/pages/legal/terms-page";
import NotFound from "@/pages/not-found";
import SchedulePage from "@/pages/schedule-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch, useLocation } from "wouter";
import { AuthProvider } from "./hooks/use-auth";
const queryClient = new QueryClient();

// Location-based pages
import CityPage from "@/pages/locations/CityPage";

function Router() {
  const [location] = useLocation();
  const { cleanupEqualweb } = useEqualweb();

  // Clean up EqualWeb on every route change to ensure fresh state
  useEffect(() => {
    cleanupEqualweb();
  }, [location, cleanupEqualweb]);

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
  );
}

function App() {
  const { cleanupEqualweb } = useEqualweb();

  // Clean up EqualWeb on page unload/refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      cleanupEqualweb();
    };

    const handleUnload = () => {
      cleanupEqualweb();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
    };
  }, [cleanupEqualweb]);

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
