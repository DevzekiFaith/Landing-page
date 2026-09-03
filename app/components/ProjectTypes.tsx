'use client';

import { motion } from 'framer-motion';
import { MAIN_WEBSITE_URL, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

const projectTypes = [
  { title: 'FAMILY HOMES', description: 'Bungalows, duplexes and family residences planned around practical living and long-term comfort.', tag: 'Residential' },
  { title: 'LUXURY RESIDENCES', description: 'High-end custom homes designed around privacy, light, comfort and distinct architectural character.', tag: 'Premium' },
  { title: 'DUPLEXES & BUNGALOWS', description: 'Efficient contemporary designs tailored to site dimensions, climate and family requirements.', tag: 'Single & Multi-Level' },
  { title: 'APARTMENTS', description: 'Multi-storey residential developments planned for functionality, natural ventilation and aesthetics.', tag: 'Multi-Unit' },
  { title: 'INVESTMENT DEVELOPMENTS', description: 'Rental property developments designed with long-term yield and market appeal in mind.', tag: 'Investment' },
  { title: 'RESIDENTIAL MASTERPLANS', description: 'Comprehensive planning for larger compounds, family estates and multi-unit land developments.', tag: 'Large Scale' },
  { title: 'COMMERCIAL / SPECIAL PROJECTS', description: 'For clients with unique spatial, commercial or mixed-use development requirements.', tag: 'Specialised' },
];

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE_CUBIC } },
};

export default function ProjectTypes() {
  return (
    <section className="section-py bg-[#fafafa]" id="what-we-design">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-14 max-w-xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_CUBIC }}
        >
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Design Scope</span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717]">What are you planning to build?</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projectTypes.map((type) => (
            <motion.div key={type.title} variants={cardVariant}>
              <motion.div
                className="card-feature rounded-2xl h-full flex flex-col justify-between group"
                whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#171717] bg-[#f4f4f5] px-2.5 py-1 rounded-md">
                      {type.tag}
                    </span>
                    <motion.span
                      className="text-[#d4d4d4] text-lg"
                      whileHover={{ color: '#171717', x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </div>
                  <h3 className="text-base font-bold text-[#171717] mb-3 tracking-wider">{type.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{type.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href={MAIN_WEBSITE_URL} target="_blank" rel="noopener noreferrer"
            onClick={() => trackClick('project_types_explore')}
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
          >
            Explore Our Services on Main Website <ExternalLinkIcon size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
