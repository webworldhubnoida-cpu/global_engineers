import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              <span>Established 2020</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-8 leading-tight">
              Powering India with <span className="text-primary">Precision</span> & Safety
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Global Engineers is a Govt. Approved Electrical Licensed Contractor and MSME-registered organization with ISO 9001:2015 certification. We specialize in delivering end-to-end electrical solutions across India, from supply to commissioning of HT and LT systems.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                { title: 'ISO 9001:2015 Certified', icon: Award },
                { title: 'Govt. Approved Contractor', icon: ShieldCheck },
                { title: 'Safety First Compliance', icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-neutral-light rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm mr-4">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-primary-dark">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
              <div>
                <h4 className="text-3xl font-black text-primary">5+</h4>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">Years of Trust</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <h4 className="text-3xl font-black text-primary">500+</h4>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 h-[600px]">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-8 row-span-2 relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://media.istockphoto.com/id/1405248489/photo/high-voltage-power-transformer-substation.jpg?s=170667a&w=0&k=20&c=I83PR9BVtThJb6mlSR8LGcxKdUgrHMqg5c1WZlEffp0="
                alt="Industrial Site"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">On-Site Excellence</p>
                <h4 className="text-2xl font-bold"></h4>
              </div>
            </motion.div>

            {/* Top Right Small Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-4 relative rounded-[2rem] overflow-hidden shadow-xl group"
            >
              <img
                src="https://wallpaperaccess.com/full/12046464.jpg"
                alt="Engineer Working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
            </motion.div>

            {/* Bottom Right Small Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-4 relative rounded-[2rem] overflow-hidden shadow-xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600"
                alt="Electrical Equipment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20">
                <Zap className="text-accent" size={20} />
              </div>
            </motion.div>

            {/* Experience Badge Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-accent text-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block"
            >
              <p className="text-5xl font-black mb-1">2020</p>
              <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">Year Established</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
