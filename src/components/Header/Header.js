import PropTypes from "prop-types";
import React from "react";
import { ThMenu } from "styled-icons/typicons/ThMenu";

import { Flex, Box, Heading, Link, NavLink, Button } from "../AgonKit";

const Header = ({ siteTitle }) => (
  <Flex as="header" m={2} alignItems="center">
    <Box>
      <Heading>
        <Link to="/">{siteTitle}</Link>
      </Heading>
    </Box>
    <Box as="nav" ml="auto">
      <NavLink display={["none", "none", "inline-block"]} href="/consulting">
        Consulting
      </NavLink>
      <NavLink display={["none", "none", "inline-block"]} href="/studio">
        Studio
      </NavLink>
      <NavLink display={["none", "none", "inline-block"]} href="/craftsman">
        Craftsman
      </NavLink>
      <NavLink display={["none", "none", "inline-block"]} herf="/news">
        News
      </NavLink>
      <NavLink display={["none", "none", "inline-block"]} herf="/about">
        About
      </NavLink>
      <Box display={["none", "none", "inline-block"]}>
        <Button variant="outline">Start A Project</Button>
      </Box>
    </Box>
    <Box display={["block", "block", "none"]}>
      <ThMenu size="32" title="Menu" />
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
