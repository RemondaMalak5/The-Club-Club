
import React from 'react'
import Hero from '../../components/landing_page/Hero'
import Why_chooes from '../../components/landing_page/Why_chooes'
import Our_Branch from '../../components/landing_page/Our_Branch'
import Gallary from '../../components/landing_page/Gallary'
import Locations from '../../components/landing_page/Locations'
// import Our_Club from '../../components/landing_page/Our_Club'

const Landing_page = () => {
  return (
    <>

      <section id="home" className=" scroll-mt-0">
        <Hero />
      </section>
{/* 
        <section id="why" className=" scroll-mt-0">
        <Our_Club/>
      </section> */}

      <section id="why" className=" scroll-mt-0">
        <Why_chooes />
      </section>

      <section id="branches" className=" scroll-mt-0">
        <Our_Branch />
      </section>

      <section id="gallery" className="py-10 scroll-mt-0">
        <Gallary />
      </section>
       <section id="location" className="py-2 scroll-mt-0">
        <Locations/>
      </section>
    </>
  )
}

export default Landing_page
