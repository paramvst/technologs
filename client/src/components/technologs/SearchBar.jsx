import { Button, Stack } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import React from 'react'
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  return (
    <Stack paddingLeft={'20vw'} width='80vw' margin={'2rem'}>
      <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button><SearchIcon/>&nbsp;Search</Button>
          </Form>
    </Stack>
  )
}

export default SearchBar