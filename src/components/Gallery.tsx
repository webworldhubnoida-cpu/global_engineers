import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';

const images = Array.from({ length: 6 }, (_, i) => ({
  url: `/gallery/g${i + 1}.jpeg`,
  title: `Project Site ${i + 1}`,
  category: i % 3 === 0 ? 'Erection' : i % 3 === 1 ? 'Testing' : 'Commissioning'
}));

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Visual Showcase
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4 tracking-tight">Project Gallery</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">A glimpse into our high-quality electrical engineering projects across India.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction="up"
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div 
                onClick={() => setSelectedImg(img)}
                className="w-full h-full relative"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-3 block">{img.category}</span>
                    <h4 className="text-white text-2xl font-bold flex items-center justify-between">
                      {img.title}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white"
                      >
                        <ZoomIn size={20} />
                      </motion.div>
                    </h4>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-primary-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-accent transition-colors z-[110]"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-2 block">{selectedImg.category}</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{selectedImg.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
