
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  useToast,
  Center,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Login from "./login";
import Register from "./register";
import Welcome from "./welcome";
function LoginSignup() {

  useEffect(() => {
  if(localStorage.getItem("islogin")==="true"){
    setname(localStorage.getItem("name"));
    setshowform(false)
  }
  }, [])
  
  const [showform, setshowform] = useState(true);

  const toast = useToast();
  const [name, setname] = useState("");
  function handlename(name) {
    setname(name);
    setshowform(false)
  }

  function handleclick(userdetails) {
    let user = JSON.parse(localStorage.getItem("userdetail"));
    // console.log(user);
    if (user === null) {
      user = [];
    }
    const a = user.filter((user) => {
      return user.username === userdetails.username;
    });

    if (a.length === 0) {
      user.push(userdetails);
      localStorage.setItem("userdetail", JSON.stringify(user));
      toast({
        title: `Registered Successfull`,
        status: "success",
        isClosable: true,
        position: "top",
      });
      setname(userdetails.name);
      setshowform(false);
    } else {
      toast({
        title: `User already exists!`,
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  }
  return (
    <>
      <Welcome name={name} />
    { !showform &&  <Center marginTop="50px"><Button onClick={()=>{setshowform(true);setname(""); localStorage.setItem("islogin","false")}} colorScheme='blue'>Logout</Button></Center>}
      {showform && (
        <Container marginTop="50px">
          <Tabs isFitted>
            <TabList mb="1em">
              <Tab>Register</Tab>
              <Tab>Login</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Register handleclick={handleclick} />
              </TabPanel>
              <TabPanel>
                <Login handlename={handlename} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      )}
    </>
  );
}

export default LoginSignup;
