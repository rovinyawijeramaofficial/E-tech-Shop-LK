import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-0">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`text-black text-xl ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`h-10 w-10 flex items-center justify-center border rounded-full text-lg ${
            currentPage === index + 1
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`text-black text-xl ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-8">
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationDemo;
