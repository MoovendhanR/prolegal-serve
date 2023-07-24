import React, { useState,useEffect } from 'react';
import { Text, Grid, Paper, Button, Loader } from '@mantine/core';
import PaginationComponent from './Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { IconEyeFilled } from '@tabler/icons-react';

const ITEMS_PER_PAGE = 5;

interface TicketAttachment {
    id: number;
    s3Url: string;
    fileName: string;
  }
  
  interface TicketViewer {
    id: number;
    userId: number;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
  }
  
  interface Ticket {
    id: number;
    ticketId: string;
    senderEmail: string;
    subject: string;
    ticketUpdatedBy: string;
    ticketComment: string;
    ticketPriority: string;
    status: string;
    companyId: number | null;
    userId: number;
    createdAt: string;
    updatedAt: string;
    attachments: TicketAttachment[];
    viewers: TicketViewer[];
  }
  
  interface MyData {
    data: {
      tickets: Ticket[];
      totalPages: number;
    };
  }
  

const  Mapingcomponent : React.FC=() => {
    const [data, setData] = useState<Ticket[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
        const apiEndpoint = 'https://core-api-staging.processserver.ai/api/zendesk';
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
          const headers = {
          Authorization: `Bearer ${authToken}`,
        };
      try {
        // Fetch the data using Axios with the provided authorization token
        const response = await axios.get<MyData>(apiEndpoint, { headers });
        setData(response.data.data.tickets);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 

console.log(data)



    // console.log(fetchingData.data);
    const [currentPage, setCurrentPage] = useState(1);

//   const allItems = [...Array(20)].map((_, index) => `Item ${index + 1}`);
  const allItems = data;


  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          <IconEyeFilled/>
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
            Attach
          </Text>
        </Paper>
        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            View in Zendesk
          </Text>
        </Paper>


        <Paper style={{padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Text size="sm" align="center">
            View Request
          </Text>
        </Paper>
      </Grid>
      {
        data.length > 0 ? (
            <>
       {data.map((ticket) => (
        <Grid
          key={ticket.id}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '8px',
            marginTop: '1rem',
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          }}
        >

          <Paper style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             width: "60%",
             height:"60%",
             margin:"auto",
            padding:"0.5rem",textAlign:'center'}}>Icon</Paper>
          <Paper style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             margin:"auto",
             fontSize:"12px",
            padding:"0.5rem",textAlign:'center'}}>{ticket.createdAt}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket.ticketUpdatedBy}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket.senderEmail}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket.subject}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket.status}</Paper>
          <Paper 
           style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // width: "50%",
            // height:"50%",
            margin:"auto",
            fontSize:"12px",

            padding:"0.5rem",textAlign:'center',
            background: ticket.ticketPriority === 'high' ? 'red' : ticket.ticketPriority === 'low' ? 'green' : 'orange',
            color: ticket.ticketPriority === 'high' || ticket.ticketPriority === 'low' ? 'white' : 'black',
          }}
          >{ticket.ticketPriority}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket.attachments.length}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            
              margin:"auto",
              padding:"0.5rem",
              fontSize:"12px",
            textAlign:'center',border:"1px solid #b9c2c9"}}>
            {`View Ticket #${ticket.ticketId}`}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
            padding:"0.5rem",textAlign:'center'}}>
         <Link  to={`/view-job/${ticket.ticketId}`}>
            <Button variant="default">
            View Job
            </Button>
         </Link>
         </Paper>
        </Grid>
      ))}
      </>
        ):(
           <div style={{  display: "flex",
           justifyContent: "center",
           alignItems: "center",
           margin:"auto",
           marginTop:'3rem'
           }}>
            <Loader size="xl" />
           </div>
        )
      }





      <PaginationComponent 
currentPage={currentPage}
totalPages={totalPages}
onPageChange={handlePageChange}
    
      />
    </div>
  );
};

export default Mapingcomponent;
