import React, { useState } from 'react';
import { Text, Grid, Paper } from '@mantine/core';
import PaginationComponent from './Pagination';

const ITEMS_PER_PAGE = 5;

const Mapingcomponent = () => {



    const [currentPage, setCurrentPage] = useState(1);

  // Replace this with your actual data
  const allItems = [...Array(20)].map((_, index) => `Item ${index + 1}`);

  // Calculate total pages based on the number of items and items per page
  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Slice the array to get the items for the current page
  const itemsOnCurrentPage = allItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <Grid
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: '8px',
          padding:"0.5rem",
          textAlign:"center",
          justifyContent:"center",
          alignItems: 'center',
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }}
      >
        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Icon
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Date Received
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Request Name
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Request email
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Subject
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Status
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Priority
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            View in Zendesk
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            Attach
          </Text>
        </Paper>

        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            View Request
          </Text>
        </Paper>
      </Grid>

      {/* Placeholder rows */}
      {[...Array(5)].map((_, index) => (
        <Grid
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '8px',
            marginTop: '10px',
          }}
        >
          {/* Replace this with actual data and icons */}
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Icon</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Date</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Name</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Email</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Subject</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Status</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Priority</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Zendesk Link</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>Attach</Paper>
          <Paper style={{padding:"0.5rem",textAlign:'center'}}>View Request</Paper>
        </Grid>
      ))}
      <PaginationComponent 

currentPage={currentPage}
totalPages={totalPages}
onPageChange={handlePageChange}
    
      />
    </div>
  );
};

export default Mapingcomponent;
