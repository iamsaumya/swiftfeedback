import Head from 'next/head';
import { useAuth } from '../lib/auth';
import { Button, Heading, Text, Code } from '@chakra-ui/core';
const Home = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <Head>Swift Feedback</Head>
      <main>
        <Heading fontWeight="bold">Swift Feedback</Heading>
        <Button onClick={() => auth.signinwithGithub()}>Sign In</Button>
        <Text>
          Current User: <Code>{auth?.user?.email}</Code>
        </Text>
        {auth?.user && <Button onClick={() => auth.signout()}>Sign out</Button>}
      </main>
    </div>
  );
};

export default Home;
