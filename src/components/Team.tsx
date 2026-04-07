import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const team = [
  { name: 'Anurag Mishra', role: 'Maintenance Head', image: 'https://i.pinimg.com/originals/46/20/81/462081fa0902590e3b03f3cbcaecfafb.jpg' },
  { name: 'Amit Saini', role: 'Maintenance Coordinator', image: 'https://tse4.mm.bing.net/th/id/OIP.-04fR3mIXLxgreXy9bXrpQAAAA?w=295&h=354&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Kshitij Sirohi', role: 'Maintenance Supervisor', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Khalil Khan', role: 'Testing Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Umar Mustfa', role: 'Testing Engineer', image: '/gallery/umar.png' },
];

export default function Team() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Experts</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The dedicated professionals behind our successful electrical commissioning projects.</p>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          animate={{ x: [0, -100 * team.length] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex space-x-8 w-max px-4"
        >
          {[...team, ...team].map((member, index) => (
            <div
              key={index}
              className="group w-[300px] shrink-0"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4] shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-primary-dark mb-1">{member.name}</h4>
                <p className="text-gray-500 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
