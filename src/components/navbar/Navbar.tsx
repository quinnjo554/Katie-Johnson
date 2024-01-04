import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import NavbarList from "./NavbarList";
import LogoOne from "../../../public/LogoOne.png";
function Navbar() {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns="1fr 1fr"
      w={"full"}
      h={"20"}
      bg={"white"}
      rounded={"md"}
      shadow={"lg"}
    >
      <Box>
        <Image
          src={LogoOne.src}
          p={1}
          position={"absolute"}
          top="-24%"
          w={"105px"}
          h={"105px"}
          alt="Katie"
        ></Image>
      </Box>
      <Box>
        <NavbarList></NavbarList>
      </Box>
    </Box>
  );
}

export default Navbar;
