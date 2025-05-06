import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import ServicesPage from "@/pages/all-services/services-page";
const queryClient = new QueryClient();
import WashFoldPage from "@/pages/wash-fold-page";
import FoldingDressShirtPage from "@/pages/all-services/folding-dress-shirt-page";
import ShoeRepairPage from "@/pages/all-services/shoe-repair-page";
import AlterationTailoringPage from "@/pages/all-services/alteration-tailoring-page";
import SuedeLeatherCleaningPage from "@/pages/all-services/suede-leather-cleaning-page";
import InteriorCleaningPage from "@/pages/interior-cleaning-page";
import WeddingGownPage from "@/pages/all-services/wedding-gown-page";
import DryCleaningPage from "@/pages/all-services/dry-cleaning-page";
import CleanHouseholdItemsPage from "@/pages/all-services/clean-household-items-page";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";
import SchedulePage from "@/pages/schedule-page";
import { AuthProvider } from "./hooks/use-auth";
import FaqPage from "@/pages/faq-page";
import AuthPage from "@/pages/auth-page";
import DeliveryPage from "@/pages/all-services/delivery-page";
import AccessibilityPage from "@/pages/legal/accessibility-page";
import TermsPage from "@/pages/legal/terms-page";
import PrivacyPage from "@/pages/legal/privacy-page";

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
      <Route path="/all-services/all-services" component={ServicesPage} />
      <Route path="/all-services/wash-fold" component={WashFoldPage} />
      <Route
        path="/all-services/folding-dress-shirt"
        component={FoldingDressShirtPage}
      />
      <Route
        path="/all-services/alteration-tailoring"
        component={AlterationTailoringPage}
      />
      <Route path="/all-services/shoe-repair" component={ShoeRepairPage} />
      <Route
        path="/all-services/suede-leather-cleaning"
        component={SuedeLeatherCleaningPage}
      />
      <Route
        path="/all-services/interior-cleaning"
        component={InteriorCleaningPage}
      />
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
      <Route path="/faq" component={FaqPage} />
      <Route path="/my-account" component={AuthPage} />
      <Route
        path="/legal/accessibility-statement"
        component={AccessibilityPage}
      />
      <Route path="/legal/terms-and-conditions" component={TermsPage} />
      <Route path="/legal/privacy-policy" component={PrivacyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
