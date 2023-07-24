import { Paper, Text } from '@mantine/core';
import React from 'react';

// Define the props type for the component


const TicketDetails: React.FC = () => {
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
    </>
  );
};

export default TicketDetails;
