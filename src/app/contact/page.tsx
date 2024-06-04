// ./src/app/contact/page.tsx

import React from 'react';

function ContactPage() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            Reach Us
          </h6>
          <h2 className="text-6xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Contact Us
          </h2>
        </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            style={{ // Correct usage of style attribute
              marginTop: '0.5rem',
              width: '100%',
              minHeight: '80px', // Adjust as needed
              padding: '0.375rem 0.75rem',
              fontSize: '1rem',
              borderWidth: '1px',
              borderColor: '#d1d5db',
              borderRadius: '0.375rem',
              lineHeight: '1.5',
              resize: 'vertical',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px inset',
            }}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;