import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import ServicesPage from "@/pages/services-page";

const queryClient = new QueryClient();
import WashFoldPage from "@/pages/wash-fold-page";
import FoldingDressShirtPage from "@/pages/folding-dress-shirt-page";
import ShoeRepairPage from "@/pages/shoe-repair-page";
import AlterationTailoringPage from "@/pages/alteration-tailoring-page";
import SuedeLeatherCleaningPage from "@/pages/suede-leather-cleaning-page";
import InteriorCleaningPage from "@/pages/interior-cleaning-page";
import WeddingGownPage from "@/pages/wedding-gown-page";
import DryCleaningPage from "@/pages/dry-cleaning-page";
import CleanHouseholdItemsPage from "@/pages/clean-household-items-page";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";
import SchedulePage from "@/pages/schedule-page";
import { AuthProvider } from "./hooks/use-auth";
import FaqPage from "@/pages/faq-page";
import AuthPage from "@/pages/auth-page";
import DeliveryPage from "@/pages/delivery-page";
import AccessibilityPage from "@/pages/accessibility-page";
import TermsPage from "@/pages/terms-page";
import PrivacyPage from "@/pages/privacy-page";

function Router() {
  return (
    <Switch>
      <Route path="/sitemap.xml" component={() => {
        window.location.href = '/sitemap.xml';
        return null;
      }} />
      <Route path="/" component={HomePage} />
      <Route path="/all-services" component={ServicesPage} />
      <Route path="/wash-fold" component={WashFoldPage} />
      <Route path="/folding-dress-shirt" component={FoldingDressShirtPage} />
      <Route path="/alteration-tailoring" component={AlterationTailoringPage} />
      <Route path="/shoe-repair" component={ShoeRepairPage} />
      <Route
        path="/suede-leather-cleaning"
        component={SuedeLeatherCleaningPage}
      />
      <Route path="/interior-cleaning" component={InteriorCleaningPage} />
      <Route path="/wedding-gown" component={WeddingGownPage} />
      <Route path="/dry-cleaning" component={DryCleaningPage} />
      <Route
        path="/clean-household-items"
        component={CleanHouseholdItemsPage}
      />
      <Route path="/about-us" component={AboutPage} />
      <Route path="/contact-us" component={ContactPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/my-account" component={AuthPage} />
      <Route path="/delivery" component={DeliveryPage} />
      <Route path="/accessibility" component={AccessibilityPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
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
