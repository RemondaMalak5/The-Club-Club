import React from "react";
import { TbCertificate2 } from "react-icons/tb";
import Title_2 from "../Shared_Componant/Title_2";
import Title_3 from "../Shared_Componant/Title_3";

const Why_chooes = () => {
  const arr = [
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
    { icon: <TbCertificate2 />, title: "Certified Coaches", discription: "Social and recreational activities suitable for all family members." },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16 xl:px-64">
      <Title_2 title="Why Choose The Club Club?" />
      <Title_3 title="We offer you a complete sports and social experience with the highest quality" />

      <div className="flex flex-wrap justify-center gap-6 py-8">
        {arr.map((e, index) => (
          <div
            key={index}
            className="
              bg-[#E9F0F0] 
              w-full sm:w-[45%] lg:w-[30%] 
              max-w-[270px] 
              h-[200px] 
              rounded-lg 
              flex flex-col p-4
            "
          >
            <span className="p-4 bg-[#00786F] text-[28px] text-white rounded-md w-fit">
              {e.icon}
            </span>
            <h2 className="text-[18px] font-semibold mt-2">{e.title}</h2>
            <p className="text-[#4B4B4B] text-sm mt-1">{e.discription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why_chooes;
