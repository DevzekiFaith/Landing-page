'use client';

import { motion } from 'framer-motion';

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

const pillars = [
  { title: 'Remote Consultations', description: 'Discuss your project without needing to be physically present in Nigeria. Video calls, structured updates and digital design presentations keep you connected at every stage.' },
  { title: '3D Visualisation', description: 'Understand what your proposed property will look and feel like before construction. You make decisions based on architectural clarity, not assumptions.' },
  { title: 'Structured Milestones', description: 'Know what stage your design is at and what happens next. A defined process means you are never left guessing about progress or waiting without context.' },
  { title: 'Local Expertise', description: 'Work with a Nigeria-based design team familiar with local site conditions, climate, lifestyle and the realities of the Nigerian built environment.' },
];

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_CUBIC } },
};

export default function Trust() {
  return (
    <section className="section-py bg-[#fafafa]" id="why-trust-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_CUBIC }}
        >
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Diaspora Peace of Mind</span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717] mb-6">
            Thousands of kilometres shouldn&apos;t mean less control.
          </h2>
        </motion.div>

        {/* Trust Callout */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-8 shadow-sm">
            <p className="text-[#737373] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Our Professional Commitment</p>
            <h3 className="text-xl lg:text-2xl font-bold text-[#171717] tracking-tight">
              A PROFESSIONAL PROCESS. CLEAR COMMUNICATION. BETTER VISIBILITY.
            </h3>
          </div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={cardVariant}>
              <motion.div
                className="bg-white border border-[#f0f0f0] rounded-2xl p-6 h-full shadow-sm"
                whileHover={{ y: -6, borderColor: '#171717', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.07)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="w-8 h-0.5 bg-[#171717] block mb-4" />
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#171717] mb-3">{pillar.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{pillar.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
