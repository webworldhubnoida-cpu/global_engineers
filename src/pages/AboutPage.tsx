import { motion } from 'motion/react';
import { Target, Eye, Award, ShieldCheck, Zap, Clock, Users, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useQuoteModal } from '../context/QuoteContext';

const timeline = [
  { year: '2020', title: 'Foundation', desc: 'Global Engineers established as a Govt. Approved Electrical Licensed Contractor.' },
  { year: '2021', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification for quality management standards.' },
  { year: '2022', title: 'MSME Registration', desc: 'Registered as an MSME organization, expanding our industrial reach.' },
  { year: '2023', title: 'Pan-India Projects', desc: 'Successfully executed major HT/LT projects across multiple states in India.' },
  { year: '2024', title: 'Advanced Testing', desc: 'Introduced advanced calibrated testing equipment for 765kV systems.' },
  { year: 'Present', title: 'Industry Leader', desc: 'Recognized as a leading provider of end-to-end electrical solutions.' },
];

export default function AboutPage() {
  const { openModal } = useQuoteModal();

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
            About <span className="text-primary">Global Engineers</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-accent pl-6">
            A Govt. Approved Electrical Licensed Contractor and MSME-registered organization with ISO 9001:2015 certification.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-8">Our Story & Commitment</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Global Engineers, established in 2020, is a premier electrical engineering firm based in Aligarh, Uttar Pradesh. We have quickly risen to become a trusted name in the industry, specializing in the supply, installation, erection, testing, and commissioning of HT and LT systems.
                </p>
                <p>
                  Our commitment to high quality standards and safety compliance has allowed us to build a strong client base across leading industries in India. We operate with a Pan-India service network, ensuring that our expertise is available wherever it is needed.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                alt="Engineering Excellence" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl border-t-8 border-primary"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide world-class electrical engineering solutions that prioritize safety, quality, and efficiency, enabling our clients to power their industrial operations with absolute reliability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl border-t-8 border-accent"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark mb-6">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most preferred electrical contractor in India, recognized for our technical innovation, ethical practices, and unwavering commitment to engineering excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-16">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'ISO 9001:2015', subtitle: 'Quality Management System', code: 'QSR/QG/2602346913' },
              { icon: ShieldCheck, title: 'MSME Registered', subtitle: 'Govt. of India Enterprise', code: 'UDYAM-UP-02-0104043' },
              { icon: Zap, title: 'GSTIN Verified', subtitle: 'Tax Compliance Registered', code: '09DIFPM5962K1ZM' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-light border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-md">
                  <cert.icon size={40} />
                </div>
                <h4 className="text-2xl font-bold text-primary-dark mb-2">{cert.title}</h4>
                <p className="text-gray-500 font-medium mb-4">{cert.subtitle}</p>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {cert.code}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-neutral-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-20 text-center">Our Journey</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2" />
                  <div className="w-12 h-12 bg-accent rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold text-xs mb-4 md:mb-0">
                    {item.year === 'Present' ? '★' : item.year.slice(-2)}
                  </div>
                  <div className={`md:w-1/2 p-8 bg-white rounded-3xl shadow-lg ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <span className="text-accent font-bold text-sm mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Detailed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">Why Choose Us</h2>
              <p className="text-gray-500">We combine technical excellence with a client-first approach.</p>
            </div>
            <button 
              onClick={openModal}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all flex items-center group"
            >
              Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Skilled Engineers', desc: 'Our team consists of highly experienced electrical engineers with deep domain expertise.' },
              { icon: ShieldCheck, title: 'Safety Standards', desc: 'We adhere to strict safety protocols and international quality compliance in every project.' },
              { icon: Clock, title: 'Fast Response', desc: 'Our dedicated breakdown service team ensures rapid response to minimize industrial downtime.' },
              { icon: Globe, title: 'Pan India Network', desc: 'We have a robust service network capable of executing projects in any corner of India.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-neutral-light hover:bg-primary transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors shadow-sm">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-primary-dark group-hover:text-white mb-4 transition-colors">{feature.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Images Grid */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="md:col-span-2 h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
