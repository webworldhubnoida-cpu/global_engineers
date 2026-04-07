import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Award, Clock, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1E88E5_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-accent pl-6">
            Get in touch with our technical team for expert electrical solutions and industrial audits.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-12">Let's Discuss Your Project</h2>
              
              <div className="space-y-10 mb-16">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-dark mb-2">Call Our Experts</h4>
                    <p className="text-gray-600 text-lg">+91 80772 27207</p>
                    <p className="text-gray-600 text-lg">+91 79902 14597</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-dark mb-2">Email Inquiries</h4>
                    <p className="text-gray-600 text-lg">Globalengineers8077@gmail.com</p>
                    <p className="text-gray-600 text-lg">Info@theglobalengineers.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-dark mb-2">Our Headquarters</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      House No. 279, Ground Floor, C/o Maskoor Ahmad, Chharra Road, Sihavali, Chharra Rafatpur, Aligarh, Uttar Pradesh - 202130, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-neutral-light rounded-[2rem] border-b-4 border-primary">
                  <ShieldCheck className="text-primary mb-4" size={32} />
                  <h5 className="font-bold text-primary-dark mb-1">GSTIN</h5>
                  <p className="text-gray-500 text-sm">09DIFPM5962K1ZM</p>
                </div>
                <div className="p-8 bg-neutral-light rounded-[2rem] border-b-4 border-accent">
                  <Award className="text-accent mb-4" size={32} />
                  <h5 className="font-bold text-primary-dark mb-1">ISO Certified</h5>
                  <p className="text-gray-500 text-sm">9001:2015 Standards</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-gray-100"
            >
              <h3 className="text-3xl font-bold text-primary-dark mb-10">Send a Message</h3>
              <form 
                className="space-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const phone = formData.get('phone') as string;
                  const message = formData.get('message') as string;

                  const whatsappMessage = `*New Message from Contact Page*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
                  const encodedMessage = encodeURIComponent(whatsappMessage);
                  const whatsappUrl = `https://wa.me/918077227207?text=${encodedMessage}`;
                  
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-medium"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-medium"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-medium"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-light border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none font-medium resize-none"
                    placeholder="Describe your project requirements"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] shadow-xl text-lg"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.123456789012!2d78.12345678901234!3d27.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA3JzM0LjQiTiA3OMKwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Global Engineers Location"
        />
      </section>
    </PageTransition>
  );
}
