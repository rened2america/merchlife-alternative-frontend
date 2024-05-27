import { NextIcon } from "@/components/ui/components/icons/NextIcon";
import { PreviousIcon } from "@/components/ui/components/icons/PreviousIcon";
import React, { useState, useEffect } from "react";

export default function Pagination({
  reviews,
  displayedReviews,
  setDisplayedReviews,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  // Ensure itemsPerPage is not negative
  const actualItemsPerPage = Math.max(1, itemsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(reviews.length / actualItemsPerPage);

  // Function to change current page
  const changePage = (page, e) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  useEffect(() => {
    // Update displayed reviews when currentPage or reviews change
    const startIndex = (currentPage - 1) * actualItemsPerPage;
    const endIndex = startIndex + actualItemsPerPage;
    setDisplayedReviews(reviews.slice(startIndex, endIndex));
  }, [currentPage, actualItemsPerPage, reviews, setDisplayedReviews]);

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}

      <button
        className={`relative flex h-10 max-h-[40px] w-10 max-w-[40px] select-none items-center justify-center rounded-full border border-gray-400 text-center text-center align-middle font-sans text-xs font-medium uppercase ${
          currentPage === 1
            ? "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            : ""
        }`}
        onClick={(e) => changePage(currentPage - 1, e)}
        disabled={currentPage === 1}
      >
        <PreviousIcon />
      </button>

      {/* Page Buttons */}
      {[...Array(totalPages && totalPages)].map((_, index) => (
        <button
          key={index}
          className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full border border-gray-400 text-center align-middle font-sans text-xs font-medium uppercase ${
            currentPage === index + 1
              ? "bg-gray-900 text-white shadow-md shadow-gray-900/10"
              : "text-gray-900"
          } transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          onClick={(e) => changePage(index + 1, e)}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            {index + 1}
          </span>
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`relative flex h-10 max-h-[40px] w-10 max-w-[40px] select-none items-center justify-center rounded-full border border-gray-400 text-center align-middle font-sans text-xs font-medium uppercase ${
          currentPage === totalPages
            ? "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            : ""
        }`}
        onClick={(e) => changePage(currentPage + 1, e)}
        disabled={currentPage === totalPages}
      >
        <NextIcon />
      </button>
    </div>
  );
}

