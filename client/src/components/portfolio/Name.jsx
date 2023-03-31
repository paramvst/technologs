import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

import '../../assets/css/fonts/Great Vibes.css';
import { Link } from 'react-router-dom';

const Name = () => {
  return (
    <Stack
      padding="0"
      margin="0"
      width="100vw"
      height="100vh"
      textAlign="center"
    >
      <Link to='/technologs'>My Blogs</Link>
      <Text fontFamily='Great Vibes, cursive' fontSize='1600%' fontWeight='bold'marginTop='5%' marginBottom='-5%'>Paramveer</Text>
      <Text fontFamily='Great Vibes' fontSize='700%' marginTop='0'>Singh Thind</Text>
    </Stack>
  );
};

export default Name;
