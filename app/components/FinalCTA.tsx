'use client';

import { motion } from 'framer-motion';
import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] section-py" id="ready-to-talk">
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE_CUBIC }}
        >
          <div className="bg-white rounded-2xl p-10 lg:p-14 shadow-sm border border-[#f0f0f0]">
            <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Ready to Begin?
            </span>
            <motion.h2
              className="heading-display text-4xl sm:text-5xl lg:text-6xl text-[#171717] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.65, ease: EASE_CUBIC }}
            >
              READY TO TALK ABOUT YOUR PROJECT?
            </motion.h2>
            <motion.p
              className="text-lg text-[#171717] leading-relaxed mb-4 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              You don&apos;t need to have everything figured out before you contact us.
            </motion.p>
            <motion.p
              className="text-base text-[#737373] leading-relaxed mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              If you already own land, have a survey, have sketches, or simply have an idea, start the conversation directly with our design team.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                onClick={() => trackClick('final_cta_whatsapp')}
                className="btn-whatsapp flex items-center justify-center gap-2.5"
                id="final-cta-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon size={18} /> Start Project on WhatsApp
              </motion.a>
              <motion.a
                href={MAIN_WEBSITE_URL} target="_blank" rel="noopener noreferrer"
                onClick={() => trackClick('final_cta_studio')}
                className="btn-outline-dark flex items-center justify-center gap-2"
                id="final-cta-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Main Studio Website <ExternalLinkIcon size={16} />
              </motion.a>
            </motion.div>

            <p className="text-xs text-[#a3a3a3] tracking-wider uppercase font-medium">
              Direct Architect Consultation • Fast Response • No Obligation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
