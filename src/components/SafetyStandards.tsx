import { motion } from 'motion/react';
import { ShieldCheck, HardHat, ClipboardCheck, CheckCircle2, FileText } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteContext';

const standards = [
  {
    title: 'Strict Safety Protocols',
    description: 'We follow rigorous safety guidelines to ensure the protection of our team and your assets.',
    icon: ShieldCheck,
  },
  {
    title: 'Certified Engineers',
    description: 'Our team consists of highly trained and certified electrical engineers with years of experience.',
    icon: HardHat,
  },
  {
    title: 'Rigorous Quality Checks',
    description: 'Every project undergoes multiple stages of quality inspection before final handover.',
    icon: ClipboardCheck,
  },
];

const checklist = [
  'Personal Protective Equipment (PPE) Mandatory',
  'Regular Equipment Calibration',
  'On-site Risk Assessment',
  'Compliance with Indian Standards (IS)',
  'Zero Accident Policy',
  'Standard Operating Procedures (SOP)',
];

export default function SafetyStandards() {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/037/370/597/small_2x/ai-generated-electrical-engineer-checks-the-voltage-of-the-electrical-at-the-terminal-in-the-main-distribution-board-ai-generative-photo.jpg" 
                alt="Engineer with safety gear" 
                className="w-full h-[400px] md:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-accent p-4 rounded-xl shadow-lg text-white max-w-[240px]">
                <ShieldCheck size={32} className="mb-2" />
                <h4 className="text-lg font-bold mb-1">Safety First Culture</h4>
                <p className="text-xs text-white/80">100% safety record across all industrial projects.</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Safety & Quality Standards</h2>
              <p className="text-neutral-dark/70 text-base leading-relaxed">
                In the electrical industry, safety is the foundation of everything we do. We adhere to international standards to ensure reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {standards.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary-dark mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-dark/60 leading-tight">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-light p-6 rounded-xl border-l-4 border-accent"
            >
              <h4 className="text-base font-bold text-primary-dark mb-4 flex items-center">
                <CheckCircle2 className="mr-2 text-accent" size={18} />
                Safety Checklist
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center text-xs font-medium text-neutral-dark/80">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {item}
                  </div>
                ))}
              </div>
              <button 
                onClick={openModal}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center transition-all group"
              >
                <FileText size={16} className="mr-2" />
                Get Safety Audit Quote
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
