import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const images = Array.from({ length: 47 }, (_, i) => ({
  url: `/gallery/g${i + 1}.jpeg`,
  title: `Project Site ${i + 1}`,
  category: i % 4 === 0 ? 'Erection' : i % 4 === 1 ? 'Testing' : i % 4 === 2 ? 'Commissioning' : 'Maintenance'
}));

const categories = ['All', 'Erection', 'Testing', 'Commissioning', 'Maintenance'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

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
            Project <span className="text-primary">Gallery</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl border-l-4 border-accent pl-6">
            A visual showcase of our technical excellence and project execution across India.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-neutral-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] cursor-pointer shadow-xl"
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
                    <h4 className="text-white text-2xl font-bold flex items-center justify-between">
                      {img.title}
                      <ExternalLink size={24} />
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-accent transition-colors">
              <X size={48} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
