import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = (props) => {
  const navigate = useNavigate()
  const handleLoadBlogs = () => {
    const cat = props.heading;
    navigate(`/technologs/blogs/${cat}`)
  }
  
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
        <Image src={props.image ?props.image : 'https://media.istockphoto.com/id/1280385511/photo/colorful-background.jpg?s=612x612&w=0&k=20&c=kj0PRQlgvWLzA1-1me6iZp5mlwsZhC4QlcvIEb1J1bs='}></Image>
    <CardHeader>
      <Heading size='md'> {props.heading ? props.heading : 'category heading'}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{props.summary ? props.summary : 'View a summary of all your customers over the last month.'}</Text>
    </CardBody>
    <CardFooter>
      <Button colorscheme='orange' onClick={handleLoadBlogs}>Load Blogs</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
  )
}

export default Categories