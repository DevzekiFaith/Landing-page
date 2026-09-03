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
      className="relative overflow-hidden bg-[#141312] text-white section-py"
      aria-label="Brand promise section"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left — large statement */}
          <ScrollReveal>
            <div className="mb-12 lg:mb-0">
              <h2 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6">
                YOUR LAND IS
                <br />
                IN NIGERIA.
                <br />
                <span className="text-white/60">YOUR ARCHITECT</span>
                <br />
                CAN BE TOO.
              </h2>
            </div>
          </ScrollReveal>

          {/* Right — copy + Offerings + CTAs */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-lg text-white/90 leading-relaxed mb-6 font-medium">
                Whether you are in London, Manchester, Toronto, Houston, Dubai or elsewhere, you can begin your architectural project in Nigeria without making a trip home just to start the design process.
              </p>

              {/* Location chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['London', 'Manchester', 'Houston', 'Toronto', 'Dubai', 'Atlanta', 'Europe'].map((city) => (
                  <span key={city} className="text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90 px-3 py-1.5 rounded-full border border-white/15">
                    {city}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 border-y border-white/15 py-6">
                {[
                  'Remote Consultation',
                  'Professional Architectural Design',
                  '3D Visualisation',
                  'Structured Reviews',
                  'Clear Project Milestones',
                  'Local Grounded Expertise',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('promise_whatsapp_start')}
                  className="btn-whatsapp flex items-center justify-center gap-2"
                  id="promise-cta-primary"
                >
                  <WhatsAppIcon size={18} />
                  Start Project on WhatsApp
                </a>

                <a
                  href={MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('promise_explore_studio')}
                  className="btn-outline flex items-center justify-center gap-2"
                  id="promise-cta-secondary"
                >
                  Explore Elevation Studio
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
