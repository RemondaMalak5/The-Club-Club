
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Info_card_sevices = () => {
  return (
    <div className="w-full max-w-sm border rounded-2xl p-5 space-y-6">
      
      {/* Location */}
      <div>
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <FaMapMarkerAlt />
          <span>Location</span>
        </div>
        <p className="text-[#035657] font-medium leading-relaxed">
          Main Swimming Pool - Building A <br />
          Ground Floor
        </p>
      </div>

      <hr />

      {/* Contact */}
      <div>
        <p className="text-gray-500 text-sm mb-3">Contact Us</p>

        <div className="space-y-2 text-[#035657]">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>16647</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>swimming@theclub.com.eg</span>
          </div>

          <div className="flex items-center gap-2">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </div>
        </div>
      </div>

      <hr />

      {/* Social */}
      <div>
        <p className="text-gray-500 text-sm mb-3">Follow Us</p>

        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#035657] hover:bg-[#00786F] hover:text-white transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#035657] hover:bg-[#00786F] hover:text-white transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#035657] hover:bg-[#00786F] hover:text-white transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info_card_sevices ;
