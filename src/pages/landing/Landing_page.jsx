// import React from 'react'
// import Hero from '../../components/landing_page/Hero'
// import Why_chooes from '../../components/landing_page/Why_chooes'
// import Our_Branch from '../../components/landing_page/Our_Branch'
// import Gallary from '../../components/landing_page/Gallary'

// const Landing_page = () => {
//   return (
//     <div>
//       <Hero/>
//       {/* <Our_Club/> */}
//       <Why_chooes/>
//       <Our_Branch/>
//       <Gallary/>
//     </div>
//   )
// }

// export default Landing_page
import React from 'react'
import Navbar from '../../components/landing_page/Navbar'
import Hero from '../../components/landing_page/Hero'
import Why_chooes from '../../components/landing_page/Why_chooes'
import Our_Branch from '../../components/landing_page/Our_Branch'
import Gallary from '../../components/landing_page/Gallary'

const Landing_page = () => {
  return (
    <>
    

      <section id="home" className=" scroll-mt-20">
        <Hero />
      </section>

      <section id="why" className=" scroll-mt-0">
        <Why_chooes />
      </section>

      <section id="branches" className=" scroll-mt-0">
        <Our_Branch />
      </section>

      <section id="gallery" className="py-10 scroll-mt-32">
        <Gallary />
      </section>
    </>
  )
}

export default Landing_page
