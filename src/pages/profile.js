import React from "react";
import Layout from "../components/Layout";
import { Box, Heading, Text } from "../components/AgonKit";

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
        <Heading>We make corperates innovate like startups.</Heading>
        <Text>Welcome to Lung Vang</Text>
      </Box>
    </Layout>
  );
};

export default Profile;
