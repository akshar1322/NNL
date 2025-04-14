import React from 'react'
// import Navbar from '../Elements/Navbar'
// import Footer from '../Elements/Footer'
import HeroSection from '../sections/HeroSection'
import MultiStepForm from '../forms/MultiStepForm'

function gpage() {
  return (
    <>
        <main>
            <section className=" min-h-screen bg-white flex flex-col justify-between">
                {/* <Navbar/> */}
                <HeroSection/>
                <MultiStepForm/>

                <br /> <br />

                {/* <Footer/> */}
            </section>
        </main>
    </>
  )
}

export default gpage
