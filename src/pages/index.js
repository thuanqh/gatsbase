import React, { useState, useCallback } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Card, Heading } from "../components/AgonKit";
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
      <Card
        p={4}
        py={6}
        backgroundImage="url(https://source.unsplash.com/random/1024x768)"
        backgroundSize="cover"
        color="white"
        bg="darkgray"
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          The mouse position is ({coords.x}, {coords.y})
        </Heading>
      </Card>
    </Layout>
  );
};
