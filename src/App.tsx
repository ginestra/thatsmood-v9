
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Blog from "./pages/Thoughts";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import CaseStudy from "./pages/CaseStudy";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="ux-portfolio-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/thatsmood-v9">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/thoughts" element={<Blog />} />
            <Route path="/thoughts/:slug" element={<BlogPost />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
