import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { lazy, Suspense } from "react";

const NotFound = lazy(() => import("@/pages/not-found"));
const HomePage = lazy(() => import("@/pages/home-page"));
const ServicesPage = lazy(() => import("@/pages/services-page"));
const WashFoldPage = lazy(() => import("@/pages/wash-fold-page"));
const ShoeRepairPage = lazy(() => import("@/pages/shoe-repair-page"));
const AlterationTailoringPage = lazy(() => import("@/pages/alteration-tailoring-page"));
const WeddingGownPage = lazy(() => import("@/pages/wedding-gown-page"));
const DryCleaningPage = lazy(() => import("@/pages/dry-cleaning-page"));
const CleanHouseholdItemsPage = lazy(() => import("@/pages/clean-household-items-page"));
const AboutPage = lazy(() => import("@/pages/about-page"));
const TestimonialsPage = lazy(() => import("@/pages/testimonials-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const SchedulePage = lazy(() => import("@/pages/schedule-page"));
const FaqPage = lazy(() => import("@/pages/faq-page"));
const AuthPage = lazy(() => import("@/pages/auth-page"));
const DeliveryPage = lazy(() => import("@/pages/delivery-page"));

function Router() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#790003] mx-auto"></div>
            <p className="mt-4 text-neutral-600">Loading...</p>
          </div>
        </div>
      }
    >
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/wash-fold" component={WashFoldPage} />
        <Route path="/alteration-tailoring" component={AlterationTailoringPage} />
        <Route path="/shoe-repair" component={ShoeRepairPage} />
        <Route path="/wedding-gown" component={WeddingGownPage} />
        <Route path="/dry-cleaning" component={DryCleaningPage} />
        <Route path="/clean-household-items" component={CleanHouseholdItemsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/delivery" component={DeliveryPage} />
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;