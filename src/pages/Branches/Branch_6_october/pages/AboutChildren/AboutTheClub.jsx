import About_Template from '../../components/AboutTheClub/About_Template';
import About_Hero from '../../components/AboutTheClub/About_Hero';
import { useEffect } from 'react';

const AboutTheClub = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  return (
    <section className='flex flex-col gap-4 mb-4'>
      <About_Hero />
      <About_Template />
    </section>
  )
}

export default AboutTheClub