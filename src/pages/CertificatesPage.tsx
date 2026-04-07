import { motion } from 'motion/react';
import { FileText, Download, Eye, Award, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useQuoteModal } from '../context/QuoteContext';

const certificates = [
  {
    id: 'isa',
    title: 'ISA Certificate',
    description: 'International Safety Association certification for electrical standards and industrial safety.',
    icon: Award,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/012/752/722/small_2x/iso-certification-of-standards-quality-control-assurance-business-technology-concept-businessman-touching-virtual-screen-iso-certification-icon-to-guarantee-photo.jpg',
    downloadUrl: '/gallery/isa.pdf',
  },
  {
    id: 'gst',
    title: 'GST Registration',
    description: 'Goods and Services Tax registration certificate issued by the Government of India.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/gallery/gst.pdf',
  },
  {
    id: 'udyam',
    title: 'Udyam Registration',
    description: 'MSME registration certificate for Global Engineers as a recognized enterprise.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '/gallery/udyam.pdf',
  },
];

export default function CertificatesPage() {
  const { openModal } = useQuoteModal();

  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-neutral-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Compliance & Trust
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-primary-dark mb-6"
            >
              Our Certificates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-dark/70 max-w-2xl mx-auto text-lg"
            >
              We maintain full legal compliance and quality standards to ensure the highest level of service for our industrial and commercial clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-neutral-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a 
                      href={cert.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-primary-dark p-3 rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg"
                    >
                      <Eye size={20} />
                    </a>
                    <a 
                      href={cert.downloadUrl} 
                      download
                      className="bg-accent text-white p-3 rounded-full hover:bg-white hover:text-accent transition-colors shadow-lg"
                    >
                      <Download size={20} />
                    </a>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-primary">
                    <cert.icon size={24} />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Verified</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{cert.title}</h3>
                  <p className="text-neutral-dark/60 text-sm mb-8 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={cert.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary-dark text-white py-3 rounded-xl font-bold text-sm hover:bg-primary transition-colors text-center"
                    >
                      <Eye size={16} />
                      View
                    </a>
                    <a 
                      href={cert.downloadUrl}
                      download
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-primary-dark text-primary-dark py-3 rounded-xl font-bold text-sm hover:bg-primary-dark hover:text-white transition-all text-center"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 p-8 bg-primary-dark rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-2">Need more documentation?</h3>
              <p className="text-white/60">If you require specific compliance documents or vendor registration forms, please contact our administrative team.</p>
            </div>
            <button 
              onClick={openModal}
              className="bg-accent hover:bg-white hover:text-accent text-white px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap"
            >
              Contact Support
            </button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
