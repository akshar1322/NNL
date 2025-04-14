// app/components/Navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ApplyButton from '@/components/share/Apply-BT';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/apply-now' },
];

const handleApplyClick = () => {
  window.location.href = '/apply-now';
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="backdrop-blur-md bg-white/30 border border-white/30 shadow-lg rounded-full px-6 py-3 mx-auto w-[95%] mt-4 fixed z-50 top-0 left-0 right-0 transition-all"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/icons/svg/NNL Forest Green  Logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Links */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:space-x-8 space-y-4 md:space-y-0 text-lg font-medium flex-col md:flex-row absolute md:static bg-white/80 md:bg-transparent left-0 right-0 top-20 md:top-auto p-6 md:p-0 z-10 rounded-3xl shadow-md md:shadow-none`}
        >
          {navLinks.map((link) => (
            <li key={link.name.toLowerCase()}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.name.toLowerCase())}
                className={`transition-all duration-300 hover:text-[#56CBF9] ${
                  activeLink === link.name.toLowerCase() ? 'text-[#56CBF9]' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
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
