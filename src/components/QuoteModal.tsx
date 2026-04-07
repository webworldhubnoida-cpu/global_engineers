import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, Mail, User, Building2, MessageSquare } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteContext';

const clients = [
  { name: 'Power Grid', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Power_Grid_Corporation_of_India_logo.svg/1200px-Power_Grid_Corporation_of_India_logo.svg.png' },
  { name: 'UPPTCL', logo: 'https://www.upptcl.org/upptcl/images/logo.png' },
  { name: 'PTCUL', logo: 'https://www.ptcul.org/images/logo.png' },
  { name: 'GETCO', logo: 'https://www.getcogujarat.com/getco_new/images/getco_logo.png' },
  { name: 'ABB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1200px-ABB_logo.svg.png' },
  { name: 'Vedanta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Vedanta_Resources_logo.svg/1200px-Vedanta_Resources_logo.svg.png' },
  { name: 'Transformers & Rectifiers', logo: 'https://www.transformerindia.com/images/logo.png' },
  { name: 'TBEA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/TBEA_logo.svg/1200px-TBEA_logo.svg.png' },
  { name: 'Toshiba', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Toshiba_logo.svg/1200px-Toshiba_logo.svg.png' },
  { name: 'Atlanta Electricals', logo: 'https://atlantaelectricals.com/wp-content/uploads/2021/06/atlanta-logo.png' },
  { name: 'Delhi Transco', logo: 'https://dtl.gov.in/images/logo.png' },
  { name: 'Tata Power', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Tata_Power_logo.svg/1200px-Tata_Power_logo.svg.png' },
  { name: 'NTPC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/NTPC_Logo.svg/1200px-NTPC_Logo.svg.png' },
  { name: 'MPPTCL', logo: 'https://www.mptransco.nic.in/images/logo.png' },
  { name: 'TSTRANSCO', logo: 'https://tstransco.in/images/logo.png' },
  { name: 'Sterlite Power', logo: 'https://www.sterlitepower.com/sites/default/files/sterlite-power-logo.png' },
  { name: 'BHEL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/BHEL_logo.svg/1200px-BHEL_logo.svg.png' },
  { name: 'BEL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Bharat_Electronics_Limited_logo.svg/1200px-Bharat_Electronics_Limited_logo.svg.png' },
];

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-y-visible"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-gray-400 hover:text-primary transition-colors bg-white/80 backdrop-blur-sm rounded-full p-1 lg:bg-transparent"
            >
              <X size={24} className="md:w-7 md:h-7" />
            </button>

            {/* Left Side: Info & Logos (Hidden on mobile, shown on lg) */}
            <div className="hidden lg:flex lg:w-2/5 bg-primary-dark p-12 text-white flex-col justify-between sticky top-0">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get a Quote</h2>
                <p className="text-white/60 mb-8">
                  Fill out the form and our team will get back to you within 24 hours with a customized proposal.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <span>+91 80772 27207</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <span className="text-sm">Globalengineers8077@gmail.com</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-white/40 mb-6">Trusted by Industry Leaders</p>
                <div className="grid grid-cols-4 gap-4 opacity-50">
                  {clients.slice(0, 8).map((client, i) => (
                    <img 
                      key={i} 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-6 w-full object-contain filter invert brightness-0"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-3/5 p-6 md:p-12 bg-white">
              {/* Mobile Header */}
              <div className="lg:hidden mb-8 pr-8">
                <h2 className="text-2xl font-bold text-primary-dark mb-2">Get a Quote</h2>
                <p className="text-gray-500 text-sm">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              <form className="space-y-5 md:space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const phone = formData.get('phone') as string;
                const company = formData.get('company') as string;
                const details = formData.get('details') as string;

                const whatsappMessage = `*New Quote Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Company:* ${company}\n*Details:* ${details}`;
                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappUrl = `https://wa.me/918077227207?text=${encodedMessage}`;
                
                window.open(whatsappUrl, '_blank');
                closeModal();
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <User size={16} className="text-accent" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-neutral-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Mail size={16} className="text-accent" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-neutral-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Phone size={16} className="text-accent" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-neutral-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Building2 size={16} className="text-accent" /> Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-neutral-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <MessageSquare size={16} className="text-accent" /> Project Details
                  </label>
                  <textarea
                    rows={3}
                    name="details"
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm md:text-base"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-accent/20 transition-all transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-3 mt-2"
                >
                  <Send size={18} className="md:w-5 md:h-5" />
                  Send Inquiry
                </button>

                {/* Mobile Footer Info */}
                <div className="lg:hidden pt-6 border-t border-gray-100 flex flex-col gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Trusted by Industry Leaders</p>
                  <div className="grid grid-cols-4 gap-4 opacity-30 grayscale">
                    {clients.slice(0, 4).map((client, i) => (
                      <img 
                        key={i} 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-4 w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
