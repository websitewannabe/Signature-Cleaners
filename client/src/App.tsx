import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import ServicesPage from "@/pages/services-page";
import AboutPage from "@/pages/about-page";
import TestimonialsPage from "@/pages/testimonials-page";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/faq" component={FaqPage} /> {/* Added FAQ route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <LiveChat />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;