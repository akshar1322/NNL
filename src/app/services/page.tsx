'use client';
import WhatWeOffer from '@/components/sections/WhatWeOffer';
import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';

const ServicesPage = () => {
  useEffect(() => {
        document.title = 'Service | North N Loans';
      }, []);
  return (
    < >
    <main className="min-h-screen bg-white flex flex-col justify-between">
    <main className="pt-24 bg-white px-4 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-lg mb-12">
        <Image
          src="/images/bg/jason-goodman-nF0nQuqBsrI-unsplash.jpg" // change path to your actual image
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 </>/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Services</h1>
        </div>
      </section>
    </main>
        <WhatWeOffer/>
    </main>
    </>
  );
};

export default ServicesPage;
