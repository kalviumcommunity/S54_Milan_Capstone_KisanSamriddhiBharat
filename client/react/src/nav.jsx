import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex, Heading } from '@chakra-ui/react'; 
import Login from './Login';


const Navbar = () => {


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX="1rem" 
      paddingY="0.5rem" 
      bg="#f0f8ff" 
      color="black"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" 
      maxWidth="800px" 
      marginX="auto"
    >
      <Flex
        align="center"
        justify="space-around" 
        width="auto"
        flexGrow={5}
        display={{ base: "none", md: "flex" }} 
      >
        <Link to={"/"}>
          <Heading as="h5" textDecoration="none" color="black" fontSize="md" mr={4} _hover={{ color: "#007bff" }}>
            Home
          </Heading>
        </Link>
        <Link to={"about"}>
          <Heading as="h5" textDecoration="none" color="black" fontSize="md" mr={4} _hover={{ color: "#007bff" }}>
            About
          </Heading>
        </Link>
       
      </Flex>
    </Flex>
  );
};

export default Navbar;
