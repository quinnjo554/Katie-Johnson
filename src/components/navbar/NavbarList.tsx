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
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function DesktopNavbar() {
  const content: string[] = [
    "Contact",
    "About",
    "Resources",
    "Advocacy Services",
  ];

  return (
    <List
      display={"flex"}
      textColor={"white"}
      fontSize={["small", "medium", "large", "large"]}
      fontWeight={"bold"}
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
                backgroundColor: "white",
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
  const content: string[] = [
    "Contact",
    "About",
    "Resources",
    "Advocacy Services",
  ];

  return (
    <Menu>
      <MenuButton as={Button}>Menu</MenuButton>
      <MenuList>
        {content.map((item, index) => (
          <MenuItem key={index}>
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
                  backgroundColor: "white",
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
      </MenuList>
    </Menu>
  );
}

function NavbarList() {
  const [isMobile] = useMediaQuery("(min-width: 1068px)");

  return isMobile ? <DesktopNavbar /> : <MobileNavbar />;
}

export default NavbarList;
