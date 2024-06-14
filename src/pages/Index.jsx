import { Box, Container, Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Flex as="header" justify="space-between" align="center" p={4} borderBottom="1px solid #eaeaea">
        <Heading as="h1" size="lg">Hummingbird</Heading>
        <Flex as="nav" gap={4}>
          <Link href="#">Portfolio</Link>
          <Link href="#">Team</Link>
          <Link href="#">Philosophy</Link>
          <Link href="#">Stories</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Nomads</Link>
        </Flex>
      </Flex>
      <Container maxW="container.xl" display="flex" flexDirection={{ base: "column", md: "row" }} py={10}>
        <Box flex="1" pr={{ md: 10 }} mb={{ base: 10, md: 0 }}>
          <Text fontSize="sm" mb={2}>1</Text>
          <Text fontSize="lg" mb={4}>
            We are global seed investors, looking for outlier founders.
          </Text>
          <Text fontSize="lg">
            We believe groundbreaking companies are built by a rare breed of entrepreneur.
          </Text>
        </Box>
        <Box flex="3">
          <Text fontSize="6xl" fontWeight="bold" lineHeight="1.2">
            BACKING FOUNDERS ON A MISSION TO PROVE OTHERS WRONG.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;