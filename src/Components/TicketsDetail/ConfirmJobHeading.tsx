import React from 'react';
import { Group, Text } from '@mantine/core';

const ConfirmJobHeading: React.FC = () => {
  return (
    <Group
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', // Fixed column widths
        alignItems: 'center',
        borderBottom: '1px solid #ccc',
        padding: '8px 16px',
        marginTop: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
      }}
    >
      <Text weight={600} 
       size="sm">
        Server Company
      </Text>
      <Text weight={600} 
       size="sm">
        Server Email
      </Text>
      <Text weight={600} 
       size="sm">
        Server Phone Number
      </Text>
      <Text weight={600} 
       size="sm">
        Server Address
      </Text>
      <Text weight={600} 
       size="sm">
        Server Score
      </Text>
      <Text weight={600} 
       size="sm">
        Avg. Serve Time
      </Text>
      <Text weight={600} 
       size="sm">
        Server Rate
      </Text>
      <Text weight={600} 
       size="sm">
        Action
      </Text>
    </Group>
  );
};

export default ConfirmJobHeading;
