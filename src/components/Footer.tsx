import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp, Youtube } from 'lucide-react';
import { PiPinterestLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ScrollReveal from './animations/ScrollReveal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Facebook, color: '#1877F2', url: 'https://www.facebook.com/globalengineersaligarh' },
    { Icon: Twitter, color: '#1DA1F2', url: 'https://x.com/Globalengi82622' },
    { Icon: Linkedin, color: '#0A66C2', url: 'https://www.linkedin.com/in/globalengineersaligarh/' },
    { Icon: Instagram, color: '#E4405F', url: 'https://www.instagram.com/globalengineersaligarh/' },
    { Icon: PiPinterestLogo, color: '#BD081C', url: 'https://in.pinterest.com/Globalengineersaligarh/' },
    { Icon: Youtube, color: '#FF0000', url: 'https://www.youtube.com/@Globalengineersaligarh' }
  ];

  return (
    <footer className="bg-neutral-dark text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <ScrollReveal direction="up" delay={0.1} className="space-y-8">
            <Link to="/" className="flex items-center bg-white  rounded-xl">
              <img src="/gallery/logo.png" alt="Global Engineers Logo" className="h-30 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg">
              Govt. Approved Electrical Licensed Contractor specializing in end-to-end electrical solutions across India since 2020.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map(({ Icon, color, url }, i) => (
                <motion.a 
                  key={i} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, backgroundColor: color, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center transition-colors border border-white/10"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.2}>
            <h4 className="text-xl font-black mb-10 relative inline-block">
              Quick Links
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
              />
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Testing Work', path: '/testing' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Team', path: '/team' },
                { name: 'Certificates', path: '/certificates' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-all flex items-center group">
                    <motion.span 
                      whileHover={{ x: 5 }}
                      className="flex items-center"
                    >
                      <span className="mr-3 text-accent font-bold group-hover:scale-150 transition-transform">›</span> {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal direction="up" delay={0.3}>
            <h4 className="text-xl font-black mb-10 relative inline-block">
              Our Services
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
              />
            </h4>
            <ul className="space-y-5">
              {['Power Transformers', 'Switchyard Erection', 'HT/LT Testing', 'Cable Testing', 'Panel Commissioning', 'Relay Checks'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-all flex items-center group">
                    <motion.span 
                      whileHover={{ x: 5 }}
                      className="flex items-center"
                    >
                      <span className="mr-3 text-accent font-bold group-hover:scale-150 transition-transform">›</span> {service}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="up" delay={0.4}>
            <h4 className="text-xl font-black mb-10 relative inline-block">
              Contact Info
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
              />
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <MapPin size={20} className="text-accent group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">House No. 279 Ground Floor C/o Maskoor Ahmad Chharra Road Sihavali Chharra Rafatpur Aligarh Uttar Pradesh PIN Code: 202130 India</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Phone size={20} className="text-accent group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-bold">+91 80772 27207</span>
                  <span className="text-gray-400 text-sm font-bold">+91 79902 14597</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Mail size={20} className="text-accent group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-bold">Globalengineers8077@gmail.com</span>
                  <span className="text-gray-400 text-sm font-bold">Info@theglobalengineers.co.in</span>
                              <span className="text-gray-400 text-sm font-bold">Hamza@theglobalengineers.co.in</span>

                </div>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-sm font-medium"
          >
            © 2026 Global Engineers. All Rights Reserved. Designed for Excellence.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="bg-primary hover:bg-accent text-white w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-2xl z-10"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
