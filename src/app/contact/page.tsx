// ./src/app/contact/page.tsx

import React from 'react';

function ContactPage() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="mb-16">
          <h6 className="text-lg text-teal-600 font-medium text-center mb-2">
            Reach Us
          </h6>
          <h2 className="text-6xl font-manrope text-center font-bold text-slate-900 leading-[3.25rem]">
            Contact Us
          </h2>
        </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full px-3 py-2 shadow-sm sm:text-sm border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 rounded-md outline-none transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 shadow-sm sm:text-sm border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 rounded-md outline-none transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 min-h-[80px] resize-y shadow-sm sm:text-sm border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 rounded-md outline-none transition-shadow"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;