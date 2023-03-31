import React from "react";
import { Box, VStack } from "@chakra-ui/react";
// import { Link } from 'react-router-dom';
import {
  AboutMe,
  // Achivements,
  // Contact,
  Name,
  // NavbarComponent,
  // Projects,
  Quote,
  // Sidebar,
  Skills,
} from "../components/portfolio";
// import Skills from '../components/temp';

const Portfolio = () => {
  return (
    <Box>
      <VStack spacing={8}>
        {/* <Heading>Param's Portfolio</Heading>
          <Text>
            Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
          </Text>
          <Link to='/blogs'>Learn through blogs</Link>
          <Link to='/blogs/blog/mongoDB'>mongo db</Link>
          <Link to='/achivements'>achivements</Link>
          <Link to='/works'>works</Link> */}
        <Name />
        <Box height="20vh" />
        <AboutMe />
        <Quote path={1} />
        <Skills />
        <Quote path={2} />
        {/* <Projects />
          <Achivements />
          <Contact /> */}
      </VStack>
    </Box>
  );
};

export default Portfolio;
