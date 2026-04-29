import React from 'react';
import { motion } from 'motion/react';

const Map = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8837130635114!2d78.36684337535564!3d27.91715177606362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974c7a7dfa16dcb%3A0xe819d86856a09a72!2sThe+Global+Engineers+Aligarh!5e0!3m2!1sen!2sin!4v1714429000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="The Global Engineers Aligarh Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
