// import React, { useState } from 'react';
// import { Tabs, Text, Button } from '@mantine/core';

// interface TabData {
//   label: string;
//   content: string;
// }

// const TabComponent: React.FC = () => {
//   const tabsData: TabData[] = [
//     { label: 'Tab 1', content: 'Content of Tab 1' },
//     { label: 'Tab 2', content: 'Content of Tab 2' },
//     { label: 'Tab 3', content: 'Content of Tab 3' },
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <Tabs >
//         {tabsData.map((tab, index) => (
//           <Button
//             key={index}
//             variant={index === activeTab ? 'filled' : 'outline'}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab.label}
//           </Button>
//         ))}
//       </Tabs>

//       <div style={{ marginTop: 20 }}>
//         <Text>{tabsData[activeTab].content}</Text>
//       </div>
//     </div>
//   );
// };

// export default TabComponent;


import React, { useEffect, useState } from 'react';
import { Tabs, Text, Button, Paper } from '@mantine/core';
import { IconEye, IconGripVertical, IconNote, IconNotes } from '@tabler/icons-react';
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

interface Attachment {
  id: number;
  documentName: string;
  documentType: string;
  isPrimary: boolean;
  zendeskAttachmentId: number;
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

 interface JobData {
  jobdata: Job[];
}

function  TabComponent({jobdata}:JobData) {
  // const tabsData: JobData[] = [
  //   { label: 'Tab 1', content: 'Content of Tab 1' },
  //   { label: 'Tab 2', content: 'Content of Tab 2' },
  //   { label: 'Tab 3', content: 'Content of Tab 3' },
  // ];
  const [tabsData,setDabsData] = useState(jobdata)
    
  useEffect(()=>{
    setDabsData((jobdata)=>jobdata)
  },[jobdata])
  console.log(tabsData)

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tabs >
        {tabsData?.map((tab, index) => (
          <Button
              
            key={index}
            variant={index === activeTab ? 'outline' : 'default'}
            onClick={() => setActiveTab(index)}
          >
          <IconNote/>
           {`Job ${index+1}`}
          </Button>
        ))}
      </Tabs>
     
      <div style={{ marginTop: 20,width:'60%' }}>
        <Paper style={{display:"flex",gap:"0.5rem"}}>
            <Text style={{width:"30%"}}>{" "}</Text>
            <Text style={{width:"30%",color:"#9D733F"}}>Type</Text>
            <Text style={{width:"30%",color:"#9D733F"}}>Name</Text>
        </Paper>
        <Paper style={{display:"flex",gap:"0.5rem",alignItems:'center' }}>

        <Text style={{display:"flex",color:"#9D733F"}}>
          <IconGripVertical/>
          <IconEye/>
          <IconNotes/>
        </Text>
        <Text style={{padding:"0.5rem",textAlign:'center',
                       width:"30%",
                       whiteSpace: "nowrap",
                       overflow: "hidden",
                       textOverflow: "ellipsis",
                    }}>{tabsData[activeTab]?.attachments[0]?.documentName}</Text>
        <Text style={{padding:"0.5rem",textAlign:'center',
                    width:"30%",
                       whiteSpace: "nowrap",
                       overflow: "hidden",
                       textOverflow: "ellipsis",
                    }}>{tabsData[activeTab]?.attachments[0]?.documentType}</Text>
        </Paper>
      </div>
    </div>
  );
};

export default TabComponent;

