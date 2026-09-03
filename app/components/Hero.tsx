'use client';

import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#141312]">
      {/* Background architectural image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-95 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=95&auto=format&fit=crop')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-3d pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column — Asymmetric Text & CTAs */}
          <div className="lg:col-span-7">
            {/* Diaspora Badge */}
            <div className="mb-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 text-white/90 text-xs font-semibold tracking-[0.25em] uppercase border border-white/20 px-4 py-1.5 glass-card-dark rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Elevation Studio — Diaspora Architecture Portal
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-display text-4xl sm:text-6xl lg:text-7xl text-white mb-6 animate-fade-up delay-100">
              BUILD IN NIGERIA.
              <br />
              <span className="text-white/70">FROM ANYWHERE.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white/95 font-medium mb-3 leading-relaxed max-w-xl animate-fade-up delay-200">
              Professional architectural design for clients living abroad who want to build, develop or invest in property in Nigeria — with a design process you can follow remotely.
            </p>

            {/* Core Promise Statement */}
            <p className="text-base lg:text-lg text-white/80 font-semibold mb-10 leading-relaxed max-w-lg animate-fade-up delay-300">
              Your architect is on the ground. Your vision doesn&apos;t have to be.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-400">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('hero_primary_whatsapp')}
                className="btn-whatsapp flex items-center justify-center gap-2.5"
                id="hero-cta-primary"
              >
                <WhatsAppIcon size={18} />
                Start Project on WhatsApp
              </a>

              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('hero_secondary_main_site')}
                className="btn-outline flex items-center justify-center gap-2"
                id="hero-cta-secondary"
              >
                Explore Elevation Studio
                <ExternalLinkIcon size={16} />
              </a>
            </div>

            {/* Reassurance Features */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/10 animate-fade-up delay-500">
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
            </div>
          </div>

          {/* Right Column — Pinterest Glass Feature Card */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-up delay-300">
            <div className="relative">
              <div className="glass-card-dark p-3 rounded-2xl border border-white/15 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=95&auto=format&fit=crop"
                    alt="Elevation Studio Contemporary Residence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-80" />

                  {/* Floating Glass Stats Badge */}
                  <div className="absolute bottom-4 left-4 right-4 glass-card-dark p-4 rounded-xl border border-white/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-white/70">
                        Featured Architectural Concept
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    </div>
                    <p className="text-sm font-semibold text-white">
                      Contemporary Villa — Lagos State
                    </p>
                    <p className="text-xs text-white/60 mt-1">
                      Full 3D Visualisation &amp; Remote Design Approval
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
