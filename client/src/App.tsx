import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import ServicesPage from "@/pages/services-page";
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
import CustomerPortal from "@/pages/customer-portal";
import CustomerOrders from "@/pages/customer-portal/orders";
import CustomerAccount from "@/pages/customer-portal/account";
import { ProtectedRoute } from "./lib/protected-route";
import { AuthProvider } from "./hooks/use-auth";
import LiveChat from "./components/live-chat";
// Added import for FaqPage
import FaqPage from "@/pages/faq-page"; // You'll need to create this component
import AuthPage from "@/pages/auth-page"; //New Auth Page
import DeliveryPage from "@/pages/delivery-page"; // Added import for DeliveryPage

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
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
      <Route path="/about" component={AboutPage} />
      
      <Route path="/contact" component={ContactPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/faq" component={FaqPage} /> {/* Added FAQ route */}
      <Route path="/auth" component={AuthPage} /> {/* Added Auth route */}
      <Route path="/delivery" component={DeliveryPage} />{" "}
      {/* Added Delivery page route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
