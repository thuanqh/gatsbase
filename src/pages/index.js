import React, { useState, useCallback } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Box, Text, Heading, Flex } from "../components/AgonKit";
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
        color="white"
        bg="grey.900"
        height="100vh"
        backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1024x768)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="relative"
      >
        <Box position="absolute" top="0" left="16px">
          <Heading>Lung Vang</Heading>
        </Box>
        <Flex position="absolute" top="0" right="16px">
          <Box>Menu</Box>
          <Box>
            <Box width="35px" height="5px" bg="white" m="6px 0" />
            <Box width="35px" height="5px" bg="white" m="6px 0" />
            <Box width="35px" height="5px" bg="white" m="6px 0" />
          </Box>
        </Flex>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          textAlign="center"
          css={{ transform: "translate(-50%, -50%)" }}
        >
          <Heading>
            Main Page {coords.x}, {coords.y}
          </Heading>
        </Box>
        <Box position="absolute" bottom="0" left="16px">
          <Text>Some Text</Text>
        </Box>
      </Box>
    </Layout>
  );
};
