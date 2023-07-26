import { Navbar, Group, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconFolderPlus,
  IconLayoutDashboard,
  IconBriefcase2,
  IconSettings,
} from '@tabler/icons-react';
import { LinksGroupsData } from './LinkGroupsData';
interface Attachment {
    id: number;
    s3Url: string;
    fileName:string;
    attachments: {
        id: number;
        documentName: string;
        documentType: string;
        isPrimary: boolean;
        noOfPages: number;
      }[];
  }
 
  
  interface Case {
    id: number;
    referenceOrMatterNumber: string | null;
    caseNumber: string;
    state: string;
    county: string;
    courtType: string;
    plaintiff: string;
    defendant: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface Job {
    id: number;
    serviceSpeed: string;
    serveeType: string;
    serveeName: string | null;
    registeredAgent: string | null;
    zipcode: string;
    googlePlacesAddress: string | null;
    serveeAddress: string;
    firstAttemptBy: string | null;
    specialInstructions: string | null;
    trialDepoOrActionDate: string | null;
    status: string;
    attorneyName: string;
    eFileReturnOfService: boolean;
    zendeskId: number;
    caseId: number;
    createdAt: string;
    updatedAt: string;
    case: Case;
    attachments: Attachment[];
    serverAddress: string[];
    jobPictures: string[];
  }
  
  interface Company {
    id: number;
    operatingCompany: string;
    type: string;
    name: string;
    caseManagementSoftware: string;
    phoneNumber: string;
    addressId: number;
    specialityId: number | null;
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
    viewers: any[]; // Replace any with the actual type if available
  
  }
  
  
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

export function AllDetailsComponent({id,ticketId,senderEmail,subject,ticketUpdatedBy,ticketComment,ticketPriority,status,companyId,userId,createdAt,updatedAt,attachments,jobs,company,user,viewers}:TicketData) {

    const mockdata = [
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
  const links = mockdata.map((item) => <LinksGroupsData {...item} key={item.label} />);

  return (
    <Navbar height={1400} width={{ sm: 370 }} p="md" className={classes.navbar}>
     
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}