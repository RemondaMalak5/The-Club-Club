// import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next';
// import assets from '../../assets/assets';
// import { useNavigate } from 'react-router';
// import i18next from 'i18next';
// import Pagination from '@mui/material/Pagination';
// import PaginationComponent from '../Shared_Components/PaginationComponent';

// const Services_contant = () => {
//     const [t] = useTranslation();
//     const navigate = useNavigate();

//     // ------------------ Fake API Data ------------------
//     const services = [
//         { image: assets.services_1, title: "Yoga & Wellness", description: "Mindful yoga sessions and wellness programs for body and mind balance." },
//         { image: assets.services_2, title: "Events", description: "Learn to swim or improve your technique with our expert swimming instructors." },
//         { image: assets.services_3, title: "Personal Training", description: "One-on-one coaching tailored to your fitness goals with certified trainers." },
//         { image: assets.services_3, title: "Nutrition Coaching", description: "Personalized diet plans and nutrition advice for better health." },
//         { image: assets.services_1, title: "Pilates Sessions", description: "Improve your posture, flexibility, and core strength." },
//         { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },
//                 { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },
//         { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },
//         { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },

//     ];

//     // ------------------ Filter Logic ------------------
//     const categories = ["all", ...new Set(services.map(e => e.title))];
//     const [selected, setSelected] = useState("all");

//     const filteredServices = selected === "all"
//         ? services
//         : services.filter(e => e.title === selected);

//     return (
//         <div >
//             <img
//                 src={assets.services_1}
//                 alt="services_banner"
//                 className='w-full h-96  object-cover'
//             />

//             {/* ------- Filter Buttons ------- */}
//             <div className="flex flex-wrap justify-center items-center py-6 px-10 gap-3">
//                 {categories.map((cat, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setSelected(cat)}
//                         className={`px-5 py-2 rounded-lg font-semibold border text-[18px] transition-all duration-300 
//                             ${selected === cat ? "bg-[#21857C] text-white border-[#21857C]" : "border-[#21857C] text-[#21857C] hover:bg-[#E6F3F2]"}
//                         `}
//                     >
//                         {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                     </button>
//                 ))}
//             </div>

//             {/* ------- Services Cards ------- */}
//             <div className='flex flex-wrap w-full px-20 py-10'>
//                 {filteredServices.map((item, index) => (
//                     <div className="xl:w-1/3 w-full px-2 py-3" key={index}>
//                         <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <h5 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h5>
//                                 <p className="text-gray-600 mb-4">{item.description}</p>

//                                 <button onClick={() => navigate("/services_details")} className="px-4 py-2 text-[#21857C] rounded-2xl border border-[#21857C] w-full hover:bg-[#21857C] hover:text-white transition-all duration-300">
//                                     Learn More
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 {filteredServices.length === 0 && (
//                     <p className="text-gray-500 w-full text-center py-10 text-xl">
//                         No services found for "{selected}"
//                     </p>
//                 )}
//             </div>
//            <PaginationComponent/>
//         </div>
//     )
// }

// export default Services_contant
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import assets from '../../../../../assets/assets';
import PaginationComponent from '../../../../../components/Shared_Componant/PaginationComponent';
import { useNavigate } from 'react-router-dom';

const Services_contant = () => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const paginationRef = useRef(null);

  // ------------------ Static Data ------------------
  const services = [
    { image: assets.services_1, title: "Yoga & Wellness", description: "Mindful yoga sessions and wellness programs for body and mind balance." },
    { image: assets.services_2, title: "Events", description: "Learn to swim or improve your technique with our expert swimming instructors." },
    { image: assets.services_3, title: "Personal Training", description: "One-on-one coaching tailored to your fitness goals with certified trainers." },
    { image: assets.services_3, title: "Nutrition Coaching", description: "Personalized diet plans and nutrition advice for better health." },
    { image: assets.services_1, title: "Pilates Sessions", description: "Improve your posture, flexibility, and core strength." },
    { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },
    { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },
    { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },
    { image: assets.services_2, title: "Kids Swimming", description: "Fun and safe swimming classes designed for kids." },
  ];

  // ------------------ Filter ------------------
  const categories = ["all", ...new Set(services.map(e => e.title))];
  const [selected, setSelected] = useState("all");

  const filteredServices =
    selected === "all"
      ? services
      : services.filter(e => e.title === selected);

  // ------------------ Pagination ------------------
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredServices.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <section dir={i18next.language === "ar" ? "rtl" : "ltr"}>
      <img
        src={assets.services_1}
        alt="services_banner"
        className="w-full h-96 object-cover"
      />

      {/* ------- Filter Buttons ------- */}
      <div className="flex flex-wrap justify-center items-center py-6 px-10 gap-3">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => {
              setSelected(cat);
              setCurrentPage(1); // مهم جدًا مع الفلترة
            }}
            className={`px-5 py-2 rounded-lg font-semibold border text-[18px] transition-all duration-300 
              ${
                selected === cat
                  ? "bg-[#21857C] text-white border-[#21857C]"
                  : "border-[#21857C] text-[#21857C] hover:bg-[#E6F3F2]"
              }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* ------- Services Cards ------- */}
      <div className="flex flex-wrap w-full px-20 py-10" ref={paginationRef}>
        {currentItems.map((item, index) => (
          <div className="xl:w-1/3 w-full px-2 py-3" key={index}>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h5>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <button
                  onClick={() => navigate("/branches/6-october/Services/services_details")}
                  className="px-4 py-2 text-[#21857C] rounded-2xl border border-[#21857C] w-full hover:bg-[#21857C] hover:text-white transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}

        {currentItems.length === 0 && (
          <p className="text-gray-500 w-full text-center py-10 text-xl">
            No services found for "{selected}"
          </p>
        )}
      </div>

      {/* ------- Pagination ------- */}
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(filteredServices.length / itemsPerPage)}
        paginationRef={paginationRef}
      />
    </section>
  );
};

export default Services_contant;
