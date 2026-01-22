// Pagination.js
import React from "react";

const Pagination = ({ itemsPerPage, array_items, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(array_items?.length / itemsPerPage);

  return (
    <div className="flex gap-2 m-4 flex-wrap bg-[#0c6b67] justify-center mx-36  rounded-2xl py-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 ${
            currentPage === i + 1 ? " text-white border rounded-full" : " text-white  "
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;



