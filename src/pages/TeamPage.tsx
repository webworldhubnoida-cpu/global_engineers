import { motion } from 'motion/react';
import { Linkedin, Twitter, Quote } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const team = [
  { name: 'Anurag Mishra', role: 'Maintenance Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Amit Saini', role: 'Maintenance Coordinator', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Kshitij Sirohi', role: 'Maintenance Supervisor', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Khalil Khan', role: 'Testing Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Umar Mustfa', role: 'Testing Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
];

export default function TeamPage() {
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
            Our <span className="text-primary">Team</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-accent pl-6">
            The dedicated professionals behind our successful electrical commissioning projects.
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-dark mb-4">Our Leadership</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The visionaries behind Global Engineers, committed to technical excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {[
              {
                name: 'Umar Mustfa',
                role: 'Managing Director',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
                pdf: '/gallery/Umar-Owner.pdf',
                quote: "At Global Engineers, our mission has always been to provide India with the most reliable and advanced electrical solutions. We take pride in our highly skilled team of engineers who work tirelessly to ensure every project is commissioned with zero compromise on standards."
              },
              {
                name: 'Hamza Mustafa',
                role: 'Managing Director & Founder',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
                pdf: '/gallery/Hamza-Owner.pdf',
                quote: "Our growth since 2020 is a testament to our technical precision and the trust our clients place in us. We continue to innovate and lead the way in HT/LT systems across the country."
              }
            ].map((owner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-10">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl w-64 h-64 md:w-80 md:h-80 mx-auto">
                    <img 
                      src={owner.image} 
                      alt={owner.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-8 rounded-[2rem] shadow-2xl z-20">
                    <p className="text-4xl font-black mb-1">2020</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Established</p>
                  </div>
                </div>

                <div className="max-w-xl">
                  <Quote size={48} className="text-accent mb-6 opacity-30 mx-auto" />
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">{owner.name}</h3>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs mb-8">{owner.role}</p>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed italic mb-10">
                    <p>"{owner.quote}"</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a 
                      href={owner.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg"
                    >
                      View Profile (PDF)
                    </a>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">Our Core Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Expert engineers and managers driving technical excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[3rem] mb-8 aspect-[3/4] shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary-dark mb-1">{member.name}</h4>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
