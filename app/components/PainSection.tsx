'use client';

import ScrollReveal from './ScrollReveal';
import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const painCards = [
  {
    title: 'You Stay Informed',
    description: 'Review important design decisions remotely. No need to be physically present for each milestone.',
    icon: '01',
  },
  {
    title: 'You See Before You Build',
    description: 'Use 3D visualisation to understand your proposed space before construction begins.',
    icon: '02',
  },
  {
    title: 'You Know What Comes Next',
    description: 'Work through defined project stages instead of guessing where things stand.',
    icon: '03',
  },
  {
    title: 'You Remain Part of the Decision',
    description: 'Distance doesn\'t mean handing over control. Your input shapes every significant design choice.',
    icon: '04',
  },
];

const concerns = [
  'Poor communication or long delays in updates',
  'Unclear architectural drawings that lead to misunderstanding',
  'Anxiety from not being physically present on ground',
  'Uncertainty about what space is actually being developed',
  'Costly design changes after construction has started',
  'Constant travel just to move the initial design process forward',
];

export default function PainSection() {
  return (
    <section className="section-py bg-[#fafafa]" id="why-elevation">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <ScrollReveal className="max-w-3xl mb-14">
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            The Remote Architecture Solution
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717] mb-6">
            You shouldn&apos;t have to fly home just to get your house designed.
          </h2>
          <p className="text-lg text-[#171717] font-medium leading-relaxed mb-6">
            Living abroad shouldn&apos;t mean putting your property plans on hold — or handing every important decision to someone else.
          </p>
          <p className="text-base text-[#737373] leading-relaxed">
            Whether you already own land or are exploring ideas in Lagos, Ogun, Abuja, or elsewhere in Nigeria, the challenge is turning your vision into a professional design while living thousands of kilometres away.
          </p>
        </ScrollReveal>

        {/* Real Concerns Breakdown */}
        <ScrollReveal className="mb-14" delay={100}>
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-[#f0f0f0]">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#737373] mb-6">
              Common anxieties we solve for diaspora clients:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {concerns.map((c) => (
                <div key={c} className="flex items-start gap-3 text-sm text-[#171717] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-2 flex-shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <div className="card-feature h-full flex flex-col justify-between">
                <div>
                  <span className="text-xl font-extrabold text-[#737373] tracking-tight block mb-4">
                    {card.icon}
                  </span>
                  <h3 className="text-sm font-bold tracking-wider uppercase text-[#171717] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pull-quote + CTAs */}
        <ScrollReveal className="mt-14" delay={200}>
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-[#f0f0f0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xl lg:text-2xl font-semibold text-[#171717] leading-snug tracking-tight mb-2">
                We understand the problem, and we have a better process.
              </p>
              <p className="text-sm text-[#737373]">
                Distance should not mean losing control of your project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('pain_section_whatsapp')}
                className="btn-whatsapp flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={16} />
                Discuss on WhatsApp
              </a>

              <a
                href={MAIN_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('pain_section_main_site')}
                className="btn-outline-dark flex items-center justify-center gap-2"
              >
                Main Website
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
