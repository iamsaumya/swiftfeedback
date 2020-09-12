import React from 'react';
import { Heading, Button, Text, Flex } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <DashboardShell>
    <Heading p={4} size="lg">
      You haven't added any sites
    </Heading>
    <Text p={2}>Welcome, Lets get started</Text>
    <AddSiteModal />
  </DashboardShell>
);

export default EmptyState;
