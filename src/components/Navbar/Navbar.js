import React from "react";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

import { Flex, Box, Heading, Spacer } from "agonkit";

const Navbar = ({ onClick, ...props }) => (
  <Flex {...props} as="nav">
    <Box m={3} py={2}>
      <Heading>Lung Vang</Heading>
    </Box>
    <Spacer m="auto" />
    <Box m={3} py={2} display={["none", "block"]}>
      Campus
    </Box>
    <Box m={3} py={2} display={["none", "block"]}>
      Projects
    </Box>
    <Box m={3} py={2} display={["none", "block"]}>
      Events
    </Box>
    <Box m={3} py={2} display={["none", "block"]}>
      Community
    </Box>
    <Box m={3} py={2} display={["none", "block"]}>
      News
    </Box>
    <Box m={3} py={2} display={["none", "block"]}>
      About
    </Box>
    <Box m={3} py={2} display={["block", "none"]} onClick={onClick}>
      <Menu size="32" />
    </Box>
  </Flex>
);

export default Navbar;
