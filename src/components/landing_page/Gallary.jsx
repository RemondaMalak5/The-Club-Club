import React, { useState } from "react";
import assets from "../../assets/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Title_2 from "../Shared_Componant/Title_2";
import Title_3 from "../Shared_Componant/Title_3";


const Gallary = () => {
    const arr = [
        { image: assets.landingpage_2 },
        { image: assets.branch_6_october },
        { image: assets.branch_el3asma },
        { image: assets.landingpage_1 },
        { image: assets.branch_el3asma },

    ];

    const [active, setActive] = useState(0);

    const next = () => setActive((prev) => (prev + 1) % arr.length);
    const prev = () => setActive((prev) => (prev - 1 + arr.length) % arr.length);

    return (
        <div className="px-28  ">
            <Title_2 title={"Live Moments"} />
            <Title_3 title={"Where Every Moment Becomes a Memory"} />
            <div className="flex flex-wrap gap-5 justify-center py-8">
                <img
                    src={arr[active].image}
                    alt=""
                    className="w-52 h-60 rounded-2xl shadow-lg object-cover transition-all duration-500"
                />
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 flex-wrap justify-center ">
                        {arr.map((e, i) => (
                            <img
                                key={i}
                                src={e.image}
                                alt=""
                                className={`w-32 h-36 rounded-xl cursor-pointer transition-all duration-300 
              ${i === active ? "ring-4 ring-[#0A7C71] w-36 h-40" : "opacity-70 hover:opacity-100"}`}
                                onClick={() => setActive(i)}
                            />
                        ))}
                    </div>
                    <div className="flex gap-4 ">
                        <button
                            onClick={prev}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0A7C71] text-xl shadow border-[#0A7C71] border-2
                             hover:bg-[#0A7C71] hover:text-white"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={next}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A7C71] text-white text-xl shadow hover:bg-white hover:text-[#0A7C71] hover:border-[#0A7C71] border-2"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;
