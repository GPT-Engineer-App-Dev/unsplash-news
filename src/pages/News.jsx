import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const News = () => {
  return (
    <VStack spacing={8} p={4}>
      <Heading as="h1" size="xl">Latest News</Heading>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading size="md">Local Event Draws Huge Crowd</Heading>
        <Text mt={4}>The event, which took place at the city park, attracted over 5,000 attendees from various parts of the state. Highlights included live music performances, a variety of food trucks offering local and international cuisine, and a spectacular fireworks display to conclude the evening.</Text>
        <Image src="https://source.unsplash.com/random/800x600?event" alt="Event" />
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading size="md">New Park Opens Downtown</Heading>
        <Text mt={4}>The new downtown park opened last week and offers a variety of activities for families.</Text>
        <Image src="https://source.unsplash.com/random/800x600?park" alt="Park" />
      </Box>
    </VStack>
  );
};

export default News;