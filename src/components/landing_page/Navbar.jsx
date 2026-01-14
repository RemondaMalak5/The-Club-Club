import React from 'react'
import assets from '../../assets/assets'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    // <div className='w-full  shadow-md bg-white rounded-lg  flex justify-between items-center  py-1 px-8'>
    //   <img src={assets.theClub_Logo} alt='The Club Club Logo' className='w-[68px] h-[68px] ps-3'/>
    //   <div>
       
    //   </div>
    //    <button  className='text-white bg-[#00786F] px-3 py-2 rounded-xl font-bold flex justify-end'>
    //     Book Now
    //            </button>
    // </div>
       <nav className="w-full shadow-md bg-white  rounded-lg flex justify-between items-center py-2 px-8">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={assets.theClub_Logo}
          alt="The Club Club Logo"
          className="w-[68px] h-[68px]"
        />
      </div>

      {/* Links */}
      <ul className="flex gap-6 font-semibold ">
        <li className="cursor-pointer hover:underline">{t("Home")}</li>
        <li className="cursor-pointer hover:underline">{t("About")}</li>
        <li className="cursor-pointer hover:underline">{t("Branches")}</li>
        <li className="cursor-pointer hover:underline">{t("Compare")}</li>
        <li className="cursor-pointer hover:underline">{t("Why us?")}</li>
        <li className="cursor-pointer hover:underline">{t("Booking")}</li>
        <li className="cursor-pointer hover:underline">{t("Gallery")}</li>
        <li className="cursor-pointer hover:underline">{t("Contact Us")}</li>
      </ul>

      {/* Book Now Button */}
      <button className="text-white bg-[#00786F] px-5 py-2 rounded-xl font-bold hover:bg-[#00584D] transition">
        {t("Book Now")}
      </button>

      {/* Language Switcher (اختياري) */}
      <div className="ml-4 flex gap-2">
        <button
          onClick={() => i18n.changeLanguage("ar")}
          className="px-2 py-1 border rounded text-white"
        >
          AR
        </button>
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="px-2 py-1 border rounded text-white"
        >
          EN
        </button>
      </div>
    </nav>
  )
}

export default Navbar
