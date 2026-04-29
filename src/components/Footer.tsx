import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp, Youtube, Globe, Users } from 'lucide-react';
import { PiPinterestLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ScrollReveal from './animations/ScrollReveal';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Visitor Counter Logic
    const baseCount = 1250;
    const storedCount = localStorage.getItem('global_engineers_visitor_count');
    let currentCount = storedCount ? parseInt(storedCount) : baseCount;
    
    // Increment for this session if not already incremented
    const sessionVisited = sessionStorage.getItem('page_visited');
    if (!sessionVisited) {
      setTimeout(() => {
        currentCount += 1;
        localStorage.setItem('global_engineers_visitor_count', currentCount.toString());
        sessionStorage.setItem('page_visited', 'true');
        setVisitorCount(currentCount);
      }, 1000); // Small delay to "show" the increase
    }
    
    setVisitorCount(sessionVisited ? currentCount : currentCount - 1);

    // Google Translate Logic
    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = () => {
        const element = document.getElementById('google_translate_element');
        if (element) element.innerHTML = '';
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'en' }, // Removed layout: SIMPLE for better DOM structure
          'google_translate_element'
        );
      };
    }

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }
  }, []);

  const socialLinks = [
    { Icon: Facebook, color: '#1877F2', url: 'https://www.facebook.com/globalengineersaligarh' },
    { Icon: Twitter, color: '#1DA1F2', url: 'https://x.com/Globalengi82622' },
    { Icon: Linkedin, color: '#0A66C2', url: 'https://www.linkedin.com/in/globalengineersaligarh/' },
    { Icon: Instagram, color: '#E4405F', url: 'https://www.instagram.com/globalengineersaligarh/' },
    { Icon: PiPinterestLogo, color: '#BD081C', url: 'https://in.pinterest.com/Globalengineersaligarh/' },
    { Icon: Youtube, color: '#FF0000', url: 'https://www.youtube.com/@Globalengineersaligarh' }
  ];

  return (
    <footer className="bg-neutral-dark text-white pt-20 pb-10 tracking-wide">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* COMPANY */}
          <ScrollReveal className="h-full flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <Link to="/" className="inline-block bg-white rounded-lg p-2">
                <img src="/gallery/logo.png" alt="logo" className="h-12 w-auto" />
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed">
                Govt. Approved Electrical Licensed Contractor specializing in end-to-end electrical solutions across India.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map(({ Icon, color, url }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    whileHover={{ y: -4, backgroundColor: color }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>


          </ScrollReveal>

          {/* QUICK LINKS */}
          <ScrollReveal className="h-full flex flex-col space-y-4">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Team', path: '/team' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* SERVICES */}
          <ScrollReveal className="h-full flex flex-col space-y-4">
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Power Transformers',
                'Switchyard Work',
                'HT/LT Testing',
                'Cable Testing',
                'Panel Commissioning',
                'Relay Checks'
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
              
            </ul>

            {/* Visitor Counter */}
            <div className="mt-auto pt-6">
              <div className="flex items-center space-x-2 text-accent mb-3">
                <Users size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Visitors</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 inline-flex items-center shadow-inner group hover:bg-white/10 transition-colors">
                <div className="flex space-x-1">
                  {visitorCount.toString().padStart(6, '0').split('').map((digit, idx) => (
                    <span 
                      key={idx} 
                      className="w-6 h-8 bg-neutral-dark border border-white/20 rounded flex items-center justify-center text-accent font-bold text-lg shadow-lg"
                    >
                      {digit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CONTACT */}
          <ScrollReveal className="h-full flex flex-col space-y-4">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>

            <ul className="space-y-4 text-sm">

              <li className="flex gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span className="text-gray-400">
                  House No. 279, Sihavali Chharra Road, Aligarh, UP - 202130
                </span>
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="text-accent mt-1" />
                <div className="text-gray-400">
                  <div>+91 80772 27207</div>
                  <div>+91 79902 14597</div>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail size={18} className="text-accent mt-1" />
                <div className="text-gray-400 break-all">
                  <div>globalengineers8077@gmail.com</div>
                  <div>info@theglobalengineers.co.in</div>
                </div>
              </li>

            </ul>

            {/* Google Translator */}
            <div className="mt-auto w-full pt-4">
              <div id="google_translate_element" className="google-translate-container"></div>
            </div>
          </ScrollReveal>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          
          <div className="md:w-1/3 text-center md:text-left">
            © 2026 Global Engineers. All rights reserved.
          </div>

          <div className="md:w-1/3 text-center">
            <a 
              href="https://www.webworldhub.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Design & Development By Web World Hub
            </a>
          </div>

          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary hover:bg-accent rounded-xl flex items-center justify-center transition"
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}