'use client';

import ScrollReveal from './ScrollReveal';

function trackClick(label: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: label });
  }
}

const visualItems = [
  {
    label: 'Exterior 3D',
    description: 'Full external architectural renders showing the proposed building on your site.',
    imgUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80&auto=format&fit=crop',
  },
  {
    label: 'Interior Visualisation',
    description: 'Spatial layouts and interior perspectives for key rooms and living areas.',
    imgUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80&auto=format&fit=crop',
  },
  {
    label: 'Floor Plans',
    description: 'Scaled architectural floor plans showing room arrangement, dimensions and flow.',
    imgUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80&auto=format&fit=crop',
  },
  {
    label: 'Elevations & Sections',
    description: 'Technical and visual elevation drawings showing all faces of the proposed building.',
    imgUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format&fit=crop',
  },
];

export default function DesignExperience() {
  return (
    <section className="section-py bg-[#1a1a1a]" id="design-experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16 max-w-2xl">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            3D Visualisation
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-white mb-6">
            Don&apos;t just imagine your house. See it.
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            One of the biggest challenges of building from abroad is knowing whether the finished building will actually match what you have in mind. Our 3D visualisation process helps you understand the proposed architecture before construction begins — so you&apos;re making decisions based on clarity, not assumptions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visualItems.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 100}>
              <div className="group overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={item.imgUrl}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1a1a1a]/40 group-hover:bg-transparent transition-all duration-300" />
                </div>
                {/* Label */}
                <div className="border-t border-[#3a3530] pt-4">
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300} className="mt-12">
          <p className="text-xs text-white/30 tracking-wide">
            Images above are representative of the design documentation and visualisation types provided. Replace with Elevation Studio&apos;s actual project imagery.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
