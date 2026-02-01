import React from 'react'
import assets from './../../assets/assets';

const Sectiontwo = () => {
  return (
    <section className=' h-[100vh]'>
        <div className='about_club_two h-[100vh] '>
            <img src={assets.our_club_bg_1} />
            <h2>Our Value</h2>
            <div className='info_about_club_two p-5'>
                <p className='pb-11'><span >Commitment</span> We are committed to all our duties towards all stakeholders and strive to fulfill them. We place our stakeholders as a core focus in everything we do. and we constantly look forward to improving our performance and service.</p>

           <p className='pb-14'><span>Transparency</span> We conduct our activities with complete transparency, and we pledge to be responsible and open in all our practices to build trust, competence, and mutual respect at all levels.</p>
           <p className='pb-14'><span>Partnership</span> We believe in the club that we succeed when we work together, through various partnerships with potential parties, we believe in the power of achievement.</p>
           <p className='pb-14'> <span>Empowerment</span> We strive with passion in the club to empower all stakeholders, including players, talented players, members, administrators, and support teams to provide their best performance, and the horizon of empowerment expands to include volunteers and the community.</p>

          <p>The Club is the first commercial Project affiliated with the Ministry of Youth and Sports directly and managed by the private sector (UFC GYM EGYPT). We are planning to expand to Egypt.</p>
            </div>
 
            <div className='icon_about_club_two '>
                      <div>
                        <img src={assets.icon_about_club_two}/>
                      </div>
            </div> 
        </div>
    </section>
  )
}

export default Sectiontwo