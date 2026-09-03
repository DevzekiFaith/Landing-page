'use client';

import ScrollReveal from './ScrollReveal';
import { MAIN_WEBSITE_URL, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const projectTypes = [
  {
    title: 'FAMILY HOMES',
    description: 'Bungalows, duplexes and family residences planned around practical living and long-term comfort.',
    tag: 'Residential',
  },
  {
    title: 'LUXURY RESIDENCES',
    description: 'High-end custom homes designed around privacy, light, comfort and distinct architectural character.',
    tag: 'Premium',
  },
  {
    title: 'DUPLEXES & BUNGALOWS',
    description: 'Efficient contemporary designs tailored to site dimensions, climate and family requirements.',
    tag: 'Single & Multi-Level',
  },
  {
    title: 'APARTMENTS',
    description: 'Multi-storey residential developments planned for functionality, natural ventilation and aesthetics.',
    tag: 'Multi-Unit',
  },
  {
    title: 'INVESTMENT DEVELOPMENTS',
    description: 'Rental property developments designed with long-term yield and market appeal in mind.',
    tag: 'Investment',
  },
  {
    title: 'RESIDENTIAL MASTERPLANS',
    description: 'Comprehensive planning for larger compounds, family estates and multi-unit land developments.',
    tag: 'Large Scale',
  },
  {
    title: 'COMMERCIAL / SPECIAL PROJECTS',
    description: 'For clients with unique spatial, commercial or mixed-use development requirements.',
    tag: 'Specialised',
  },
];

export default function ProjectTypes() {
  return (
    <section className="section-py bg-[#fafafa]" id="what-we-design">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-14 max-w-xl">
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Design Scope
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717]">
            What are you planning to build?
          </h2>
        </ScrollReveal>

        {/* Project type grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectTypes.map((type, i) => (
            <ScrollReveal key={type.title} delay={i * 70}>
              <div className="card-feature rounded-2xl h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#171717] bg-[#f4f4f5] px-2.5 py-1 rounded-md">
                      {type.tag}
                    </span>
                    <span className="text-[#d4d4d4] group-hover:text-[#171717] transition-colors duration-300 text-lg">
                      →
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#171717] mb-3 tracking-wider">
                    {type.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA linking to Main Website */}
        <ScrollReveal delay={200} className="text-center">
          <a
            href={MAIN_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('project_types_explore_services')}
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore Our Services on Main Website
            <ExternalLinkIcon size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
