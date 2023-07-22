import React from 'react'
import { Text, Paper, Box, TextInput, ActionIcon } from '@mantine/core';
import { IconAdjustments, IconSearch } from '@tabler/icons-react';
import Mapingcomponent from './MapingComponent';

const Jobs = () => {
  return (
    <>
      <Paper  style={{ display: 'flex',padding:"1rem",textAlign:"center" }}>
      <Text size="md" style={{ color: 'grey',textDecoration:"underline" }}>
        Job /{' '}
      </Text>
      <Text size="md" style={{ display: 'inline', paddingLeft: '6px' }}>
        Tickets to Confirm
      </Text>
    </Paper>

    <Box style={{display:"flex",justifyContent:"space-between",alignItems: 'center'}} >
    <Text size="xl" style={{paddingLeft: '6px' }}>
        Tickets to Confirm
      </Text>

      <TextInput
      radius="sm"
      size=''
      rightSection={
        <ActionIcon  radius="xl" color={"grey"} variant="grey">
            <IconSearch size="1.1rem" stroke={2.5} color='orange' />
            <IconAdjustments size="1.1rem" stroke={2.5} color='orange'style={{marginLeft:'0.2rem'}} />
        </ActionIcon>
      }
      placeholder=" Search "
      rightSectionWidth={80} 
    />
    </Box>
    <Mapingcomponent/>
    </>
  )
}

export default Jobs
