import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { lazy, Suspense } from "react";
const NotFound = lazy(() => import("@/pages/not-found"));
const HomePage = lazy(() => import("@/pages/home-page"));
const ServicesPage = lazy(() => import("@/pages/services-page"));
const WashFoldPage = lazy(() => import("@/pages/wash-fold-page"));
const FoldingDressShirtPage = lazy(() => import("@/pages/folding-dress-shirt-page"));
const ShoeRepairPage = lazy(() => import("@/pages/shoe-repair-page"));
const AlterationTailoringPage = lazy(() => import("@/pages/alteration-tailoring-page"));

const WeddingGownPage = lazy(() => import("@/pages/wedding-gown-page"));
const DryCleaningPage = lazy(() => import("@/pages/dry-cleaning-page"));
const CleanHouseholdItemsPage = lazy(() => import("@/pages/clean-household-items-page"));
const AboutPage = lazy(() => import("@/pages/about-page"));
const TestimonialsPage = lazy(() => import("@/pages/testimonials-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const SchedulePage = lazy(() => import("@/pages/schedule-page"));
const CustomerPortal = lazy(() => import("@/pages/customer-portal"));
const CustomerOrders = lazy(() => import("@/pages/customer-portal/orders"));
const CustomerAccount = lazy(() => import("@/pages/customer-portal/account"));
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
      
      <Route path="/wedding-gown" component={WeddingGownPage} />
      <Route path="/dry-cleaning" component={DryCleaningPage} />
      <Route
        path="/clean-household-items"
        component={CleanHouseholdItemsPage}
      />
      <Route path="/about" component={AboutPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
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