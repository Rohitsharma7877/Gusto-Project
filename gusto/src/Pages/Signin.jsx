import { Box, Grid, GridItem,Image,center ,Button, color, Input ,form} from '@chakra-ui/react'
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {CreateAccount} from './CreateAccount';
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });

    const user = parsedUsers.find((item) => {
      if (item.email === email && item.password === password) {
        return true;
      } else {
        return false;
      }
    });

    if (user && user.password === password) {
      alert("User logged in Successfully");
      navigate("/");

    } else {
      alert("Wrong Details");
    }
  };

  const SavedUser = window.localStorage.getItem("SignupData");
  const parsedUsers = JSON.parse(SavedUser);
  console.log("GetUsers", parsedUsers);






  return (
    
    <Box>
      <Grid templateColumns='repeat(3,1fr)' h='700px' w='full'>
        <GridItem >
        <Box mt='50%'>
        <Image   src='https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-people-with-bouquet-a88253a7.svg' alt='img' />
        </Box>
          
        </GridItem>

        <GridItem border='0.5px solid gray' mt='40px'  _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <Image  h='80px' w='38%' mt='30px' m='auto' src='https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg' alt='img' />

        

        <form onSubmit={handleSubmit}>
            <Input w="75%" borderColor="black.100" p="25px"  mt="80px"   borderRadius="10px" placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} /><br />
            <Input w="75%"  borderColor="black.500" p="25px" mt="25px"  borderRadius="10px" 
            placeholder="Password" value={password}  onChange={(event) => setPassword(event.target.value)}/><br />

           <Button  size="md" p="25px"   width="75%"  borderRadius="10px"  border="1px"   borderColor="black.500" backgroundColor="#DD6B20" color="white" mt="25px"  type="submit"  >LOGIN</Button>
         </form>

          <div className="create">
          <p>New customer?</p>
          <Link  style={{ textDecoration: "underline", marginLeft: "5px" }} to="/CreateAccount"> Create an account</Link>
          </div>
        </GridItem>


      <GridItem >
        <Box mt='50%'>
        <Image   src='https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-2-person-scene-01ac18a3.svg' alt='img' />
        </Box>
       </GridItem>

      </Grid>
    </Box>


  )
  }
export default Signin;