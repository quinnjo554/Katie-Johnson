"use client";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import React from "react";
import AboutMe from "./AboutMe";

function AboutPage() {
  return (
    <Box>
      <Navbar></Navbar>
      <AboutMe></AboutMe>
    </Box>
  );
}

export default AboutPage;
