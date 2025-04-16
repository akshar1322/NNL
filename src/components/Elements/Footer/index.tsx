// app/components/Footer.tsx
'use client';
import React, { useRef } from 'react';
import Link from 'next/link';

import { useRouter } from "next/navigation"
const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    title: 'Follow Us',
    links: [
      { name: 'Instagram', href: 'https://instagram.com' },
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'X', href: 'https://x.com' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { name: 'Services', href: '/services' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Apply For Loan', href: '/apply-now' },

    ],
  },
];

const Footer: React.FC = () => {
  const footerContentRef = useRef(null);
  const router = useRouter()

  return (
    <footer className="relative rounded-t-2xl px-8 py-16 bg-gradient-to-t from-pink-100 via-pink-50 to-white text-gray-800">
      <div
        ref={footerContentRef}
        className="footer-content relative flex flex-col md:flex-row justify-between items-start opacity-100 transform translate-y-0 duration-1000 z-10"
      >
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 mb-8 md:mb-0 w-full md:w-auto">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-pink-600 font-semibold text-xl uppercase mb-4">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mb-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <Link
                      className="hover:text-pink-500 text-lg"
                      target="_blank"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-left md:text-right mb-8 md:mb-0">
          <h3 className="text-pink-600 font-semibold text-xl uppercase mb-4">
            Let&apos;s Connect
          </h3>
          <p
            className="text-lg md:text-2xl font-light mb-5 cursor-pointer hover:text-pink-500 transition-colors"
            onClick={() => window.location.href = "mailto:abc@company.com"}
          >
            abc@company.com
          </p>
          <p
            className="text-lg md:text-2xl font-light cursor-pointer hover:text-pink-500 transition-colors"
            onClick={() => window.location.href = "tel:+1123456789"}
          >
            +1 123 456 789
          </p>
        </div>
      </div>

      <div className="w-full h-1 mt-4 bg-transparent group relative">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-600 space-y-4 uppercase md:space-y-0">
          <p
          className="hover:text-gray-400 cursor-pointer"
          onClick={() => router.push("/version")}
        >
          V SX-ACT 30r.mx.50.10
        </p>
        <p>© {currentYear} North N Loans. All rights reserved.</p>
        <div className="flex items-center space-x-3">
          <span className="transform rotate-180 transition-transform duration-300">🌐</span>
          <p className="text-lg md:text-xl">Based in CA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
