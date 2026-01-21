import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import Title_2 from "../Shared_Componant/Title_2";
import Title_3 from "../Shared_Componant/Title_3";

const branches = [
  {
    name: "October Branch",
    address: "6th of October, Near Juhayna Square, Giza",
    phone: "16647",
    email: "october@elnadyclub.com",
  },
  {
    name: "Sheraton Branch",
    address: "Ankara st, Sheraton behind El Matgar, Cairo",
    phone: "16647",
    email: "sheraton@elnadyclub.com",
  },
  {
    name: "New Capital Branch",
    address: "New Administrative Capital, R7, Sports District",
    phone: "16647",
    email: "capital@elnadyclub.com",
  },
];

const Locations = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <Title_2  title={"Our Locations & Contact Us"}/>
       <Title_3 title={"Choose the branch closest to you and contact us anytime"} />
       
      </div>

      {/* Map */}
     <div className="rounded-xl overflow-hidden shadow mb-10  h-64">
  <iframe
    title="The Club Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6899.114089305289!2d30.9035!3d29.9881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847d80e1e7afd%3A0x0!2zMzLCsDU5JzU1LjAiTiAzMMKwNTQnMzguMCJF!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>



      {/* Branches */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <h3 className="text-teal-700 font-semibold mb-4">
              {branch.name}
            </h3>

            <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
              <MdLocationOn className="text-teal-600 mt-1" />
              <span>{branch.address}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <MdPhone className="text-teal-600" />
              <span>{branch.phone}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MdEmail className="text-teal-600" />
              <span>{branch.email}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="text-center">
        <p className="font-medium mb-4">Follow Us on Social Media</p>
        <div className="flex justify-center gap-4">
          <SocialIcon><FaFacebookF /></SocialIcon>
          <SocialIcon><FaInstagram /></SocialIcon>
          <SocialIcon><FaLinkedinIn /></SocialIcon>
          <SocialIcon><FaTwitter /></SocialIcon>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-600 text-white hover:bg-teal-700 cursor-pointer transition">
    {children}
  </div>
);

export default Locations;
