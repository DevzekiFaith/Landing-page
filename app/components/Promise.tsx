'use client';

import ScrollReveal from './ScrollReveal';
import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

export default function Promise() {
  return (
    <section
      className="relative overflow-hidden bg-[#1a1a1a] section-py"
      aria-label="Brand promise section"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(250,249,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,247,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Copper accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#b5784e]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left — large statement */}
          <ScrollReveal>
            <div className="mb-12 lg:mb-0">
              <h2 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-8">
                YOUR LAND IS
                <br />
                IN NIGERIA.
                <br />
                <span className="text-[#b5784e]">YOUR ARCHITECT</span>
                <br />
                CAN BE TOO.
              </h2>
              <div className="w-16 h-1 bg-[#b5784e] mb-8" />
            </div>
          </ScrollReveal>

          {/* Right — copy + Hybrid CTAs */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                You don&apos;t need to be in Nigeria every week to begin designing your property.
              </p>
              <p className="text-base text-white/60 leading-relaxed mb-8">
                Whether you&apos;re planning a family home, investment property, retirement residence, rental development or a larger residential project, Elevation Studio can work with you remotely while remaining locally grounded in Nigeria.
              </p>
              <p className="text-base text-white/60 leading-relaxed mb-10">
                Whether you live in London, Manchester, Toronto, Houston, Birmingham, Accra, Dubai or anywhere else — start your project conversation directly with our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('promise_primary_whatsapp')}
                  className="btn-copper flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] border-[#25D366]"
                  id="promise-cta-primary"
                >
                  <WhatsAppIcon size={18} />
                  Discuss Project on WhatsApp
                </a>

                <a
                  href={MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('promise_secondary_main_site')}
                  className="btn-outline flex items-center justify-center gap-2"
                  id="promise-cta-secondary"
                >
                  Visit Main Website
                  <ExternalLinkIcon size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
