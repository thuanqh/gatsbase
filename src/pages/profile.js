import React from "react";
import Layout from "../components/Layout";
import { Box, Flex, Heading, Text, Spacer } from "../components/AgonKit";

const Profile = () => {
  return (
    <Layout>
      <Box
        color="white"
        bg="grey.900"
        height="100vh"
        backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1024x768)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="relative"
        textAlign="center"
      >
        <Flex>
          <Box m={4}>
            <Heading>Lung Vang</Heading>
          </Box>
          <Spacer m="auto" />
          <Box m={4}>Menu</Box>
        </Flex>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          textAlign="center"
          css={{ transform: "translate(-50%, -50%)" }}
        >
          <Heading>We make corperates innovate like startups.</Heading>
          <Text>Welcome to Lung Vang</Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Profile;
