'use client';

import { motion } from 'framer-motion';
import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

const cities = ['London', 'Manchester', 'Houston', 'Toronto', 'Dubai', 'Atlanta', 'Europe'];
const offerings = [
  'Remote Consultation', 'Professional Architectural Design',
  '3D Visualisation', 'Structured Reviews',
  'Clear Project Milestones', 'Local Grounded Expertise',
];

export default function Promise() {
  return (
    <section className="relative overflow-hidden bg-[#141312] text-white section-py">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE_CUBIC }}
          >
            <h2 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6">
              YOUR LAND IS
              <br />IN NIGERIA.
              <br />
              <motion.span
                className="inline-block text-white/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7, ease: EASE_CUBIC }}
              >
                YOUR ARCHITECT
              </motion.span>
              <br />CAN BE TOO.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_CUBIC }}
          >
            <p className="text-lg text-white/90 leading-relaxed mb-6 font-medium">
              Whether you are in London, Manchester, Toronto, Houston, Dubai or elsewhere, you can begin your architectural project in Nigeria without making a trip home.
            </p>

            {/* City chips */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
            >
              {cities.map((city) => (
                <motion.span
                  key={city}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } } }}
                  className="text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 px-3 py-1.5 rounded-full border border-white/15"
                >
                  {city}
                </motion.span>
              ))}
            </motion.div>

            {/* Offerings */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 border-y border-white/15 py-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {offerings.map((item) => (
                <motion.div
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                  className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-white/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                onClick={() => trackClick('promise_whatsapp')}
                className="btn-whatsapp flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon size={18} /> Start Project on WhatsApp
              </motion.a>
              <motion.a
                href={MAIN_WEBSITE_URL} target="_blank" rel="noopener noreferrer"
                onClick={() => trackClick('promise_studio')}
                className="btn-outline flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              >
                Explore Elevation Studio <ExternalLinkIcon size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
