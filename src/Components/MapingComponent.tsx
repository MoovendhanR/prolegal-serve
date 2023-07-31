import React, { useState,useEffect } from 'react';
import { Text, Grid, Paper, Button, Loader, Select, Avatar } from '@mantine/core';
import {  Box, TextInput, ActionIcon } from '@mantine/core';
import { IconAdjustments, IconSearch, IconUser } from '@tabler/icons-react';
import PaginationComponent from './Pagination';
import axios from 'axios';
import "../App.css";
import { Link } from 'react-router-dom';


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
    const [selectedPriority, setSelectedPriority] = useState<string>('');

    const [searchOption, setSearchOption] = useState('');

   console.log(data)

    
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOption(event.currentTarget.value);
  };
  const fetchData = async () => {
    const apiEndpoint = `https://core-api-staging.processserver.ai/api/zendesk?search=${searchOption}`;
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
  
  useEffect(() => {
    fetchData();
  }, []);

 

// console.log(searchQuery)


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
// const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setSearchQuery(event.currentTarget.value);
// };



const ticketOptions = [
  { value: 'high', label: 'High' },
  { value: 'standard', label: 'Standard' },
  { value: 'low', label: 'Low' },
];


const handlePriorityChange = (value: string) => {
  setSelectedPriority(value);
};

const filteredTickets = selectedPriority
    ? itemsOnCurrentPage.filter((ticket) => ticket.ticketPriority === selectedPriority)
    : itemsOnCurrentPage;

// const filteredTickets = data.filter((ticket) => {
//   const priorityMatch = !selectedPriority || ticket.ticketPriority === selectedPriority;
//   const searchMatch = !searchQuery || ticket.ticketPriority.toLowerCase().includes(searchQuery.toLowerCase());

//   return priorityMatch && searchMatch;
// });


// console.log(filteredTickets)
    // console.log(fetchingData.data);
  return (
    <div style={{ padding: '20px', width: '100%' }}>
        <Paper  style={{ display: 'flex',padding:"1rem",paddingTop:"0.5rem",textAlign:"center" }}>
      <Text size="md" style={{ color: 'grey',textDecoration:"underline" }}>
        Job /{' '}
      </Text>
      <Text size="md" style={{ display: 'inline', paddingLeft: '6px' }}>
        Tickets to Confirm
      </Text>
    </Paper>

    <Box style={{display:"flex",justifyContent:"space-between",alignItems: 'center',padding:"1rem"}} >
    <Text size="xl" style={{paddingLeft: '6px' }}>
        Tickets to Confirm
      </Text>

      <TextInput
      radius="sm"
      size=''
      rightSection={
        <ActionIcon  radius="xl" color={"grey"} variant="grey" onClick={fetchData} >
            <IconSearch size="1.1rem" stroke={2.5} color='orange' />
            <IconAdjustments size="1.1rem" stroke={2.5} color='orange'style={{marginLeft:'0.2rem'}} />
        </ActionIcon>
      }
      value={searchOption}
      onChange={handleSearchChange}
      placeholder=" Search..."
      rightSectionWidth={80} 
    />
    </Box>
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
        <Paper style={{display:"flex",justifyContent:"center",padding:"0.5rem",textAlign:'center',boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
          <Avatar radius="xs" size="sm"  src="https://img.icons8.com/?size=1x&id=VROWGw8C8j6y&format=png" alt="no image here" />
          
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
        <Select
        style={{color:"black",border:"none"}}
        data={ticketOptions}


        placeholder=" priority"
        value={selectedPriority}
        onChange={handlePriorityChange}
      />
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
        data?.length > 0 ? (
            <>
       {filteredTickets?.map((ticket) => (
        <Grid
          key={ticket.id}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '8px',
            marginTop: '1rem',
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            cursor: 'pointer',
            border: '1px solid transparent',
            transition: 'border-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = '#CDAC82')}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = 'transparent')}
        >

          <Paper style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             width: "60%",
             height:"60%",
             margin:"auto",
            padding:"0.5rem",textAlign:'center'}}><IconUser/></Paper>
          <Paper style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             margin:"auto",
             fontSize:"12px",
            padding:"0.5rem",textAlign:'center'}}>{ticket?.createdAt}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket?.ticketUpdatedBy}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket?.senderEmail}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket?.subject}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket?.status}</Paper>
          <Paper 
           style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // width: "50%",
            // height:"50%",
        
            margin:"auto",
            fontSize:"16px",
            border:"none",
            padding:"0.5rem",textAlign:'center',
            background: ticket.ticketPriority === 'high' ? '#FAE4E4' : ticket.ticketPriority === 'low' ? '#EAFAE4' : '#FAF1E4',
            color: ticket.ticketPriority === 'high' ? '#BF6E6E' : ticket.ticketPriority === 'low' ? '#83BF6E' : '#BF9E6E',
          }}
          >{ticket?.ticketPriority}</Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
              fontSize:"12px",

            padding:"0.5rem",textAlign:'center'}}>{ticket?.attachments?.length}</Paper>
          <Paper style={{
           
            margin:"auto",
            fontSize:"12px",
            textAlign:'center'}}>
              <Link  to={`/view-job/${ticket?.ticketId}`}>
              <Button variant='default'>
            {`View Ticket #${ticket?.ticketId}`}
              </Button>
              </Link>
            </Paper>
          <Paper style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
            padding:"0.5rem",textAlign:'center'}}>
         <Link  to={`/view-job/${ticket?.ticketId}`}>
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
