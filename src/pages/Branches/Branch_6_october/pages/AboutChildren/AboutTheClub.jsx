
import { useEffect } from 'react';
import About_Hero from '../../component/AboutTheClub/About_Hero';
import About_Template from '../../component/AboutTheClub/About_Template';

const AboutTheClub = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  return (
    <section className='flex flex-col gap-4 mb-4'>
      <About_Hero/>
      <About_Template />
    </section>
  )
}

export default AboutTheClub