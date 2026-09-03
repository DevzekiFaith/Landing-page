'use client';

import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
      {/* Background architectural image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&auto=format&fit=crop')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(250,249,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,247,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          {/* Diaspora Badge */}
          <div className="mb-6 animate-fade-up">
            <span className="inline-block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase border border-[#b5784e]/40 px-4 py-1.5 bg-[#1a1a1a]/60 backdrop-blur-sm">
              Elevation Studio — Diaspora Architecture Portal
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-display text-4xl sm:text-6xl lg:text-7xl text-white mb-6 animate-fade-up delay-100">
            BUILD IN NIGERIA.
            <br />
            <span className="text-[#b5784e]">FROM ANYWHERE.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-white/85 mb-4 leading-relaxed max-w-2xl animate-fade-up delay-200">
            Professional architectural design for clients living abroad who want to build, develop or invest in property in Nigeria — with a design process you can follow remotely.
          </p>

          <p className="text-base text-white/65 mb-10 leading-relaxed max-w-xl animate-fade-up delay-300">
            From your first idea to a detailed architectural design, Elevation Studio keeps you involved without requiring you to be physically present at every stage.
          </p>

          {/* Hybrid CTAs — Primary: WhatsApp | Secondary: Main Website */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-400">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('hero_primary_whatsapp')}
              className="btn-copper flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] border-[#25D366]"
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
              Visit Main Website
              <ExternalLinkIcon size={16} />
            </a>
          </div>

          {/* Reassurance items */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-white/10 animate-fade-up delay-500">
            {[
              'Remote consultations',
              '3D design reviews',
              'Structured project milestones',
              'Nigeria-based professional team',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-white/60 text-xs tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5784e] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Direct links bar at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#1a1a1a]/80 backdrop-blur-sm py-3 px-6 hidden sm:block z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xs text-white/40 tracking-wider">
            Elevation Studio — Remote Architecture for Diaspora
          </span>
          <div className="flex items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('hero_footer_whatsapp')}
              className="text-xs text-[#25D366] hover:text-[#1da851] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <WhatsAppIcon size={14} />
              Chat on WhatsApp Direct
            </a>
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('hero_footer_main_site')}
              className="text-xs text-white/70 hover:text-[#b5784e] transition-colors flex items-center gap-1.5"
            >
              Visit www.elevationstudiong.com.ng
              <ExternalLinkIcon size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
