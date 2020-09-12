import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Icon, Flex } from '@chakra-ui/core';
import EmptyState from '@/components/EmptyState';

const Home = () => {
  const auth = useAuth();
  return (
    <Flex align="center" justify="center" direction="column" minHeight="100vh">
      <Head>
        <title>Swift Feedback</title>
      </Head>
      {!auth?.user ? (
        <>
          <Icon name="logo" size="64px" />
          <Button onClick={() => auth.signinwithGithub()}>Sign In</Button>
        </>
      ) : (
        <EmptyState />
      )}
    </Flex>
  );
};

export default Home;
