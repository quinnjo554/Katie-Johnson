import React, { useEffect, useState } from "react";
import KatieImg from "../../../public/KatieJohnson1.jpg"
import AcpLogo from "../../../public/LandingImg2.jpg";

import AcpLogo2 from "../../../public/neurodiversity.jpg";
import { Box, Container, Heading, Text, Image, Grid, Button, useClipboard, useToast, Flex, Icon, VStack } from "@chakra-ui/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaGraduationCap, FaChalkboardTeacher, FaBook, FaLightbulb } from "react-icons/fa";
import Navbar from "@/components/navbar/Navbar";

import { useRouter } from "next/navigation";
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

function LandingPage() {
  const { onCopy } = useClipboard("katie@academicpathways.com");
  const toast = useToast();
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 3000], [0, -1000]); // Adjust these values as needed
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCopyEmail = () => {
    onCopy();
    toast({
      title: "Email copied",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box minHeight="100vh" overflow="hidden">
      <Navbar />
      <Box
        position="relative"
        height="400vh" // Adjust based on your content
      >
        <MotionBox
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100vh"
          zIndex="0"
          style={{ y: isMobile ? 0 : y }}
        >
          <Image
            src={AcpLogo.src}
            alt="Students learning"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </MotionBox>
        <MotionBox
          position="fixed"
          top="400vh"
          left="0"
          width="100%"
          height="100vh"
          zIndex="0"
          style={{ y: isMobile ? 0 : y }}
        >
          <Image
            src={AcpLogo2.src}
            alt="Students learning"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </MotionBox>
        <Box position="relative" zIndex="1">
          <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Container maxW="container.xl">
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                bg="rgba(255, 255, 255, 0.8)"
                p={8}
                borderRadius="xl"
                backdropFilter="blur(10px)"
              >
                <MotionHeading
                  as="h1"
                  size="4xl"
                  mb={4}
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Academic Pathways
                </MotionHeading>
                <MotionText
                  fontSize="2xl"
                  mb={6}
                  color="gray.800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Empowering neurodiverse students and educating school staff about dyslexia ADHD and more.
                </MotionText>
                {/**
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <Button size="lg" colorScheme="purple" rounded="full" px={8}>
                    Learn More
                  </Button>
                </MotionBox>
              */}
              </MotionBox>
            </Container>
          </Box>

          <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Container maxW="container.xl">
              <MotionBox
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                bg="rgba(255, 255, 255, 0.8)"
                p={8}
                borderRadius="xl"
                backdropFilter="blur(10px)"
              >
                <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={12} alignItems="center">
                  <MotionImage
                    src={KatieImg.src}
                    alt="Katie Johnson"
                    borderRadius="full"
                    boxSize="300px"
                    objectFit="cover"
                    shadow="xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <Box>
                    <Heading as="h2" size="xl" mb={4} color="purple.500">Katie Johnson</Heading>
                    <Text fontSize="lg" mb={4} color="gray.600">
                      With over 15 years of experience in special education Katie Johnson is passionate about creating inclusive learning environments. She founded Academic Pathways to bridge the gap between neurodiverse students and educational institutions.
                    </Text>
                    <Text fontSize="lg" color="gray.600">
                      Katies approach combines advocacy education and practical strategies to ensure every student has the opportunity to thrive academically and personally.
                    </Text>
                    <Button onClick={() => { router.push("/about") }} size="lg" mt={6} colorScheme="purple" variant="outline" rounded="full">
                      About Katie
                    </Button>
                  </Box>
                </Grid>
              </MotionBox>
            </Container>
          </Box>

          <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Container maxW="container.xl">
              <MotionBox
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                bg="rgba(255, 255, 255, 0.8)"
                p={8}
                borderRadius="xl"
                backdropFilter="blur(10px)"
              >
                <MotionHeading
                  as="h2"
                  size="2xl"
                  mb={12}
                  textAlign="center"
                  color="purple.600"
                >
                  Our Services
                </MotionHeading>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }} gap={8}>
                  {[
                    { title: "Student Advocacy", icon: FaGraduationCap },
                    { title: "Staff Education", icon: FaChalkboardTeacher },
                    { title: "Resource Recommendations", icon: FaBook },
                    { title: "Best Practices Consulting", icon: FaLightbulb }
                  ].map((service, index) => (
                    <MotionBox
                      key={index}
                      bg="white"
                      p={8}
                      borderRadius="xl"
                      shadow="xl"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, boxShadow: "2xl" }}
                    >
                      <VStack spacing={4} align="start">
                        <Icon as={service.icon} w={10} h={10} color="purple.500" />
                        <Heading as="h3" size="lg" color="purple.600">{service.title}</Heading>
                        <Text color="gray.600">Tailored solutions to empower students and educators in creating inclusive learning environments.</Text>
                      </VStack>
                    </MotionBox>
                  ))}
                </Grid>
              </MotionBox>
            </Container>
          </Box>

          {/* Get in Touch Section */}
          <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Container maxW="container.xl">
              <MotionBox
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                bg="rgba(255, 255, 255, 0.8)"
                p={8}
                borderRadius="xl"
                backdropFilter="blur(10px)"
              >
                <MotionHeading
                  as="h2"
                  size="2xl"
                  mb={10}
                  textAlign="center"
                  color="purple.600"
                >
                  Get in Touch
                </MotionHeading>
                <Flex direction="column" alignItems="center">
                  <Button
                    leftIcon={<EmailIcon />}
                    onClick={handleCopyEmail}
                    colorScheme="purple"
                    variant="outline"
                    size="lg"
                    mb={4}
                    rounded="full"
                    _hover={{ bg: "purple.500", color: "white" }}
                  >
                    katie@academicpathways.com
                  </Button>
                  <Text fontSize="xl" color="gray.600" mb={6}>
                    <PhoneIcon mr={2} />(701) 400-4632
                  </Text>
                  <Button
                    onClick={() => { router.push("/contact") }}
                    size="lg"
                    colorScheme="purple"
                    rounded="full"
                    _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
                  >
                    Contact Us
                  </Button>
                </Flex>
              </MotionBox>
            </Container>
          </Box>
        </Box>
      </Box>

      <Box as="footer" bg="gray.50" color="gray.600" py={8} textAlign="center">
        <Text>&copy; 2024 Academic Pathways. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default LandingPage;
