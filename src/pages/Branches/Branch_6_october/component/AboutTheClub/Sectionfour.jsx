import React from 'react'
import assets from './../../assets/assets';

const Sectionfour = () => {
  return (
    <section >
    <div className='about_club_four '> 

        <h2 className="text-white text-2xl">Our Vision</h2>
        <div className='info_about_club_four p-5'>
            <p className='text-white text-xl'>To be the pioneers & Leaders in Sports, and be a prestigious destination in qualifying champions, distinguished sports, and access to the first nominal podiums.</p>


        </div>

        <div className='icon_about_club_four '>
                  <div>
                    <img src={assets.icon_about_club_four}/>
                  </div>
        </div> 
    </div>
</section>
  )
}

export default Sectionfour