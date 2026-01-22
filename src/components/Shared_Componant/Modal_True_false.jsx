

import React, { useRef, useEffect } from 'react';

const Modal_True_false = ({ messageTrue, setIsOpenTwo }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpenTwo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="modal-content bg-white p-10 rounded-xl shadow-md"
      >
        <h2 className="text-center text-[#035557] text-xl font-bold">{messageTrue}</h2>
      </div>
    </div>
  );
};

export default Modal_True_false;
