'use client';

import { motion } from 'framer-motion';
import { MAIN_WEBSITE_URL, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

const proofProjects = [
  {
    title: 'Contemporary Luxury Villa',
    location: 'Lagos State',
    category: 'Featured Residence',
    imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=95&auto=format&fit=crop',
  },
  {
    title: 'Luxury Duplex Compound',
    location: 'Abuja FCT',
    category: 'Multi-Level',
    imgUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=95&auto=format&fit=crop',
  },
  {
    title: 'Residential Development',
    location: 'Ogun State',
    category: 'Investment Property',
    imgUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=95&auto=format&fit=crop',
  },
  {
    title: 'Architectural Masterplan',
    location: 'Lagos Compound',
    category: 'Compound Masterplan',
    imgUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=95&auto=format&fit=crop',
  },
];

const headingVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_CUBIC } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE_CUBIC } },
};

export default function VisualProof() {
  return (
    <section className="section-py bg-[#ffffff]" id="visual-proof">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-14 max-w-3xl"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Design Visibility
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717] mb-6">
            See what you could build before you build it.
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            From concept to detailed architectural design and 3D visualisation, we help you understand your proposed property before construction begins.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Featured Large Item */}
          <motion.div className="md:col-span-7" variants={cardVariant}>
            <motion.div
              className="group overflow-hidden rounded-2xl bg-[#fafafa] relative aspect-[16/11] shadow-sm"
              whileHover={{ scale: 1.01, boxShadow: '0 20px 50px -15px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={proofProjects[0].imgUrl}
                alt={proofProjects[0].title}
                loading="eager"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 z-10">
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {proofProjects[0].category}
                </span>
              </div>

              <motion.div
                className="absolute bottom-6 left-6 right-6 z-10 text-white"
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="text-[0.7rem] font-semibold tracking-wider uppercase text-white/70 block mb-1">
                  {proofProjects[0].location}
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-1">{proofProjects[0].title}</h3>
                <p className="text-xs text-white/70">Full 3D Architectural Visualisation &amp; Remote Design Review</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stacked Right Column */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {proofProjects.slice(1).map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
              >
                <motion.div
                  className="group overflow-hidden rounded-2xl bg-[#fafafa] shadow-sm flex items-center h-full"
                  whileHover={{ scale: 1.02, boxShadow: '0 12px 30px -10px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-2/5 aspect-square overflow-hidden bg-black flex-shrink-0">
                    <motion.img
                      src={item.imgUrl}
                      alt={item.title}
                      loading="eager"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-5 w-3/5">
                    <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#737373] block mb-1">
                      {item.location}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-[#171717] mb-1">{item.title}</h3>
                    <p className="text-xs text-[#737373]">{item.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href={MAIN_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('visual_proof_view_more_projects')}
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View More Projects on Main Site
            <ExternalLinkIcon size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
