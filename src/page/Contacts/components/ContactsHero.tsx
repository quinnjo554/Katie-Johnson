import React from "react";
import {
  Box,
  Text,
  Center,
  Heading,
  Card,
  Flex,
  useBreakpointValue,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import CardImage from "../../../../public/abstract-geometric-round-shape-blue-background-design_1017-42785.jpg";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ContactCard from "./ContactCard";
import { AddIcon, CalendarIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import EmailInputs from "./EmailInput";

function ContactsHero() {
  const variants = {
    hidden: { opacity: 0, width: "55%" },
    visible: { opacity: 1, width: "100%" },
  };

  const MotionBox = motion(Box);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const direction = isLargerThan768 ? "row" : "column";
  const height = isLargerThan768 ? "100%" : "none";
  const width = isLargerThan768 ? "500px" : "400px";
  const vh = isLargerThan768 ? "64vh" : "85vh";
  const controls = useAnimation();
  const cardProps = {
    colorScheme: "blue",
    boxShadow: "lg",
    margin: "5px",
    width: width,
  };

  useEffect(() => {
    controls.start("visible");
  });

  return (
    <Box>
      <MotionBox
        w="100%"
        mt={2}
        textColor={"whitesmoke"}
        bg={"black"}
        rounded={"full"}
        h={"max-content"}
        variants={variants}
        initial="hidden"
        transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}
        animate={controls}
      >
        <Center>
          <Box w="max-content" p={[15, 8]}>
            <Heading as="h1" size={["3xl", "xl"]}>
              Contact Me
            </Heading>
            <Center>
              <Box m={2} bg="yellow" w="20%" h="1px" />
            </Center>
          </Box>
        </Center>
      </MotionBox>
      <Box h={vh} w={"100%"} justifyItems={"center"}>
        <Image
          h={vh}
          w={"100%"}
          src={CardImage.src}
          alt="full"
          pos={"absolute"}
          rounded={"3xl"}
        />
        <Flex direction={direction} justify="center" align="center" h={height}>
          <ContactCard
            props={cardProps}
            icon={<PhoneIcon />}
            text="Call Me"
            contactInfo="701-955-3409"
          />
          <ContactCard
            props={cardProps}
            icon={<EmailIcon />}
            text="Email"
            contactInfo="KatieJohnson@gmail.com"
          />
          <ContactCard
            props={cardProps}
            icon={<CalendarIcon />}
            text="Hours"
            contactInfo="Mon-Fri: 9am - 5pm"
          />
        </Flex>
      </Box>
      <Box>
        <EmailInputs></EmailInputs>
      </Box>
    </Box>
  );
}

export default ContactsHero;
