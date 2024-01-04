import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import NavbarList from "./NavbarList";

function Navbar() {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns="1fr 1fr"
      w={"full"}
      h={"20"}
      bg={"teal"}
      rounded={"md"}
    >
      <Box>
        <Image src="" alt="Katie"></Image>
      </Box>
      <Box>
        <NavbarList></NavbarList>
      </Box>
    </Box>
  );
}

export default Navbar;
