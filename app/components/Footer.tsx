'use client';

import { WHATSAPP_URL, WhatsAppIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-3">
              <span className="text-sm font-bold tracking-[0.18em] uppercase text-white">ELEVATION</span>
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b5784e]">STUDIO</span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              Architecture &amp; Design, Nigeria.
              <br />
              Remote design process for diaspora clients worldwide.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#b5784e] mb-3">Contact</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('footer_whatsapp')}
                className="flex items-center gap-2 text-xs text-white/50 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon size={14} />
                WhatsApp Elevation Studio
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#b5784e] mb-3">Locate</p>
              <p className="text-xs text-white/30 leading-relaxed">
                Nigeria-based studio
                <br />
                Serving clients worldwide
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#b5784e] mb-3">Services</p>
              <ul className="space-y-1 text-xs text-white/30">
                <li>Architectural Design</li>
                <li>3D Visualisation</li>
                <li>Spatial Planning</li>
                <li>Residential Masterplan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Elevation Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            elevationstudiong.com.ng/diaspora
          </p>
        </div>
      </div>
    </footer>
  );
}
