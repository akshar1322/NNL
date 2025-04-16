// app/apply/page.tsx
'use client';
import React, { useEffect } from 'react';
import MultiStepForm from '@/components/forms/MultiStepForm';
import FSQ from '@/components/UI/FSQ';
import Image from 'next/image';
// import localFont from 'next/font/local';


//  fonts

// const dansregular = localFont({
//     src: "../../fonts/DancingScript/DancingScript-Regular.ttf"
//    })


export default function ApplyPage() {
   useEffect(() => {
      document.title = 'Apply Now | North N Loans';
    }, []);
  return (
    < >
    <main className="min-h-screen bg-white flex flex-col justify-between">
    <main className="pt-24 bg-white px-4 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-lg mb-12">
        <Image
          src="/images/bg/israel-andrade-YI_9SivVt_s-unsplash.jpg" // change path to your actual image
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 </>/40 flex items-center justify-center">
          <h1 className="text-green-400 text-4xl md:text-5xl font-bold">Apply Now</h1>
        </div>
      </section>
    </main>
      <MultiStepForm/>
      <FSQ/>
    </main>
    </>
  );
}
