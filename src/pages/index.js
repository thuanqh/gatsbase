import React, { useState, useCallback, useRef } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Box, Text, Heading, Flex, Image } from "../components/AgonKit";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import useEventListener from "../hooks/use-event-listener";
import useWhyDidYouUpdate from "../hooks/use-why-did-you-update";
import useKeyPress from "../hooks/use-key-press";
import useLockBodyScroll from "../hooks/use-lock-body-scroll";
import useOnScreen from "../hooks/use-on-screen";

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
    <Flex
      bg="rgba(0, 0, 0, 0.65)"
      onClick={onClose}
      position="fixed"
      top="0"
      left="0"
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" px="2rem" py="3rem" textAlign="center" borderRadius="3px">
        <Heading>{title}</Heading>
        <Text>{content}</Text>
      </Box>
    </Flex>
  );
}

export default () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [color, setColor] = useState("transparent");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ref = useRef();
  const onScreen = useOnScreen(ref, "-300px");

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
      setColor("primary.900");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("transparent");
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
        <Navbar
          bg={color}
          top="0"
          left="0"
          position="fixed"
          zIndex="1"
          width="100%"
          alignItems="center"
          onClick={() => setSidebarOpen(true)}
        />
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
        {sidebarOpen && (
          <Sidebar
            color="white"
            bg="black"
            top="0"
            right="0"
            position="fixed"
            zIndex="1"
            height="100%"
            width={["100%", "50%", "25%"]}
            onClose={() => setSidebarOpen(false)}
          />
        )}
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
      <Box>
        <Box height="100vh">
          <Heading>Scroll down to next section</Heading>
        </Box>
        <Box ref={ref} height="100vh" bg={onScreen ? "#23cebd" : "#efefef"}>
          {onScreen ? (
            <Box>
              <Heading>Hey I'm on the screen</Heading>
              <Image src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
            </Box>
          ) : (
            <Heading>Scroll down 300px from the top of this section</Heading>
          )}
        </Box>
      </Box>
    </Layout>
  );
};
