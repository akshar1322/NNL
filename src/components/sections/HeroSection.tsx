// app/components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from(headingRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    tl.from(paraRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8');
  }, []);

  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center px-6 md:px-16"
      style={{ backgroundImage: `url('../images/bg/hero-bg.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-white text-center md:text-left"
        >
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Welcome to Company Name
          </h1>
          <p
            ref={paraRef}
            className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-6"
          >
            We provide innovative solutions to grow your business. Join us today to discover how we can elevate your journey.
          </p>

          {/* Buttons Wrapper - Insert your Button components here */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            {/* Replace below divs with your Button component */}
            <div className="bg-green-600 px-6 py-3 rounded-full text-white text-lg font-medium cursor-pointer hover:bg-green-700 transition"
            onChange={() => window.location.href = '/apply-now'}
            onClick={() => window.location.href = '/apply-now'}
            >
              Get Started

            </div>
            <div className="bg-white px-6 py-3 rounded-full text-green-600 text-lg font-medium cursor-pointer hover:bg-gray-100 transition">
              Learn More
            </div>
          </div>
        </motion.div>

        {/* Right Empty / Future Graphic space */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0" />
      </div>
    </section>
  );
};

export default HeroSection;
