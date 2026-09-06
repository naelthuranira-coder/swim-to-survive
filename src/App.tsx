import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import MySwimGuide from "./pages/MySwimGuide";
import AboutUs from "./pages/AboutUs";
import Statistics from "./pages/Statistics";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="/my-swim-guide" element={<MySwimGuide />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
