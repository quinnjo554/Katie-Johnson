import { startStarfieldAnimation } from "@/utils/starfield/canvasAnimation";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { content } from "@/constants/navBarList";
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
          <Link href={`/${item.toLowerCase().replace(/\s/g, "")}`}>
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
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let stopAnimation: any = null;

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

  return (
    <Menu>
      <MenuButton
        ref={btnRef}
        position="absolute"
        right={5}
        top={5}
        onClick={onOpen}
        as={Button}
      >
        <HamburgerIcon boxSize={6} />
      </MenuButton>
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent rounded="md" textColor={"black"} bg={"white"}>
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <DrawerHeader>
            <DrawerCloseButton></DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            {content.map((item, index) => (
              <MenuItem
                mt={3}
                p={1}
                key={index}
                _focus={{ bg: "transparent" }}
                _hover={{ bg: "transparent" }}
              >
                <hr color="black" />
                <Link href={`/${item.toLowerCase().replace(/\s/g, "")}`}>
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
                      transition: "width 0.3s",
                    }}
                    _hover={{
                      _after: {
                        width: "100%",
                      },
                    }}
                  >
                    {item}
                  </Box>
                </Link>
              </MenuItem>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Menu>
  );
}
function NavbarList() {
  const [isMobile] = useMediaQuery("(min-width: 1068px)");

  return isMobile ? <DesktopNavbar /> : <MobileNavbar />;
}

export default NavbarList;
