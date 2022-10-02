import { Box, Button, FormControl, FormLabel, Grid, GridItem, Strong , Heading,Input,Select,Spacer,Stack,Text, VStack } from '@chakra-ui/react'
import React from 'react'

const seedemo = () => {
  return (





    <Box   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}  border ='0.1px solid gray' h='600px' w='35%' m='auto' mt='60px'>
      <Box><Text fontSize='4xl'  textAlign='center' mt='30px'  w='100%' >Give it a try.</Text></Box>
      <Box><Text fontSize='xl'  textAlign='center'   w='100%' >Check out our demo. You can run payroll, add <br/>benefits, and see how Gusto feels.</Text></Box>

      <Stack spacing={3} w='90%' m='auto' pt='30px'>
      <Input focusBorderColor='lime' placeholder='Name' />
      <Input focusBorderColor='pink.400'  placeholder='Work email address'/>
      <Input focusBorderColor='pink.400'  placeholder='Company name'/>
      </Stack>
      

      <Grid templateColumns='repeat(2,1fr)' pt='25px' gap='5px'>
        <GridItem>
        <FormControl  isRequired ><Input  w='80%'  placeholder='No. of employess' /></FormControl>
        </GridItem>
        <GridItem>
        <FormControl  isRequired ><Input  w='80%'  placeholder='Company Phone' /></FormControl>
        </GridItem>
      </Grid>
      <FormControl  isRequired  pt='25px'>
      <Select w='90%' m='auto' placeholder='Bussiness setting'>
    <option>Office</option>
    <option>Retail or food service</option>
    <option>Factory ,Construction, or in the field</option>
    <option>Other</option>
    
  </Select>
      </FormControl>
      <Box pt='30px'>
      <Button w='80%'   m='auto' bg='#DD6B20' color='whiteAlpha.900' ><strong>see demo</strong></Button>
      <Box><Text fontSize='l'  textAlign='center'   w='100%' >If you like Gusto, we’ll use this info to help you create<br/> your account. So no fake names or email addresses.</Text></Box>
      </Box>
     
    </Box>
  




  )
}

export default seedemo