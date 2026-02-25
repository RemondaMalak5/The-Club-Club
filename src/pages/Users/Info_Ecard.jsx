import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaKey, FaTrophy, FaUsers } from 'react-icons/fa6';
import { IoMdPeople } from "react-icons/io";
import { MdSportsSoccer } from 'react-icons/md';


const Info_Ecard = () => {
    return (
        <div className='w-2/3 px-9 '>
             <div className="max-w-3xl mx-auto p-6">

      <div className="bg-teal-50 border-2 border-teal-700 rounded-2xl p-6 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-4 border-b border-teal-200 pb-4">
          <div className="bg-teal-100 p-3 rounded-xl text-teal-700 text-xl">
            <FaUsers />
          </div>
          <div>
            <h2 className="font-semibold text-lg">
              Membership Information
            </h2>
            <p className="text-sm text-gray-500">
              Official membership details and documents
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">

          {/* Membership Type */}
          <div className="bg-white border border-teal-700 rounded-xl p-4">
            <div className="flex items-center gap-2 text-teal-700 text-sm mb-3">
              <FaUsers className="text-xs" />
              <span>Membership Type</span>
            </div>
            <h3 className="text-2xl font-semibold text-teal-700">
              A <span className="text-base font-normal text-gray-600">Primary</span>
            </h3>
          </div>

          {/* Membership Year */}
          <div className="bg-white border border-teal-700 rounded-xl p-4">
            <div className="flex items-center gap-2 text-teal-700 text-sm mb-3">
              <FaCalendarAlt className="text-xs" />
              <span>Membership Year</span>
            </div>
            <h3 className="text-xl font-semibold text-teal-700">
              2025 - 2026
            </h3>
          </div>

          {/* Branch Location */}
          <div className="bg-white border border-teal-700 rounded-xl p-4">
            <div className="flex items-center gap-2 text-teal-700 text-sm mb-3">
              <FaMapMarkerAlt className="text-xs" />
              <span>Branch Location</span>
            </div>
            <h3 className="text-2xl font-semibold text-teal-700">
              OC <span className="text-base font-normal text-gray-600">October branch</span>
            </h3>
          </div>

        </div>

      </div>

    </div>
             <div className="max-w-3xl mx-auto p-6 space-y-6">

      {/* Player & Sports Information */}
      <div className="bg-teal-50 border-2 border-teal-700 rounded-2xl p-6 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-4 border-b border-teal-200 pb-4">
          <div className="bg-teal-100 p-3 rounded-xl text-teal-700 text-xl">
            <MdSportsSoccer />
          </div>
          <div>
            <h2 className="font-semibold text-lg">
              Player & Sports Information
            </h2>
            <p className="text-sm text-gray-500">
              Performance metrics and training schedule
            </p>
          </div>
        </div>

        {/* Registered Sports */}
        <div className="bg-teal-100/50 rounded-xl p-4 mt-4">
          <p className="font-medium mb-3">Registered Sports</p>
          <div className="flex gap-3">
            {["Football", "Karate", "Squash"].map((sport, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm border border-teal-700 rounded-full bg-white"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>

        {/* Level */}
        <div className="bg-teal-100/50 rounded-xl p-4 mt-4">
          <div className="flex justify-between items-center mb-3">
            <p className="font-medium">Player Evaluation Level</p>
            <span className="px-3 py-1 text-sm border border-teal-700 rounded-full bg-teal-50">
              Level 5
            </span>
          </div>

          <div className="flex gap-3">
            {Array(5)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-2 bg-yellow-400 rounded-full"
                ></div>
              ))}
          </div>
        </div>

        {/* Attendance */}
        <div className="bg-teal-100/50 rounded-xl p-4 mt-4">
          <div className="flex justify-between items-center mb-3">
            <p className="font-medium">Monthly Attendance</p>
            <p className="font-semibold text-teal-700">
              15 <span className="text-gray-500 text-sm">/20 sessions</span>
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {Array(20)
              .fill()
              .map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full border border-teal-700 ${
                    i < 15 ? "bg-teal-700" : "bg-transparent"
                  }`}
                ></span>
              ))}
          </div>
        </div>
      </div>

      {/* Privileges & Access */}
      <div className="bg-teal-50 border-2 border-teal-700 rounded-2xl p-6 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-4 border-b border-teal-200 pb-4">
          <div className="bg-teal-100 p-3 rounded-xl text-teal-700 text-xl">
            <FaKey />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Privileges & Access</h2>
            <p className="text-sm text-gray-500">
              Member benefits and special permissions
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">

          {/* Champion */}
          <div className="flex-1 bg-white border border-teal-700 rounded-xl p-4 flex items-center gap-4">
            <div className="bg-yellow-200 text-yellow-700 p-3 rounded-xl text-lg">
              <FaTrophy />
            </div>

            <div>
              <span className="text-xs border border-teal-700 px-3 py-1 rounded-full bg-teal-50">
                ✔ Active
              </span>
              <h4 className="font-semibold mt-2">Champion Status</h4>
              <p className="text-sm text-gray-500">
                Card owner is a champ
              </p>
            </div>
          </div>

          {/* Parking */}
          <div className="flex-1 bg-white border border-teal-700 rounded-xl p-4 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl text-lg">
              🚗
            </div>

            <div>
              <span className="text-xs border border-teal-700 px-3 py-1 rounded-full bg-teal-50">
                ✔ Enabled
              </span>
              <h4 className="font-semibold mt-2">Parking Access</h4>
              <p className="text-sm text-gray-500">
                Can park in club parking
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
        </div>

    )
}

export default Info_Ecard
