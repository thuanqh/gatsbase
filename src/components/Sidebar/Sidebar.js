import React from "react";

import { Box, Heading } from "../AgonKit";

const Sidebar = ({ onClose, ...props }) => (
  <Box {...props} onClick={onClose}>
    <Heading>Sidebar</Heading>
  </Box>
);

export default Sidebar;
