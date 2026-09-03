'use client';

import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Contemporary Duplex',
    location: 'Lagos, Nigeria',
    type: 'Residential Design',
    scope: 'Concept to full architectural documentation',
    imgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Family Residence',
    location: 'Ogun State, Nigeria',
    type: 'Residential Design',
    scope: 'Spatial planning & 3D visualisation',
    imgUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Luxury Bungalow',
    location: 'Abuja, Nigeria',
    type: 'Premium Residential',
    scope: 'Full architectural design & visualisation',
    imgUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section className="section-py bg-[#1a1a1a]" id="selected-projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="mb-16">
          <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Selected Projects
          </span>
          <h2 className="heading-section text-3xl lg:text-5xl text-white max-w-xl">
            Work that speaks before words do.
          </h2>
        </ScrollReveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div className="group">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/5] mb-5">
                  <img
                    src={p.imgUrl}
                    alt={`${p.title} - Elevation Studio`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#b5784e]">
                      {p.type}
                    </span>
                  </div>
                </div>
                {/* Details */}
                <h3 className="text-base font-semibold text-white tracking-tight mb-1">{p.title}</h3>
                <p className="text-xs text-white/40 tracking-wide mb-1">{p.location}</p>
                <p className="text-xs text-white/30">{p.scope}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Notice about testimonials */}
        <ScrollReveal delay={300} className="mt-16">
          <div className="border border-[#3a3530] p-6 max-w-2xl">
            <p className="text-sm text-white/40 leading-relaxed">
              The project images above are illustrative placeholders. Replace with actual Elevation Studio completed projects, renders and client documentation. Testimonials and client quotes will be added with verified client permission only.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
