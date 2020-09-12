import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Heading, Text, Code, Icon, Flex } from '@chakra-ui/core';
const Home = () => {
  const auth = useAuth();
  return (
    <Flex align="center" justify="center" direction="column" minHeight="100vh">
      <Head>
        <title>Swift Feedback</title>
      </Head>

      <Icon name="logo" size="64px" />
      <Button onClick={() => auth.signinwithGithub()}>Sign In</Button>
      {auth?.user && <Button onClick={() => auth.signout()}>Sign out</Button>}
    </Flex>
  );
};

export default Home;
