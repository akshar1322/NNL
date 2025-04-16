'use client';

import Image from 'next/image';
import { whatWeOfferData } from '@/data/whatWeOffer';
import localFont from 'next/font/local';


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



const WhatWeOffer = () => {
  return (
    <section className={`${SatoshiBold.className} relative bg-white py-20 px-6 md:px-20 overflow-hidden`}>
      {/* Blue ellipse background effect */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400 rounded-full blur-[250px] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">What <span  className={`${dansregular.className} text-[#81f956] text-5xl `} > We </span> Offer</h2>
        <p className="text-2xl text-gray-600 mb-16">
          Explore our range of <span className={`${dansregular.className} text-[#81f956] text-5xl `} >financial solutions</span> designed to meet your needs.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {whatWeOfferData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl p-10 text-left hover:shadow-3xl transition-all duration-300"
            >
              <div className="w-full h-52 mb-6 relative rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">{item.title}</h3>
              <p className="text-lg text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
