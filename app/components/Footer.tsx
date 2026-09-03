'use client';

import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#141312] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-3">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">ELEVATION</span>
              <span className="text-[0.55rem] tracking-[0.3em] uppercase text-white/50">STUDIO</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              Architecture &amp; Design, Nigeria.
              <br />
              Remote design portal for diaspora clients worldwide.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">Contact</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('footer_whatsapp')}
                className="flex items-center gap-2 text-xs text-[#25D366] hover:text-[#1da851] transition-colors"
              >
                <WhatsAppIcon size={14} />
                WhatsApp Direct
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">Main Studio</p>
              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('footer_main_site')}
                className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
              >
                www.elevationstudiong.com.ng
                <ExternalLinkIcon size={12} />
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">Services</p>
              <ul className="space-y-1 text-xs text-white/40">
                <li>Architectural Design</li>
                <li>3D Visualisation</li>
                <li>Spatial Planning</li>
                <li>Residential Masterplan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Elevation Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Diaspora Architecture Campaign Portal
          </p>
        </div>
      </div>
    </footer>
  );
}
