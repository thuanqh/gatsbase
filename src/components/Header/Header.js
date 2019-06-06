import PropTypes from "prop-types";
import React, { useState } from "react";

import { Flex, Box, Heading } from "../AgonKit";

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex>
      <Heading>Lung Vang</Heading>
      <Box>Menu 1</Box>
      <Box>Menu 2</Box>
    </Flex>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
