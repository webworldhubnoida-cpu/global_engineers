import { motion } from 'motion/react';
import { Clock, PhoneCall, Zap, AlertTriangle, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteContext';

export default function EmergencyService() {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-16 bg-primary-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform translate-x-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image Side */}
            <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
              <img 
                src="https://media.istockphoto.com/id/985189108/photo/warning-sign-of-safety-stop-high-voltage.jpg?s=170667a&w=0&k=20&c=IEDkgv307Bn-fhknrYIiqdQzm7g8biaCwC_qe9Bd8yY=" 
                alt="Emergency electrical repair" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/40 to-transparent" />
              
              {/* Emergency Badge */}
              <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center animate-pulse shadow-lg">
                <AlertTriangle size={16} className="mr-2" />
                EMERGENCY SERVICE
              </div>

              <div className="absolute bottom-8 left-8 max-w-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-white/80 text-sm">We understand that electrical breakdowns halt production. Our team responds instantly.</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-accent/20">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Fast Response</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Our emergency team reaches your site within the shortest possible time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-primary/20">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Expert Troubleshooting</h4>
                    <p className="text-white/60 text-sm leading-relaxed">We identify the root cause of the breakdown to prevent future occurrences.</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-xl shadow-accent/30 group"
                  >
                    <PhoneCall size={20} className="mr-3" />
                    Call Now
                    <ArrowRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                  </Link>
                  <button 
                    onClick={openModal}
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105"
                  >
                    <FileText size={20} className="mr-3" />
                    Get Quote
                  </button>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Direct Line</span>
                    <span className="text-white text-xl font-bold tracking-tighter">+91 80772 27207</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
