import PropTypes from "prop-types";
import React, { useState } from "react";
import { ThMenu } from "styled-icons/typicons/ThMenu";
import { Times } from "styled-icons/typicons/Times";

import {
  Container,
  Flex,
  Box,
  Heading,
  Link,
  NavLink,
  Button
} from "../AgonKit";

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Flex m={2} alignItems="center">
        <Box>
          <Heading>
            <Link to="/">{siteTitle}</Link>
          </Heading>
        </Box>
        <Box ml="auto">
          <NavLink
            display={["none", "none", "inline-block"]}
            href="/consulting"
          >
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
        <Box
          display={["block", "block", "none"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ThMenu size="32" title="Menu" />
        </Box>
      </Flex>
      <Box
        color="white"
        bg="black"
        width={[1, 1 / 2, 1 / 4]}
        display={isOpen ? "block" : "none"}
        css={{
          height: "100%",
          position: "fixed",
          top: "0",
          right: "0"
        }}
      >
        Sidebar
        <Box onClick={() => setIsOpen(!isOpen)}>
          <Times size="32" title="Close" />
        </Box>
      </Box>
    </Container>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
