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
    icon: '◎',
  },
  {
    title: 'You See Before You Build',
    description: 'Use 3D visualisation to understand your proposed space before construction begins.',
    icon: '◈',
  },
  {
    title: 'You Know What Comes Next',
    description: 'Work through defined project stages instead of guessing where things stand.',
    icon: '◇',
  },
  {
    title: 'You Remain Part of the Decision',
    description: 'Distance doesn\'t mean handing over control. Your input shapes every significant design choice.',
    icon: '◉',
  },
];

export default function PainSection() {
  return (
    <section className="section-py bg-[#faf9f7]" id="why-elevation">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <ScrollReveal className="max-w-3xl mb-16">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Remote Architecture Solution
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#1a1a1a] mb-8">
            You shouldn&apos;t have to fly home just to get your house designed.
          </h2>
          <p className="text-lg text-[#7a6f67] leading-relaxed mb-6">
            Living abroad should not make building in Nigeria harder than it needs to be.
          </p>
          <div className="space-y-3 text-base text-[#3a3530] leading-relaxed">
            <p>You may already own land.</p>
            <p>You may already have a budget.</p>
            <p>You may even know exactly how you want your home to feel.</p>
          </div>
          <p className="text-base text-[#7a6f67] leading-relaxed mt-6">
            The challenge is turning that vision into a professional design while you are thousands of kilometres away. Elevation Studio gives you a structured way to work with your design team remotely — so you can review, question, adjust and approve important decisions without constantly travelling.
          </p>
        </ScrollReveal>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <div className="card-feature h-full">
                <div className="text-2xl text-[#b5784e] mb-4">{card.icon}</div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-[#1a1a1a] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#7a6f67] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pull-quote + Hybrid CTAs */}
        <ScrollReveal className="mt-16 lg:mt-20" delay={200}>
          <div className="bg-[#f5f2ed] border-l-4 border-[#b5784e] p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xl lg:text-2xl font-semibold text-[#1a1a1a] leading-snug tracking-tight mb-2">
                &ldquo;Distance should not mean losing control of your project.&rdquo;
              </p>
              <p className="text-sm text-[#7a6f67]">
                Ready to explore how we can turn your land into an architectural reality?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('pain_section_whatsapp')}
                className="btn-copper flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] border-[#25D366]"
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
