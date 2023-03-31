import { Box, HStack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const AboutMe = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const box = document.getElementById("about-me-box");
    if (!box) return;
    
    const boxRect = box.getBoundingClientRect();
    const visibleHeight = Math.min(boxRect.bottom, window.innerHeight) - Math.max(boxRect.top, 0);
    const visiblePercent = (visibleHeight / boxRect.height) * 78;
    
    setScrollPercent(visiblePercent);
  };
  
  // const handleScroll = () => {
  //   const scrollPx = document.documentElement.scrollTop;
  //   const winHeightPx =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const scrolled = (scrollPx / winHeightPx) * 200;
  //   setScrollPercent(scrolled);
  // };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Box id='about-me-box'
      height="80vh"
      width="100vw"
      // padding="2rem"
      paddingLeft="10%"
      paddingRight="10%"
      marginBottom='-1rem'
    >
      <HStack>
        {/* MOVING About Me */}
        <Text
          position="absolute"
          left={`${scrollPercent}%` ? `${scrollPercent}%` : 10}
          transform="translateX(-50%)"
          color="teal"
          p={4}
          width="max-content"
          fontSize="700%"
        >
          ABOUT ME
        </Text>
        {/* THE CONTENT - ABOUT ME */}
        <Box
          textAlign="justify"
          maxWidth="50vw"
        >
          <Text
            fontSize={['2xl', '3xl', '4xl', '5xl']}
            fontWeight="medium"
            fontFamily="'Dancing Script', cursive"
            letterSpacing="wider"
            textShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
          >
            I'm a software developer
          </Text>
          <Text
            fontSize={['md', 'lg', 'xl', '2xl']}
            mt={4}
            fontFamily="'Roboto', sans-serif"
            textShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
          >
            with a passion for creating elegant solutions to complex problems.
            Along with skills and expertise to bring your ideas to life. Let's
            build something great together!
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default AboutMe;
