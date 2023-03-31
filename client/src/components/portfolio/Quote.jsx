import { Image } from '@chakra-ui/react'
import React from 'react'
import path1 from '../../assets/images/portfolio/Quotes/1.png'
import path2 from '../../assets/images/portfolio/Quotes/2.png'

const Quote = (props) => {
  let path = null
  if (props.path === 1) {
    path = path1
  } else {
    path=path2
  }
  return (
    <Image src={path} marginTop='-10'></Image>
  )
}

export default Quote