import {Button, Center, Grid, Link, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import React from 'react'

const Dropdown = () => {
  return (
    <div>
         <Menu>
  <MenuButton as={Button} >
  payroll and more
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(2, 1fr)'  w="550px" h="310px" boxShadow='xl' >
  <MenuItem  > <Link href='' isExternal >payroll <p>Automatic deductions and filings, direct deposits, W-2s, and 1099s</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>
  <MenuItem  > <Link href='' isExternal >Hiring and onboarding <p>Offer letters, checklist,software setup and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </Grid>
   
  </MenuList>
</Menu>
    </div>
   
   /* <Center p="17px"  display="Flex"  gap={8} bgColor="" className='nav1'>
     <Link href='' isExternal>payroll and more</Link>
     <Link href='' isExternal>Pricing</Link>
     <Link href='' isExternal>For Accountants</Link>
     <Link href='' isExternal>Resource</Link>
     <Link href='' isExternal>Built for you</Link>
     <Link href='' isExternal>See demo</Link>
   </Center> */
   
  )
}

export default Dropdown