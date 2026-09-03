'use client';

import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Project',
    description:
      'Share your location, land details, approximate plot size, what you want to build and what matters most to you. We can work with a survey plan, site photos, land documents or simply your initial concept.',
  },
  {
    number: '02',
    title: 'Have a Remote Consultation',
    description:
      'Meet with the Elevation Studio team by video call. Discuss your lifestyle, family requirements, investment goals, preferred architectural style and budget direction — from wherever you are.',
  },
  {
    number: '03',
    title: 'Develop Your Design',
    description:
      'Our team develops your architectural concept, spatial planning and 3D visualisation around your brief. You provide feedback at key stages before the design progresses.',
  },
  {
    number: '04',
    title: 'Review From Wherever You Are',
    description:
      'Review the design remotely. Ask questions. Request agreed adjustments. See how the proposed building is developing before any construction begins — through drawings, 3D views and direct communication.',
  },
  {
    number: '05',
    title: 'Move Toward Construction',
    description:
      'Once your design is developed and approved, you have a clearer architectural direction and professional documentation for the next stage of your project — on your terms, at your pace.',
  },
];

export default function Process() {
  return (
    <section className="section-py bg-[#f5f2ed]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-16 lg:mb-20 max-w-2xl">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Process
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#1a1a1a] mb-4">
            From land to design — without the back-and-forth.
          </h2>
          <p className="text-base text-[#7a6f67] leading-relaxed">
            A structured five-step process designed for clients who need professional results but can&apos;t be present in Nigeria throughout the design phase.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 80}>
              <div
                className={`flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16 py-10 border-b border-[#e0d8cf] group ${
                  i === 0 ? 'border-t' : ''
                }`}
              >
                {/* Step number */}
                <div className="flex-shrink-0 lg:w-24">
                  <span className="step-number text-4xl lg:text-6xl text-[#c4b8a8] group-hover:text-[#b5784e] transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 lg:pt-2">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#7a6f67] leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Right arrow indicator */}
                <div className="hidden lg:flex flex-shrink-0 items-start pt-3">
                  <span className="text-[#e0d8cf] group-hover:text-[#b5784e] transition-colors duration-300 text-2xl">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={200} className="mt-10">
          <p className="text-xs text-[#a89e95] tracking-wide leading-relaxed max-w-lg">
            Note: Elevation Studio focuses on the architectural design stage. Services beyond design — including construction management, site supervision, contractor appointment and regulatory approvals — depend on scope and are discussed at consultation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
