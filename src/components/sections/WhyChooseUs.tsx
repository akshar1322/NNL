'use client';

import Image from 'next/image';
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

const WhyChooseUs = () => {
  return (
    <section className={`${SatoshiBold.className} relative bg-white py-20 px-6 md:px-20 overflow-hidden`}>
      {/* Green ellipse background */}
      <div className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] bg-green-300 rounded-full blur-[200px] z-0" />

      {/* Heading + description */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <h2 className="text-5xl font-bold mb-4 text-black">
          Why <span className={`${dansregular.className} text-[#56CBF9] text-5xl font-bold `}>Choose</span> Us?
        </h2>
        <p className="text-lg text-gray-700">
          Your Financial Success is Our Priority
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {/* Left Box */}
        <div className="relative w-full h-[450px] bg-blue-100 rounded-3xl p-6">
          {/* Image overlapping */}
          <div className="absolute -top-5 left-6 z-10 rounded-2xl overflow-hidden w-[250px] h-[350px] shadow-lg">
            <Image
              src="/images/bg/effydesk-hsSSERE7q7w-unsplash.jpg" // Replace with your image
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 items-start">
          {[
            {
              question: 'Wide Range of Loan Options',
              answer:
                'From personal to business loans, we cover every financial need.',
            },
            {
              question: 'Quick and Easy Process',
              answer:
                'Streamlined application ensures fast and hassle-free approval.',
            },
            {
              question: 'Competitive Rates',
              answer:
                'We offer some of the lowest interest rates to keep your costs low.',
            },
            {
              question: 'Flexible Terms',
              answer:
                'We customize repayment plans to fit your unique situation.',
            },
            {
              question: 'Trusted Lender Network',
              answer:
                'Our strong partnerships give you better access to top lenders.',
            },
            {
              question: 'Expert Guidance and Support',
              answer:
                'Our experts are with you every step of the way, 24/7.',
            },
          ].map((item, i) => (
            <div key={i}>
              <h4 className="font-semibold text-md text-black mb-1">{item.question}</h4>
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
