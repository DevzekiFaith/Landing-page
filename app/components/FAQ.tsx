'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    q: 'DO YOU ALSO HANDLE CONSTRUCTION?',
    a: 'Elevation Studio focuses on the architectural design stage. This includes concept development, spatial planning, floor plans, elevations, 3D visualisation and design documentation. Services related to construction, contractor selection, site supervision and regulatory approvals are discussed at consultation based on project scope.',
  },
  {
    q: 'HOW LONG DOES THE DESIGN PROCESS TAKE?',
    a: 'Timeline varies depending on project scope, size, complexity, and client feedback turnaround times at each review milestone. Realistic project schedules are established during the initial consultation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-py bg-[#fafafa]" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Questions
          </span>
          <h2 className="heading-section text-3xl lg:text-4xl text-[#171717]">
            Frequently asked questions.
          </h2>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          className="border-t border-[#e5e5e5]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#e5e5e5]">
                <button
                  className="w-full text-left py-6 bg-none border-none cursor-pointer flex justify-between items-center gap-4 text-[#171717] font-semibold text-sm tracking-wide font-sans group"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  id={`faq-btn-${i}`}
                >
                  <span className="pr-4 group-hover:text-black transition-colors">{faq.q}</span>
                  <motion.span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-[#e5e5e5] group-hover:border-[#171717] flex items-center justify-center text-[#171717] text-sm transition-colors"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-[#737373] leading-relaxed text-sm">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
