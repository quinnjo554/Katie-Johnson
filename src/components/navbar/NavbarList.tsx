import { startStarfieldAnimation } from "@/utils/starfield/canvasAnimation";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Button,
  List,
  ListItem,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { content } from "@/constants/navBarList";
import { AnimatePresence, motion } from "framer-motion";
function DesktopNavbar() {
  return (
    <List
      pos="absolute"
      right={0}
      display={"flex"}
      textColor={"black"}
      fontSize={["small", "medium", "large", "large"]}
      flexDirection={["column", "row"]}
    >
      {content.map((item, index) => (
        <ListItem
          key={index}
          m={["2", "5"]}
          mr={["0", "10"]}
          justifyContent="center"
          isTruncated={true}
          p={2}
          _hover={{ textDecoration: "none" }}
        >
          <NextLink href={`/${item.toLowerCase().replace(/\s/g, "")}`}>
            <Box
              as="span"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "0",
                height: "2px",
                backgroundColor: "gold",
                transition: "width 0.5s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}
            >
              {item}
            </Box>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
}

const MotionBox = motion(Box);

function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let stopAnimation:any = null;
    if (isOpen) {
      setTimeout(() => {
        stopAnimation = startStarfieldAnimation(canvasRef);
      }, 250);
    } else if (stopAnimation) {
      stopAnimation();
    }
    return () => {
      if (stopAnimation) {
        stopAnimation();
      }
    };
  }, [isOpen]);

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <Button
        ref={btnRef}
        position="absolute"
        right={5}
        top={5}
        onClick={onOpen}
        variant="ghost"
        color="white"
        _hover={{ bg: 'whiteAlpha.200' }}
      >
        <HamburgerIcon color="black" boxSize={6} />
      </Button>
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="rgba(0, 0, 0, 0.9)" color="white">
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          />
          <DrawerCloseButton size="lg" top={5} right={5} />
          <DrawerBody>
            <Flex height="100%" alignItems="center" justifyContent="center">
              <VStack spacing={8} align="stretch">
                <AnimatePresence>
                  {content.map((item:any, index:any) => (
                    <MotionBox
                      key={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      custom={index}
                    >
<NextLink href={`/${item.toLowerCase().replace(/\s/g, '')}`} passHref>
  <ChakraLink
    fontWeight="bold"
    textTransform="uppercase"
    letterSpacing="wide"
    _hover={{ color: 'gold', textDecoration: 'none' }}
    onClick={onClose}
  >
    {item}
  </ChakraLink>
</NextLink>
                    </MotionBox>
                  ))}
                </AnimatePresence>
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}




function NavbarList() {
  const [isMobile] = useMediaQuery("(min-width: 1068px)");

  return isMobile ? <DesktopNavbar /> : <MobileNavbar />;
}

export default NavbarList;
