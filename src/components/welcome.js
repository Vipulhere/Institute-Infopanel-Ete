import React from 'react'
import { Center, Heading, useColorModeValue } from '@chakra-ui/react'
function Welcome(props) {
  return (
    <Center>
    <Heading marginTop="40px" size="xl" color={useColorModeValue('red.500', 'red.300')}>
Welcome! {props.name}
</Heading>
</Center>
  )
}

export default Welcome