import { motion } from 'motion/react';
import { Zap, Activity, Cpu, Cable, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteContext';
import ScrollReveal from './animations/ScrollReveal';

const services = [
  {
    title: 'Power Transformer Services',
    icon: Zap,
    image: 'https://media.istockphoto.com/id/471855043/photo/transformer-station-and-the-high-voltage-electric-pole.jpg?s=170667a&w=0&k=20&c=-tVc1h-3yo7DurX6uDEEHuXJgdRTCAoo38TwHacGFiM=',
    items: [
      'Up to 765 kV Erection & Installation',
      'Assembly of Accessories (Radiators, Bushings, OLTC)',
      'Oil Filtration, Vacuuming & Filling',
      'Pre-Commissioning & Testing'
    ]
  },
  {
    title: 'Switchyard & Substation',
    icon: Activity,
    image: 'https://tse3.mm.bing.net/th/id/OIP.zbr454wiXOOLG0BechfYkQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
    items: [
      'Erection of Equipment up to 765 kV',
      'Testing & Commissioning of HV / EHV / UHV Systems',
      'Circuit Breaker, CT, PT, CVT Testing',
      'Lightning Arrestor & Isolator Testing'
    ]
  },
  {
    title: 'Cable & Panel Testing',
    icon: Cable,
    image: 'https://tse3.mm.bing.net/th/id/OIP.2VX2C3hLD9x3hfrJSkOaKAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    items: [
      'HT/LT Cable Testing (Hi-Pot, VLF, PD)',
      '33kV Panel Testing',
      'Control & Relay Panel Checks',
      'Relay Configuration Checks'
    ]
  },
  {
    title: 'Specialized Testing',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    items: [
      'SFRA Test & Tan Delta Test',
      'Magnetic Core Balance & Current Test',
      'Vector Group & WRM Test',
      'Polarization Index Test'
    ]
  }
];

export default function Services() {
  const { openModal } = useQuoteModal();

  return (
    <section id="services" className="py-24 bg-neutral-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Core Engineering Services</h2>
            <p className="text-gray-600 text-lg border-l-4 border-accent pl-6">We provide comprehensive electrical solutions from supply to commissioning of high-voltage systems across India.</p>
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            onClick={openModal}
            className="group text-primary font-bold flex items-center hover:text-accent transition-all"
          >
            Get a Custom Quote <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
          </motion.button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'right' : 'left'}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row border border-transparent hover:border-accent/20"
            >
              {/* Image Column */}
              <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="absolute top-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg"
                >
                  <service.icon size={24} />
                </motion.div>
              </div>

              {/* Content Column */}
              <div className="lg:w-3/5 p-8 md:p-10 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-primary/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-start text-gray-600 text-sm md:text-base"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-primary font-bold text-sm hover:text-accent transition-colors"
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </motion.button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
