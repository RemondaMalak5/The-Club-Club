import React from 'react'
import Hero from '../component/Home/Hero'
import News_Home from '../component/Home/News_Home'
import Gallary_Home from '../component/Home/Gallary_Home'
import Offers_Home from '../component/Home/Offers_Home'
import Services_home from '../component/Home/Services_home'
import Video_home from '../component/Home/Video_home'
import Activities_Home from '../component/Home/Activities_Home'

const October_Home = () => {
  return (
    <div>
      <Hero/>
      <News_Home/>
      <Gallary_Home/>
      <Offers_Home/>
      <Services_home/> 
      <Video_home/> 
      <Activities_Home/>
    </div>
  )
}

export default October_Home
