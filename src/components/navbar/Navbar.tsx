import React from "react";
import { Box, Image } from "@chakra-ui/react";
import NavbarList from "./NavbarList";
import LogoOne from "../../../public/LogoOne.png";
import Link from "next/link";

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
        <Link href="/">
          <Image
            src={LogoOne.src}
            p={1}
            position={"relative"}
            top="-15%"
            w={"105px"}
            h={"105px"}
            alt="Katie"
          />
        </Link>
      </Box>
      <Box>
        <NavbarList></NavbarList>
      </Box>
    </Box>
  );
}

export default Navbar;
