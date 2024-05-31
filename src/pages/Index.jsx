import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const creators = [
  {
    name: "John Doe",
    bio: "A passionate designer who loves creating beautiful interfaces and experiences.",
    image: "https://via.placeholder.com/150",
    social: {
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Jane Smith",
    bio: "An enthusiastic developer who is always learning and experimenting with new technologies.",
    image: "https://via.placeholder.com/150",
    social: {
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
];

const Index = () => {
  return (
    <Box>
      <Box as="nav" bg="blue.600" color="white" px={4} py={2}>
        <Flex align="center" justify="space-between">
          <Heading size="md">Creators Bio</Heading>
          <HStack spacing={4}>
            <Link href="#featured">Featured Creators</Link>
            <Link href="#footer">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      <Container maxW="container.xl" py={10}>
        <Heading id="featured" mb={6}>Featured Creators</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {creators.map((creator, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={creator.image} alt={creator.name} />

              <Box p={6}>
                <Heading size="md">{creator.name}</Heading>
                <Text mt={4}>{creator.bio}</Text>

                <VStack mt={4} spacing={4}>
                  <Link href={creator.social.github} isExternal><FaGithub size={24} /></Link>
                  <Link href={creator.social.twitter} isExternal><FaTwitter size={24} /></Link>
                  <Link href={creator.social.linkedin} isExternal><FaLinkedin size={24} /></Link>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box as="footer" bg="blue.600" color="white" py={4} id="footer">
        <Container maxW="container.xl">
          <Text textAlign="center">© {new Date().getFullYear()} Creators Bio. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;