import React from 'react'
// import Navbar from '../Elements/Navbar'
// import Footer from '../Elements/Footer'
import HeroSection from '../sections/HeroSection'
import MultiStepForm from '../forms/MultiStepForm'
import Truseed from '../sections/trused'
import WhatWeOffer from '../sections/WhatWeOffer'
import AboutUs from '../sections/AboutUs'
import GetALoanSteps from '../sections/GetALoanSteps'
import WhyChooseUs from '../sections/WhyChooseUs'

function gpage() {
  return (
    <>
        <main>
            <section className=" min-h-screen bg-white flex flex-col justify-between">
                {/* <Navbar/> */}
                <HeroSection/>
                <MultiStepForm/>
                <Truseed/>
                <WhatWeOffer/>
                <AboutUs/>
                <GetALoanSteps/>
                <WhyChooseUs/>
                <br /> <br />

                {/* <Footer/> */}
            </section>
        </main>
    </>
  )
}

export default gpage
