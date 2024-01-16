"use client";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import React from "react";
import ContactsHero from "./components/ContactsHero";

function ContactsPage() {
  return (
    <Box>
      <Navbar></Navbar>
      <ContactsHero></ContactsHero>
    </Box>
  );
}

export default ContactsPage;
