import { Avatar, Grid, Loader, Notification, Paper, Text, Menu, Button, Select, TextInput } from '@mantine/core';
import { IconChevronDown, IconChevronLeft, IconEyeCheck, IconEyeFilled, IconGripVertical, IconNotes, IconPlus } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";
import TabComponent from './TabData';
import { Navbar, Group, ScrollArea, createStyles, rem } from '@mantine/core';
import {

  IconFolderPlus,
  IconLayoutDashboard,
  IconBriefcase2,
  IconSettings,
} from '@tabler/icons-react';
import { LinksGroupsData } from './LinkGroupsData';
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
  const [ticketData, setTicketData] = useState<TicketData[]>([]);
    const { ticketId } = useParams<{ ticketId: string }>();
    const [numPages, setNumPages] = useState<number >(2);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [dropdownOpened, setDropdownOpened] = useState(false);

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
        setTicketData(response.data?.data);
      } catch (error) {
        setError('Error fetching ticket details.');
      }
    };

    fetchData();
  }, [ticketId]);

const jobdata=ticketData[0]?.jobs;


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
  
  console.log(ticketData)

  function AllDetailsComponent() {
    const useStyles = createStyles((theme) => ({
      navbar: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          paddingBottom: 0,
      },
      
      header: {
          padding: theme.spacing.md,
          paddingTop: 0,
          marginLeft: `calc(${theme.spacing.md} * -1)`,
          marginRight: `calc(${theme.spacing.md} * -1)`,
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          borderBottom: `${rem(1)} solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
      },
      
      
      links: {
          marginLeft: `calc(${theme.spacing.md} * -1)`,
          marginRight: `calc(${theme.spacing.md} * -1)`,
      },
      
      linksInner: {
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
      },
      
      footer: {
          marginLeft: `calc(${theme.spacing.md} * -1)`,
          marginRight: `calc(${theme.spacing.md} * -1)`,
          borderTop: `${rem(1)} solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
      },
    }));
  
     console.log("data",ticketData[0]);
      var mockdata = [
        { label: 'Document', 
        icon: IconLayoutDashboard,
        initiallyOpened: true,
        links: [
          { label: `Document Name`, link: '/' },
          { label: `summons`, link: '/' },
          
        ],
      },
      {
        label: 'Servee',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
          { label: `Person or Business`, link: '/' },
          { label: `Bob's Plumbing Inc`, link: '/' },
          { label: `CT Corporation`, link: '/' },
          { label: `Bob's Plumbing Inc`, link: '/' },
          { label: `CT Corporation`, link: '/' },
          { label: `From Google Api`, link: '/' },
        ],
      },
      {
        label: 'Case',
        icon: IconFolderPlus,
        initiallyOpened: true,
        links: [
          { label: `Case Number`, link: '/' },
          { label: `John Doe`, link: '/' },
          { label: `XYZ insurance`, link: '/' },
          { label: `FL`, link: '/' },
          { label: `Broward`, link: '/' },
          { label: `Circuit`, link: '/' },  
          { label: 'John Legal Esquire', link: '/' },
          { label: 'May 8th,2023', link: '/' },
        ],
      },
      { label: 'Client', icon: IconBriefcase2,
      initiallyOpened: true,
      links: [
        { label: `Comapny`, link: '/' },
        { label: `User`, link: '/' },
        { label: `Reference`, link: '/' },
        { label: `Yes`, link: '/' },
        
      ],
    },
    
    
    {
      label: 'Job',
      icon: IconSettings,
      initiallyOpened: true,
      links: [
        { label: `Standard`, link: '/' },
        { label: `First Attempt Date`, link: '/' },
        { label: `Special Instruction`, link: '/' },
      ],
    },
  ];
  const { classes } = useStyles();
  var links = mockdata.map((item,id) => <LinksGroupsData {...item} key={id} />);
  
  return (
    <Navbar height={1400} width={{ sm: 370 }} p="md" className={classes.navbar}>
     
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
  }






  const appendDocumentType = (documentName: string, documentType: string, isPrimary: boolean) => {
    if (!isPrimary) {
      return `${documentName} - ${documentType}`;
    }
    return documentName;
  };

  // Helper function to display noOfPages in Used in Jobs column
  const displayNoOfPages = (noOfPages: number | undefined) => {
    return noOfPages || '-';
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



    <Paper style={{display:"flex",justifyContent:"space-between",width:"95%",height:"270px",margin:"auto",gap:"1rem"}}>
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
        {/* display data */}
         <Grid
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          padding:"0.1rem",
          textAlign:"center",
          marginLeft:"4.5rem",
          justifyContent:"space-even",
          alignItems: 'center',
        }}
      >
         <Paper style={{textAlign:'center',color:"#9D733F",width:"25%"}}>
          <Text size="sm" align="center">
           <IconEyeCheck/>
          </Text>
        </Paper> 
         <Paper style={{padding:"0.1rem",textAlign:'center',color:"#9D733F",width:"25%"}}>
          <Text size="l" align="center">
            Type
          </Text>
        </Paper> <Paper style={{padding:"0.1rem",textAlign:'center',color:"#9D733F",width:"25%"}}>
          <Text size="l" align="center">
            Name
          </Text>
        </Paper> <Paper style={{padding:"0.1rem",textAlign:'center',color:"#9D733F",width:"25%"}}>
          <Text size="l" align="center">
            UsedIn
          </Text>
        </Paper>
        </Grid>
        {/* maping data */}
        {/* {
        ticketData.attachments.length > 0 ? (
            <>
       {ticketData.attachments.map((ticket) => (
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
            padding:"0.5rem",textAlign:'center'}}>
              <IconEyeFilled/>
            </Paper>
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
        
          
         
        </Grid>
      ))} */}



{
      ticketData?.length > 0 ? (
            <>
       <div>
          <div key={ticketData[0]?.id}>
            {ticketData[0]?.attachments?.length > 0 && (
              <Paper  shadow="sm">
                <Grid columns={4}style={{
                  display: 'grid',
                  padding:"1.5rem",
                  gridTemplateRows: 'repeat(4, 1fr)',
                  boxShadow:"none"
                  }}>
                  {ticketData[0]?.attachments?.map((attachment) => (
                    <Paper key={attachment?.id}  shadow="sm" style={{ textAlign: 'center',display:"flex",justifyContent: 'space-evenly',boxShadow:"none"}}>
                      <Avatar size="sm" style={{width:"24%", boxShadow:"none",backgroundColor:"none"}}>
                        <IconGripVertical/>
                        <IconEyeFilled color="grey"/></Avatar>
                      <Text style={{padding:"0.5rem",textAlign:'center',fontSize:"10px",
                      width:"24%", boxShadow:"none",
                       whiteSpace: "nowrap",
                       overflow: "hidden",
                       textOverflow: "ellipsis",
                    }}>{attachment?.attachments[0]?.documentName}</Text>
                      <Text style={{padding:"0.5rem",textAlign:'center',fontSize:"10px",width:"24%", boxShadow:"none",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>{attachment?.attachments[0]?.documentType}</Text>
                      <Text style={{padding:"0.5rem",textAlign:'center',fontSize:"10px",width:"24%", boxShadow:"none"}}>{attachment?.attachments[0]?.noOfPages}</Text>
                    </Paper>
                  ))}
                </Grid>
              </Paper>
            )}
          </div>
        </div>
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

        
       </Paper>


       <Paper style={{flex:"1",border:"1px solid gray",width:"40%"}}>
       <Paper style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
            <Text style={{padding:"0.7rem",fontSize:"19px"}}>
                Documents to Serve
            </Text>
            <Paper style={{display: 'flex',padding:"0.7rem",justifyContent:"space-between",border: '1px solid #CDAC82',borderRadius:"10px"}}>
           <IconPlus />
           <Text  style={{marginLeft:"1rem"}}>Add Job</Text>
         </Paper>
           </Paper>
         {/* <TabComponent  jobdata={jobdata} /> */}
       </Paper>
    </Paper>

    <Text style={{padding:"1.5rem",fontSize:"2rem"}} >    
         Confirm a Job
       </Text>


       <Paper style={{display:"flex",gap:"1rem",width:"95%",margin:"auto"}}>
         <Paper style={{border:"1px solid black",width:"65%"}}>
         <div>
      {/* Other components and content */}
      {ticketData?.length > 0 && (
        <div>
          {/* Display other ticket details */}
          <div key={ticketData[0]?.id}>
            {/* Display other attachment details */}
            {displayAttachmentPDF(ticketData[0]?.attachments[0]?.s3Url)}
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
         <Paper style={{border:"1px solid black",width:"35%"}}>
          <AllDetailsComponent/>
   
    
         </Paper>
       </Paper>
    </>
  );
};

export default TicketDetails;