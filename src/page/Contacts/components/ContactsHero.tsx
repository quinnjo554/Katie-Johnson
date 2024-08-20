import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  useMediaQuery,
  Image,
  Container,
  Grid,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ContactCard from "./ContactCard";
import { CalendarIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import EmailInputs from "./EmailInput";

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

function ContactsHero() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const controls = useAnimation();

  const headerVariants = {
    hidden: { opacity: 0, width: "55%" },
    visible: { opacity: 1, width: "100%" },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -5 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const width = isLargerThan768 ? "500px" : "400px";
  const cardProps = {
    colorScheme: "blue",
    boxShadow: "lg",
    margin: "5px",
    width: width,
  };

  return (
    <Box minHeight="100vh">
      {/* Hero Section */}
      <Box bg="mediumslateblue" color="white" py={20}>
        <Container maxW="container.xl">
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h1" size="3xl" mb={4} textAlign="center">
              Contact Me
            </Heading>
            <Text fontSize="xl" textAlign="center">
              Get in touch with Academic Pathways
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Cards Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="max-content">
          <MotionGrid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
            mb={16}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <PhoneIcon />, text: "Call Me", contactInfo: "701-955-3409" },
              { icon: <EmailIcon />, text: "Email", contactInfo: "KatieJohnson@gmail.com" },
              { icon: <CalendarIcon />, text: "Hours", contactInfo: "Mon-Fri: 9am - 5pm" },
            ].map((card, index) => (
              <MotionBox key={index} variants={cardVariants} custom={index}>
                <ContactCard
                  props={cardProps}
                  icon={card.icon}
                  text={card.text}
                  contactInfo={card.contactInfo}
                />
              </MotionBox>
            ))}
          </MotionGrid>
          <Box>
            <EmailInputs />
          </Box>
        </Container>
      </Box>

      {/* Image Section */}
      <Box bg="blue.500" py={20}>
        <Container maxW="container.xl">
          <Flex direction={isLargerThan768 ? "row" : "column"} align="center">
            <Box flex={1} mb={isLargerThan768 ? 0 : 8}>
              <Heading color="white" mb={4}>
                Lets Work Together
              </Heading>
              <Text color="white" fontSize="lg">
                Academic Pathways is committed to helping neurodiverse students succeed. 
                Reach out to us to learn how we can support your educational journey.
              </Text>
            </Box>
            <Box flex={1}>
              <Image
                src="/abstract-geometric-round-shape-blue-background-design_1017-42785.jpg"
                alt="Abstract Design"
                borderRadius="lg"
                objectFit="cover"
                w="full"
                h={{ base: "300px", md: "400px" }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default ContactsHero;
