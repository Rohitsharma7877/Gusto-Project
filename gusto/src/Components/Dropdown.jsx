import {Box, Button, Center, Grid, Link, Menu, MenuButton, MenuItem, MenuList, Spacer} from '@chakra-ui/react';
import React from 'react'

const Dropdown = () => {
  return (
    <Box display="flex" gap='10px' >
         <Menu>  
         
  <MenuButton >
 <strong>payroll and more</strong>
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(2, 1fr)'  w="550px" h="310px" boxShadow='xl' >

  <MenuItem  > <Link href='https://gusto.com/product/payroll' isExternal color='teal' ><strong >payroll</strong> <p fontSize='l'>Automatic deductions and filings, direct deposits, W-2s, and 1099s</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/product/benefits' isExternal color='teal'><strong>Employee benefits</strong> <p fontSize='l' >Health benefits,automatic saving,401(k)s, and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='https://gusto.com/product/hr' isExternal color='teal ' ><strong>Hiring and onboarding </strong> <p  fontSize='l'>Offer letters, checklist,software setup and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/product/time-tools' isExternal color='teal' ><strong>Time tools </strong> <p  fontSize='l'>Simple time tracking,time-off requests, and PTO policies</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/hr-pros-and-services' isExternal color='teal'><strong>HR experts </strong> <p  fontSize='l'>Direct access to certified HR professionals and other resources</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='https://gusto.com/wallet' isExternal color='teal'><strong>Gusto Wallet </strong> <p  fontSize='l'>A free employess app for smart saving and spending</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


    
  </Grid>
   
  </MenuList>
</Menu>
  

  <Menu>
  <MenuButton  >
  <strong>Prices</strong>
  </MenuButton>
  </Menu>
    
<Menu>
  <MenuButton  >
  <strong>For Accountants</strong>
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(2, 1fr)'  w="550px" h="310px" boxShadow='xl' >

  <MenuItem  > <Link href='https://gusto.com/partners/accountants' isExternal color='teal'><strong>Become a partner </strong> <p  fontSize='l'>Grow your accounting or bookkeeping practice</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/accountants/community' isExternal color='teal'><strong>People Advisory </strong> <p  fontSize='l'>Combine financial expertise with people-focussed advising</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='https://gusto.com/partners/accountants/gustopro' isExternal color='teal'><strong>Gusto Pro </strong> <p  fontSize='l'>Save time with Gusto's modern accounting dashboard</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/accountants/education' isExternal color='teal'><strong>Professional development </strong> <p  fontSize='l'>Get People Advisory Certified and take the Accelerator course</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/partner-resources' isExternal color='teal'><strong>Account blog </strong> <p  fontSize='l'>Get tools and advice for modern accountants</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='https://gusto.com/partners/accountants/resources' isExternal color='teal'><strong>Resource</strong> <p  fontSize='l' color='black'> Sign up for our live accounting event on September 27+28</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  </Grid>
   
  </MenuList>
</Menu>



<Menu>
  <MenuButton  >
  <strong>Resource</strong>
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(2, 1fr)'  w="550px" h="310px" boxShadow='xl' >

  <MenuItem  > <Link href='https://gusto.com/tools' isExternal color='teal'><strong> Calculators and tools </strong> <p  fontSize='l'>Tax calculators, checklist, compensation tools and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/blog' isExternal color='teal'><strong>Talk Shop blog</strong> <p  fontSize='l'>Expert articles and answer to all your questions</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='https://support.gusto.com' isExternal color='teal'><strong>Help Center</strong> <p  fontSize='l'>Expert answers and how-to guides for using Gusto</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/resources' isExternal color='teal'><strong>Small business guides</strong> <p  fontSize='l'>Small steps to run payroll,add benefits and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/partners/directory' isExternal color='teal'><strong>Find an accountant</strong> <p  fontSize='l'>Browse accountants in our Partner Directory</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>


  <MenuItem  > <Link href='https://events.gusto.com/next-22' isExternal color='teal'><strong>Gusto Embedded Payroll </strong> <p  fontSize='l'>API for building payroll into your own platform</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>
  </Grid>
   
  </MenuList>
</Menu>



<Menu>
  <MenuButton  >
  <strong>Built for you</strong>
  </MenuButton>
  <MenuList >
  <Grid templateColumns='repeat(1, 1fr)'  w="400px" h="250px" boxShadow='xl' >

  <MenuItem  > <Link href='https://gusto.com/product/start-a-business' isExternal color='teal'><strong>Starting a business?</strong> <p  fontSize='xl'>Set your new business up with payroll, benefits and more</p><br/>
  <hr style={{borderBottom: "0.5px solid green"}}/>
  </Link></MenuItem>

  <MenuItem  > <Link href='https://gusto.com/product/switch-to-gusto' isExternal color='teal'><strong>Need a new provider?</strong> <p  fontSize='sm'>Transfer your payroll, benefits, and HR from another provider</p><br/>
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