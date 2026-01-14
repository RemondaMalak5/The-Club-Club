import React from 'react'
import { TbCertificate2 } from "react-icons/tb";
import Title_2 from '../Shared_Componant/Title_2';
import Title_3 from '../Shared_Componant/Title_3';



const Why_chooes = () => {
  const arr = [
    { icon: <TbCertificate2/>, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
  ]

  return (
    <div>
      <section className="px-24n py-5 " >
        <Title_2 title={"Why Choose The Club Club?"}/>
        <Title_3 title={"We offer you a complete sports and social experience with the highest quality"}/>
        <div className='flex flex-wrap px-64 gap-4 justify-center py-6'>
          {arr.map((e, index) => (
            <div className='bg-[#E9F0F0] w-[250px] h-[200px]  rounded-lg flex flex-col  p-4 ' key={index}>
              <span className='p-4  bg-[#00786F] text-[28px] text-white rounded-md w-fit'> {e.icon} </span>
              <h2 className='text-[18px] font-semibold '> {e.title} </h2>
              <p className='text-[#4B4B4B]'> {e.discription} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Why_chooes
