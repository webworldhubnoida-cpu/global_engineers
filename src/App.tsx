import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { lazy, Suspense } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';
import { QuoteProvider } from './context/QuoteContext';
import ScrollProgress from './components/animations/ScrollProgress';
import PageTransition from './components/animations/PageTransition';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TestingPage = lazy(() => import('./pages/TestingPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/testing" element={<PageTransition><TestingPage /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
            <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/certificates" element={<PageTransition><CertificatesPage /></PageTransition>} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <QuoteProvider>
        <div className="min-h-screen">
          <ScrollProgress />
          <ScrollToTop />
          <Topbar />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingActions />
          <QuoteModal />
        </div>
      </QuoteProvider>
    </Router>
  );
}
