import { motion } from 'motion/react';
import { Settings, Users, Lightbulb, Award } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'Advanced Equipment',
    desc: 'We use advanced calibrated testing equipment for maximum precision.'
  },
  {
    icon: Users,
    title: 'Expert Engineers',
    desc: 'Highly skilled & experienced engineers dedicated to your projects.'
  },
  {
    icon: Lightbulb,
    title: 'Custom Solutions',
    desc: 'Tailored electrical solutions designed for your specific industrial needs.'
  },
  {
    icon: Award,
    title: 'Quality Standards',
    desc: 'Strict adherence to ISO 9001:2015 and safety compliance protocols.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-primary-dark"
          >
            What We Do Better
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-accent transition-all transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
