import { Button, Input,Box, Grid, GridItem ,Image } from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [form, setForm] = useState([]);
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm((prevform) => [...prevform, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("SignupData", JSON.stringify(form));
  }, [form]);

  return (

    <Box>
      <Grid templateColumns='repeat(3,1fr)' h='700px'  w='full'  m='auto'>
        <GridItem>
        <Box mt='30%'>
        <Image   src='https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-people-with-bouquet-a88253a7.svg' alt='img' />
        </Box>
        </GridItem>


        <GridItem w='130%'   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <Box pb='60px' border='0.5px solid gray' w='80%' m='auto' h='600px' mt='80px'>
        <Image sizes='92*36' h='60px'  w='120px' m='auto'  src='https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg' alt='logo'/>
    
  
       <form onSubmit={handleSubmit}>
            <Input w="85%"   p="25px"  mt="50px"  borderRadius="10px"  placeholder="First Name"  value={initialValues.firstName}
            onChange={(e) =>
             setInitialValues({ ...initialValues, firstName: e.target.value }) } />
         <br />
             <Input w="85%"    p="25px" mt="25px"  borderRadius="10px"  placeholder="Last Name" value={initialValues.lastName}
             onChange={(e) =>
             setInitialValues({ ...initialValues, lastName: e.target.value })  } />
         <br />
            <Input   w="85%"   p="25px"  mt="25px" borderRadius="10px"   placeholder="Email"
            value={initialValues.email}
            onChange={(e) =>
             setInitialValues({ ...initialValues, email: e.target.value })}/>
         <br />
         <Input w="85%"    p="25px"  mt="25px"  borderRadius="10px" placeholder="Password"
         value={initialValues.password}
           onChange={(e) =>
             setInitialValues({ ...initialValues, password: e.target.value })} />  
         <br />
         <br />

         <Button size="md"  p="25px"  width="85%"   borderRadius="10px" borderColor="black.500"    backgroundColor="#DD6B20"  color="white" mt="25px"  type="submit">CREATE ACCOUNT</Button>
         </form>

       <div style={{ marginBottom: "100px" }} className="create">
         <p>Already have an account?</p>
         <Link style={{ textDecoration: "underline", marginLeft: "5px" }} to="/Signin">Singin</Link>
       </div>   
      </Box>
        </GridItem>


        <GridItem>
        <Box mt='30%'>
        <Image   src='https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-2-person-scene-01ac18a3.svg' alt='img' />
        </Box>
        </GridItem>
      </Grid>
    </Box>
      
  );
};

export default Signup;