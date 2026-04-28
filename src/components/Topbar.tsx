import { Phone, Mail, Award, ShieldCheck, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { PiPinterestLogo } from "react-icons/pi";

export default function Topbar() {
  return (
    <div className="bg-primary-dark text-white py-2 px-4 hidden md:block border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs lg:text-sm whitespace-nowrap overflow-hidden">
        <div className="flex items-center space-x-4 lg:space-x-6 shrink-0">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-accent-yellow shrink-0" />
            <span>+91 80772 27207 | +91 79902 14597</span>
          </div>
          <div className="flex items-center space-x-2 hidden lg:flex">
            <Mail size={14} className="text-accent-yellow shrink-0" />
            <span>Globalengineers8077@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-6 shrink-0">
          <div className="flex items-center space-x-3 lg:space-x-4 border-r border-white/20 pr-4 lg:pr-6">
            <div className="flex items-center space-x-1.5 lg:space-x-2">
              <Award size={14} className="text-accent-yellow shrink-0" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-1.5 lg:space-x-2">
              <ShieldCheck size={14} className="text-accent-yellow shrink-0" />
              <span>GSTIN: 09DIFPM5962K1ZM</span>
            </div>
            <div className="flex items-center space-x-1.5 lg:space-x-2 hidden xl:flex">
              <Award size={14} className="text-accent-yellow shrink-0" />
              <span>UDYAM: UP-02-0104043</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 lg:space-x-4">
            <a href="https://www.facebook.com/globalengineersaligarh" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><Facebook size={14} /></a>
            <a href="https://x.com/Globalengi82622" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><Twitter size={14} /></a>
            <a href="https://www.linkedin.com/in/globalengineersaligarh/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><Linkedin size={14} /></a>
            <a href="https://www.instagram.com/globalengineersaligarh/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><Instagram size={14} /></a>
            <a href="https://in.pinterest.com/Globalengineersaligarh/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><PiPinterestLogo size={14} /></a>
            <a href="https://www.youtube.com/@Globalengineersaligarh" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors"><Youtube size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
