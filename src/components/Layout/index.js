import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { Box } from "../AgonKit";
import Header from "../Header";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box>
          <main>{children}</main>
        </Box>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.lungvang.com">Lung Vang</a>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
