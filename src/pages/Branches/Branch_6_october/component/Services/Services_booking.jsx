import React, { useState } from 'react'
import { FaBookmark } from 'react-icons/fa'
import Info_card_sevices from './Info_card_sevices';

const Services_booking = () => {
    const [participants, setParticipants] = useState(1);
      const [startDate, setStartDate] = useState("");
  const [session, setSession] = useState("morning");
    const basePrice = 500;
  const quantity = 1;
  const discount = 0.1; // 10%

  const total = basePrice * quantity * (1 - discount);

  return (
    <div className='w-1/4  '>
      <button className='bg-[#00786F] text-white w-full p-3'>
       Book Now
      </button>
      <div className='border-2 my-3 rounded-xl p-3 px-5'>
        <p className='flex flex-wrap py-2 gap-3 text-lg  text-[#035657]'> <span className='py-1 '><FaBookmark/></span> Book Now</p>
        <label className='px-1'>Number of Participants</label>
         <div className="flex items-center gap-2 py-1">
          <button
            onClick={() => setParticipants(Math.max(1, participants - 1))}
            className="w-10 h-10 rounded-full px-3 bg-gray-100"
          >
            −
          </button>

          <input
            type="text"
            value={participants}
            readOnly
            className="w-full text-center border rounded py-1"
          />

          <button
            onClick={() => setParticipants(participants + 1)}
            className="w-10 h-10 rounded-full px-3 bg-gray-100"
          >
            +
          </button>
        </div>

        <label className='px-1'>Preferred Start Date</label>
        <div className="relative">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
  📅
</span>

        </div>
         <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Preferred Session
        </label>
        <select
          value={session}
          onChange={(e) => setSession(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="morning">Morning Session - 9:00 AM</option>
          <option value="afternoon">Afternoon Session - 1:00 PM</option>
          <option value="evening">Evening Session - 6:00 PM</option>
        </select>
      </div>

       <div className="w-full max-w-sm space-y-4 my-3">
      {/* Summary Card */}
      <div className="bg-[#EEF5F4] rounded-2xl p-5 space-y-3">
        <div className="flex justify-between text-gray-700">
          <span>Base Price</span>
          <span>{basePrice} EGP</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>Quantity</span>
          <span>× {quantity}</span>
        </div>

        <div className="flex justify-between text-green-600 font-medium">
          <span>Loyalty Discount</span>
          <span>-10%</span>
        </div>

        <hr className="border-gray-300" />

        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#035657]">
            Total
          </span>
          <span className="text-2xl font-bold text-[#035657]">
            {total} EGP
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-[#00786F] hover:bg-[#00665F] transition text-white py-4 rounded-2xl font-medium">
        Submit Booking Request
      </button>
    </div>
      </div>
      <Info_card_sevices/>
    </div>
  )
}

export default Services_booking
