import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import ScrollReveal from './animations/ScrollReveal';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const reviews = [
  {
    name: 'Industrial Power Corp',
    text: 'Global Engineers delivered our 765kV switchyard project ahead of schedule with impeccable safety standards. Highly recommended.',
    rating: 5
  },
  {
    name: 'National Grid Solutions',
    text: 'The technical expertise of their engineers during transformer commissioning was outstanding. Their testing equipment is top-notch.',
    rating: 5
  },
  {
    name: 'Apex Manufacturing',
    text: 'Reliable partners for HT cable testing. Their VLF and Partial Discharge tests helped us identify critical issues early.',
    rating: 4
  },
  {
    name: 'Metro Infrastructure',
    text: 'Excellent service for 33kV panel testing and relay configuration. Professional team and timely execution.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-neutral-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4 tracking-tight">What Our Clients Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Real feedback from our industrial partners across the country.</p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-20"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100"
                >
                  <div className="flex items-center space-x-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < review.rating ? "text-accent-yellow fill-accent-yellow" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <div className="relative mb-8">
                    <Quote size={60} className="text-primary/5 absolute -top-4 -left-4" />
                    <p className="text-gray-600 italic relative z-10 text-lg leading-relaxed">"{review.text}"</p>
                  </div>
                  <div className="mt-auto pt-8 border-t border-gray-50 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark text-lg">{review.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Industrial Client</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
