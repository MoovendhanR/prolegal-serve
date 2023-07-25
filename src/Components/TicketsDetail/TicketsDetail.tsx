import { Avatar, Notification, Paper, Text } from '@mantine/core';
import { IconChevronDown, IconChevronLeft, IconNotes, IconPlus } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";
import { Document,Page } from '@react-pdf/renderer';
// import { Document, Page, pdfjs } from 'react-pdf';

interface Attachment {
    id: number;
    s3Url: string;
    fileName: string; 
    attachments: {
      id: number;
      documentName: string;
      documentType: string;
      isPrimary: boolean;
      noOfPages: number;
    }[];
  }
  
  interface Job {
    id: number;
    serviceSpeed: string;
    serveeType: string;
    serveeName: string | null;
    registeredAgent: any | null;
    zipcode: string;
    googlePlacesAddress: any | null;
    serveeAddress: string;
    firstAttemptBy: any | null;
    specialInstructions: any | null;
    trialDepoOrActionDate: any | null;
    status: string;
    attorneyName: string;
    eFileReturnOfService: boolean;
    zendeskId: number;
    caseId: number;
    createdAt: string;
    updatedAt: string;
    case: {
      id: number;
      referenceOrMatterNumber: any | null;
      caseNumber: string;
      state: string;
      county: string;
      courtType: string;
      plaintiff: string;
      defendant: string;
      createdAt: string;
      updatedAt: string;
    };
    attachments: {
      id: number;
      documentName: string;
      documentType: string;
      isPrimary: boolean;
      zendeskAttachmentId: number;
    }[];
    serverAddress: any[];
    jobPictures: any[];
  }
  
  interface Company {
    id: number;
    operatingCompany: string;
    type: string;
    name: string;
    caseManagementSoftware: string;
    phoneNumber: string;
    addressId: number;
    specialityId: any | null;
    accountManagerId: number;
    createdAt: string;
    updatedAt: string;
  }
  
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  interface Viewer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    // Add any other properties related to the Viewer as needed
  }
  
  interface TicketData {
    id: number;
    ticketId: string;
    senderEmail: string;
    subject: string;
    ticketUpdatedBy: string;
    ticketComment: string;
    ticketPriority: string;
    status: string;
    companyId: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
    attachments: Attachment[];
    jobs: Job[];
    company: Company;
    user: User;
    viewers: Viewer[];
  }
  
  
  

const TicketDetails: React.FC = () => {
    const { ticketId } = useParams<{ ticketId: string }>();
    const [numPages, setNumPages] = useState<number >(2);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const [ticketData, setTicketData] = useState<TicketData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        const apiEndpoint =`https://core-api-staging.processserver.ai/api/zendesk/${ticketId}`
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
        const headers = {
            Authorization: `Bearer ${authToken}`,
          };
      try {
        const response = await axios.get<{ data: TicketData[] }>(apiEndpoint,{headers});
        setTicketData(response.data.data);
      } catch (error) {
        setError('Error fetching ticket details.');
      }
    };

    fetchData();
  }, [ticketId]);

console.log(ticketData)



// pdf format
const displayAttachmentPDF = (s3Url: string) => {
    // You can render the PDF here using Mantine-UI components or any other PDF viewer library
    return (
      <Paper shadow="sm">
        <iframe src={s3Url} title="PDF Viewer" width="100%" height="1000px"/>
        {/* <Document
                  file={ticketData[0].attachments[0].s3Url}
                //   onLoadSuccess={({ numPages }) => {
                //     setNumPages(2); // Set total number of pages to 2
                //   }}
                >
                  <Page pageNumber={pageNumber} width={600} />
                  {numPages === 2 && <Page pageNumber={pageNumber + 1} width={600} />}
                </Document> */}
          {/* <Document file={s3Url}>
            <Page />
          </Document> */}

      </Paper>
    );
  };

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
      <Text  style={{ color: 'grey',marginTop:"0.5rem" }}>
       <IconChevronLeft color='orange' style={{width:'18px',height:'18px'}} />{" "}
      </Text>
      <Text size="md" style={{fontSize:"25px",paddingLeft: '6px' }}>
     Tickets Details{'  '}
      </Text>
      <Text size="md" style={{fontSize:"25px", display: 'inline',color:"#9D733F", paddingLeft: '6px' }}>
      {`#${ticketId}`}
      </Text>
 </Paper>
 <Paper  style={{ display: 'flex',padding:"1rem",textAlign:"center",alignItems:"center" }}>
      <Paper style={{display: 'flex',padding:"0.7rem",justifyContent:"space-between",border: '1px solid #CDAC82',borderRadius:"10px"}}>
           <Text>Open</Text>
           <IconChevronDown color='orange' style={{marginLeft:"1rem"}}/>
      </Paper>
       <span style={{ marginLeft:"1rem",color:"gray"}}>|</span>
        <Paper style={{ marginLeft:"1rem"}}>
        <Text size="la" >
          Chelsea +2
       </Text>
       <Text size="sm" style={{display:"flex",flexDirection:"row-reverse", color: 'grey' }}>
            also here
       </Text>
        </Paper>
        <Paper style={{display:"flex",marginLeft:"1.5rem"}}>
        <Avatar  src={"https://i.pravatar.cc/56?u=123490"} radius="xl" />
        <Avatar style={{marginLeft:'-10px'}} src={"https://i.pravatar.cc/56?u=123491"} radius="xl" />
        <Avatar style={{marginLeft:'-10px'}} src={"https://i.pravatar.cc/56?u=123493"} radius="xl" />
        </Paper>
   </Paper>
 </Paper>



    <Paper style={{display:"flex",justifyContent:"space-between",width:"95%",height:"300px",margin:"auto",gap:"1rem"}}>
       <Paper style={{flex:"1",border:"1px solid gray"}}>
           <Paper style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
            <Text style={{padding:"0.7rem",fontSize:"19px"}}>
                Documents In Request
            </Text>
            <Paper style={{display: 'flex',padding:"0.7rem",justifyContent:"space-between",border: '1px solid #CDAC82',borderRadius:"10px"}}>
           <IconNotes />
           <Text  style={{marginLeft:"1rem"}}>Upload</Text>
         </Paper>
           </Paper>
       </Paper>
       <Paper style={{flex:"1",border:"1px solid gray"}}>
       <Paper style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
            <Text style={{padding:"0.7rem",fontSize:"19px"}}>
                Documents to Serve
            </Text>
            <Paper style={{display: 'flex',padding:"0.7rem",justifyContent:"space-between",border: '1px solid #CDAC82',borderRadius:"10px"}}>
           <IconPlus />
           <Text  style={{marginLeft:"1rem"}}>Add Job</Text>
         </Paper>
           </Paper>
       </Paper>
    </Paper>

    <Text style={{padding:"1.5rem",fontSize:"2rem"}} >    
         Confirm a Job
       </Text>


       <Paper style={{display:"flex",gap:"1rem",width:"95%",margin:"auto"}}>
         <Paper style={{border:"1px solid black",width:"65%"}}>
         <div>
      {/* Other components and content */}
      {ticketData.length > 0 && (
        <div>
          {/* Display other ticket details */}
          <div key={ticketData[0].id}>
            {/* Display other attachment details */}
            {displayAttachmentPDF(ticketData[0].attachments[0].s3Url)}
          </div>
          
        </div>
      )}

      {/* Display error notification if there's an error */}
      {error && (
        <Notification color="red" title="Error">
          {error}
        </Notification>
      )}
    </div>
         </Paper>
         <Paper style={{border:"1px solid black",width:"35%"}}></Paper>
       </Paper>
    </>
  );
};

export default TicketDetails;
