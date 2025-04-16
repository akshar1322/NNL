'use client';

import Image from 'next/image';
import { loanStepsData } from '@/data/loanStepsData';
import localFont from 'next/font/local';
import ApplyButton from '@/components/share/Apply-BT';
//  fonts

const dansregular = localFont({
    src: "../../fonts/DancingScript/DancingScript-Regular.ttf"
   })

//    const SatoshiRegular = localFont({
//     src: '../../fonts/Satoshi/Fonts/Satoshi-Regular.ttf'
//   });

  const SatoshiBold = localFont({
    src: '../../fonts/Satoshi/Fonts/Satoshi-Bold.ttf'
  });

  const handleApplyClick = () => {
    window.location.href = '/apply-now';
  };


const GetALoanSteps = () => {
  return (
    <section className={`${SatoshiBold.className} relative bg-white py-20 px-6 md:px-20 overflow-hidden`}>
      {/* Blue ellipse background */}
      <div className="absolute top-0 left-[-200px] w-[600px] h-[600px] bg-blue-400 rounded-full blur-[200px] z-[1]" />
      <div className="absolute top-0 right-[-200px] w-[600px] h-[600px] bg-green-400  rounded-full blur-[200px] z-[1]" />
      {/* Heading */}
      <div className="text-center mb-16 relative z-[2] max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-4">Get a Loan in <span className={`${dansregular.className} text-[#81f956] text-5xl `}>3 Easy Steps</span> </h2>
        <p className="text-lg text-gray-600">
        <span className={`${dansregular.className} text-[#56CBF9] text-2xl font-bold `}>Follow these simple</span>  steps to get started with your loan application.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-[2]">
        {loanStepsData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            {/* Background image */}
            <div className="absolute inset-0 z-[1]">
              <Image
                src={item.bgImage}
                alt={`Step ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Step badge (top-left corner) */}
            <div className={`${dansregular.className} absolute text-5xl top-0 right-0 bg-[#56CBF9]
            text-[#56CBF9] text-stroke-3  font-semibold px-8 py-8  z-[2] shadow-md`}>
              {index + 1}
            </div>

            {/* Glass effect content */}
            <div className="absolute bottom-0 w-full z-[2] backdrop-blur-xl bg-white/20 p-6 rounded-t-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="text-white max-w-sm">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>

            {/* Spacer for card height */}
            <div className="h-[350px]" />
          </div>
        ))}
        {/* CTA Button */}
        <div className="hidden  md:block">
          <ApplyButton
            label="Apply Now"
            onClick={handleApplyClick}
          />
        </div>
      </div>
    </section>
  );
};

export default GetALoanSteps;
