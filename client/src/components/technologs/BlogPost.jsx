import { Stack, Heading, Box, Text } from "@chakra-ui/react";
import { React } from "react";
import Wrapper from "../../assets/css/blogs/blogPost.js";

const Blogpost = (props) => {
  return (
    <>
      <Stack paddingLeft="10vw" paddingRight="10vw" paddingTop="0.5 rem">
        <Wrapper>
          <Heading as="h2">{props.blog.heading}</Heading>
          <Box dangerouslySetInnerHTML={{ __html: props.blog.content }} />
        </Wrapper>
      </Stack>
    </>
  );
};

export default Blogpost;
