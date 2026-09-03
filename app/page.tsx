'use client';

import Header, { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './components/Header';
import Hero from './components/Hero';
import VisualProof from './components/VisualProof';
import PainSection from './components/PainSection';
import Promise from './components/Promise';
import Process from './components/Process';
import ProjectTypes from './components/ProjectTypes';
import MainStudioSection from './components/MainStudioSection';
import Trust from './components/Trust';
import SecondPortfolio from './components/SecondPortfolio';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_label: 'sticky_whatsapp_mobile',
      });
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-[#faf9f7]">
      {/* Navigation Header */}
      <Header />

      {/* 1. Hero Section (With reduced black opacity & 3D background depth) */}
      <Hero />

      {/* 2. Immediate Visual Proof (SEE WHAT YOU COULD BUILD BEFORE YOU BUILD IT) */}
      <VisualProof />

      {/* 3. Address the Pain Section (YOU SHOULDN'T HAVE TO FLY HOME...) */}
      <PainSection />

      {/* 4. Brand Statement Section (YOUR LAND IS IN NIGERIA...) */}
      <Promise />

      {/* 5. 5-Step Remote Process Section */}
      <Process />

      {/* 6. What We Can Design Section (WHAT ARE YOU PLANNING TO BUILD?) */}
      <ProjectTypes />

      {/* 7. Dedicated Main Studio Funnel Section (WANT TO SEE MORE OF ELEVATION STUDIO?) */}
      <MainStudioSection />

      {/* 8. Trust & Diaspora Peace of Mind */}
      <Trust />

      {/* 9. Pre-CTA Portfolio Proof (GOOD DESIGN SHOULD BE VISIBLE) */}
      <SecondPortfolio />

      {/* 10. FAQ Section */}
      <FAQ />

      {/* 11. Final High-Conversion Call to Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar — Primary WhatsApp + Main Website Link */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-t border-[#3a3530] p-3 flex items-center gap-3 md:hidden shadow-lg">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="flex-1 bg-[#25D366] text-white text-xs font-semibold tracking-widest uppercase py-3 px-4 flex items-center justify-center gap-2"
        >
          <WhatsAppIcon size={16} />
          Start Project on WhatsApp
        </a>

        <a
          href={MAIN_WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-[#b5784e] text-[#b5784e] p-3"
          aria-label="Main Website Elevation Studio"
        >
          <ExternalLinkIcon size={18} />
        </a>
      </div>
    </main>
  );
}
