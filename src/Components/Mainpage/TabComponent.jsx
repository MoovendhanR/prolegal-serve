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

function  TabComponent({jobdata}) {
  // const tabsData: JobData[] = [
  //   { label: 'Tab 1', content: 'Content of Tab 1' },
  //   { label: 'Tab 2', content: 'Content of Tab 2' },
  //   { label: 'Tab 3', content: 'Content of Tab 3' },
  // ];
  const [tabsData,setDabsData] = useState(jobdata)
    
  useEffect(()=>{
     setDabsData(jobdata)
  },[jobdata])

  // console.log(tabsData,"check")
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tabs>
        <div style={{display:"flex",gap:"0.5rem",alignItems: "flex-start"}}>

        {
         tabsData.length > 0 ? (
         <>
           {tabsData.map((tab, index) => (
          <Button    
          key={index}
          variant={index === activeTab ? 'outline' : 'default'}
          onClick={() => setActiveTab(index)}
          >
          <IconNote/>
           {`Job ${index+1}`}
          </Button>
            ))}
             </>
             ):(
                       <>
                            <Text style={{display:"flex",color:"#b0aba5",cursor:"pointer"}}>
                          
                            </Text>
                             <Text truncate>Not mentioned</Text>
                            </>
                        )
                      }
        </div>
      </Tabs>
     
      <div style={{ marginTop: 20,width:'70%' }}>
        <Paper style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr', // Fixed column widths
           alignItems: 'center',
           gap:"1rem",
           paddingLeft:"1rem",
          }}>
            <Text style={{width:"30%"}}>{" "}</Text>
            <Text style={{width:"30%",color:"#9D733F"}}>Type</Text>
            <Text style={{width:"30%",color:"#9D733F"}}>Name</Text>
        </Paper>
        <Paper style={{display:"flex",gap:"0.5rem",alignItems:'center' }}>

       
        <Paper style={{
          padding:"0.5rem",textAlign:'center',
                     marginLeft:"1rem",
                     display: 'grid',
                     gridTemplateColumns: '1fr 1fr 1fr ', // Fixed column widths
                    alignItems: 'center',
                    gap:"1rem",
                                         
                    }}>
                      {
                        tabsData.length > 0 ? (<>
                        {tabsData[activeTab].attachments.map((tab)=>(
                       <>
                        <Text style={{display:"flex",color:"#b0aba5",cursor:"pointer"}}>
                      <IconGripVertical/>
                      <IconEye/>
                      <IconNotes/>
                      </Text>
                       <Text truncate>{tab.documentName}</Text>
                        <Text truncate>{tab.documentType}</Text>
                        </>
                      ))}
                        </>
                        ):(
                            <>
                            <Text style={{display:"flex",color:"#b0aba5",cursor:"pointer"}}>
                            <IconGripVertical/>
                            <IconEye/>
                            <IconNotes/>
                            </Text>
                             <Text truncate>Not mentioned</Text>
                              <Text truncate>Not mentioned</Text>
                            </>
                        )
                      }
                    </Paper>



        </Paper>
      </div>
    </div>
  );
};

export default TabComponent;

