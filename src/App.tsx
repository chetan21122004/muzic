import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
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
const Online = lazy(() => import("./pages/Online"));
const Gallery = lazy(() => import("./pages/Gallery"));

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
            {/* ── CANONICAL ROUTES (matching live site paths) ── */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />

            {/* Contact → /enquire (live site uses /enquire/) */}
            <Route path="/enquire" element={<ContactUs />} />

            {/* Blog → /blogs */}
            <Route path="/blogs" element={<Blog />} />

            {/* Pricing */}
            <Route path="/pricing" element={<Pricing />} />

            {/* Student Showcase → /red-carpet */}
            <Route path="/red-carpet" element={<StudentShowcase />} />

            {/* Careers → /careers */}
            <Route path="/careers" element={<TeachWithUs />} />

            {/* Online Programs → /online-music-classes-in-croydon-and-uk */}
            <Route path="/online-music-classes-in-croydon-and-uk" element={<OnlinePrograms />} />
            <Route path="/online" element={<Online />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Courses — dynamic (internal) */}
            <Route path="/courses/:slug" element={<CoursePage />} />

            {/* ── INSTRUMENT-SPECIFIC ROUTES (matching live site) ── */}
            {/* These redirect to our dynamic /courses/:slug route */}
            <Route path="/learn-guitar" element={<Navigate to="/courses/guitar-acoustic" replace />} />
            <Route path="/learn-drums" element={<Navigate to="/courses/drums" replace />} />
            <Route path="/learn-western-vocals" element={<Navigate to="/courses/western-vocal" replace />} />
            <Route path="/learn-indian-classical-vocals" element={<Navigate to="/courses/indian-classical-vocal" replace />} />
            <Route path="/learn-piano-keyboard" element={<Navigate to="/courses/keyboard" replace />} />
            <Route path="/violin" element={<Navigate to="/courses/violin" replace />} />
            <Route path="/tabla" element={<Navigate to="/courses/tabla" replace />} />
            <Route path="/flute-bansuri" element={<Navigate to="/courses/flute" replace />} />
            <Route path="/music-theory" element={<Navigate to="/courses/music-theory" replace />} />

            {/* ── CENTRE ROUTES (matching live site individual branch pages) ── */}
            <Route path="/muziclub-baner" element={<Center />} />
            <Route path="/muziclub-wakad" element={<Center />} />
            <Route path="/muziclub-pimple-saudagar" element={<Center />} />

            {/* Store (local-only page, no live equivalent) */}
            <Route path="/store" element={<Store />} />

            {/* Offline Class → redirect to center page */}
            <Route path="/offline-class" element={<OfflineClass />} />

            {/* ── REDIRECTS: old local paths → new canonical paths ── */}
            <Route path="/contact" element={<Navigate to="/enquire" replace />} />
            <Route path="/blog" element={<Navigate to="/blogs" replace />} />
            <Route path="/student-showcase" element={<Navigate to="/red-carpet" replace />} />
            <Route path="/teach-with-us" element={<Navigate to="/careers" replace />} />
            <Route path="/online-programs" element={<Navigate to="/online-music-classes-in-croydon-and-uk" replace />} />
            <Route path="/center" element={<Navigate to="/muziclub-baner" replace />} />

            {/* Catch-all 404 */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
