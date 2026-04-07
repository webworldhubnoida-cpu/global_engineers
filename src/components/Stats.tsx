import { motion } from 'motion/react';
import { Zap, Shield, Clock, Globe } from 'lucide-react';
import Counter from './animations/Counter';

const stats = [
  { icon: Zap, label: 'HT/LT Systems', value: 765, suffix: 'kV' },
  { icon: Shield, label: 'Safety Record', value: 100, suffix: '%' },
  { icon: Clock, label: 'On-Time Delivery', value: 99, suffix: '%' },
  { icon: Globe, label: 'Service Network', value: 'Pan India', isText: true },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary-dark text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-300 shadow-2xl"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform -rotate-3"
              >
                <stat.icon size={36} className="text-white" />
              </motion.div>
              <h3 className="text-4xl font-bold mb-2 text-white tracking-tight">
                {stat.isText ? (
                  stat.value
                ) : (
                  <Counter value={stat.value as number} suffix={stat.suffix} />
                )}
              </h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
