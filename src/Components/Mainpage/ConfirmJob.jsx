import React, { useState, useEffect } from 'react';
import { Button, Container, Group, Loader, Text } from '@mantine/core';
import ConfirmJobHeading from './ConfirmJobHeading';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { FetchServerRates } from '../../Redux/Candidates/action';


const ConfirmJob= ({ selectedValue }) => {
    const dispatch = useDispatch();
const serverData = useSelector((store)=>store.candidatesData.serverRates)

useEffect(()=>{
    if(selectedValue){
        dispatch(FetchServerRates(selectedValue));
    }
},[dispatch,selectedValue])
//   const [serverRates, setServerRates] = useState(serverData);
  const [assignedIds, setAssignedIds] = useState([]);

console.log(selectedValue,"selec");
//   useEffect(() => {
//     const fetchData = async () => {
//       const apiEndpoint = `https://core-api-staging.processserver.ai/api/server-rates/zipcodes/00501/speeds?speed=${selectedValue}`;
//       const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
//       const headers = {
//         Authorization: `Bearer ${authToken}`,
//       };
//       try {
//         const response = await axios.get(apiEndpoint, { headers });
//         // setServerRates(response.data.data.serverRates.serverRates);
//       } catch (error) {
//         console.error('Error fetching server rates:', error);
//       }
//     };

//     fetchData();
//   }, [selectedValue]);

  const handleAssignClick=(id) => {
    setAssignedIds([...assignedIds, id]);

    
  }
  return (
    <Container size="xl" style={{ width: '95%', margin: 'auto' }}>
      <ConfirmJobHeading />
      {serverData.length > 0 ? (
        serverData.map((server) => (
          <Group
            key={server.id}
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', // Fixed column widths
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
                padding: '8px 16px',
                marginTop: '1rem',
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
              cursor: 'pointer',
              border: '1px solid transparent',
              transition: 'border-color 0.3s ease',
            }}
          
              onMouseOver={(e) => (e.currentTarget.style.borderColor = '#CDAC82')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'transparent')}
          >
            <Text weight={350} size="sm">
              {server.server.entity.company}
            </Text>
            <Text weight={350} size="sm">
              {server.server.entity.email || 'N/A'}
            </Text>
            <Text weight={350} size="sm">
              {server.server.entity.phone}
            </Text>
            <Text weight={350} size="sm">
              {server.server.entity.address}
            </Text>
            <Text weight={350} size="sm">
              {server.server.serverScore}
            </Text>
            <Text weight={350} size="sm">
              {server.speed}
            </Text>
            <Text weight={350} size="sm">
              {server.rate === 0 ? 'Not Available' : `$${server.rate}`}
            </Text>
            <Text weight={350} size="sm">
          <Button variant='default' 
          onClick={()=>handleAssignClick(server.id)}
          disabled={assignedIds.includes(server.id)}

          >
          {assignedIds.includes(server.id) ? 'Assigned!' : 'Assign'}
            </Button>               
          </Text>
          </Group>
        ))
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '3rem',
          }}
        >
          <Loader size="xl" />
        </div>
      )}
    </Container>
  );
};

export default ConfirmJob;
