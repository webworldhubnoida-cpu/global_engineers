import { motion } from 'motion/react';
import { Zap, Activity, Cable, Cpu, ArrowRight, Shield, Settings, Users, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const services = [
  {
    title: 'Power Transformer Services',
    icon: Zap,
        image: 'https://media.istockphoto.com/id/471855043/photo/transformer-station-and-the-high-voltage-electric-pole.jpg?s=170667a&w=0&k=20&c=-tVc1h-3yo7DurX6uDEEHuXJgdRTCAoo38TwHacGFiM=',

    desc: 'End-to-end solutions for power transformers up to 765 kV, ensuring optimal performance and longevity.',
    items: [
      'Erection & Installation (Up to 765 kV)',
      'Assembly of Accessories (Radiators, Bushings, OLTC)',
      'Oil Filtration, Vacuuming & Filling',
      'Pre-Commissioning & Testing',
      'Alignment, Leveling & Safety Checks'
    ]
  },
  {
    title: 'Switchyard & Substation',
    icon: Activity,
    image: 'https://tse3.mm.bing.net/th/id/OIP.zbr454wiXOOLG0BechfYkQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Comprehensive erection and commissioning of switchyard equipment for high-voltage systems.',
    items: [
      'Erection of Equipment up to 765 kV',
      'Testing & Commissioning of HV / EHV / UHV Systems',
      'Circuit Breaker, CT, PT, CVT Testing',
      'Lightning Arrestor & Isolator Testing'
    ]
  },
  {
    title: 'Testing Services',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    desc: 'Precision diagnostic testing for all critical electrical infrastructure using advanced equipment.',
    items: [
      'Circuit Breaker DCRM & Timing Tests',
      'Tan Delta & SFRA Testing',
      'Relay Configuration & Scheme Checks',
      'Transformer Winding Resistance (WRM)'
    ]
  },
  {
    title: 'Cable & Panel Testing',
    icon: Cable,
    image: 'https://tse3.mm.bing.net/th/id/OIP.2VX2C3hLD9x3hfrJSkOaKAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Specialized testing for HT/LT cables and industrial control panels to ensure system integrity.',
    items: [
      'HT/LT Cable Testing (Hi-Pot, VLF, PD)',
      '33kV Panel Testing & Commissioning',
      'Control & Relay Panel (CRP) Checks',
      'Insulation Resistance (IR) Testing'
    ]
  }
];

export default function ServicesPage() {
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
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-accent pl-6">
            Delivering end-to-end electrical solutions across India with a focus on quality, safety, and technical precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-neutral-light rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl">
                    <service.icon size={32} />
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700 font-medium">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto">
                    <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all flex items-center group/btn">
                      Learn More <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" size={18} />
                    </button>
                    <span className="text-4xl font-black text-gray-100 group-hover:text-primary/10 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Better */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">What We Do Better</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our competitive edge lies in our technical precision and operational excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Safety & Compliance', desc: 'Strict adherence to Govt. regulations and international safety standards in every commissioning project.' },
              { icon: Users, title: 'Skilled Manpower', desc: 'A team of highly qualified engineers and technicians with years of experience in high-voltage systems.' },
              { icon: Globe, title: 'Pan India Presence', desc: 'Capable of mobilizing resources and executing complex electrical projects in any geographical location in India.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                  <item.icon size={40} />
                </div>
                <h4 className="text-2xl font-bold text-primary-dark mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
