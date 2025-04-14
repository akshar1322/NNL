import React from 'react'
import Navbar from '../Elements/Navbar'
import Footer from '../Elements/Footer'
import HeroSection from '../sections/HeroSection'

function gpage() {
  return (
    <>
        <main>
            <section className=" min-h-screen flex flex-col justify-between">
                <Navbar/>
                <HeroSection/>

                <br /> <br />

                <Footer/>
            </section>
        </main>
    </>
  )
}

export default gpage
