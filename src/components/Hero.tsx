import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'motion/react';
import { useQuoteModal } from '../context/QuoteContext';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1920',
    title: 'Powering India with Advanced Electrical Solutions',
    subtitle: 'Specializing in end-to-end electrical solutions across India since 2020.',
  },
  {
    image: 'https://besten.in/wp-content/uploads/2023/06/Story.png',
    title: 'Excellence in HT & LT Systems',
    subtitle: 'Govt. Approved Electrical Licensed Contractor and ISO 9001:2015 certified.',
  },
  {
    image: 'https://wallpaperbat.com/img/9699724-yes-electrical-wire-colors-do-matter.jpg',
    title: 'Safety, Quality & Timely Execution',
    subtitle: 'Committed to high standards and safety compliance in every project.',
  },
];

export default function Hero() {
  const { openModal } = useQuoteModal();

  return (
    <section id="home" className="relative h-[500px] md:h-[75vh] min-h-[450px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute " />
              
              <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 20px rgba(242, 125, 38, 0.4)",
                      backgroundColor: "#f27d26"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openModal}
                    className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl"
                  >
                    Get Quote
                  </motion.button>
                  <motion.a
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg"
                  >
                    Contact Us
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
