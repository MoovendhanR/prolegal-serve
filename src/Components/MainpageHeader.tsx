import { createStyles,TextInput,Box, Header,ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { UserButton } from './Navbar/UserButton';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width:"100%"
  },

  feeter: {
      display:"flex",
  },
  userdetails:{
    display:"flex",
    flexDirection: "row",
    gap:"0.5rem",
   
  }
  
}));



export function MainPageHeader() {
  const theme = useMantineTheme();

  const { classes} = useStyles();

  

  return (
    <Header height={60} mb={120}>
      <div className={classes.header} >

      <TextInput
      radius="xl"
      size=''
      rightSection={
        <ActionIcon  radius="xl" color={"grey"} variant="grey">
         
            <IconSearch size="1.1rem" stroke={2.5} color='orange' />
         
        </ActionIcon>
      }
      placeholder=" Search by Case Number,Job,Servee.."
     
    /> 
      
        <Box className={classes.feeter}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Box>
      </div>
    </Header>
  );
}