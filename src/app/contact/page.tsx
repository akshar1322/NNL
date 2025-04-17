'use client'
import { useEffect } from 'react'
import React from 'react'
import WhatWeOffer from '@/components/sections/WhatWeOffer';
import Image from 'next/image';
import Navbar from '@/components/Elements/Navbar';
import Footer from '@/components/Elements/Footer';

function ContactUs() {
   useEffect(() => {
        document.title = 'Contact Usv| North N Loans';
      }, []);

  return (
    < >
    <Navbar/>
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
    <Footer/>
    </>
  )
}

export default ContactUs;
