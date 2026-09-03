'use client';

import ScrollReveal from './ScrollReveal';
import { MAIN_WEBSITE_URL, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const portfolioProjects = [
  {
    title: 'Modern Residential Architecture',
    subtitle: 'Exterior Visualisation',
    imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=95&auto=format&fit=crop',
  },
  {
    title: 'Luxury Family Residence',
    subtitle: 'Interior Spatial Planning',
    imgUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=95&auto=format&fit=crop',
  },
  {
    title: 'Contemporary Duplex',
    subtitle: 'Elevation & Material Direction',
    imgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=95&auto=format&fit=crop',
  },
];

export default function SecondPortfolio() {
  return (
    <section className="section-py bg-[#ffffff]" id="second-portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto">
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Design Standards
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717] mb-6">
            Good design should be visible.
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Take a look at selected work showing our architectural character, spatial clarity, and render visual quality.
          </p>
        </ScrollReveal>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className="group overflow-hidden rounded-2xl bg-[#fafafa] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3] bg-black">
                  <img
                    src={p.imgUrl}
                    alt={p.title}
                    loading="eager"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-base font-semibold text-[#171717] tracking-tight mb-1 group-hover:text-black transition-colors">{p.title}</h3>
                  <p className="text-xs text-[#737373] font-medium tracking-wider uppercase">{p.subtitle}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA linking to Main Studio Portfolio */}
        <ScrollReveal delay={200} className="text-center">
          <a
            href={MAIN_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('second_portfolio_full_portfolio')}
            className="btn-primary inline-flex items-center gap-2"
          >
            See The Full Elevation Studio Portfolio
            <ExternalLinkIcon size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
