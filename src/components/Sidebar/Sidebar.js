import React from "react";

import { Box, Heading } from "../AgonKit";

const Sidebar = ({ onClose }) => (
  <Box
    color="white"
    bg="black"
    top="0"
    right="0"
    position="fixed"
    height="100%"
    width="100%"
    onClick={onClose}
  >
    <Heading>Sidebar</Heading>
  </Box>
);

export default Sidebar;
