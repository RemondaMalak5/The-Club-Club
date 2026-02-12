// import React from 'react'
// import assets from '../../assets/assets'
// import { useTranslation } from 'react-i18next';

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//    const listNav = [
//     { name: t("Home"), id: "home" },
//     { name: t("About"), id: "about" },
//     { name: t("Branches"), id: "branches" },
//     { name: t("Compare"), id: "compare" },
//     { name: t("Why us?"), id: "why" },
//     { name: t("Booking"), id: "booking" },
//     { name: t("Gallery"), id: "gallery" },
//     { name: t("Contact Us"), id: "location" },
//   ];
  
//    const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   console.log(i18n.language);
//   return (

//     <nav className=" shadow-md bg-white  rounded-lg flex justify-between items-center py-2 px-8">


//       <div className="flex items-center  px-11 ">
//         <img
//           src={assets.theClub_Logo}
//           alt="The Club Club Logo"
//           className="w-[68px] h-[68px]"
//         />
//          <ul className="flex gap-6 font-semibold px-10">
//           {listNav.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => handleScroll(item.id)}
//               className="cursor-pointer hover:underline"
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className='flex justify-end '>
//         <button className="text-white bg-[#00786F] px-5 py-2 rounded-xl font-bold hover:bg-[#00584D] transition ">
//           {t("Book Now")}
//         </button>
//         <div className="ml-4 flex gap-2">
//           <button
//             onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}
//             className="px-2 py-1 border rounded "
//           >
//             {i18n.language === "en" ? "AR" : "EN"}
//           </button>
//           {/* <button
//             onClick={() => i18n.changeLanguage("en")}
//             className="px-2 py-1 border rounded "
//           >
//             EN
//           </button> */}
//         </div>

//       </div>

//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import assets from "../../assets/assets";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const listNav = [
    { name: t("Home"), id: "home" },
    { name: t("About"), id: "our_club" },
    { name: t("Branches"), id: "branches" },
    { name: t("Why us?"), id: "why" },
    { name: t("Booking"), id: "booking" },
    { name: t("Gallery"), id: "gallery" },
    { name: t("Contact Us"), id: "location" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // يقفل المينيو في الموبايل
    }
  };

  return (
    <nav className="shadow-md bg-white rounded-lg px-4 py-2">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={assets.theClub_Logo}
            alt="The Club Logo"
            className="w-[60px] h-[60px]"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-semibold px-6">
            {listNav.map((item, index) => (
              <li
                key={index}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer text-black hover:text-[#00786F]"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Book Now */}
          <button className="hidden sm:block text-white bg-[#00786F] px-5 py-2 rounded-xl font-bold hover:bg-[#00584D] transition">
            {t("Book Now")}
          </button>

          {/* Language */}
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
            }
            className="px-2 py-1 border rounded"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden mt-4 space-y-4 bg-white shadow rounded-lg p-4 font-semibold">
          {listNav.map((item, index) => (
            <li
              key={index}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer text-black hover:text-[#00786F]"
            >
              {item.name}
            </li>
          ))}

          <button className="w-full text-white bg-[#00786F] py-2 rounded-xl font-bold">
            {t("Book Now")}
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
