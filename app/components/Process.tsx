'use client';

import { motion } from 'framer-motion';

const EASE_CUBIC = [0.16, 1, 0.3, 1] as const;

const steps = [
  { number: '01', title: 'Tell Us About Your Project', description: 'Share your location, land details, approximate plot size, project type and what matters most to you. We work with survey plans, land documents or initial ideas.' },
  { number: '02', title: 'Meet Your Architect Remotely', description: 'Discuss your lifestyle, family requirements, spatial preferences and budget direction via video call — from wherever you are in the world.' },
  { number: '03', title: 'Develop The Design', description: 'Our team moves your project from initial concept to detailed architectural drawings, spatial planning, and realistic 3D visualisation.' },
  { number: '04', title: 'Review From Wherever You Are', description: 'Review design milestones remotely, ask questions, request agreed adjustments, and approve key stages through clear digital presentations.' },
  { number: '05', title: 'Move Forward With Clarity', description: 'Once your design is developed and approved, you have a professional architectural direction and clear documentation for the next stage of your build.' },
];

export default function Process() {
  return (
    <section className="section-py bg-[#ffffff]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_CUBIC }}
        >
          <span className="block text-[#737373] text-xs font-semibold tracking-[0.25em] uppercase mb-3">The Process</span>
          <h2 className="heading-section text-3xl lg:text-5xl text-[#171717] mb-4">
            From land to design — without the back-and-forth.
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            A structured five-step process designed for clients who need professional architectural results but can&apos;t be present in Nigeria throughout the design phase.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE_CUBIC }}
            >
              <motion.div
                className="group bg-[#fafafa] border border-[#f0f0f0] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row md:items-center gap-6 justify-between cursor-default"
                whileHover={{
                  borderColor: '#171717',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 12px 35px -10px rgba(0,0,0,0.06)',
                  x: 4,
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-start md:items-center gap-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-white border border-[#e5e5e5] flex items-center justify-center text-[#171717] font-extrabold text-lg flex-shrink-0"
                    whileHover={{ borderColor: '#171717', scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>
                  <div>
                    <h3 className="text-base font-bold text-[#171717] mb-1 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-[#737373] leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
                <motion.div
                  className="hidden md:block text-[#d4d4d4] text-2xl"
                  whileHover={{ color: '#171717', x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
