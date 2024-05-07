import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Medical Rides',
    description: 'Get transportation services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Peak Elite Logo"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/schedule" className="text-gray-700 hover:text-gray-900">
                  Schedule
                </Link>
                <Link href="/forms" className="text-gray-700 hover:text-gray-900">
                  Forms
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-gray-900">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-gray-900">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
                <Link href="/faqs" className="text-gray-700 hover:text-gray-900">
                  FAQ&apos;s {/* Escape single quote */}
                </Link>
                <Link href="/service-areas" className="text-gray-700 hover:text-gray-900">
                  Service Areas
                </Link>
                <div className="account-access">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </nav>
              <div className="flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <button className="mobile-menu-button">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mobile-menu hidden md:hidden">
                  <div className="flex flex-col items-start">
                    <Link href="/" className="mobile-menu-item">Home</Link>
                    <Link href="/schedule" className="mobile-menu-item">Schedule</Link>
                    <Link href="/forms" className="mobile-menu-item">Forms</Link>
                    <Link href="/about" className="mobile-menu-item">About</Link>
                    <Link href="/services" className="mobile-menu-item">Services</Link>
                    <Link href="/contact" className="mobile-menu-item">Contact</Link>
                    <Link href="/faqs" className="mobile-menu-item">FAQ&apos;s</Link> {/* Escape single quote */}
                    <Link href="/service-areas" className="mobile-menu-item">Service Areas</Link>
                    <div className="account-access">
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </header>
          <main>
              {children}
          </main>
          <footer className="bg-gray-800 text-white text-base leading-6">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  container">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="mb-12 lg:mb-0">
                  <h5 className="text-xl font-semibold mb-6">Office Location:</h5>
                  <p>8346 Sprague Way</p>
                  <p>COLORADO SPRINGS, CO 80908</p>
                  <p>Phone Number: +1 (719) 233-0707</p>
                  <p>Email Address: info@peakelitemeride.com</p>
                </div>
                <div className="mb-12 lg:mb-0">
                  <h5 className="text-xl font-semibold mb-6">Office hours:</h5>
                  <ul className="list-none">
                    <li>Monday 24 hours</li>
                    <li>Tuesday 24 hours</li>
                    <li>Wednesday 24 hours</li>
                    <li>Thursday 24 hours</li>
                    <li>Friday 24 hours</li>
                    <li>Saturday 24 hours</li>
                    <li>Sunday 24 hours</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-6">24 hours transportation:</h5>
                  <p>Peak Elite medride operates 24 hours a day providing timely transportation to your appointments. Having reliable and accessible transportation is our goal. If you have any specific question or need further information about our service, feel free to call or text our main office number: (719) 233-0707, or our satellite office numbers: (806) 787-6905 and (719) 306-7313.</p>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}