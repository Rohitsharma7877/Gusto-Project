import { Button, Center, Image,strong } from '@chakra-ui/react';
import React from 'react'
// import {Link} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import "./Navbar.css"

 


const Navbar = () => {
  return (
   <Center boxShadow='xl'  p="10px"  display="Flex"  gap='12' bgColor="" className='nav' >
    <Link to='/'> <Image sizes='92*36' htmlHeight={36} htmlWidth={92}
    // boxSize={}
    src='https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg'
    alt='logo'
  /></Link>
    <Link to='/Whygusto'><strong>Why Gusto</strong></Link>
    <Dropdown/>
    <Link to='/Seedemo'><strong>see demo</strong></Link>
    <Link to='/Signin'><Button  color='black'>Sign in</Button></Link>
    <Link to='/CreateAccount'><Button backgroundColor='#DD6B20' color='white'>Create Account</Button></Link>
    {/* <Button colorScheme='blue'>Button</Button> */}
   
    
   </Center>
   
  );
}

export default Navbar