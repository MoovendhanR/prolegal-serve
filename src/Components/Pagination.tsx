import React from 'react';
import { Button } from '@mantine/core';
import {  IconChevronsRight } from '@tabler/icons-react';
import { IconChevronsLeft } from '@tabler/icons-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

 function PaginationComponent ({ currentPage, totalPages, onPageChange,...others }:PaginationProps) {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };


  
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    for (let page = 1; page <= totalPages; page++) {
      const isCurrentPage = currentPage === page;
      pageButtons.push(
        <Button
          key={page}
          variant={isCurrentPage ? 'filled' : 'light'}
          size="sm"
          onClick={() => handlePageClick(page)}
          style={{ margin: '2px' }}
        >
          {page}
        </Button>
      );
    }

    return pageButtons;
  };


  return (
    
    <div style={{ display: 'flex', alignItems: 'center',marginTop:'2rem',justifyContent: 'center'}}>
    <Button
      disabled={currentPage === 1}
      variant="light"
      size="sm"
      onClick={handlePrevClick}
      style={{ marginRight: '10px' }}
    >
      <IconChevronsLeft/>
    </Button>

    {renderPageButtons()}

    <Button
      disabled={currentPage === totalPages}
      variant="light"
      size="sm"
      onClick={handleNextClick}
      style={{ marginLeft: '10px' }}
    >
      <IconChevronsRight />
    </Button>
  </div>
   
  );
};

export default PaginationComponent;
