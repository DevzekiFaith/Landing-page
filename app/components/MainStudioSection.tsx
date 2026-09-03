'use client';

import ScrollReveal from './ScrollReveal';
import { MAIN_WEBSITE_URL, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

export default function MainStudioSection() {
  return (
    <section className="section-py bg-[#ffffff]" id="explore-main-studio">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="bg-[#fafafa] border border-[#f0f0f0] rounded-2xl p-10 lg:p-14 shadow-sm">
            <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Elevation Studio Portal
            </span>
            <h2 className="heading-section text-3xl lg:text-5xl text-[#171717] mb-6">
              Want to see more of Elevation Studio?
            </h2>
            <p className="text-base lg:text-lg text-[#737373] leading-relaxed mb-8 max-w-2xl mx-auto">
              This page is designed specifically for clients living abroad. Explore our main studio to see our wider body of work, services, projects and design capabilities.
            </p>
            <a
              href={MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('main_studio_section_explore')}
              className="btn-primary inline-flex items-center gap-2"
            >
              Explore Elevation Studio
              <ExternalLinkIcon size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
