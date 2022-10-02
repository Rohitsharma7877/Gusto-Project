import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Whygusto from './Whygusto';
import Seedemo from './Seedemo'
import Signin from "./Signin";
import CreateAccount from './CreateAccount';
import { Spacer } from '@chakra-ui/react';




const AllRoutes = () => {
  return (
    <Routes>
        <Route path ='/'element={<Home/>}/>
        <Route path ='/Whygusto'element={<Whygusto/>}/>
        
        <Route path ='/Seedemo'element={<Seedemo/>}/>
        <Route path ='/Signin'element={<Signin/>}/>
        <Route path ='/CreateAccount'element={<CreateAccount/>}/>
    </Routes>
    
  )
}

export default AllRoutes