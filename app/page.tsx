'use client';

import Header, { WHATSAPP_URL, WhatsAppIcon } from './components/Header';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Promise from './components/Promise';
import Process from './components/Process';
import ProjectTypes from './components/ProjectTypes';
import Trust from './components/Trust';
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
      {/* 1. Header with direct links to main website & WhatsApp */}
      <Header />

      {/* 2. Primary Marketing Hero Section */}
      <Hero />

      {/* 3. Address the Diaspora Pain */}
      <PainSection />

      {/* 4. The Brand Promise */}
      <Promise />

      {/* 5. 5-Step Remote Process Overview */}
      <Process />

      {/* 6. What We Can Design */}
      <ProjectTypes />

      {/* 7. Diaspora Peace of Mind & Trust */}
      <Trust />

      {/* 8. Direct Enquiry CTA Banner (Links to www.elevationstudiong.com.ng) */}
      <FinalCTA />

      {/* 9. Footer */}
      <Footer />

      {/* Sticky Mobile WhatsApp CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="whatsapp-sticky md:hidden"
        aria-label="WhatsApp Elevation Studio"
      >
        <WhatsAppIcon size={18} />
        <span>WhatsApp Us</span>
      </a>
    </main>
  );
}
