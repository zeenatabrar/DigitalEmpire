import React from 'react';
import styled from 'styled-components';
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Link as ChakraLink,
  HStack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/action';

const NAVBAR = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 2rem;
background-color: #273446;

.logout-btn
{
  color: black;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.2rem;
  border-radius: 7%;
  background-color: white;
}

.logout-btn:hover
{
  background-color: orange;
}
`;

const Navbar = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <NAVBAR>
      <img src="digital-empire-logo.png" alt="" />
      <InputGroup>
        <Input type='text' placeholder='Search' bgColor={'white'}>
        </Input>
        <InputRightElement>
          <IconButton
            colorScheme='blue'
            aria-label='Search database'
            icon={<SearchIcon />}
            mr={1}
          />
        </InputRightElement>
      </InputGroup>
      <HStack spacing={4} color="white" className='Links'>
        <ChakraLink as={ReactRouterLink} to='/'>
          Home
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to='/products'>
          Products
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to='/cart'>
          Cart
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to='/about'>
          About
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to='/contact'>
          Contact
        </ChakraLink>
        {
          isAuth ?
            // <input type="button" value="Logout" className='logout-btn' />
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
            :
            <ChakraLink as={ReactRouterLink} to='/login'>
              Login
            </ChakraLink>
        }
      </HStack>
    </NAVBAR>
  )
}

export default Navbar