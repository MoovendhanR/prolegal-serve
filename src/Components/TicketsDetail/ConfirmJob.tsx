import React,{useState,useEffect} from 'react';
import { Container } from '@mantine/core';
import ConfirmJobHeading from './ConfirmJobHeading';
import axios from 'axios';
interface ServerRate {
    id: number;
    speed: string;
    numberOfAttempts: number;
    rate: number;
    index: number;
    isFixed: number;
    zipcodeIds: string;
    serverId: number;
    createdAt: string;
    updatedAt: string;
    server: {
      id: number;
      servableId: number;
      servableType: string;
      serverScore: string;
      entity: {
        email?: string;
        company: string;
        phone: string;
        address: string;
      };
    };
  }
//   interface  ServerRatesData {
//     serverRates: ServerRate[];
//     totalPages: number;
//   };
  
type SelectedValueProp = {
    selectedValue: string;
  };
const ConfirmJob: React.FC<SelectedValueProp> = ({selectedValue}) => {
    const [serverRates, setServerRates] = useState<ServerRate[]>([]);

   console.log(serverRates);
    useEffect(() => {
        const fetchData = async () => {
            const apiEndpoint =`https://core-api-staging.processserver.ai/api/server-rates/zipcodes/00501/speeds?speed=${selectedValue}`
            const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
            const headers = {
                Authorization: `Bearer ${authToken}`,
              };
          try {
            const response = await axios.get<ServerRate[] >(apiEndpoint,{headers});
            setServerRates(response.data)
          } catch (error) {
            console.error('Error fetching server rates:', error);
        }
        };
    
        fetchData();
      }, [selectedValue]);
  return (
    <Container size="xl" style={{width:"95%",margin:"auto"}}>
      <ConfirmJobHeading />
      {/* Add your table data and components here */}
    </Container>
  );
};

export default ConfirmJob;
