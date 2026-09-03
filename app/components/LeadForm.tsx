'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

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
      trackEvent('form_start', { form_id: 'project_enquiry' });
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submit', { form_id: 'project_enquiry' });
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section className="section-py bg-[#f5f2ed]" id="project-form">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left — context */}
          <ScrollReveal className="mb-12 lg:mb-0">
            <span className="block text-[#b5784e] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              Start Here
            </span>
            <h2 className="heading-section text-3xl lg:text-5xl text-[#1a1a1a] mb-6">
              Tell us about your project.
            </h2>
            <p className="text-base text-[#7a6f67] leading-relaxed mb-8">
              You don&apos;t need to have everything figured out before you contact us. If you already own land, have a survey, have sketches or simply have an idea — start the conversation. We&apos;ll take it from there.
            </p>
            <div className="space-y-4">
              {[
                'Remote consultations available',
                'No obligation to proceed after initial discussion',
                'Nigeria-based professional studio',
                'We work with clients in the UK, USA, Canada, Europe and worldwide',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#b5784e] flex-shrink-0 mt-0.5">—</span>
                  <span className="text-sm text-[#3a3530] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={150}>
            {submitted ? (
              <div className="bg-white border border-[#e0d8cf] p-10 text-center">
                <div className="text-4xl text-[#b5784e] mb-4">✓</div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">
                  Project details received.
                </h3>
                <p className="text-sm text-[#7a6f67] leading-relaxed">
                  Thank you. Your project information has been received. Elevation Studio will review your details and contact you regarding the next step.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#e0d8cf] p-8 lg:p-10"
                noValidate
              >
                <h3 className="text-sm font-semibold tracking-widest uppercase text-[#1a1a1a] mb-8">
                  Project Enquiry
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
                    <label htmlFor="propertyLocation" className="form-label">Where is your property / land? *</label>
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
                      <option>Apartments</option>
                      <option>Rental development</option>
                      <option>Commercial property</option>
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
                      <option>Just exploring</option>
                      <option>I own land</option>
                      <option>I have a survey</option>
                      <option>I have an existing design</option>
                      <option>Ready to start design</option>
                      <option>Ready for construction</option>
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
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      placeholder="Describe your project, any ideas you have, or questions you'd like us to address..."
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

                <p className="text-xs text-[#a89e95] text-center mt-4 leading-relaxed">
                  Your information is used solely to respond to your project enquiry and will not be shared with third parties.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
