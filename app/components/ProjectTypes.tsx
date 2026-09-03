'use client';

import ScrollReveal from './ScrollReveal';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const projectTypes = [
  {
    title: 'Family Home',
    description: 'Bungalows, duplexes and contemporary family residences designed around how you actually live.',
    tag: 'Residential',
  },
  {
    title: 'Luxury Residence',
    description: 'Designed around lifestyle, privacy, comfort and architectural character. For clients with a clear vision of quality.',
    tag: 'Premium',
  },
  {
    title: 'Investment Property',
    description: 'Residential developments designed with functionality and long-term value in mind.',
    tag: 'Rental / Investment',
  },
  {
    title: 'Apartments & Multi-Unit',
    description: 'For clients developing rental or multi-family property. Efficient planning for multi-storey residential.',
    tag: 'Multi-Unit',
  },
  {
    title: 'Residential Masterplan',
    description: 'For larger plots, family compounds and development opportunities requiring comprehensive spatial planning.',
    tag: 'Large Scale',
  },
  {
    title: 'Commercial / Special',
    description: 'For clients with more complex spatial or development requirements beyond standard residential.',
    tag: 'Commercial',
  },
];

export default function ProjectTypes() {
  const scrollToForm = () => {
    const form = document.getElementById('project-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-py bg-[#faf9f7]" id="what-we-design">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-16 max-w-xl">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Scope of Work
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#1a1a1a]">
            What are you planning to build?
          </h2>
        </ScrollReveal>

        {/* Project type grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectTypes.map((type, i) => (
            <ScrollReveal key={type.title} delay={i * 80}>
              <div className="card-feature h-full flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#b5784e]">
                      {type.tag}
                    </span>
                    <span className="text-[#e0d8cf] group-hover:text-[#b5784e] transition-colors duration-300 text-lg">
                      →
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3 tracking-tight">
                    {type.title}
                  </h3>
                  <p className="text-sm text-[#7a6f67] leading-relaxed mb-6">
                    {type.description}
                  </p>
                </div>
                <button
                  onClick={() => { scrollToForm(); trackClick(`project_type_${type.title.toLowerCase().replace(/\s+/g, '_')}`); }}
                  className="text-xs font-semibold tracking-widest uppercase text-[#1a1a1a] border-b border-[#c4b8a8] hover:border-[#1a1a1a] transition-all duration-200 pb-0.5 self-start"
                >
                  Discuss Your Project
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="text-center">
            <p className="text-sm text-[#7a6f67] mb-6">
              Not sure which category fits? Tell us about your project and we&apos;ll guide you.
            </p>
            <button
              onClick={() => { scrollToForm(); trackClick('project_types_not_sure'); }}
              className="btn-primary"
              id="project-types-cta"
            >
              Start My Project
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
