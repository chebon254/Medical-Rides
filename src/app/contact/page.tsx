// ./src/app/contact/page.tsx

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="mb-10 text-center">
          <h6 className="text-sm font-semibold uppercase tracking-wide text-teal-600">
            Reach Us
          </h6>
          <h2 className="mt-2 font-manrope text-4xl font-bold text-slate-900 sm:text-5xl">
            Contact Us
          </h2>
        </div>

        <div className="card grid grid-cols-1 overflow-hidden md:grid-cols-5">
          <div className="flex flex-col justify-between bg-gradient-to-br from-teal-600 to-teal-800 p-8 text-white md:col-span-2">
            <div>
              <h3 className="font-manrope text-xl font-bold">Let&apos;s talk</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-100">
                Questions about scheduling, coverage, or service areas? We&apos;re happy to help.
              </p>
            </div>
            <div className="mt-8 space-y-4 text-sm">
              <a href="tel:+17192330707" className="flex items-center gap-3 font-semibold transition-colors hover:text-teal-200">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                +1 719-233-0707
              </a>
              <div className="flex items-center gap-3 text-teal-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                Colorado Springs &amp; surrounding areas
              </div>
            </div>
          </div>

          <form className="space-y-5 p-8 md:col-span-3">
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="How can we help?"
                className="form-input min-h-[110px] resize-y"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Send message
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
