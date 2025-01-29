import ContactsPage from "@/page/Contacts/ContactsPage";
import { Box } from "@chakra-ui/react";
import React from "react";

import Navbar from "@/components/navbar/Navbar";
import AboutMe from "@/page/about/AboutMe";
import AboutPage from "@/page/about/AboutPage";

function page() {
  return (
    <Box>
      <AboutPage></AboutPage>
    </Box>
  );
}

export default page;
