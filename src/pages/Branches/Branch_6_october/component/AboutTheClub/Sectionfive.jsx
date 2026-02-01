import React from 'react'
import assets from './../../assets/assets';

const Sectionfive = () => {
  return (
    <section className='mb-10'>
    <div className='about_club_five '>
        
        <h2 className="text-2xl text-white" >Our Mission</h2>
        <div className='info_about_club_five p-5'>
            <p className='text-xl text-white'>Introduce a positive experience in managing international academies and creating champions in various sports for players and their families of all ages and abilities to achieve excellence.</p>

        </div>

        <div className='icon_about_club_five '>
                  <div>
                    <img src={assets.icon_about_club_five}  className='w-[100%]'/>
                  </div>
        </div>
    </div>
</section>
  )
}

export default Sectionfive