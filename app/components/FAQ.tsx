'use client';

import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    q: 'CAN I WORK WITH ELEVATION STUDIO IF I LIVE ABROAD?',
    a: 'Yes. Elevation Studio is specifically set up to work with clients living abroad. The design process — from initial consultation to design review and feedback — is structured to be conducted remotely by video call, email, shared documents and digital design presentations. You do not need to be in Nigeria to begin.',
  },
  {
    q: 'DO I NEED TO TRAVEL TO NIGERIA BEFORE WE START?',
    a: 'No. We can begin your project remotely. You will need to provide available site information — such as a survey plan, land documents, site photographs or coordinates — so the design process can be grounded in your actual land.',
  },
  {
    q: 'CAN YOU DESIGN A HOUSE IF I ALREADY OWN LAND?',
    a: 'Yes. If you already own or are in the process of acquiring land in Nigeria, we can begin developing a design tailored specifically to your plot dimensions, orientation, climate context and requirements.',
  },
  {
    q: 'CAN I REVIEW MY DESIGN REMOTELY?',
    a: 'Yes. Design reviews are conducted remotely through digital presentations, scaled drawings, and 3D visualisations. You review, ask questions, and approve at key design stages from wherever you live.',
  },
  {
    q: 'HOW MUCH DOES ARCHITECTURAL DESIGN COST?',
    a: 'Starting points are: ₦600,000 for concept and initial project direction; ₦1,500,000 for a full residential architectural design; ₦4,500,000 for masterplan-level development design. Final fees depend on project size, location, complexity and scope.',
  },
  {
    q: 'DO YOU ALSO HANDLE CONSTRUCTION?',
    a: 'Elevation Studio focuses on the architectural design stage. This includes concept development, spatial planning, floor plans, elevations, 3D visualisation and design documentation. Services related to construction, contractor selection, site supervision and regulatory approvals are discussed at consultation based on project scope.',
  },
  {
    q: 'HOW LONG DOES THE DESIGN PROCESS TAKE?',
    a: 'Timeline varies depending on project scope, size, complexity, and client feedback turnaround times at each review milestone. Realistic project schedules are established during the initial consultation.',
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
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
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
                  <span className="pr-4 text-left font-semibold text-sm tracking-wide">{faq.q}</span>
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
