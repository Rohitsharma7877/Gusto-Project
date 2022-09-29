import {Box, Button, Center, Grid, Link, Menu, MenuButton, MenuItem, MenuList, Spacer} from '@chakra-ui/react';
import React from 'react'

const Dropdown = () => {
  return (
    <Box display="flex" gap='10px' >
         <Menu>  
         
  <MenuButton >
  payroll and more
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(2, 1fr)'  w="550px" h="310px" boxShadow='xl' >

  <MenuItem  > <Link href='' isExternal >payroll <p>Automatic deductions and filings, direct deposits, W-2s, and 1099s</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Employee benefits <p>Health benefits,automatic saving,401(k)s, and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='' isExternal >Hiring and onboarding <p>Offer letters, checklist,software setup and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Time tools <p>Simple time tracking,time-off requests, and PTO policies</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >HR experts <p>Direct access to certified HR professionals and other resources</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='' isExternal >Gusto Wallet <p>A free employess app for smart saving and spending</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


    
  </Grid>
   
  </MenuList>
</Menu>
  

  <Menu>
  <MenuButton  >
  Prices
  </MenuButton>
  </Menu>
    
<Menu>
  <MenuButton  >
  For Accountants
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(2, 1fr)'  w="550px" h="310px" boxShadow='xl' >

  <MenuItem  > <Link href='' isExternal >Become a partner <p>Grow your accounting or bookkeeping practice</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >People Advisory <p>Combine financial expertise with people-focussed advising</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='' isExternal >Gusto Pro <p>Save time with Gusto's modern accounting dashboard</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Trainings <p>Get People Advisory Certified and take the Accelerator course</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Gusto pertner blog <p>Get tools and advice for modern accountants</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='' isExternal >Gusto Next 2022 <p>Sign up for our live accounting event on September 27+28</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  </Grid>
   
  </MenuList>
</Menu>



<Menu>
  <MenuButton  >
  Resource
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(2, 1fr)'  w="550px" h="310px" boxShadow='xl' >

  <MenuItem  > <Link href='' isExternal >Calculators and tools <p>Tax calculators, checklist, compensation tools and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Talk Shop blog<p>Expert articles and answer to all your questions</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='' isExternal >Help Center<p>Expert answers and how-to guides for using Gusto</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Small business guides<p>Small steps to run payroll,add benefits and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Find an accountant<p>Browse accountants in our Partner Directory</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='' isExternal >Gusto Embedded Payroll <p>API for building payroll into your own platform</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>
  </Grid>
   
  </MenuList>
</Menu>



<Menu>
  <MenuButton  >
  Built for you
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(1, 1fr)'  w="400px" h="250px" boxShadow='xl' >

  <MenuItem  > <Link href='' isExternal >Starting a business?<p>Set your new business up with payroll, benefits and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='' isExternal >Need a new provider?<p>Transfer your payroll, benefits, and HR from another provider</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


    
  </Grid>
   
  </MenuList>
</Menu>
    </Box>
   
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