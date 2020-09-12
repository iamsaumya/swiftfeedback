import React from 'react';
import { Heading, Button, Text } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Heading p={4} size="md">
      Get feedback on your site instantly.
    </Heading>
    <Text p={2}>Start today, then grow with us 🌱</Text>
    <Button m={4} fontWeight="medium" maxW="200px" size="md">
      Upgrade to Starter
    </Button>
  </DashboardShell>
);

export default FreePlanEmptyState;
