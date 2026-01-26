import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MdOutlineArrowDropDown,
  MdLocalPhone,
  MdEmail,
  MdClose,
  MdMenu,
} from "react-icons/md";
// import Main_Register from "../Registration/Register/Main_Register";
// import { user_login } from "../../axiosConfig/APIs/Auth/login/login";
import Cookies from "js-cookie";
// import Close_Form from "../Shared_Components/Close_Form";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import { Get_academies_list } from "../../axiosConfig/APIs/Academy/academies_list";
import i18next from "i18next";
import assets from "../../../assets/assets";
import Social_Media from "../../../components/Shared_Componant/Social_Media";
import LoaderSpinner from "../../../components/Shared_Componant/LoaderSpinner";

const Nav = () => {
  const {  t } = useTranslation();
  const isArabic = i18next.language === "ar";
  const [pass, setpass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMail, setErrorMail] = useState();
  const [errorPass, setErrorPass] = useState();
  const location = useLocation();
const currentBranch = location.pathname.split("/")[2] || "";

    const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };
  const navigate = useNavigate();


  const showError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 2500);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePass = (pass) => {
    // const pa=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~=-]).{9,}$/;
    const pa = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pa.test(pass);
  };

  const User_login_Api = async (e) => {
    e.preventDefault();
    if (!email.trim()) return setErrorMail(t("please enter your email"));
    if (!validateEmail(email)) return setErrorMail("invalid Email");
    if (!pass.trim()) return setErrorPass("invalid password");
    const body = {
      email: email,
      password: pass
    }
    setLoader(true);
    try {
      const response = await user_login(body);
      Cookies.set('token', response.message.token, { expires: 30 });
      Cookies.set('type', "member", { expires: 30 });
      Cookies.set('name', response.message.user_data.name, { expires: 30 });
      Cookies.set('membership_no', response.message.user_data.membership_no,
        { expires: 30 });
      setIsOpen_t(false);
      window.location.href = "/";
    }
    catch {
      showError("please create account")
    }
    finally {
      setLoader(false);
    }
  }
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenSports, setIsOpenSports] = useState(false);
  const aboutRef = useRef();
  const sportsRef = useRef();

           
  useEffect(() => {
      document.documentElement.setAttribute("dir", i18next.language === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", i18next.language);


    const handleClickOutsideLoginRegister = (event) => {
      if (
        dropdownRef_login.current &&
        !dropdownRef_login.current.contains(event.target)
      ) {
        setIsOpen_t(false);
      }

      if (
        dropdownRef_r.current &&
        !dropdownRef_r.current.contains(event.target)
      ) {
        setIsOpen_r(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideLoginRegister);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideLoginRegister);
    };

  }, [Cookies.get("token")]);

  const [data, setData] = useState();
  const [data_2, setData_2] = useState();
  const Academies_list_Api = async () => {
    const params = { lang: "en" };
    try {
      const res = await Get_academies_list(params);
      setData(res.message);
    } catch (err) {
      console.log("errror", err)
    }
  };
  const Academies_list_Api_lang = async () => {
    const params = { lang: i18next.language !== "ar" ? "en" : "ar" };
    try {
      const res = await Get_academies_list(params);
      setData_2(res.message);
    } catch (err) {
      console.log("errror", err)
    }
  };
  useEffect(() => {

    Academies_list_Api();
    Academies_list_Api_lang();

  }, [i18next.language]);
  const sportsItems = data?.map((itemEn, index) => {
    const translatedItem = data_2?.[index]; // نفس index من القائمة المترجمة
    return {
      title: translatedItem ? translatedItem.name : itemEn.name, // عنوان من الداتا المترجمة إذا موجودة
      path: `Sports/${itemEn.name}/about_sport`, // path من الداتا الإنجليزية
    };
  });


  const [isOpen_t, setIsOpen_t] = useState(false);
  const [isOpen_r, setIsOpen_r] = useState(false);
  const login = () => setIsOpen_t(!isOpen_t);
  const register = () => setIsOpen_r(!isOpen_r);
  const dropdownRef_login = useRef();
  const dropdownRef_r = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboutActive = location.pathname.startsWith("/about");

  const isSportsActive = location.pathname.startsWith("/Sports");

  const handle_logout = () => {
    Cookies.remove('token');
    Cookies.remove('type');
    Cookies.remove('membership_no');
    setAuthenticated(false);
    window.location.href = "/";
  }

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen_t(false);
      }
    };
    if (isOpen_t) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen_t]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsOpenAbout(false);
      }
    };
    if (isOpenAbout) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenAbout]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sportsRef.current && !sportsRef.current.contains(event.target)) {
        setIsOpenSports(false);
      }
    };
    if (isOpenSports) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenSports]);

  useEffect(() => {
    setEmail("");
    setpass("")
  }, [isOpen_t])

  return (
    <section dir={i18next.language === "ar" ? "rtl" : "ltr"}>
      <div className="fixed  top-0 w-full z-10">
        <div className="upper_nav flex flex-wrap text-white px-4 lg:px-20  bg-gray-900 items-center sm:justify-between justify-center gap-y-2">
          <div className="flex gap-4 md:gap-8 text-[12px]">
            <div className="flex items-center gap-1">
              <MdLocalPhone /> <span>16647</span>
            </div>
            <div className="flex items-center gap-1 text-[12px]">
              <MdEmail />
              <a href="mailto:info@theclub.com.eg" className="hover:underline">
                info@theclub.com.eg
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Social_Media />

            <div className="relative flex gap-2 ms-4 overflow-hidden rounded-full transition-all duration-300 ease-in-out group hover:text-black">
              <div className="absolute bottom-0 left-0 w-full h-0 bg-white z-0 transition-all duration-300 ease-in-out group-hover:h-full"></div>
              <div className="relative z-10 flex gap-2">
                {i18next.language === "ar" && (
                  <button onClick={() => changeLanguage("en")} className="p-3">English</button>
                )}
                {i18next.language !== "ar" && (
                  <button onClick={() => changeLanguage("ar")} className="p-3">العربية</button>
                )}
              </div>
            </div>


          </div>
        </div>

        <nav className="bg-white text-[#444] shadow-md px-4 lg:px-20  top-0 w-full z-10">
          <div className="flex items-center justify-between py-1 md:hidden ">
            <Link to="/">
              <img src={assets.logo1} alt="Logo" className="w-16" />
            </Link>
            <button
              className="text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>

          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } md:flex items-center justify-between  gap-6  py-1 `}
          >
            <Link to="/" className="hidden md:block ">
              <img src={assets.logo1} alt="Logo" className="w-16" />
            </Link>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center text-sm font-medium w-full">
              <NavLink
                to={`/branches/${currentBranch}/`}
                className={({ isActive }) =>
                  isActive ? "text-[#56c6cc] font-bold" : "hover:text-[#56c6cc]"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Home")}
              </NavLink>

              <div className="relative  ">
                <button
                  onClick={() => setIsOpenAbout(!isOpenAbout)}
                  className={`flex items-center gap-1 transition-colors ${isAboutActive
                    ? "text-[#56c6cc] font-bold"
                    : "hover:text-[#56c6cc] text-gray-700"
                    }`}
                >
                  {t("About")} <MdOutlineArrowDropDown />
                </button>
                {isOpenAbout && (
                  <div
                    className="absolute top-full mt-2 w-56 bg-white border rounded shadow-lg z-20 "
                    onClick={() => {
                      setIsOpenAbout(false);
                    }}
                    ref={aboutRef}
                  >
                    <Link
                      to="about/aboutTheClub"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                    >
                      {t("About_The_Club")}
                    </Link>
                    <Link
                      to="about/ministerWelcome"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                    >
                      {t("Minister_Welcome")}
                    </Link>
                    <Link
                      to="about/boardChairmanWord"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                    >
                      {t("Board_Chairman_Word")}
                    </Link>
                    <Link
                      to="about/boardMember"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                    >
                      {t("Board_Members")}
                    </Link>
                    <Link
                      to="about/StrategicPlans"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                    >
                      {t("Strategic_Plans")}
                    </Link>
                    <Link
                      to="about/teamwork"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                    >
                      {t("Teamwork")}
                    </Link>
                    <Link
                      to="about/contactus"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                    >
                      {t("Contact_Us")}
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                to={`/branches/${currentBranch}/Loyalty`}
                className={({ isActive }) =>
                  isActive ? "text-[#56c6cc] font-bold" : "hover:text-[#56c6cc]"
                }
              >
                {t("Loyalty")}
              </NavLink>
            
               <NavLink
                to={`/branches/${currentBranch}/Services`}
                className={({ isActive }) =>
                  isActive ? "text-[#56c6cc] font-bold" : "hover:text-[#56c6cc]"
                }
              >
                {t("services")}
              </NavLink>
              <NavLink
  to={`/branches/${currentBranch}/News`}
                className={({ isActive }) =>
                  isActive ? "text-[#56c6cc] font-bold" : "hover:text-[#56c6cc]"
                }
              >
                {t("News")}
              </NavLink>

              <NavLink
                to={`/branches/${currentBranch}/Championships`}
                className={({ isActive }) =>
                  isActive ? "text-[#56c6cc] font-bold" : "hover:text-[#56c6cc]"
                }
              >
                {t("Championships")}
              </NavLink>

              <div className="relative">
                <button
                  onClick={() => setIsOpenSports(!isOpenSports)}
                  className={`flex items-center gap-1 transition-colors ${isSportsActive
                    ? "text-[#56c6cc] font-bold"
                    : "hover:text-[#56c6cc] text-gray-700"
                    }`}
                >
                  {t("Sports & Activities")} <MdOutlineArrowDropDown />
                </button>
                {isOpenSports && (
                  <div
                    className="absolute top-full mt-2 w-56 bg-white border rounded shadow-lg z-20 "
                    onClick={() => {
                      setIsOpenSports(false);
                    }}
                    ref={sportsRef}
                  >
                    {sportsItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#56c6cc]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/booking" className="hover:text-[#56c6cc]">
                {t("Booking")}
              </Link>
            </div>

            {/* {authenticated ? <div className="flex gap-2   w-[400px] ps-0 ms-0">
              <button
                onClick={() => { handle_logout() }}
                className="bg-gray-200 hover:bg-gray-300 duration-300 text-black px-4 py-1  rounded-[8px] "
              >
                {t("logout")}
              </button>
              <Link
                to={"/profile/Information"}
                className="bg-gray-200 hover:bg-gray-300 duration-300 text-black px-4 py-1 rounded-[8px]"
              >
                {t("profile")}
              </Link>
            </div> :
              <div className="flex flex-col gap-1 mt-2 md:mt-0">
                <div ref={dropdownRef_login}>
                  <button
                    onClick={login}
                    className=" text-white px-4 py-1 w-32 rounded-[8px] whitespace-nowrap border border-[#00000000] bg-gradient-to-r from-[#0ba9ac9a] to-[#035657] hover:from-[#ffff] hover:to-[#ffff] hover:border-[#035657] transition-all duration-500 hover:text-[#035657]"
                  >
                    {t("Login")}
                  </button>
                  {isOpen_t && (
                    <div className="modal-overlay ">
                      <div className="modal-content p-10" ref={modalRef}>
                        <div >
                          <Close_Form setIsOpen={setIsOpen_t} />
                        </div>
                        <h2 className="text-center">{t("Login")}</h2>
                        <form onSubmit={(e) => { User_login_Api(e) }}>
                          <input
                            onChange={(e) => { setEmail(e.target.value), setErrorMail("") }}
                            value={email}
                            placeholder={t("Email")}
                            className="w-full my-4 rounded-full border px-4 py-2"
                          />
                          <p className="text-red-600">{errorMail}</p>

                          <div className="relative">
                            <input
                              type={`${showPassword ? "text" : "password"}`}
                              placeholder={t("password")}
                              value={pass}
                              onChange={(e) => { setpass(e.target.value), setErrorPass("") }}
                              className=" w-full outline_color my-4 rounded-full border px-4 py-2 "
                            />
                            <p className="text-red-600">{errorPass}</p>
                            <div className={`absolute top-7 ${isArabic ? "left-3" : "right-3"} cursor-pointer`}>
                              {showPassword ? (
                                <IoEye onClick={() => setShowPassword(false)} />
                              ) : (
                                <IoEyeOff onClick={() => setShowPassword(true)} />
                              )}
                            </div>

                          </div>

                          <button
                            type="submit"
                            className="login-btn w-full flex items-center justify-center py-3 bg-[#014e52] text-white rounded-full"
                          >
                            <span>
                              {loader ? (
                                <LoaderSpinner/>
                              ) : (
                                t("Login")
                              )}
                            </span>
                          </button>
                          {error &&
                            <p className="text-red-500 my-1">
                              {error}
                            </p>}
                        </form>
                      </div>
                    </div>
                  )}
                </div>

                <div ref={dropdownRef_r}>

                  <button
                    onClick={register}
                    className=" text-[#035657] px-4 py-1 rounded-[8px] w-32 border-2 border-[#035657] hover:bg-gradient-to-l from-[#0ba9ac9a] to-[#035657] hover:text-white "
                  >
                    {t("Register")}
                  </button>
                  <Main_Register isOpen_r={isOpen_r} setIsOpen_r={setIsOpen_r} setIsOpen_t={setIsOpen_t} />
                </div>
              </div>
            } */}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
// import React from 'react'

// const Nav = () => {
//   return (
//     <div>
//       nav
//     </div>
//   )
// }

// export default Nav
