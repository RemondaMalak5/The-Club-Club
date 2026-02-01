import React from 'react'
import assets from './../../assets/assets';

const Sectionthree = () => {
  return (
    <section>
    <div className='about_club h-[100vh] '>
        <img src={assets.our_club_bg_1} />
        <h2>Our Goals</h2>
        <div className='info_about_club p-5'>
            <p className='pb-7'>1.Build a sports & social community that affects positively the Egyptian society.</p>

       <p className='pb-7'>2. Providing the highest quality level of sports, social activities and Facilities.</p>
       <p className='pb-5'> 3.Seeking to be one of the best clubs and to maintain the provided Quality to members and non-members.</p>
      <p className='pb-7'>4.Build a generation of young people who are able to use their skills and abilities by providing sports games.</p>
         <p className='pb-5'>5.Developing the athletic, physical, social and spiritual side of the members through the practice of various activities.</p>
         <p className='pb-5'>6.Work to create a sports community for the club.</p>
         <p className='pb-5'>7.Invest members' time positively.</p>
          <p>8.Discover volunteer ideas that are compatible with the needs of members, and then develop their skills.</p>
        </div>

        <div className='icon_about_club '>
                  <div>
                    <img src={assets.icon_about_club_three} />
                  </div>
        </div>
    </div>
</section>
  )
}

export default Sectionthree