import React, { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocation, IoPersonSharp, IoTime } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useNavigate } from "react-router";
import assets from "../../../../../assets/assets";
import Title_1 from "../../../../../components/Shared_Componant/Title_1";
import { Get_academies_list } from "../../axiosConfig/APIs/Academy/academies_list";

const Activities_Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [selectvalue, setSelectvalue] = useState("all");

  const Academies_list_Api = async () => {
    const params = { lang: i18next.language !== "ar" ? "en" : "ar" };
    try {
      const res = await Get_academies_list(params);
      setData(res.message);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    Academies_list_Api();
  }, [i18next.language]);

  const arr = [
    { title: "Summer Tennis Tournament", date: "Feb 1-5, 2025", time: "13:00", location: "Olympic Pool", image: assets.academy, state: "Open", sportsName: "Tennis", team: "50 Spots" },
    { title: "Youth Football Camp", date: "Feb 1-5, 2025", time: "1:00", location: "Main Field", image: assets.basketball, state: "Limited", sportsName: "Football", team: "30 Spots" },
    { title: "Swimming Championship", date: "Feb 10-15, 2025", time: "2:00", location: "Olympic Pool", image: assets.football, state: "Open", sportsName: "Swimming", team: "20 Spots" },
    { title: "Basketball 3v3 League", date: "Feb 15-20, 2025", time: "13:00", location: "Indoor Court", image: assets.academy, state: "Limited", sportsName: "Basketball", team: "20 Teams" },
  ];

  const sportsTypes = ["all", ...new Set(arr.map((e) => e.sportsName))];

  const filteredArr = arr.filter(
    (e) => selectvalue === "all" || e.sportsName === selectvalue
  );

  return (
    <div className="px-9 text-center">
      <Title_1 title={t("sport")} />

      <div className="flex flex-wrap w-full justify-center items-center py-3 px-14 gap-2">
        {sportsTypes.map((sport, index) => (
          <button
            key={index}
            onClick={() => setSelectvalue(sport)}
            className={`px-5 py-2 rounded-lg font-semibold border text-[18px] ${
              selectvalue === sport
                ? "bg-[#21857C] text-white border-[#21857C]"
                : "border-[#21857C] text-[#21857C] hover:bg-[#E6F3F2]"
            }`}
          >
            {sport.charAt(0).toUpperCase() + sport.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap w-full">
        {filteredArr.map((e, index) => (
          <div className="xl:w-1/4 w-full px-2 py-2" key={index}>
            <div className="bg-white border p-5 border-gray-200 rounded-2xl shadow-md overflow-hidden">
              <div className="flex flex-wrap pb-4 w-full">
                <span
                  className={`border rounded-2xl text-[16px] text-white font-bold px-3 py-1 ${
                    e.state.toLowerCase() === "open"
                      ? "bg-[#1E8B3A]"
                      : "bg-[#F3B300]"
                  }`}
                >
                  {e.state}
                </span>
                <p className={`text-[16px] font-semibold text-[#21857C] ${i18next.language ==="ar" ? "text-left" :"text-right"} flex-1`}>
                  {e.sportsName}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <img
                  src={e.image}
                  className="rounded-full w-[40px] h-[40px]"
                  alt={e.title}
                />
                <p className="font-semibold text-[16px]">{e.title}</p>
              </div>

              <div className="flex flex-col gap-1 py-2 text-[14px] font-semibold text-[#828282] text-left">
                <p className="flex items-center gap-2">
                  <MdOutlineDateRange /> {e.date}
                </p>
                <p className="flex items-center gap-2">
                  <IoTime /> {e.time}
                </p>
                <p className="flex items-center gap-2">
                  <IoLocation /> {e.location}
                </p>
                <p className="flex items-center gap-2">
                  <IoPersonSharp /> {e.team}
                </p>
              </div>

              <button className="px-4 py-2 font-bold text-[#21857C] rounded-2xl border-2 border-[#21857C] w-full hover:bg-[#21857C] hover:text-white transition-all duration-300">
                Register Now
              </button>
            </div>
          </div>
        ))}

        {filteredArr.length === 0 && (
          <p className="text-gray-500 w-full text-center py-10">
            No events found for "{selectvalue}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Activities_Home;

//////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { MdOutlineDateRange } from "react-icons/md";
// import { IoLocation, IoPersonSharp, IoTime } from "react-icons/io5";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import { useNavigate } from "react-router";
// import assets from "./../../assets/assets";
// import Title_1 from "../Shared_Components/Title_1";
// import { Get_academies_list } from "../../axiosConfig/APIs/Academy/academies_list";

// const Activities = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const [data, setData] = useState();
//   const [selectvalue, setSelectvalue] = useState("all");

//   const Academies_list_Api = async () => {
//     const params = { lang: i18next.language !== "ar" ? "en" : "ar" };
//     try {
//       const res = await Get_academies_list(params);
//       setData(res.message);
//     } catch (err) {
//       console.log("error", err);
//     }
//   };

//   useEffect(() => {
//     Academies_list_Api();
//   }, [i18next.language]);

//   const arr = [
//     { title: "Summer Tennis Tournament", date: "Feb 1-5, 2025", time: "13:00", location: "Olympic Pool", image: data?.icon, state: "Open", sportsName: data?.name, team: "50 Spots" },
//     { title: "Youth Football Camp", date: "Feb 1-5, 2025", time: "1:00", location: "Main Field", image: data?.icon, state: "Limited", sportsName: data?.name, team: "30 Spots" },
//     { title: "Swimming Championship", date: "Feb 10-15, 2025", time: "2:00", location: "Olympic Pool", image: data?.icon, state: "Open", sportsName: data?.name, team: "20 Spots" },
//     { title: "Basketball 3v3 League", date: "Feb 15-20, 2025", time: "13:00", location: "Indoor Court", image: data?.icon, state: "Limited", sportsName: data?.name, team: "20 Teams" },
//      { title: "Summer Tennis Tournament", date: "Feb 1-5, 2025", time: "13:00", location: "Olympic Pool", image:data?.icon, state: "Open", sportsName: data?.name, team: "50 Spots" },
//     { title: "Youth Football Camp", date: "Feb 1-5, 2025", time: "1:00", location: "Main Field", image: data?.icon, state: "Limited", sportsName: data?.name, team: "30 Spots" },
//     { title: "Swimming Championship", date: "Feb 10-15, 2025", time: "2:00", location: "Olympic Pool", image: data?.icon, state: "Open", sportsName: data?.name, team: "20 Spots" },
//     { title: "Basketball 3v3 League", date: "Feb 15-20, 2025", time: "13:00", location: "Indoor Court", image: data?.icon, state: "Limited", sportsName: data?.name, team: "20 Teams" },
//   ];


//   const filteredArr = arr.filter(
//     (e) => selectvalue === "all" || e.sportsName === selectvalue
//   );

//   return (
//     <div className="px-9 text-center">
//       <Title_1 title={t("sport")} />

//       <div className="flex flex-wrap w-full justify-center items-center py-3 px-14 gap-2">
//         {data?.map((sport, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectvalue(sport.name)}
//             className={`px-5 py-2 rounded-lg font-semibold border text-[18px] ${
//               selectvalue === sport
//                 ? "bg-[#21857C] text-white border-[#21857C]"
//                 : "border-[#21857C] text-[#21857C] hover:bg-[#E6F3F2]"
//             }`}
//           >
//             {sport.name}
//           </button>
//         ))}
//       </div>

//       <div className="flex flex-wrap w-full">
//         {data?.map((e, index) => (
//           <div className="xl:w-1/4 w-full px-2 py-2" key={index}>
//             <div className="bg-white border p-5 border-gray-200 rounded-2xl shadow-md overflow-hidden">
//               <div className="flex flex-wrap pb-4 w-full">
//                 <span
//                   className={`border rounded-2xl text-[16px] text-white font-bold px-3 py-1 ${
//                     e.state === "open"
//                       ? "bg-[#1E8B3A]"
//                       : "bg-[#F3B300]"
//                   }`}
//                 >
//                   {e.state}
//                 </span>
//                 <p className="text-[16px] font-semibold text-[#21857C] text-right flex-1">
//                   {e.name}
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-4 items-center">
//                 <img
//                   src={e.icon}
//                   className="rounded-full w-[40px] h-[40px]"
//                   alt={e.title}
//                 />
//                 <p className="font-semibold text-[16px]">{e.title}</p>
//               </div>

//               <div className="flex flex-col gap-1 py-2 text-[14px] font-semibold text-[#828282] text-left">
//                 <p className="flex items-center gap-2">
//                   <MdOutlineDateRange /> {e.date}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <IoTime /> {e.time}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <IoLocation /> {e.location}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <IoPersonSharp /> {e.team}
//                 </p>
//               </div>

//               <button className="px-4 py-2 font-bold text-[#21857C] rounded-2xl border-2 border-[#21857C] w-full hover:bg-[#21857C] hover:text-white transition-all duration-300">
//                 Register Now
//               </button>
//             </div>
//           </div>
//         ))}

//         {filteredArr.length === 0 && (
//           <p className="text-gray-500 w-full text-center py-10">
//             No events found for "{selectvalue}"
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Activities;
