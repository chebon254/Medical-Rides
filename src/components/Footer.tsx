import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-5">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-manrope font-semibold text-teal-400 uppercase text-sm tracking-wide mb-3">
              Office Location
            </h3>
            <p className="text-sm text-slate-300 leading-6">
              8346 Sprague Way
              <br />
              Colorado Springs, CO 80908
            </p>
            <p className="text-sm text-slate-300 mt-2">
              <a href="tel:+17192330707" className="hover:text-teal-400 transition-colors">
                Phone: +1 (719) 233-0707
              </a>
            </p>
            <p className="text-sm text-slate-300">
              <a href="mailto:info@peakelitemedride.com" className="hover:text-teal-400 transition-colors">
                info@peakelitemedride.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-manrope font-semibold text-teal-400 uppercase text-sm tracking-wide mb-3">
              Office Hours
            </h3>
            <p className="text-sm text-slate-300 leading-6">
              Monday–Sunday
              <br />
              24 hours
            </p>
          </div>
          <div>
            <h3 className="font-manrope font-semibold text-teal-400 uppercase text-sm tracking-wide mb-3">
              24 Hour Transportation
            </h3>
            <p className="text-sm text-slate-300 leading-6">
              Peak Elite Medride operates 24 hours a day providing timely transportation to your appointments. If
              you need assistance, call or text our main office at (719) 233-0707, or our satellite offices at
              (806) 787-6905 and (719) 306-7313.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Peak Elite Medride. Veterans owned, reliable and timely.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
