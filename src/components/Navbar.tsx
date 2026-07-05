"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "./../../public/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/forms", label: "Forms" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQ's" },
  { href: "/service-areas", label: "Service Areas" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link href="/" passHref className="flex items-center">
          <Image className="w-28" src={logo} alt="Peak Elite logo" priority />
        </Link>
        <a
          href="tel:+17192330707"
          className="hidden sm:block font-manrope font-semibold text-slate-700 hover:text-teal-600 transition-colors"
        >
          Call or text +1 719-233-0707
        </a>
        <button
          onClick={handleNav}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-slate-500 rounded-lg md:hidden hover:bg-teal-50 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200"
          aria-controls="navbar-default"
          aria-expanded={nav}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            nav
              ? "w-full md:block md:w-auto"
              : "hidden w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:flex-row md:gap-1 md:mt-0 md:border-0 md:bg-transparent">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    passHref
                    className={`block py-2 px-3 rounded-md transition-colors ${
                      isActive
                        ? "text-white bg-teal-600 md:bg-transparent md:text-teal-600 md:font-semibold"
                        : "text-slate-700 hover:bg-teal-50 md:hover:bg-transparent md:hover:text-teal-600"
                    }`}
                    onClick={() => setNav(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="tel:+17192330707"
            className="block sm:hidden mt-2 py-2 px-3 font-manrope font-semibold text-teal-600"
          >
            Call or text +1 719-233-0707
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
