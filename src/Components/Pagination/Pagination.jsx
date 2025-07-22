

import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const AdvancedPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1, 
}) => {
  const DOTS = '...';

  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const getPaginationRange = () => {
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    const firstPage = 1;
    const lastPage = totalPages;

    if (!showLeftDots && showRightDots) {
      const leftItemCount = siblingCount * 2 + 3;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, lastPage];
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount = siblingCount * 2 + 3;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPage, DOTS, ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSibling, rightSibling);
      return [firstPage, DOTS, ...middleRange, DOTS, lastPage];
    }
  };

  const paginationRange = getPaginationRange();

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <div className="flex flex-wrap items-center justify-center mt-10 gap-2">
      {/* First */}
      <button
        onClick={() => onPageChange(1)}
        disabled={isFirst}
        className="px-2 py-1 rounded border text-sm hover:bg-gray-100 disabled:opacity-30"
        title="First"
      >
        <ChevronsLeft size={18} />
      </button>

      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        className="px-2 py-1 rounded border text-sm hover:bg-gray-100 disabled:opacity-30"
        title="Previous"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {paginationRange.map((page, index) => (
        <button
          key={index}
          disabled={page === DOTS}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-3 py-1 rounded-full text-sm font-medium border 
            ${page === currentPage ? 'bg-black text-white' : 'hover:bg-gray-100'} 
            ${page === DOTS ? 'cursor-default text-gray-400 border-transparent' : ''}`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        className="px-2 py-1 rounded border text-sm hover:bg-gray-100 disabled:opacity-30"
        title="Next"
      >
        <ChevronRight size={18} />
      </button>

      {/* Last */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={isLast}
        className="px-2 py-1 rounded border text-sm hover:bg-gray-100 disabled:opacity-30"
        title="Last"
      >
        <ChevronsRight size={18} />
      </button>
    </div>
  );
};

export default AdvancedPagination;
