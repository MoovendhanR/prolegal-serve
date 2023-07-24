import { Paper, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import React from 'react';
import {useParams} from "react-router-dom"

// Define the props type for the component

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

const TicketDetails: React.FC = () => {
    const { ticketId } = useParams<{ ticketId: string }>();

console.log(ticketId);
  return (
    <>
<Paper  style={{ display: 'flex',justifyContent:"space-evenly" ,padding:"1rem",textAlign:"center" }}>
      <Text size="md" style={{ color: '#00d084' }}>
       Job Detail
      </Text>
      <Text size="md" style={{ paddingLeft: '6px' }}>
      Server Detail
      </Text>
      <Text size="md" style={{ display: 'inline',color:"grey", paddingLeft: '6px' }}>
     Invoice Detail
      </Text>
 </Paper>

 <Paper  style={{ display: 'flex',padding:"1rem",textAlign:"center" }}>
      <Text size="md" style={{ color: 'grey',textDecoration:"underline" }}>
        Job /{' '}
      </Text>
      <Text size="md" style={{ color: 'grey',textDecoration:"underline",paddingLeft: '6px' }}>
        Jobs to Confirm /{' '}
      </Text>
      <Text size="md" style={{ display: 'inline', paddingLeft: '6px' }}>
      Job Details
      </Text>
 </Paper>


 
 <Paper  style={{ display: 'flex',padding:"1rem",textAlign:"center",justifyContent:"space-between",alignItems:"center" }}>
      
 <Paper  style={{ display: 'flex',padding:"1rem",textAlign:"center",alignItems:"center" }}>
      <Text  style={{ color: 'grey' }}>
       <IconChevronLeft color='orange' style={{width:'16px',height:'16px'}} />{" "}
      </Text>
      <Text size="md" style={{fontSize:"25px",paddingLeft: '6px' }}>
     Tickets Details{'  '}
      </Text>
      <Text size="md" style={{fontSize:"25px", display: 'inline',color:"brown", paddingLeft: '6px' }}>
      {`#${ticketId}`}
      </Text>
 </Paper>

 
 <Paper  style={{ display: 'flex',padding:"1rem",textAlign:"center",alignItems:"center" }}>
      <Text size="md" style={{ color: 'grey',textDecoration:"underline" }}>
        Job /{' '}
      </Text>
      <Text size="md" style={{ color: 'grey',textDecoration:"underline",paddingLeft: '6px' }}>
        Jobs to Confirm /{' '}
      </Text>
      <Text size="md" style={{ display: 'inline',color:"orange", paddingLeft: '6px' }}>
        {`#${ticketId}`}
      </Text>
   </Paper>
 </Paper>
    </>
  );
};

export default TicketDetails;
