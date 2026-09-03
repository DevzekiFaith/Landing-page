'use client';

import { motion } from 'framer-motion';
import { MAIN_WEBSITE_URL, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

const portfolioProjects = [
  { title: 'Modern Residential Architecture', subtitle: 'Exterior Visualisation', imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=95&auto=format&fit=crop' },
  { title: 'Luxury Family Residence', subtitle: 'Interior Spatial Planning', imgUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=95&auto=format&fit=crop' },
  { title: 'Contemporary Duplex', subtitle: 'Elevation & Material Direction', imgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=95&auto=format&fit=crop' },
];

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: EASE_CUBIC } },
};

export default function SecondPortfolio() {
  return (
    <section className="section-py bg-[#ffffff]" id="second-portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_CUBIC }}
        >
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Design Standards</span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717] mb-6">Good design should be visible.</h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Take a look at selected work showing our architectural character, spatial clarity, and render visual quality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {portfolioProjects.map((p) => (
            <motion.div key={p.title} variants={cardVariant}>
              <motion.div
                className="group overflow-hidden rounded-2xl bg-[#fafafa] shadow-sm"
                whileHover={{ y: -6, boxShadow: '0 24px 50px -15px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-black">
                  <motion.img
                    src={p.imgUrl} alt={p.title} loading="eager"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-base font-semibold text-[#171717] tracking-tight mb-1">{p.title}</h3>
                  <p className="text-xs text-[#737373] font-medium tracking-wider uppercase">{p.subtitle}</p>
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
            onClick={() => trackClick('second_portfolio_cta')}
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
          >
            See The Full Elevation Studio Portfolio <ExternalLinkIcon size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
