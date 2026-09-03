'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { MAIN_WEBSITE_URL, WHATSAPP_URL, WhatsAppIcon, ExternalLinkIcon } from './Header';

function trackEvent(eventName: string, data?: Record<string, string>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, data || {});
  }
}

const initialState = {
  fullName: '',
  email: '',
  whatsapp: '',
  location: '',
  propertyLocation: '',
  ownsLand: '',
  projectType: '',
  stage: '',
  budget: '',
  message: '',
};

export default function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (!touched) {
      setTouched(true);
      trackEvent('form_start', { form_id: 'diaspora_project_enquiry' });
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submit', { form_id: 'diaspora_project_enquiry' });
    setSubmitted(true);
  };

  return (
    <section className="section-py bg-[#f5f2ed]" id="project-form">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left — context & WhatsApp secondary option */}
          <ScrollReveal className="mb-12 lg:mb-0">
            <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Start Your Project
            </span>
            <h2 className="heading-section text-3xl lg:text-5xl text-[#1a1a1a] mb-6">
              Tell us about your project.
            </h2>
            <p className="text-base text-[#7a6f67] leading-relaxed mb-8">
              You don&apos;t need to have everything figured out before you contact us. If you already own land, have a survey, have sketches or simply have an idea — start the conversation. We&apos;ll take it from there.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Remote consultations available',
                'No obligation to proceed after initial discussion',
                'Nigeria-based professional studio',
                'Serving clients in UK, USA, Canada, Europe & Middle East',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#b5784e] flex-shrink-0 font-bold mt-0.5">—</span>
                  <span className="text-sm text-[#3a3530] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Section 16 — Secondary WhatsApp option */}
            <div className="bg-white border border-[#e0d8cf] p-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#b5784e] block mb-2">
                HAVE A QUICK QUESTION?
              </span>
              <p className="text-sm text-[#7a6f67] mb-4">
                Prefer to send a direct message? Speak directly with Elevation Studio on WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('form_side_whatsapp_click')}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#25D366] hover:text-[#1da851] transition-colors"
              >
                <WhatsAppIcon size={16} />
                Chat with Elevation Studio on WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Lead Qualification Form */}
          <ScrollReveal delay={150}>
            {submitted ? (
              <div className="bg-white border border-[#e0d8cf] p-8 lg:p-12 text-center">
                <div className="text-4xl text-[#b5784e] mb-4">✓</div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
                  THANK YOU. WE&apos;VE RECEIVED YOUR PROJECT DETAILS.
                </h3>
                <p className="text-sm text-[#7a6f67] leading-relaxed mb-8">
                  Your information has been received. The Elevation Studio team will review your project and contact you regarding the next step.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={MAIN_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('post_submit_explore_studio')}
                    className="btn-copper flex items-center justify-center gap-2"
                  >
                    Explore Elevation Studio
                    <ExternalLinkIcon size={14} />
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('post_submit_whatsapp')}
                    className="btn-outline-dark flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon size={16} />
                    Chat with Us on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#e0d8cf] p-8 lg:p-10 shadow-sm"
                noValidate
              >
                <h3 className="text-sm font-semibold tracking-widest uppercase text-[#1a1a1a] mb-6 border-b border-[#e0d8cf] pb-3">
                  Project Qualification Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="whatsapp" className="form-label">WhatsApp / Phone *</label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+44 / +1 / +234..."
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="form-label">Where do you currently live? *</label>
                    <select
                      id="location"
                      name="location"
                      required
                      value={form.location}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select country</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Europe</option>
                      <option>Middle East</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Property location */}
                  <div>
                    <label htmlFor="propertyLocation" className="form-label">Where is your property located? *</label>
                    <input
                      id="propertyLocation"
                      name="propertyLocation"
                      type="text"
                      required
                      value={form.propertyLocation}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Lagos, Ogun, Abuja..."
                    />
                  </div>

                  {/* Owns land */}
                  <div>
                    <label htmlFor="ownsLand" className="form-label">Do you already own the land?</label>
                    <select
                      id="ownsLand"
                      name="ownsLand"
                      value={form.ownsLand}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>In the process of acquiring it</option>
                    </select>
                  </div>

                  {/* Project type */}
                  <div>
                    <label htmlFor="projectType" className="form-label">What are you planning to build?</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select type</option>
                      <option>Bungalow</option>
                      <option>Duplex</option>
                      <option>Luxury residence</option>
                      <option>Apartment</option>
                      <option>Rental development</option>
                      <option>Commercial</option>
                      <option>Masterplan</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Stage */}
                  <div>
                    <label htmlFor="stage" className="form-label">What stage are you at?</label>
                    <select
                      id="stage"
                      name="stage"
                      value={form.stage}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select stage</option>
                      <option>Exploring</option>
                      <option>Own land</option>
                      <option>Have survey</option>
                      <option>Have existing design</option>
                      <option>Ready to begin design</option>
                      <option>Preparing for construction</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="form-label">Estimated design / project budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select range</option>
                      <option>Under ₦500,000</option>
                      <option>₦500,000 – ₦1,000,000</option>
                      <option>₦1,000,000 – ₦2,500,000</option>
                      <option>₦2,500,000 – ₦5,000,000</option>
                      <option>₦5,000,000 – ₦10,000,000</option>
                      <option>Above ₦10,000,000</option>
                      <option>Not yet defined</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="form-label">Tell us briefly about your project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      placeholder="Describe your plot, ideas, or questions for our team..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-copper w-full justify-center mt-2"
                  id="form-submit-btn"
                >
                  Send My Project Details
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
