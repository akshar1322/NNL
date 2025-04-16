import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local';


//  fonts

const dansregular = localFont({
    src: "../../fonts/DancingScript/DancingScript-Regular.ttf"
   })

   const SatoshiRegular = localFont({
    src: '../../fonts/Satoshi/Fonts/Satoshi-Regular.ttf'
  });
  const SatoshiBold = localFont({
    src: '../../fonts/Satoshi/Fonts/Satoshi-Bold.ttf'
  });

function trused() {
  return (
    <>
        <section className={`${SatoshiBold.className} relative bg-white py-20 px-6 md:px-20 overflow-hidden`}>
        {/* Green ellipse background effect */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-400 rounded-full blur-[200px] z-[1]" />

        {/* Logo grid */}
        <div className="relative z-[3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {/* Logo 1 */}
            <div className="space-y-4">
            <Image width={100} height={100} src="/images/icons/png/application.png" alt="Logo 1" className="mx-auto h-30 w-auto" />
            <h3 className="text-4xl font-semibold text-black">Loan Application</h3>
            <p className={` ${SatoshiRegular.className} text-gray-600 text-xl `}>
             Our loan application is quick and easy, taking only
             <samp className={`${dansregular.className} text-[#56CBF9] text-2xl`}> a few minutes </samp> to complete. Rest assured, all your information is stored securely and confidentially.
             </p>
            </div>

            {/* Logo 2 */}
            <div className="space-y-4">
            <Image width={100} height={100} src="/images/icons/png/trust.png" alt="Logo 2" className="mx-auto h-30 w-auto" />
            <h3 className="text-4xl font-semibold text-black">Trusted</h3>
            <p className={` ${SatoshiRegular.className} text-gray-600 text-xl `}>
             At North n Loans , we believe in <span className={`${dansregular.className} text-[#56CBF9] text-2xl`} >transparency.</span> From our straightforward processes to our clear pricing, we ensure everything is open and easy to understand.
            </p>
            </div>

            {/* Logo 3 */}
            <div className="space-y-4">
            <Image width={100} height={100} src="/images/icons/png/expert.png" alt="Logo 3" className="mx-auto h-30 w-auto" />
            <h3 className="text-4xl font-semibold text-black">Expert Agent</h3>
            <p className={` ${SatoshiRegular.className} text-gray-600 text-xl `}>
            Our team of expert agents at North n Loans is here to help. We <span className={`${dansregular.className} text-[#56CBF9] text-2xl `} >understand</span> that expertise and <span>professionalism</span> make all the difference when it comes to handling your financial needs.
            </p>
            </div>
        </div>
        </section>

    </>
  )
}

export default trused
