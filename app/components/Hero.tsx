'use client';

import { motion } from 'framer-motion';
import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_CUBIC } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_CUBIC, delay: 0.2 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#141312]">
      {/* Background architectural image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-95"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=95&auto=format&fit=crop')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-3d pointer-events-none opacity-60" />

      {/* Ambient glow */}
      <motion.div
        className="absolute -top-32 right-12 w-[30rem] h-[30rem] bg-white/5 rounded-full filter blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 text-white/90 text-xs font-semibold tracking-[0.25em] uppercase border border-white/20 px-4 py-1.5 glass-card-dark rounded-full">
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#25D366]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                Elevation Studio — Diaspora Architecture Portal
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="heading-display text-4xl sm:text-6xl lg:text-7xl text-white mb-6">
              BUILD IN NIGERIA.
              <br />
              <span className="text-white/60">FROM ANYWHERE.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/95 font-medium mb-3 leading-relaxed max-w-xl">
              Professional architectural design for clients living abroad who want to build, develop or invest in property in Nigeria — with a design process you can follow remotely.
            </motion.p>

            {/* Core Promise */}
            <motion.p variants={fadeUp} className="text-base lg:text-lg text-white/70 font-semibold mb-10 leading-relaxed max-w-lg italic">
              Your architect is on the ground. Your vision doesn&apos;t have to be.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('hero_primary_whatsapp')}
                className="btn-whatsapp flex items-center justify-center gap-2.5"
                id="hero-cta-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon size={18} />
                Start Project on WhatsApp
              </motion.a>

              <motion.a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('hero_secondary_main_site')}
                className="btn-outline flex items-center justify-center gap-2"
                id="hero-cta-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Elevation Studio
                <ExternalLinkIcon size={16} />
              </motion.a>
            </motion.div>

            {/* Reassurance Features */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/10">
              {[
                'Remote consultations',
                '3D design reviews',
                'Structured project milestones',
                'Nigeria-based professional team',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-white/70 text-xs tracking-wide font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Glassmorphic Feature Card */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="glass-card-dark p-3 rounded-2xl border border-white/15 shadow-2xl"
              whileHover={{ y: -6, rotate: -0.5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=95&auto=format&fit=crop"
                  alt="Elevation Studio Contemporary Residence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-80" />

                {/* Floating Glass Badge */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 glass-card-dark p-4 rounded-xl border border-white/20"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-white/70">
                      Featured Architectural Concept
                    </span>
                    <motion.span
                      className="w-2 h-2 rounded-full bg-[#25D366]"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-white">Contemporary Villa — Lagos State</p>
                  <p className="text-xs text-white/60 mt-1">Full 3D Visualisation &amp; Remote Design Approval</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#141312]/70 backdrop-blur-md py-3 px-6 hidden sm:block z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xs text-white/40 tracking-wider font-medium">
            Elevation Studio — Diaspora Architecture Portal
          </span>
          <div className="flex items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackClick('hero_footer_whatsapp')} className="text-xs text-[#25D366] hover:text-[#1da851] transition-colors flex items-center gap-1.5 font-semibold">
              <WhatsAppIcon size={14} />
              WhatsApp (+2349119059859)
            </a>
            <a href={MAIN_WEBSITE_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackClick('hero_footer_main')} className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
              www.elevationstudiong.com.ng
              <ExternalLinkIcon size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
