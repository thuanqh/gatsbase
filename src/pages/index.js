import React, { useState, useCallback } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Box } from "../components/AgonKit";
import useEventListener from "../hooks/use-event-listener";

export default () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", handler);

  return (
    <Layout>
      <SEO title="Home" keywords={[`lungvang`, `application`, `react`]} />
      <Box
        p={5}
        color="white"
        bg="grey.900"
        height="100vh"
        backgroundImage="url(https://source.unsplash.com/random/1024x768)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        Main Page {coords.x}, {coords.y}
      </Box>
    </Layout>
  );
};
