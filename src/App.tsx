import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';
import { QuoteProvider } from './context/QuoteContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestingPage from './pages/TestingPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import CertificatesPage from './pages/CertificatesPage';
import ScrollProgress from './components/animations/ScrollProgress';
import PageTransition from './components/animations/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
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
