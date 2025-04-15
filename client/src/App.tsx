import { Switch, Route } from "wouter";
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
import { AuthProvider } from "./hooks/use-auth";
import LiveChat from "./components/live-chat";
import FaqPage from "@/pages/faq-page";
import AuthPage from "@/pages/auth-page";
import DeliveryPage from "@/pages/delivery-page";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/wash-fold" component={WashFoldPage} />
      <Route path="/folding-dress-shirt" component={FoldingDressShirtPage} />
      <Route path="/alteration-tailoring" component={AlterationTailoringPage} />
      <Route path="/shoe-repair" component={ShoeRepairPage} />
      <Route path="/suede-leather-cleaning" component={SuedeLeatherCleaningPage} />
      <Route path="/interior-cleaning" component={InteriorCleaningPage} />
      <Route path="/wedding-gown" component={WeddingGownPage} />
      <Route path="/dry-cleaning" component={DryCleaningPage} />
      <Route path="/clean-household-items" component={CleanHouseholdItemsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/delivery" component={DeliveryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router />
      <Toaster />
    </AuthProvider>
  );
}

export default App;