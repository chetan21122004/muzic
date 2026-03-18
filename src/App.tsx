import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";
import CoursePage from "./pages/CoursePage";
import StudentShowcase from "./pages/StudentShowcase";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import OnlinePrograms from "./pages/OnlinePrograms";
import Pricing from "./pages/Pricing";
import TeachWithUs from "./pages/TeachWithUs";
import Store from "./pages/Store";
import Center from "./pages/Center";
import OfflineClass from "./pages/OfflineClass";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
