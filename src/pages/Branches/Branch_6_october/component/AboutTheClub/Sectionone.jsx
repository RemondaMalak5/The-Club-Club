import React from 'react'
import assets from './../../assets/assets';

const Sectionone = () => {
  return (
    <section>
        <div className='about_club h-[100vh]  '>
            {/* <img src={assets.our_club_bg_1} /> */}
            <h2>About The Club</h2>
            <div className='info_about_club p-5'>
                <p className='pb-11'>The Club's main branch is Located at 6 October City near Juhayna Square, in the Dahshur link between Juhayna Square and Al-Wahat Road, on 20 Feddan.</p>

           <p className='pb-14'>The Club includes a number of sports and entertainment facilities, parks and green areas, and service and sports facilities. Its cost is about EGP 665 million. It aims to include more than 80,000 active members.The Club includes many Facilities, 14 playgrounds, including 4 five-a-side, 4 multi-court courts, 6 for various combat games, a gymnastics and squash hall, a swimming pool complex, including an Olympic one, and a service area that includes a bank branch and a 20-square-meter.</p>
 
          <p>The Club is the first commercial Project affiliated with the Ministry of Youth and Sports directly and managed by the private sector (UFC GYM EGYPT). We are planning to expand to Egypt.</p>
            </div>

            <div className='icon_about_club '>
                      <div>
                        <img src={assets.icon_about_club} />
                      </div>
            </div>
        </div>
    </section>
  )
}

export default Sectionone