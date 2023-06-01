import { Box, Container } from "@material-ui/core";
import React from "react";
import MultiStepForm from "./multiStepForm";

function Home() {
  return (
    <Container>
      <Box class="flex flex-row justify-between py-2">
        <Box class="font-bold text-black">Build Narratives</Box>
        <Box>Home</Box>
      </Box>
      <Box>
        <MultiStepForm />
      </Box>
    </Container>
  );
}

export default Home;
