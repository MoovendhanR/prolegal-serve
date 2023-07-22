import React from 'react';
import { Text, Grid, Paper } from '@mantine/core';

const Mapingcomponent = () => {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <Grid
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: '8px',
        }}
      >
        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Icon
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Date Received
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Request Name
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Request email
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Subject
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Status
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Priority
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            View in Zendesk
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            Attach
          </Text>
        </Paper>

        <Paper style={{padding:"1rem"}}>
          <Text size="sm" align="center">
            View Request
          </Text>
        </Paper>
      </Grid>

      {/* Placeholder rows */}
      {[...Array(5)].map((_, index) => (
        <Grid
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '8px',
            marginTop: '10px',
          }}
        >
          {/* Replace this with actual data and icons */}
          <Paper style={{padding:"1rem"}}>Icon</Paper>
          <Paper style={{padding:"1rem"}}>Date</Paper>
          <Paper style={{padding:"1rem"}}>Name</Paper>
          <Paper style={{padding:"1rem"}}>Email</Paper>
          <Paper style={{padding:"1rem"}}>Subject</Paper>
          <Paper style={{padding:"1rem"}}>Status</Paper>
          <Paper style={{padding:"1rem"}}>Priority</Paper>
          <Paper style={{padding:"1rem"}}>Zendesk Link</Paper>
          <Paper style={{padding:"1rem"}}>Attach</Paper>
          <Paper style={{padding:"1rem"}}>View Request</Paper>
        </Grid>
      ))}
    </div>
  );
};

export default Mapingcomponent;
