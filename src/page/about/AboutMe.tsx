"use client"
import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  useMediaQuery,
  Image,
  Container,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import kaiteImg from "../../../public/KatieJohnson2-Photoroom.png"
import { useEffect } from "react";

const MotionBox = motion(Box);

function AboutMe() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box minHeight="100vh">
      <Box
        bgGradient="linear(to-r, purple.500, blue.500)"
        color="white"
        pb={24}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.1"
        />
        <Container maxW="container.xl">

          <MotionBox
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            transition={{ duration: 0.8 }}
          >
            <VStack spacing={6} mt={8}>
              <Text fontSize="3xl" textAlign="center">About</Text>
              <Badge
                colorScheme="purple"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="md"
              >
                Education Specialist
              </Badge>
              <Text
                fontSize="2xl"
                textAlign="center"
                maxW="container.md"
                opacity={0.9}
              >
                Learn more about my journey and mission in educational innovation
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* About Me Section - Clean and modern */}
      <Box py={24} bg="white">
        <Container maxW="container.xl">
          <Flex
            direction={isLargerThan768 ? "row" : "column"}
            gap={16}
            align="center"
          >
            <Box flex={1}>
              <Image
                src={kaiteImg.src}
                alt="Katie Johnson"
                borderRadius="2xl"
                objectFit="cover"
                w="full"
                h={{ base: "400px", lg: "500px" }}
                boxShadow="2xl"
              />
            </Box>
            <VStack
              flex={1}
              align="flex-start"
              spacing={6}
            >
              <Heading
                color="gray.800"
                size="2xl"
                lineHeight="shorter"
              >
                Katie Johnson, <Box as="span" color="blue.500">M.Ed.</Box>
              </Heading>
              <Text
                color="gray.600"
                fontSize="xl"
                lineHeight="tall"
              >
                As a former teacher and a parent of five children—four with diagnosed learning disabilities—I understand the challenges educators and students face. My teaching career, though short, opened my eyes to the daily struggles teachers endure to meet their students' needs.
              </Text>
              <Text
                color="gray.600"
                fontSize="xl"
                lineHeight="tall"
              >
                My mission is to help teachers incorporate simple accommodations into their lessons, ensuring every student can participate in impactful learning. I believe in empowering educators to create inclusive classrooms where all students can thrive.
              </Text>
              <HStack spacing={4} pt={4}>
                <Badge colorScheme="blue" p={2} borderRadius="md">Education</Badge>
                <Badge colorScheme="purple" p={2} borderRadius="md">Inclusion</Badge>
                <Badge colorScheme="green" p={2} borderRadius="md">Innovation</Badge>
              </HStack>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutMe;
