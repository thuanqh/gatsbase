import PropTypes from "prop-types";
import React from "react";

import { Flex, Box, Heading, Link, NavLink, Button } from "../AgonKit";

const Header = ({ siteTitle }) => (
  <Flex as="header" m={2} alignItems="center">
    <Box>
      <Heading>
        <Link to="/">{siteTitle}</Link>
      </Heading>
    </Box>
    <Box as="nav" display={["none", "block"]} mx="auto">
      <NavLink href="/consulting">Consulting</NavLink>
      <NavLink href="/studio">Studio</NavLink>
      <NavLink href="/craftsman">Craftsman</NavLink>
      <NavLink herf="/news">News</NavLink>
      <NavLink herf="/about">About</NavLink>
    </Box>
    <Box>
      <Button variant="outline">Start A Project</Button>
    </Box>
  </Flex>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
