'use client';

import ScrollReveal from './ScrollReveal';
import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] section-py" id="ready-to-talk">
      {/* Copper top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#b5784e]" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(250,249,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,247,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-8">
            Ready to Begin?
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Ready to talk about your project?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4 max-w-2xl mx-auto">
            You don&apos;t need to have everything figured out before you contact us.
          </p>
          <p className="text-base text-white/50 leading-relaxed mb-12 max-w-xl mx-auto">
            If you already own land, have a survey, have sketches or simply have an idea — start the conversation directly with our design team.
          </p>

          {/* Hybrid CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('final_cta_primary_whatsapp')}
              className="btn-copper flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] border-[#25D366]"
              id="final-cta-primary"
            >
              <WhatsAppIcon size={18} />
              Start Project on WhatsApp
            </a>

            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('final_cta_secondary_main_site')}
              className="btn-outline flex items-center justify-center gap-2"
              id="final-cta-secondary"
            >
              Explore Main Website
              <ExternalLinkIcon size={16} />
            </a>
          </div>

          <p className="text-xs text-white/40 tracking-wider uppercase">
            Fast Response • Direct Architect Consultation • No Obligation
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
