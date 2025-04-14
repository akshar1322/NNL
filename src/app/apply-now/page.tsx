// app/apply/page.tsx
import MultiStepForm from '@/components/forms/MultiStepForm';
import FSQ from '@/components/UI/FSQ';
import Image from 'next/image';
import localFont from 'next/font/local';


//  fonts

const dansregular = localFont({
    src: "../../fonts/DancingScript/DancingScript-Regular.ttf"
   })


export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#333]">

      {/* Banner Section with heading */}
      <section className="relative w-full h-[60vh] bg-black">
        <Image
          src="/images/bg/arlington-research-Kz8nHVg_tGI-unsplash.jpg"
          alt="Banner"
          fill
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-5xl md:text-5xl font-bold text-white drop-shadow-lg">Get Started With Your Loan Application <span className={`${dansregular.className} text-[#56CBF9] `}>Today !</span></h1>
        </div>
      </section>

      {/* MultiStep Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-9xl mx-auto px-6">
          <MultiStepForm />
        </div>
      </section>
      <div className="bg-white py-20 px-6">
        <div className="max-w-9xl mx-auto px-6">
          <FSQ />
        </div>
      </div>
    </main>
  );
}
