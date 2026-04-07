import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Activity, Shield, Layers, Radio, Settings, Power, Cable, Cpu, Box, ChevronDown, ChevronUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const testingData = [
  {
    id: 'transformer',
    title: 'Power Transformer Testing',
    icon: Zap,
    sections: [
      {
        subtitle: 'Pre-Erection Tests',
        items: [
          'Tan Delta Test of Bushing',
          'Turret CT Testing',
          'Ratio of Turret CT',
          'Polarity of Turret CT',
          'Winding Resistance of Turret CT',
          'Insulation Resistance Test of Turret CT & Core Frame'
        ]
      },
      {
        subtitle: 'Pre-Commissioning Tests',
        items: [
          'SFRA Test',
          'Tan Delta Test of Bushing & Winding',
          'Magnetic Core Balance Test',
          'Magnetic Current Test',
          'Short Circuit Impedance Test',
          'Vector Group Test',
          'WRM Test',
          'Voltage Ratio Test',
          'Insulation Resistance Test',
          'Polarization Index Test'
        ]
      }
    ]
  },
  {
    id: 'switchyard',
    title: 'Switchyard Equipment (Up to 765kV)',
    icon: Activity,
    items: [
      'DCRM (Dynamic Contact Resistance Measurement)',
      'Timing Test of Circuit Breaker',
      'Contact Resistance Measurement',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'ct',
    title: 'Current Transformer (CT)',
    icon: Radio,
    items: [
      'Tan Delta Test',
      'Ratio Test',
      'Polarity Test',
      'Continuity Test',
      'Winding Resistance Test',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'cvt',
    title: 'CVT',
    icon: Settings,
    items: [
      'Tan Delta Test',
      'Ratio Test',
      'Polarity Test',
      'Continuity Test',
      'Winding Resistance Test',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'pt',
    title: 'Potential Transformer (PT)',
    icon: Box,
    items: [
      'Ratio Test',
      'Polarity Test',
      'Continuity Test',
      'Winding Resistance Test',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'la',
    title: 'Lightning Arrestor',
    icon: Shield,
    items: [
      'Tan Delta Test',
      'Leakage Current Measurement',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'isolator',
    title: 'Isolators',
    icon: Layers,
    items: [
      'Contact Resistance Measurement',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'panels',
    title: '33kV HT Panels',
    icon: Box,
    items: [
      'Ratio Test of CT & PT',
      'Polarity Test',
      'Continuity Test',
      'Winding Resistance Test',
      'Timing Test of CB',
      'Contact Resistance Measurement',
      'Insulation Resistance Test',
      'Relay Configuration Checks'
    ]
  },
  {
    id: 'cables',
    title: 'HT & LT Cables',
    icon: Cable,
    items: [
      'Hi-Pot Test',
      'VLF Test',
      'Partial Discharge Test',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'crp',
    title: 'CRP Panels',
    icon: Power,
    items: [
      'Relay Configuration Checks',
      'Scheme Checks',
      'Insulation Resistance Test'
    ]
  },
  {
    id: 'gen',
    title: 'Generators & Motors',
    icon: Cpu,
    items: [
      'Tan Delta Test',
      'Winding Resistance Test',
      'RSO of Rotor',
      'Partial Discharge Test',
      'Insulation Resistance Test'
    ]
  }
];

export default function TestingPage() {
  const [openId, setOpenId] = useState<string | null>('transformer');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

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
            Testing & <span className="text-primary">Commissioning</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-accent pl-6">
            Comprehensive diagnostic testing services for high-voltage industrial equipment up to 765kV.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920')] bg-fixed bg-cover bg-center opacity-5" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="space-y-6">
            {testingData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-light rounded-[2rem] overflow-hidden shadow-md border border-gray-100"
              >
                <button
                  onClick={() => toggle(category.id)}
                  className={`w-full flex items-center justify-between p-8 text-left transition-all ${openId === category.id ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${openId === category.id ? 'bg-white text-primary' : 'bg-primary/10 text-primary'}`}>
                      <category.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  {openId === category.id ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                </button>

                <AnimatePresence>
                  {openId === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-10 bg-white">
                        {category.sections ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {category.sections.map((section, i) => (
                              <div key={i}>
                                <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-100 pb-2">
                                  {section.subtitle}
                                </h4>
                                <ul className="space-y-4">
                                  {section.items.map((item, j) => (
                                    <li key={j} className="flex items-start text-gray-600 font-medium">
                                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.items?.map((item, i) => (
                              <div key={i} className="flex items-center p-4 bg-neutral-light rounded-xl border border-gray-100">
                                <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                                <span className="text-gray-700 font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
