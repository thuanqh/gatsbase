import React, { useState, useCallback } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Box, Text, Heading, Flex, Image } from "../components/AgonKit";
import useEventListener from "../hooks/use-event-listener";
import useWhyDidYouUpdate from "../hooks/use-why-did-you-update";
import useKeyPress from "../hooks/use-key-press";
import useLockBodyScroll from "../hooks/use-lock-body-scroll";

const Counter = React.memo(props => {
  useWhyDidYouUpdate("Counter", props);
  return (
    <Box color="red.900" fontSize="3rem">
      {props.count}
    </Box>
  );
});

function Modal({ title, content, onClose }) {
  useLockBodyScroll();

  return (
    <Box onClick={onClose}>
      <Box>
        <Heading>{title}</Heading>
        <Text>{content}</Text>
      </Box>
    </Box>
  );
}

export default () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [color, setColor] = useState("transparent");
  const happyPress = useKeyPress("h");
  const sadPress = useKeyPress("s");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");

  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("transparent");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("primary.900");
    }
  };

  useEventListener("mousemove", handler);
  useEventListener("scroll", changeColor);

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
        <Flex position="absolute" top="0" right="16px" bg={color}>
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
      <Box>
        <Box>
          <Counter count={count} />
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </Box>
        <Box>
          <Image src={`http://i.pravatar.cc/80?img=${userId}`} />
          <button onClick={() => setUserId(userId + 1)}>Switch User</button>
        </Box>
      </Box>
      <Box>
        <Box>h, s, r, f</Box>
        <Box>
          {happyPress && "😊"}
          {sadPress && "😢"}
          {robotPress && "🤖"}
          {foxPress && "🦊"}
        </Box>
      </Box>
      <Box>
        <button onClick={() => setModalOpen(true)}>Show Modal</button>
        {modalOpen && (
          <Modal
            title="Try scrolling"
            content="I bet you can't! Muahahaha 😈"
            onClose={() => setModalOpen(false)}
          />
        )}
      </Box>
    </Layout>
  );
};
