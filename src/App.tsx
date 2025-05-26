import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

// Pages
import HomePage from "./pages/Index";
import MenuPage from "./pages/Menu";
import AboutPage from "./pages/About";
import NutritionDatabasePage from "./pages/NutritionDatabase";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicy";
import TermsOfServicePage from "./pages/legal/TermsOfService";
import CookiePolicyPage from "./pages/legal/CookiePolicy";
import DisclaimerPage from "./pages/legal/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/nutrition-database" element={<NutritionDatabasePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
