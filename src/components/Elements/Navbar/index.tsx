// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ApplyButton from '@/components/share/Apply-BT';

// Local Comoponent


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const handleApplyClick = () => {
    window.location.href = '/apply-now';
  };

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };



  return (
    <nav className="bg-white shadow-md rounded-full px-4 py-3 w-full">
      <div className="flex items-center justify-between">
        {/* Logo Left Side */}
        <div className="flex items-center">
          <Image
            src="/images/icons/svg/NNL Forest Green  Logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Center Nav Links */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:space-x-8 space-y-4 md:space-y-0 text-lg font-medium flex-col md:flex-row absolute md:static bg-white md:bg-transparent left-0 right-0 top-20 md:top-auto p-6 md:p-0 z-10 rounded-xl shadow-md md:shadow-none`}
        >
          {navLinks.map((link) => (
            <li key={link.name.toLowerCase()}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.name.toLowerCase())}
                className={`transition-colors duration-200 hover:text-green-700 ${
                  activeLink === link.name.toLowerCase() ? 'text-green-700' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button Right Side */}
        <div className="hidden md:block">
            <ApplyButton
                label="Apply Now"
                onClick={handleApplyClick}

             />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
