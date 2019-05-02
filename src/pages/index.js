import React from "react";

import { Card, Heading } from "../components/AgonKit";

export default () => (
  <Card
    p={4}
    py={6}
    backgroundImage="url(https://source.unsplash.com/random/1024x768)"
    backgroundSize="cover"
    borderRadius={8}
    color="white"
    bg="darkgray"
  >
    <Heading textAlign="center" fontSize={[5, 6]}>
      Background Image
    </Heading>
  </Card>
);
