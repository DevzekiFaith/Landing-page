'use client';

import ScrollReveal from './ScrollReveal';

const pillars = [
  {
    title: 'Remote Communication',
    description:
      'Discuss your project without needing to be physically present in Nigeria. Video calls, structured written updates and design reviews keep you connected at every stage.',
  },
  {
    title: 'Visual Clarity',
    description:
      'See the design through architectural drawings and 3D visualisation before construction begins. You make decisions based on what you can see, not what you have to imagine.',
  },
  {
    title: 'Structured Milestones',
    description:
      'Know what stage your project is at and what comes next. A defined process means you are never left guessing about progress or waiting without context.',
  },
  {
    title: 'Local Understanding',
    description:
      'Work with a Nigeria-based studio that understands Nigerian site conditions, climate, lifestyle and construction realities — so your design is grounded in practical local knowledge.',
  },
];

export default function Trust() {
  return (
    <section className="section-py bg-[#f5f2ed]" id="why-trust-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-16 lg:mb-20 max-w-2xl">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Diaspora Peace of Mind
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#1a1a1a]">
            Thousands of kilometres shouldn&apos;t mean less control.
          </h2>
        </ScrollReveal>

        {/* Trust pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 100}>
              <div className="trust-pillar">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-[#1a1a1a] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#7a6f67] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Reassurance note */}
        <ScrollReveal delay={300} className="mt-16">
          <div className="bg-white border border-[#e0d8cf] p-8 max-w-3xl">
            <p className="text-base text-[#3a3530] leading-relaxed">
              We don&apos;t promise perfection, zero risk or guaranteed results. We offer a professional, structured, design process with clear communication — and we work with clients who expect the same professional standards they would from any reputable studio.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
