import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex direction="column" align="center" justify="center" p={4}>
      <Heading as="h1" size="xl" mb={4}>About Us</Heading>
      <Text fontSize="lg" mb={4}>The Daily Chuckle has been the leading provider of news in our community for over 20 years.</Text>
      <Image src="https://source.unsplash.com/random/800x600?newspaper" alt="Newspaper" boxSize="300px" />
    </Flex>
  );
};

export default About;