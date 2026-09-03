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
    <section className="relative overflow-hidden bg-[#fafafa] section-py" id="ready-to-talk">
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-10 lg:p-14 shadow-sm border border-[#f0f0f0]">
            <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Ready to Begin?
            </span>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-[#171717] mb-6">
              READY TO TALK ABOUT YOUR PROJECT?
            </h2>
            <p className="text-lg text-[#171717] leading-relaxed mb-4 max-w-2xl mx-auto font-medium">
              You don&apos;t need to have everything figured out before you contact us.
            </p>
            <p className="text-base text-[#737373] leading-relaxed mb-10 max-w-xl mx-auto">
              If you already own land, have a survey, have sketches, or simply have an idea, start the conversation directly with our design team.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('final_cta_whatsapp_primary')}
                className="btn-whatsapp flex items-center justify-center gap-2.5"
                id="final-cta-primary"
              >
                <WhatsAppIcon size={18} />
                Start Project on WhatsApp
              </a>

              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('final_cta_explore_studio')}
                className="btn-outline-dark flex items-center justify-center gap-2"
                id="final-cta-secondary"
              >
                Explore Main Studio Website
                <ExternalLinkIcon size={16} />
              </a>
            </div>

            <p className="text-xs text-[#a3a3a3] tracking-wider uppercase font-medium">
              Direct Architect Consultation • Fast Response • No Obligation
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
