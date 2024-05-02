import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" p={4}>
      <Heading as="h1" size="2xl" mb={6}>The Daily Chuckle</Heading>
      <Text fontSize="xl" mb={4}>Your trusted source for local news.</Text>
      <Image src="https://source.unsplash.com/random/800x600?city,night" alt="City at Night" boxSize="400px" mb={4} />
      <Flex>
        <Link as={RouterLink} to="/news" m={2} p={2} bg="blue.500" color="white" borderRadius="md">News</Link>
        <Link as={RouterLink} to="/about" m={2} p={2} bg="green.500" color="white" borderRadius="md">About</Link>
      </Flex>
    </Flex>
  );
};

export default Index;