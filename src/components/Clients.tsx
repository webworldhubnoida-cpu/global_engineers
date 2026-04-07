import { motion } from 'motion/react';

const clients = [
  { name: 'Power Grid', logo: 'https://th.bing.com/th/id/OIP.ZkGBaqeYnRURp2PcuYzMPQHaJJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'UPPTCL', logo: 'https://tse2.mm.bing.net/th/id/OIP.r0yF5nMBc96hmms_S-E93QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'PTCUL', logo: 'https://tse4.mm.bing.net/th/id/OIP.FA1scG6q0C70U5r8neB8awAAAA?w=212&h=234&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'GETCO', logo: 'https://tse1.mm.bing.net/th/id/OIP.iwPh843XkuTxAblvPp1G-AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'ABB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1200px-ABB_logo.svg.png' },
  { name: 'Vedanta', logo: 'https://images.seeklogo.com/logo-png/34/1/vedanta-logo-png_seeklogo-345556.png' },
  { name: 'Transformers & Rectifiers', logo: 'https://storage.googleapis.com/assets.cdp.blinkx.in/Blinkx_Website/icons/transformers-rectifiers-india-ltd.png' },
   { name: 'TBEA', logo: 'https://th.bing.com/th/id/OIP.zMwfzthb_Ya102eZMuzqmQHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Toshiba', logo: 'https://tse1.mm.bing.net/th/id/OIP._iwK82N4MJVMmYXZQbCO1QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Atlanta Electricals', logo: 'https://th.bing.com/th/id/OIP.zvYUj5oq_XxSsJQLHlcCeAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Delhi Transco', logo: 'https://tse3.mm.bing.net/th/id/OIP.Wwu94K63gcmyLnEIu0e7xwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Tata Power', logo: 'https://tse1.mm.bing.net/th/id/OIP.i_81USDBatlFI5tPyNIs8QHaEb?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'NTPC', logo: 'https://th.bing.com/th/id/OIP.KmHDsyadFNKhpsQ7GnK9MgHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'MPPTCL', logo: 'https://tse3.mm.bing.net/th/id/OIP.u-BnKa0uiY97koW1qVXb1AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'TSTRANSCO', logo: 'https://th.bing.com/th/id/OIP.l2EEV8hVItgL3xcYVkv-mwHaFW?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Sterlite Power', logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9158d955887511.59971943da235.jpg' },
  { name: 'BHEL', logo: 'https://download.logo.wine/logo/Bharat_Heavy_Electricals_Limited/Bharat_Heavy_Electricals_Limited-Logo.wine.png' },
  { name: 'BEL', logo: 'https://static.vecteezy.com/system/resources/previews/020/477/218/non_2x/bel-flat-accounting-logo-design-on-white-background-bel-creative-initials-growth-graph-letter-logo-concept-bel-business-finance-logo-design-vector.jpg' },
];

export default function Clients() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4"
          >
            OUR <span className="text-accent">SATISFIED CLIENTS</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-xl italic text-gray-600 mb-2">"Well done is better than well said."</p>
            <p className="text-sm font-bold text-gray-500">—Ben Franklin</p>
            <div className="w-24 h-1 bg-accent mt-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center p-4 "
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 max-w-full object-contain"
                onError={(e) => {
                  // Fallback for broken logos
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f3f4f6&color=1e3a8a&size=128&bold=true`;
                }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
