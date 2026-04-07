import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, Award, CheckCircle2, Loader2 } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918077227207?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
    }, 1000);

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-primary-dark mb-10 tracking-tight leading-tight">
              Ready to Power Your <span className="text-primary">Next Project?</span>
            </h2>
            
            <div className="space-y-10 mb-14">
              {[
                { Icon: Phone, title: 'Call Us', details: ['+91 80772 27207', '+91 79902 14597'], color: 'bg-blue-50 text-blue-600' },
                { Icon: Mail, title: 'Email Us', details: ['Globalengineers8077@gmail.com', 'Info@theglobalengineers.co.in'], color: 'bg-purple-50 text-purple-600' },
                { Icon: MapPin, title: 'Visit Us', details: ['House No. 279, Ground Floor, Chharra Road, Sihavali, Aligarh, UP - 202130, India'], color: 'bg-orange-50 text-orange-600' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <item.Icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-primary-dark text-xl mb-2">{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-500 font-medium">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-neutral-light p-10 rounded-[2.5rem] border-l-[12px] border-accent shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award size={120} />
              </div>
              <div className="flex items-center space-x-5 mb-6 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Award size={32} />
                </div>
                <h4 className="text-2xl font-black text-primary-dark tracking-tight">Certified Excellence</h4>
              </div>
              <div className="space-y-2 relative z-10">
                <p className="text-gray-600 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  GSTIN: 09DIFPM5962K1ZM
                </p>
                <p className="text-gray-600 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  UDYAM-UP-02-0104043
                </p>
                <p className="text-gray-600 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  ISO: QSR/QG/2602346913
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-14 border border-gray-100 relative"
            >
              <h3 className="text-3xl font-black text-primary-dark mb-10 tracking-tight">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="name"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white focus:shadow-xl transition-all outline-none font-bold text-primary-dark"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white focus:shadow-xl transition-all outline-none font-bold text-primary-dark"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white focus:shadow-xl transition-all outline-none font-bold text-primary-dark"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows={4}
                    name="message"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white focus:shadow-xl transition-all outline-none resize-none font-bold text-primary-dark"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl font-black text-lg tracking-tight ${
                    status === 'success' ? 'bg-green-500 text-white' : 'bg-primary hover:bg-primary-dark text-white'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.div 
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send size={20} />
                      </motion.div>
                    )}
                    {status === 'loading' && (
                      <motion.div 
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </motion.div>
                    )}
                    {status === 'success' && (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 size={20} />
                        <span>Message Sent!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
