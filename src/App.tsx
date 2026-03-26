import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const CoursePage = lazy(() => import("./pages/CoursePage"));
const OnlinePrograms = lazy(() => import("./pages/OnlinePrograms"));
const StudentShowcase = lazy(() => import("./pages/StudentShowcase"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Blog = lazy(() => import("./pages/Blog"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Pricing = lazy(() => import("./pages/Pricing"));
const TeachWithUs = lazy(() => import("./pages/TeachWithUs"));
const Store = lazy(() => import("./pages/Store"));
const Center = lazy(() => import("./pages/Center"));
const OfflineClass = lazy(() => import("./pages/OfflineClass"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Basic loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses/:slug" element={<CoursePage />} />
            <Route path="/online-programs" element={<OnlinePrograms />} />
            <Route path="/student-showcase" element={<StudentShowcase />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/teach-with-us" element={<TeachWithUs />} />
            <Route path="/store" element={<Store />} />
            <Route path="/center" element={<Center />} />
            <Route path="/offline-class" element={<OfflineClass />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppWidget />
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
