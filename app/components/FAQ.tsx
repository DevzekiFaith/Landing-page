'use client';

import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    q: 'Can I work with Elevation Studio if I live outside Nigeria?',
    a: 'Yes. Elevation Studio is specifically set up to work with clients living abroad. The design process — from initial consultation to design review and feedback — is structured to be conducted remotely by video call, email, shared documents and digital design presentations. You do not need to be in Nigeria to begin.',
  },
  {
    q: 'Do I need to be in Nigeria before we start?',
    a: 'No. We can begin your project remotely. You will need to provide available site information — such as a survey plan, land documents, site photographs or coordinates — so the design process can be grounded in your actual land. For projects where we require a site visit, this is discussed and arranged separately.',
  },
  {
    q: 'Can you design a house if I already have land?',
    a: 'Yes. If you already own or have acquired land in Nigeria, we can begin developing a design around your plot. We will need the survey plan, approximate dimensions, site images and any local planning constraints relevant to the location.',
  },
  {
    q: 'What if I only have a survey plan?',
    a: 'A survey plan is a good starting point. With a valid survey, we can understand your plot boundaries, orientation and dimensions. We may request additional site photographs and information as the design develops. It is enough to begin the conversation.',
  },
  {
    q: 'Can I review the design from the UK, USA or Canada?',
    a: 'Yes. Design reviews are conducted remotely through digital presentations, shared drawings and video calls. You review, question and approve at key design stages without needing to travel to Nigeria.',
  },
  {
    q: 'How much does it cost?',
    a: 'Starting points are: ₦600,000 for initial concept and direction; ₦1,500,000 for a full residential architectural design; ₦4,500,000 for masterplan-level development design. Final fees are always agreed before work begins and depend on project type, size, complexity and location.',
  },
  {
    q: 'Do you handle construction?',
    a: 'Elevation Studio focuses on the architectural design stage. This includes concept development, spatial planning, floor plans, elevations, 3D visualisation and design documentation. Services related to construction, contractor appointment, site supervision and regulatory approvals are discussed at consultation and depend on project scope.',
  },
  {
    q: 'How long does the design process take?',
    a: 'Timeline depends on the project type, size and complexity, the number of design revisions required, and how quickly client feedback is provided at each stage. We do not provide fixed timelines before understanding your project. Realistic expectations are discussed at the initial consultation.',
  },
  {
    q: 'What if my family in Nigeria is already managing things on my behalf?',
    a: 'This is common. We can work with you as the primary client and copy in a trusted family representative in Nigeria where appropriate. However, design approvals and major project decisions are always confirmed directly with the commissioned client.',
  },
];

export default function FAQ() {
  const toggleFaq = (index: number) => {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if (!answer) return;

    const isOpen = answer.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-answer').forEach((el) => el.classList.remove('open'));
    document.querySelectorAll('.faq-icon').forEach((el) => {
      (el as HTMLElement).style.transform = 'rotate(0deg)';
    });

    if (!isOpen) {
      answer.classList.add('open');
      if (icon) icon.style.transform = 'rotate(45deg)';
    }
  };

  return (
    <section className="section-py bg-[#faf9f7]" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-12">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Questions
          </span>
          <h2 className="heading-section text-3xl lg:text-4xl text-[#1a1a1a]">
            Frequently asked questions.
          </h2>
        </ScrollReveal>

        {/* FAQ items */}
        <ScrollReveal delay={100}>
          <div className="border-t border-[#e0d8cf]">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded="false"
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className="pr-4 text-left">{faq.q}</span>
                  <span
                    id={`faq-icon-${i}`}
                    className="faq-icon flex-shrink-0 w-5 h-5 border border-[#c4b8a8] flex items-center justify-center text-[#b5784e] transition-transform duration-300"
                    style={{ fontSize: '18px', lineHeight: 1 }}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
