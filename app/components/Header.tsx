'use client';

import { useState, useEffect } from 'react';

const MAIN_WEBSITE_URL = 'https://www.elevationstudiong.com.ng';
const WHATSAPP_NUMBER = '2349119059859';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Elevation Studio, I live outside Nigeria and I\'m interested in designing/developing a property in Nigeria. I\'d like to discuss my project.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

export { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ArrowRight, ExternalLinkIcon };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const trackClick = (label: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', { event_label: label });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#141312]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href={MAIN_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('header_logo_main_site')}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white transition-colors">
                ELEVATION
              </span>
              <span className="text-[0.55rem] tracking-[0.3em] uppercase text-white/60">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('header_main_website')}
              className="text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
            >
              Main Website
              <ExternalLinkIcon size={12} />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('header_whatsapp')}
              className="btn-whatsapp px-5 py-2.5 text-xs rounded-full flex items-center gap-2"
            >
              <WhatsAppIcon size={15} />
              WhatsApp Direct
            </a>
          </div>

          {/* Mobile Direct Enquiry CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('header_mobile_whatsapp')}
            className="md:hidden flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full bg-[#25D366] text-white"
          >
            <WhatsAppIcon size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
