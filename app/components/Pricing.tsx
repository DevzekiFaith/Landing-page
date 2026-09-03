'use client';

import ScrollReveal from './ScrollReveal';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const plans = [
  {
    name: 'Concept & Direction',
    from: '₦600,000',
    description:
      'For clients who need initial project direction, concept development and clarity before committing to a full architectural design.',
    features: [
      'Initial project consultation',
      'Concept direction & brief development',
      'Preliminary spatial ideas',
      'Design approach recommendation',
    ],
    cta: 'Start Your Project',
    ctaId: 'pricing_concept',
    featured: false,
  },
  {
    name: 'Residential Architecture',
    from: '₦1,500,000',
    description:
      'For clients ready to develop a professional residential architectural design, including spatial planning and 3D visualisation.',
    features: [
      'Full architectural design brief',
      'Spatial planning & layout',
      '3D architectural visualisation',
      'Floor plans & elevations',
      'Design review & revisions',
    ],
    cta: 'Start Your Project',
    ctaId: 'pricing_residential',
    featured: true,
  },
  {
    name: 'Masterplanning',
    from: '₦4,500,000',
    description:
      'For larger residential developments, compounds and more comprehensive planning requirements across multiple units or phases.',
    features: [
      'Site masterplanning',
      'Multi-unit or phased development design',
      'Full architectural documentation',
      '3D visualisation suite',
      'Extended design consultation',
    ],
    cta: 'Start Your Project',
    ctaId: 'pricing_masterplan',
    featured: false,
  },
];

export default function Pricing() {
  const scrollToForm = () => {
    const form = document.getElementById('project-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-py bg-[#faf9f7]" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-14 max-w-xl">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Transparent Pricing
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#1a1a1a] mb-4">
            Understand the investment.
          </h2>
          <p className="text-base text-[#7a6f67] leading-relaxed">
            Starting points for our architectural services. Final fees depend on project size, complexity, location and scope.
          </p>
        </ScrollReveal>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className={`pricing-card h-full flex flex-col ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#1a1a1a]" />
                )}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#b5784e] block mb-2">
                      {plan.name}
                    </span>
                    <div className="text-3xl font-bold text-[#1a1a1a] tracking-tight">
                      Starting From {plan.from}
                    </div>
                  </div>
                  {plan.featured && (
                    <span className="text-[0.65rem] font-semibold tracking-widest uppercase bg-[#1a1a1a] text-white px-2 py-1">
                      Most Common
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#7a6f67] leading-relaxed mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#3a3530]">
                      <span className="text-[#b5784e] flex-shrink-0 mt-0.5">—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => { scrollToForm(); trackClick(plan.ctaId); }}
                  id={plan.ctaId}
                  className={plan.featured ? 'btn-copper w-full justify-center' : 'btn-outline-dark w-full justify-center'}
                >
                  {plan.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <ScrollReveal delay={200}>
          <p className="text-xs text-[#a89e95] leading-relaxed text-center max-w-xl mx-auto">
            Final fees depend on project size, complexity, location and scope. All fees are agreed transparently before work begins.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
