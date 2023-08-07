import React, { useEffect, useState } from 'react';
import { Avatar,  Loader, Notification, Paper, Text, Button, Box } from '@mantine/core';
import {  IconCheck, IconChevronDown, IconChevronLeft, IconEye, IconEyeCheck,  IconGripVertical, IconMessage2, IconNotes, IconPlus } from '@tabler/icons-react';
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import { Navbar, ScrollArea, createStyles, rem } from '@mantine/core';
import {

  IconFolderPlus,
  IconLayoutDashboard,
  IconBriefcase2,
  IconSettings,
} from '@tabler/icons-react';
import { LinksGroupsData } from '../Components/Mainpage/LinkGroupsData';
import { IconEyeClosed } from '@tabler/icons-react';
import TabComponent from '../Components/Mainpage/TabComponent';
import ConfirmJob from '../Components/Mainpage/ConfirmJob';
import { useDispatch, useSelector } from 'react-redux';
import { FetchSinglePerson } from '../Redux/Candidates/action';

const CharacterDetailedView = () => {
  const { ticketId } = useParams();
  const dispatch = useDispatch();

  const currentPerson = useSelector((store)=>store.candidatesData.currentPerson);

  useEffect(()=>{
    if(ticketId) {
      dispatch(FetchSinglePerson(ticketId))
    }
  },[dispatch,ticketId])
  
  // console.log("current",currentPerson)



  const [ticketData, setTicketData] = useState([]);
  // console.log("ticket",ticketData);
  const [jobdata,setJobdata] = useState([]);
  const [visibleTicketId, setVisibleTicketId] = useState(null);
   const [servicespeed, setServicespeed] = useState("");
   const [isVisible, setIsVisible] = useState(true);
   const [url, setUrl] = useState(null)
   const [isVisibleaforssign, setIsVisibleAssign] = useState(true);
  
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () =>  {
        const apiEndpoint =`https://core-api-staging.processserver.ai/api/zendesk/${ticketId}`
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
        const headers = {
            Authorization: `Bearer ${authToken}`,
          };
      try {
        const response = await axios.get(apiEndpoint,{headers});
        setTicketData(response.data.data);
        setJobdata(response.data.data[0].jobs);
        setServicespeed(response.data.data[0].jobs[0].serviceSpeed);
      } catch (error) {
        setError('Error fetching ticket details.');
      }
    };

    fetchData();
  }, [ticketId]);
  
  // console.log(selectedId,"selectedId")
  const handleClick=(attachment) => {
    // setSelectedId(attachment.id)
    setUrl(attachment.s3Url)
    // console.log(attachment.s3Url)
    
    if (visibleTicketId === attachment.id) {
      setVisibleTicketId(null);
    } else {
      setVisibleTicketId(attachment.id);
    }
    
  }
  // console.log(url,"url")
  var footName,ticketComment,PdfID,JOBDATA;
  currentPerson.map((ticket) => {
     footName=ticket.attachments[0].attachments[0].documentName
     ticketComment=ticket.ticketComment;
     PdfID=ticket
       JOBDATA=ticket.jobs;
    })
    // if(PdfID.jobs.length===0){
    //  setServicespeed("standard")
    // }else{
    //  setServicespeed(PdfID.jobs[0].serviceSpeed)
    // }
    // console.log(JOBDATA,"JOB")

  
  // console.log(jobdata,"jobdata")
  
  
  
  // pdf format
  const displayAttachmentPDF = (s3Url) => {

    // You can render the PDF here using Mantine-UI components or any other PDF viewer library
    return (
      <Paper shadow="sm">
      <iframe src={s3Url} title="PDF Viewer" width="100%" height="1000px"/>
      {/* <Document
                file={currentPerson[0].attachments[0].s3Url}
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
  


  function AllDetailsComponent() {
    var documentName,
     documentType,
     serveeName,
     serveeAddress,
     serveeType,
     registeredAgent,
     attorneyName,
     googlePlacesAddress,
     trialDepoOrActionDate,
     caseNumber,
     plaintiff,
     defendant,
     state,
     county,
     courtType,
     firstAttemptBy,
     serviceSpeed,
    eFileReturnOfService,
    operatingCompany,
    firstName,
    phoneNumber;


    currentPerson.map((ticket) => {
         documentName=ticket.attachments[0].attachments[0].documentName;
         documentType=ticket.attachments[0].attachments[0].documentType;
        if(ticket.jobs.length===0){
          return;
        }else{
         serveeType= ticket.jobs[0].serveeType;
         serveeName=ticket.jobs[0].serveeName;
         registeredAgent=ticket.jobs[0].registeredAgent;
         attorneyName=ticket.jobs[0].attorneyName;
         serveeAddress=ticket.jobs[0].serveeAddress;
         googlePlacesAddress=ticket.jobs[0].googlePlacesAddress;
         trialDepoOrActionDate=ticket.jobs[0].trialDepoOrActionDate;
         caseNumber=ticket.jobs[0].case.caseNumber;
         plaintiff=ticket.jobs[0].case.plaintiff;
         defendant=ticket.jobs[0].case.defendant;
         state=ticket.jobs[0].case.state;
         county=ticket.jobs[0].case.county;
         courtType=ticket.jobs[0].case.courtType;
         serviceSpeed=ticket.jobs[0].serviceSpeed;
          firstAttemptBy=ticket.jobs[0].firstAttemptBy;
          eFileReturnOfService=ticket.jobs[0].eFileReturnOfService;
        }

       phoneNumber=ticket.company.phoneNumber;
       firstName=ticket.user.firstName;
       operatingCompany=ticket.company.operatingCompany;


     })

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
  
      var mockdata = [
        { label: 'Document', 
        icon: IconLayoutDashboard,
        initiallyOpened: true,
        links: [
          { label: documentName||"Not Mentioned", link: 'Document Name*' },
          { label: documentType||"Not Mentioned", link: 'Type*' },
          
        ],
      },
      {
        label: 'Servee',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
          { label: serveeType||"Not Mentioned", link: 'Servee Type*' },
          { label: serveeName||"Not Mentioned", link: 'Company Name' },
          { label: registeredAgent||"Not Mentioned", link: 'Registered Agent' },
          { label: attorneyName||"Not Mentioned", link: 'Name' },
          { label: serveeAddress||"Not Mentioned", link: 'Servee Address*' },
          { label: googlePlacesAddress||"Not Mentioned", link: 'Address Type' },
        ],
      },
            {
        label: 'Case',
        icon: IconFolderPlus,
        initiallyOpened: true,
        links: [
          { label: caseNumber||"Not Mentioned", link: 'Case Number*' },
          { label: plaintiff||"Not Mentioned", link: 'Plaintiff' },
          { label: defendant||"Not Mentioned", link: 'Defendant*' },
          { label: state||"Not Mentioned", link: 'State*' },
          { label: county||"Not Mentioned", link: 'Country*' },
          { label: courtType||"Not Mentioned", link: 'Court Type*' },  
          { label: attorneyName||"Not Mentioned", link: 'Attorney Name*' },
          { label: trialDepoOrActionDate||"Not Mentioned", link: 'Trial Number' },
        ],
      },
      { label: 'Client', icon: IconBriefcase2,
      initiallyOpened: true,
      links: [
        { label: operatingCompany||"Not Mentioned", link: 'Company*' },
        { label: firstName||"Not Mentioned", link: 'User*' },
        { label: phoneNumber||"Not Mentioned", link: 'Reference or Matter #' },
        { label: eFileReturnOfService?"Yes":"No"||"Not Mentioned", link: 'eFile Return of Service*' },
        
      ],
    },
    
    
    {
      label: 'Job',
      icon: IconSettings,
      initiallyOpened: true,
      links: [
        { label: serviceSpeed||"Not Mentioned", link: 'Service Speed*' },
        { label: firstAttemptBy||"Not Mentioned", link: 'First Attempt Date' },
        { label: caseNumber||"Not Mentioned", link: 'Special Instructions' },
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


  const handleButtonClick = () => {
    setShowFunctionalComponent(true);
    setIsVisible(false);
    setIsVisibleAssign(false)
  };
 const handleCancel =()=>{
  setIsVisible(false);

 }
  const [showFunctionalComponent, setShowFunctionalComponent] = useState(false);


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
      <Link  to={`/`}> 
      <Text size="md" style={{ color: 'grey',textDecoration:"underline" }}>
         Job /{' '}
      </Text>
         </Link>
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


 {/*  */}
 
 <Paper style={{display:"flex",justifyContent:"space-between",width:"85%",height:"270px",margin:"auto",gap:"1rem"}}>
       <Paper style={{flex:"1",width:"4%",border:"1px solid gray"}}>
           <Paper style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
            <Text style={{padding:"0.7rem",fontSize:"19px"}}>
                Documents In Request
            </Text>
            <Paper style={{display: 'flex',padding:"0.7rem",justifyContent:"space-between",border: '1px solid #CDAC82',borderRadius:"10px"}}>
           <IconNotes />
           <Text  style={{marginLeft:"1rem"}}>Upload</Text>
         </Paper>
       
        </Paper>


         <Box
        style={{
          display: 'grid',
           gridTemplateColumns: '1fr 1fr 1fr 1fr', // Fixed column widths
          alignItems: 'center',
          gap:"1rem",
          paddingLeft:"1rem",
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
        </Box>
        {/* maping data */}
       
{
      currentPerson.length > 0 ? (
            <>
       <div>
          <div key={PdfID.id}>
            {PdfID.attachments.length > 0 && (
              <Paper  >
                
                  {PdfID.attachments.map((attachment) => (
                    <Box key={attachment.id} style={{ 
                      display: 'grid',
                   gridTemplateColumns: '1fr 1fr 1fr 1fr', // Fixed column widths
                  alignItems: 'center',
                 paddingLeft:"0.5rem",
                 gap:"0.5rem",
                 marginTop:"0.5rem",
                      boxShadow:"none",
                     }}>
                      {!attachment.attachments[0].isPrimary ?  <Avatar size="sm" 
                       style={{
                        width: "45%",
                        cursor:"pointer"
                        }} onClick={() => handleClick(attachment)}>
                        {visibleTicketId === attachment.id ?<IconGripVertical color="#cdac82"/>:<IconGripVertical color="#aca9a4"/>}
                        <Box >
                        {visibleTicketId === attachment.id ? < IconEye color="#CDAC82" /> : <IconEyeClosed color="#D9D9D9" />}
                        </Box>
                        </Avatar>:null}
                         <Text size="l" ml={"-1rem"}  truncate>
                         {!attachment.attachments[0].isPrimary? attachment.attachments[0].documentName:null}
                       </Text>
                        <Text size="l"  truncate>
                       {!attachment.attachments[0].isPrimary? attachment.attachments[0].documentType:null}
                       </Text>
                        <Text size="l" ml={"1.5rem"} truncate>
                        {!attachment.attachments[0].isPrimary? attachment.attachments[0].noOfPages : null}
                       </Text>
                    </Box>
                     
                      
                  ))}
              
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


       <Paper style={{flex:"1",border:"1px solid gray",width:"47%"}}>
       <Paper style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
            <Text style={{padding:"0.7rem",fontSize:"19px"}}>
                Documents to Serve
            </Text>
            <Paper style={{display: 'flex',padding:"0.7rem",justifyContent:"space-between",border: '1px solid #CDAC82',borderRadius:"10px"}}>
           <IconPlus />
           <Text  style={{marginLeft:"1rem"}}>Add Job</Text>
         </Paper>
           </Paper>
         <TabComponent  jobdata={jobdata} />
       </Paper>
    </Paper>

    {/*  */}
    <Text style={{padding:"1.5rem",fontSize:"2rem"}} >    
         Confirm a Job
       </Text>

       <Paper style={{display:"flex",gap:"1rem",width:"95%",margin:"auto"}}>
         <Paper style={{width:"65%"}}>
         <div>
      {/* Other components and content */}
      {currentPerson.length > 0 && (
        <div>
          {/* Display other ticket details */}
          <div>
            {/* Display other attachment details */}
            {displayAttachmentPDF(url?url:PdfID.attachments[0].s3Url)}
          </div>
          
          <div
         dangerouslySetInnerHTML={{__html: ticketComment}}
    />        </div>
      )}

      {/* Display error notification if there's an error */}
      {error && (
        <Notification color="red" title="Error">
          {error}
        </Notification>
      )}
    </div>
         </Paper>
         <Paper style={{width:"35%"}}>
          <AllDetailsComponent/>  
         </Paper>
       </Paper>


       {isVisibleaforssign && <Box style={{width: '30%',  marginLeft: 'auto',marginRight:"1.7rem"}}>
      <br />
      <Button style={{borderRadius:"10px",backgroundColor:"#5A4730",padding:"0.5rem",width:"82%"}}  onClick={handleButtonClick} disabled={!currentPerson}> <IconCheck style={{marginRight:"0.9rem"}} /> Assign Server</Button>
      </Box>}
      { isVisible && <Box style={{width:"95%",border:"1px solid #CDAC82",margin:"auto",display:"flex",borderRadius:"10px",backgroundColor:"#F6F1E9",marginTop:"1rem"}}>
              <Text style={{width:"70%",margin:"auto",color:"grey",display:"flex",alignItems:"center",marginLeft:"2rem"}}>
               <IconMessage2 style={{color:"#CDAC82"}}/>
                <span  style={{marginLeft:"1rem",color:"black",marginRight:"0.5rem"}}>Personal {footName}</span> is not assigned to any job,please confirm or click cancel to go back and edit the job.
              </Text>
              <Paper style={{width:"30%"}}>
                <Button style={{width:"47%",backgroundColor:"#5A4730",borderRadius:"10px",marginLeft:'0.1rem',padding:"0.1rem"}} onClick={handleCancel}>Cancel</Button>
                <Button style={{width:"47%",borderRadius:"10px",padding:"0.1rem",backgroundColor:"white",color:"black",border:"1px solid #CDAC82",marginLeft:"0.5rem"}} onClick={handleCancel}>Confirm</Button>
              </Paper>
       </Box>
      }

        <div>

      {showFunctionalComponent && <ConfirmJob selectedValue={servicespeed.length > 0 ? servicespeed : "standard"} />}
    </div>

    </>
  );
};

export default CharacterDetailedView;
