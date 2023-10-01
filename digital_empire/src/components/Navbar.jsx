import React, { useState } from 'react';
import styled from 'styled-components';
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Link as ChakraLink,
  HStack,
} from '@chakra-ui/react';
import { NavLink as ReactRouterLink } from 'react-router-dom'
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/action';
import { Link } from "react-router-dom";

const NAVBAR = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 2rem;
background-color: #273446;
box-sizing: border-box;

.logo
{
  height: 90px;
  width: 600px;
}

.logout-btn
{
  color: black;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  padding-bottom: 0.2rem;
  border-radius: 100vw;
  background-color: white;
  transition: background-color 250ms;
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.logout-btn:hover,.logout-btn:focus-visible
{
  /* background-color: orange; */
}

.logout-btn > span
{
  position: absolute;
  z-index: -1;
  width: 33.333%;
  height: 100%;
  /* background-color: orangered; */
  background-color: transparent;
  opacity: 0.5;
}

.logout-btn > :first-child
{
  left: 0;
  top: 0;
}

.logout-btn > :last-child
{
  right: 0;
  top: 0;
}

.logout-btn::before
{
  content: '';
  position: absolute;
  z-index:-1;
  background: orange;
  width: 20%;
  aspect-ratio: 1;
  border-radius: 50%;
  inset: 0;
  margin: auto;
  opacity: 0;
  transition: transform 1000ms 200ms, opacity 200ms;
}

.logout-btn:active::before
{
  transform: scale(20);
  opacity: 1;
  transition: transform 1000ms, opacity 500ms;
}

.logout-btn:has(:first-child:active)::before
{
  margin-left: 0;
}

.logout-btn:has(:last-child:active)::before
{
  margin-right: 0;
}

.logout-btn:has(:first-child:active)::before,
.logout-btn:has(:last-child:active)::before
{
  transition: transform 500ms, opacity 250ms;
}

.nav-link
{
opacity: 0.7;
text-transform: uppercase;
text-decoration: none;
font-weight: 500;
position: relative;
overflow: hidden;
padding-bottom: 0.3rem;
margin-top: 0.3rem;
}

.nav-link::after
{
  content: '';
  position: absolute;
  left: 0;
  /* bottom: -0.1rem; */
  bottom: 0;
  height: 3px;
  width: 100%;
  background-color: orangered;
  translate: var(--_translate,0);
  scale: var(--_width,0) 1;
  transition: scale 300ms var(--_scale-delay, 0ms), translate 500ms var(--_translate-delay, 0ms);
}

.nav-link:hover
{
  /* scale: 1 1; */
  --_width: 1;
}

@supports selector(:has(h1))
{
  .nav-link:hover + .nav-link
  {
    --_translate: -100%;
    --_scale-delay: 300ms;
    --_translate-delay: 200ms;
  }

  .nav-link:has(+ :hover)
  {
    --_translate: 100%;
    --_scale-delay: 300ms;
    --_translate-delay: 200ms;
  }
}

.nav-link:hover,
.nav-link:focus-visible
{
  opacity: 1;
}
`;

const Navbar = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  const initialState = {
    isHome: true,
    isProducts: false,
    isCart: false,
    isAbout: false,
    isContact: false,
    isLogin: false
  }

  const [activeLink, setActiveLink] = useState(initialState);

  return (
    <NAVBAR>
      <div><Link to={"/"}><img className='logo' src="digital-empire-logo.png" alt="" /></Link></div>
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
      <HStack spacing={5} color="white" id='Links'>
        <ChakraLink
          as={ReactRouterLink}
          to='/' fontSize="lg"
          className='nav-link'
          style={activeLink.isHome ? { color: "orangered", opacity: "1" } : { color: "white" }}
          onClick={() => {
            setActiveLink((prev) => {
              return {
                ...prev,
                isHome: true,
                isProducts: false,
                isCart: false,
                isAbout: false,
                isContact: false,
                isLogin: false
              };
            })
          }}
          _hover={{ textDecoration: 'none' }}>
          Home
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to='/products'
          fontSize="lg"
          className='nav-link'
          style={activeLink.isProducts ? { color: "orangered", opacity: "1" } : { color: "white" }}
          onClick={() => {
            setActiveLink((prev) => {
              return {
                ...prev,
                isHome: false,
                isProducts: true,
                isCart: false,
                isAbout: false,
                isContact: false,
                isLogin: false
              };
            })
          }}
          _hover={{ textDecoration: 'none' }}>
          Products
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to='/cart'
          fontSize="lg"
          className='nav-link'
          style={activeLink.isCart ? { color: "orangered", opacity: "1" } : { color: "white" }}
          onClick={() => {
            setActiveLink((prev) => {
              return {
                ...prev,
                isHome: false,
                isProducts: false,
                isCart: true,
                isAbout: false,
                isContact: false,
                isLogin: false
              };
            })
          }}
          _hover={{ textDecoration: 'none' }}>
          Cart
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to='/about'
          fontSize="lg"
          className='nav-link'
          style={activeLink.isAbout ? { color: "orangered", opacity: "1" } : { color: "white" }}
          onClick={() => {
            setActiveLink((prev) => {
              return {
                ...prev,
                isHome: false,
                isProducts: false,
                isCart: false,
                isAbout: true,
                isContact: false,
                isLogin: false
              };
            })
          }}
          _hover={{ textDecoration: 'none' }}>
          About
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to='/contact'
          fontSize="lg"
          className='nav-link'
          style={activeLink.isContact ? { color: "orangered", opacity: "1" } : { color: "white" }}
          onClick={() => {
            setActiveLink((prev) => {
              return {
                ...prev,
                isHome: false,
                isProducts: false,
                isCart: false,
                isAbout: false,
                isContact: true,
                isLogin: false
              };
            })
          }}
          _hover={{ textDecoration: 'none' }}>
          Contact
        </ChakraLink>
        {
          isAuth ?
            // <input type="button" value="Logout" className='logout-btn' />
            <button className='logout-btn' onClick={handleLogout}>
              <span></span>
              Logout
              <span></span>
            </button>
            :
            <ChakraLink
              as={ReactRouterLink}
              to='/login'
              fontSize="lg"
              className='nav-link'
              style={activeLink.isLogin ? { color: "orangered", opacity: "1" } : { color: "white" }}
              onClick={() => {
                setActiveLink((prev) => {
                  return {
                    ...prev,
                    isHome: false,
                    isProducts: false,
                    isCart: false,
                    isAbout: false,
                    isContact: false,
                    isLogin: true
                  };
                })
              }}
              _hover={{ textDecoration: 'none' }}>
              Login
            </ChakraLink>
        }
      </HStack>
    </NAVBAR>
  )
}

export default Navbar