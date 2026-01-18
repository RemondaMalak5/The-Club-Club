import React from 'react'
import assets from '../../assets/assets'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
   const listNav = [
    { name: t("Home"), id: "home" },
    { name: t("About"), id: "about" },
    { name: t("Branches"), id: "branches" },
    { name: t("Compare"), id: "compare" },
    { name: t("Why us?"), id: "why" },
    { name: t("Booking"), id: "booking" },
    { name: t("Gallery"), id: "gallery" },
    { name: t("Contact Us"), id: "contact" },
  ];
  
   const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (

    <nav className="w-full shadow-md bg-white  rounded-lg flex justify-between items-center py-2 px-8">


      <div className="flex items-center  px-11 ">
        <img
          src={assets.theClub_Logo}
          alt="The Club Club Logo"
          className="w-[68px] h-[68px]"
        />
         <ul className="flex gap-6 font-semibold px-10">
          {listNav.map((item, index) => (
            <li
              key={index}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:underline"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-end '>
        <button className="text-white bg-[#00786F] px-5 py-2 rounded-xl font-bold hover:bg-[#00584D] transition ">
          {t("Book Now")}
        </button>
        <div className="ml-4 flex gap-2">
          <button
            onClick={() => i18n.changeLanguage("ar")}
            className="px-2 py-1 border rounded "
          >
            AR
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="px-2 py-1 border rounded "
          >
            EN
          </button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
