import React, { useState, useCallback } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Card, Heading } from "../components/AgonKit";
import useEventListener from "../hooks/use-event-listener";
import useScript from "../hooks/use-script";

export default () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", handler);

  const [loaded, error] = useScript(
    "https://pm28k14qlj.codesandbox.io/test-external-script.js"
  );

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
        css={{
          height: "100vh"
        }}
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          The mouse position is ({coords.x}, {coords.y})
        </Heading>
      </Card>
      <div>
        <div>
          Script loaded: <b>{loaded.toString()}</b>
        </div>
        {loaded && !error && (
          <div>
            Script function call response: <b>{TEST_SCRIPT.start()}</b>
          </div>
        )}
      </div>
    </Layout>
  );
};
