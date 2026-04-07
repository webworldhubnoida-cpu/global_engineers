import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Owner() {
  const owners = [
    {
      name: 'Ritulraj Yadav',
      role: 'Managing Director',
      image: 'https://tse2.mm.bing.net/th/id/OIP.lRgafANqCNhXehJ0v5gZ0wHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
      quote: "At Global Engineers, our mission has always been to provide India with the most reliable and advanced electrical solutions. Since our inception in 2020, we have focused on safety, quality, and technical precision."
    },
    {
      name: 'Hamza Mustafa',
      role: 'Managing Director & Founder',
      image: '/gallery/hamza.png',
      quote: "We take pride in our highly skilled team of engineers who work tirelessly to ensure every project, from HT systems to complex switchyards, is commissioned with zero compromise on standards."
    }
  ];

  return (
    <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Our Leadership
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Driving technical excellence and innovation in the electrical engineering industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {owners.map((owner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-white/10 hover:border-accent/50 transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent text-white p-4 rounded-xl shadow-xl">
                    <Quote size={24} />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-3xl font-bold text-white">{owner.name}</h3>
                  <p className="text-accent font-medium uppercase tracking-widest text-sm">{owner.role}</p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                  "{owner.quote}"
                </p>

               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
