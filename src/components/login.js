import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';


export default function Login(props) {
  const toast = useToast()
  const [credentials, setcredentials] = useState({
      username:"",
      password:""
  })
  function handlechange(e){
      setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  function handleclick(){
      let userdetail = JSON.parse(localStorage.getItem('userdetail'));
      // console.log(userdetail)
    const a=  userdetail.filter(user=>{return user.username===credentials.username})
  //   console.log(a)
      if(a.length===0){
          toast({
              title: `Invalid Credentials`,
              status: "error",
              isClosable: true,
              position: 'top'
            })
      }
      else{
          if(credentials.password===a[0].password){
          localStorage.setItem("islogin","true")
          localStorage.setItem("name",a[0].username)
              toast({
                  title: `Login Successfull`,
                  status: "success",
                  isClosable: true,
                  position: 'top'
                })
props.handlename(a[0].username)


                          } 
                          else{
                              toast({
                                  title: `Invalid Credentials`,
                                  status: "error",
                                  isClosable: true,
                                  position: 'top'
                                })
                          }
      }
// console.log(userdetail)

  }
  return (
    <Flex
      align={'center'}
      justify={'center'}
     >
      <Stack w="100vw" spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Login now!</Heading>
      
      </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          
          <Stack spacing={4}>
              
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input name="username" onChange={handlechange} type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" onChange={handlechange} type="password" />
            </FormControl>
         
            <Stack spacing={10}>
             
              <Button
          onClick={handleclick}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
               Login
              </Button>
            </Stack>
          
          </Stack>
       
        </Box>
      </Stack>
    </Flex>
  );
}