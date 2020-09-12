import React from 'react';
import {
  Flex,
  Stack,
  Icon,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box
} from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column" width="100%">
      <Flex
        justifyContent="space-between"
        backgroundColor="whiteAlpha.500"
        p={4}
      >
        <Stack isInline spacing={4}>
          <Icon name="logo" size="32px" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoURL} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" height="100vh" p={8}>
        <Flex
          ml="auto"
          mr="auto"
          direction="column"
          maxWidth="800px"
          width="100%"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
            <Heading>My Sites</Heading>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              p={9}
              backgroundColor="white"
              borderRadius="8px"
              mt={4}
            >
              {children}
            </Box>
          </Breadcrumb>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
