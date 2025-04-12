import React from 'react'
import Navbar from '../Elements/Navbar'
import Footer from '../Elements/Footer'

function gpage() {
  return (
    <>
        <main>
            <section className="bg-black min-h-screen flex flex-col justify-between">
                <Navbar/>

                <br /> <br />

                <Footer/>
            </section>
        </main>
    </>
  )
}

export default gpage
