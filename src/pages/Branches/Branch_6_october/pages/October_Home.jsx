import React from 'react'
import Hero from '../component/Home/Hero'
import News_Home from '../component/Home/News_Home'
import Gallary_Home from '../component/Home/Gallary_Home'
import Services_home from '../component/Home/Services_home'
import Video_home from '../component/Home/Video_home'
import Activities_Home from '../component/Home/Activities_Home'
import OurClub_home from '../component/Home/OurClub_home'

const October_Home = () => {
  return (
    <div>
      <Hero/>
      <OurClub_home/>
      <News_Home/>
       <Video_home/> 
      <Services_home/> 
      <Activities_Home/>
        <Gallary_Home/>
    </div>
  )
}

export default October_Home
