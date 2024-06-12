"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page: any) => {
    setActivePage(page);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" passHref className="flex items-center">
          <Image className="w-28" src={logo} alt="Peak Elite logo" />
        </Link>
        <h1>Call or text +1 719-233-0707</h1>
        <button
          onClick={handleNav}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                href="/"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "home"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                aria-current="page"
                onClick={() => handlePageChange("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/schedule"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "schedule"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("schedule")}
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/forms"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "schedule"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("schedule")}
              >
               Forms 
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "about"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "services"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "contact"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("contact")}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "faq"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("faq")}
              >
                FAQ&apos;s
              </Link>
            </li>
            <li>
              <Link
                href="/serviceArea"
                passHref
                className={`block py-2 pl-3 pr-4 ${
                  activePage === "about"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                } `}
                onClick={() => handlePageChange("about")}
              >
                Service Areas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;