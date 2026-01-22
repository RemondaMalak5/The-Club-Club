

import React, { useRef, useEffect } from 'react';
import True_template from './True_template';

const Modal_True = ({ messageTrue, setIsOpenTwo }) => {
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
                <div className='flex justify-center items-center'>
                    <True_template />
                </div>
                <h2 style={{ color: "green" }} className="text-center text-xl font-bold">{messageTrue}</h2>
            </div>
        </div>
    );
};

export default Modal_True