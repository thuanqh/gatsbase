import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Card, Heading } from "../components/AgonKit";

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`lungvang`, `application`, `react`]} />
    <Card
      p={4}
      py={6}
      backgroundImage="url(https://source.unsplash.com/random/1024x768)"
      backgroundSize="cover"
      color="white"
      bg="darkgray"
    >
      <Heading textAlign="center" fontSize={[5, 6]}>
        Background Image
      </Heading>
    </Card>
  </Layout>
);
