import React from "react";

import { Flex, Box, Heading, Spacer } from "../AgonKit";

const Navbar = props => (
  <Flex
    as="nav"
    top="0"
    left="0"
    position="fixed"
    width="100%"
    bg="primary.900"
  >
    <Box m={3} py={2}>
      <Heading>Lung Vang</Heading>
    </Box>
    <Spacer m="auto" />
    <Box m={3} display={["none", "block"]}>
      Campus
    </Box>
    <Box m={3} display={["none", "block"]}>
      Projects
    </Box>
    <Box m={3} display={["none", "block"]}>
      Events
    </Box>
    <Box m={3} display={["none", "block"]}>
      Community
    </Box>
    <Box m={3} display={["none", "block"]}>
      News
    </Box>
    <Box m={3} display={["none", "block"]}>
      About
    </Box>
    <Box m={3} display={["block", "none"]}>
      Menu
    </Box>
  </Flex>
);

export default Navbar;
