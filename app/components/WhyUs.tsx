'use client';

import ScrollReveal from './ScrollReveal';

const whyPoints = [
  'How you actually live',
  'Your family and lifestyle requirements',
  'Your expectations for quality',
  'Your budget boundaries',
  'Nigerian climate and environmental context',
  'Local site and soil conditions',
  'Practical construction realities in Nigeria',
  'Long-term usability and maintenance',
];

export default function WhyUs() {
  return (
    <section className="section-py bg-[#faf9f7]" id="why-elevation-studio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left */}
          <ScrollReveal>
            <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              Why Elevation Studio
            </span>
            <h2 className="heading-section text-3xl lg:text-4xl text-[#1a1a1a] mb-6">
              Design with someone who understands both sides.
            </h2>
            <p className="text-base text-[#7a6f67] leading-relaxed mb-6">
              You understand your life abroad. We understand the Nigerian environment in which your project will exist. That combination matters.
            </p>
            <p className="text-base text-[#7a6f67] leading-relaxed mb-8">
              The goal is not simply to produce a beautiful drawing. It is to create a design that makes sense for your life and your investment — one that will still work well for you, your family and your tenants long after it is built.
            </p>
          </ScrollReveal>

          {/* Right — design considerations */}
          <ScrollReveal delay={200}>
            <div className="bg-[#f5f2ed] p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#b5784e] mb-6">
                Your design needs to reflect:
              </p>
              <ul className="space-y-3">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#3a3530]">
                    <span className="text-[#b5784e] flex-shrink-0 mt-0.5 font-semibold">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
