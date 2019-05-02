import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Box, Heading } from "../AgonKit";

const Header = ({ siteTitle }) => (
  <header>
    <Box>
      <Heading>
        <Link to="/">{siteTitle}</Link>
      </Heading>
    </Box>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
