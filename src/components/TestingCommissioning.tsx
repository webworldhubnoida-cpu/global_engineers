import { motion } from 'motion/react';
import { Zap, Activity, Shield, Layers, Radio, Settings, Power, Cable, Cpu, Box, ChevronRight } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteContext';
import ScrollReveal from './animations/ScrollReveal';

const testingData = [
  {
    id: 'transformer',
    title: 'Power Transformer',
    icon: Zap,
    isFeatured: true,
    content: {
      'Pre-Erection': [
        'Tan Delta Test of Bushing',
        'Turret CT Testing',
        'Ratio/Polarity of Turret CT',
        'Winding Resistance of Turret CT',
        'Insulation Resistance Test'
      ],
      'Pre-Commissioning': [
        'SFRA Test',
        'Tan Delta (Bushing & Winding)',
        'Magnetic Core Balance/Current',
        'Short Circuit Impedance',
        'Vector Group & WRM Test',
        'Voltage Ratio & PI Test'
      ]
    }
  },
  {
    id: 'switchyard',
    title: 'Switchyard (765kV)',
    icon: Activity,
    content: [
      'DCRM (Dynamic Contact Resistance)',
      'Timing Test of Circuit Breaker',
      'Contact Resistance Measurement',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'ct',
    title: 'Current Transformer',
    icon: Radio,
    content: [
      'Tan Delta & Ratio Test',
      'Polarity & Continuity Test',
      'Winding Resistance Test',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'cvt',
    title: 'CVT / PT',
    icon: Settings,
    content: [
      'Ratio & Polarity Test',
      'Continuity Test',
      'Winding Resistance Test',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'la',
    title: 'Lightning Arrestor',
    icon: Shield,
    content: [
      'Tan Delta Test',
      'Leakage Current Measurement',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'isolator',
    title: 'Isolators',
    icon: Layers,
    content: [
      'Contact Resistance Measurement',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'panels',
    title: '33kV HT Panels',
    icon: Box,
    content: [
      'CT & PT Ratio/Polarity',
      'Continuity & WRM Test',
      'Timing Test of CB',
      'Relay Configuration Checks'
    ]
  },
  {
    id: 'cables',
    title: 'HT & LT Cables',
    icon: Cable,
    content: [
      'Hi-Pot & VLF Test',
      'Partial Discharge Test',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'crp',
    title: 'CRP Panels',
    icon: Power,
    content: [
      'Relay Configuration Checks',
      'Scheme Checks',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'gen',
    title: 'Generators & Motors',
    icon: Cpu,
    content: [
      'Tan Delta & WRM Test',
      'RSO of Rotor',
      'Partial Discharge Test',
      'Insulation Resistance Test'
    ]
  }
];

export default function TestingCommissioning() {
  const { openModal } = useQuoteModal();

  return (
    <section id="testing" className="py-24 bg-white relative overflow-hidden">
      {/* Technical Blueprint Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E88E5_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Technical Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-primary-dark mb-6"
            >
              Testing & <span className="text-primary">Commissioning</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gray-500 text-lg border-l-4 border-accent pl-6"
            >
              Precision diagnostic services for high-voltage industrial infrastructure up to 765kV, ensuring safety and peak performance.
            </motion.p>
          </div>
          <div className="hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2 text-primary font-mono text-sm"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>SYSTEM_READY: 765kV_COMPLIANT</span>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testingData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 0.05}
              direction="up"
              className={`group relative bg-neutral-light/50 border border-gray-100 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col ${
                item.isFeatured ? 'lg:col-span-2 lg:flex-row gap-8' : ''
              }`}
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className={item.isFeatured ? 'lg:w-1/2' : ''}
              >
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500"
                  >
                    <item.icon size={28} />
                  </motion.div>
                  <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
                    Ref: GE_TS_{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                {!item.isFeatured && (
                  <ul className="space-y-3 mb-6">
                    {(item.content as string[]).map((test, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.05) }}
                        className="flex items-center text-gray-500 text-sm font-medium"
                      >
                        <ChevronRight size={14} className="text-accent mr-2 shrink-0" />
                        {test}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>

              {item.isFeatured && (
                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Object.entries(item.content).map(([category, tests], i) => (
                    <div key={i}>
                      <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-4">
                        {category}
                      </h4>
                      <ul className="space-y-2">
                        {(tests as string[]).map((test, j) => (
                          <motion.li 
                            key={j} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (j * 0.05) }}
                            className="flex items-center text-gray-500 text-xs font-bold"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                            {test}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100/50">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center">
                  Status: <span className="text-green-500 ml-1 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse" />
                    Active
                  </span>
                </span>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-primary font-bold text-xs flex items-center"
                >
                  Full Spec <ChevronRight size={14} className="ml-1" />
                </motion.button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA for Testing */}
        <ScrollReveal direction="up" className="mt-16 p-8 bg-primary-dark rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
            >
              <Shield size={32} />
            </motion.div>
            <div>
              <h4 className="text-xl font-bold">Need Specialized Testing?</h4>
              <p className="text-gray-400 text-sm">We provide customized testing protocols for unique industrial requirements.</p>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(242, 125, 38, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="bg-white text-primary-dark hover:bg-accent hover:text-white px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap"
          >
            Request Technical Audit
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
}
