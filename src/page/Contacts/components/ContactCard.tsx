import { Card, CardBody, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import { CardProps } from "@chakra-ui/react";
function ContactCard({
  text,
  contactInfo,
  icon,
  props,
}: {
  text: string;
  contactInfo: string;
  icon: React.ReactElement;
  props: CardProps;
}) {
  return (
    <Card {...props} m={4} h={"200px"}>
      <CardBody m={1} textColor={"blue"}>
        <Center m={3}>{icon}</Center>
        <Center>
          <Heading
            fontSize={{ base: "30px", sm: "25px", md: "22px", lg: "25px" }}
            m={3}
          >
            {text}
          </Heading>
        </Center>
        <Center>
          <Heading
            fontSize={{ base: "24px", sm: "20px", md: "17px", lg: "20px" }}
            m={3}
          >
            {contactInfo}
          </Heading>
        </Center>
      </CardBody>
    </Card>
  );
}

export default ContactCard;
