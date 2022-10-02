import React, { Component } from "react"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import {Image, Grid ,Box, Button,Text, Heading, Flex, Spacer} from "@chakra-ui/react"; 
 
export default class SimpleSlider extends Component { 
  render() { 
    const settings = { 
      dots: true, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 1, 
      slidesToScroll: 1 
    }; 
    return ( 
      <Box width="100% "  h='400px' bg="teal.400" > 
       <Slider {...settings}  >
       
          <div > 
          <Heading mb="5%" textAlign="center"> " I can’t imagine running our business without Gusto.<br/> We use it for payroll, compliance, 401(k), employee <br/> benefits, the HR resource center… the list goes on. "</Heading> 
          
            <Grid  w='45%' h='10%' m='auto' borderY='1px solid white'   templateColumns="repeat(2,1fr)" display='flex' flexDir='row' justifyContent='center'  alignItems= 'center'  > 
             
              <Image src="https://prod.gusto-assets.com/wp-content/uploads/signature-Sara-Jane-Hess-1.svg"></Image>
              
             
             <Heading  borderLeft='1px solid white' h='40px'  textAlign="left" size='sm' >Operations Director, SPI Media LLC</Heading> 
              
           
            </Grid>

          </div> 


          <div > 
          <Box width="100% "  h='400px' bg="pink" > 
          <Heading mb="5%" textAlign="center"> " Absolutely love Gusto. The people at Gusto are so <br/> helpful, and the software is just so easy and even fun to <br/> use. Delivers every time. "</Heading> 
          
            <Grid  w='45%' h='10%' m='auto' borderY='1px solid white'   templateColumns="repeat(2,1fr)" display='flex' flexDir='row' justifyContent='center'  alignItems= 'center'  > 
             
              <Image src="https://prod.gusto-assets.com/wp-content/uploads/signature-Sara-Auld-1.svg"></Image>
              
             
             <Heading  borderLeft='1px solid white' h='40px'  textAlign="left" size='sm' >CEO, Health Possible Inc.</Heading> 
             
              
           
            </Grid>
            </Box>
          </div> 

          <div > 
          <Box width="100% "  h='400px' bg="#F6AD55" > 
          <Heading mb="5%" textAlign="center"> " Gusto has literally changed how I do business.<br/> Onboarding and self-management for staff is super easy <br/>now. Running payroll is a snap, too.  "</Heading> 
          
            <Grid  w='45%' h='10%' m='auto' borderY='1px solid white'   templateColumns="repeat(2,1fr)" display='flex' flexDir='row' justifyContent='center'  alignItems= 'center'  > 
             
              <Image src="https://prod.gusto-assets.com/wp-content/uploads/signature-Brian-Briskman-1.svg"></Image>
              
             
             <Heading  borderLeft='1px solid white' h='40px'  textAlign="left" size='sm' >CEO, B2 Creative Studios, Inc.</Heading> 
             
              
           
            </Grid>
            </Box>
          </div> 
          <div > 
          <Box width="100% "  h='400px' bg="teal.400" > 
          <Heading mb="5%" textAlign="center"> "This is a great platform. Very easy to use and the <br/> services that Gusto has expanded into have aligned with <br/> our growing company.  "</Heading> 
          
            <Grid  w='45%' h='10%' m='auto' borderY='1px solid white'   templateColumns="repeat(2,1fr)" display='flex' flexDir='row' justifyContent='center'  alignItems= 'center'  > 
             
              <Image src="https://prod.gusto-assets.com/wp-content/uploads/signature-Andrew-English-1.svg"></Image>
              
             
             <Heading  borderLeft='1px solid white' h='40px'  textAlign="left" size='sm' >CFO, PLANIT Studiosc</Heading> 
             
              
           
            </Grid>
            </Box>
          </div>

          <div > 
          <Box width="100% "  h='400px' bg="pink" > 
          <Heading mb="5%" textAlign="center"> "Gusto is easy to understand, the platform is very user <br/>friendly, and if there’s something I don’t know how to<br/> do, support is immediately available and ready to help.  "</Heading> 
          
            <Grid  w='45%' h='10%' m='auto' borderY='1px solid white'   templateColumns="repeat(2,1fr)" display='flex' flexDir='row' justifyContent='center'  alignItems= 'center'  > 
             
              <Image src="https://prod.gusto-assets.com/wp-content/uploads/signature-Donna-Bernstein-1.svg"></Image>
              
             
             <Heading  borderLeft='1px solid white' h='40px'  textAlign="left" size='sm' >Accountant, Cedap USA Inc</Heading> 
             
              
           
            </Grid>
            </Box>
          </div> 

          <div > 
          <Box width="100% "  h='400px' bg="pink" > 
          <Heading mb="5%" textAlign="center"> "Setup was really simple. Running payroll is very <br/> efficient. Payment always happens on time, which is <br/>critical. The tax and compliance elements are taken <br/> care of for me, which is really valuable – I hate that part<br/> of payroll.  "</Heading> 
          
            <Grid  w='45%' h='10%' m='auto' borderY='1px solid white'   templateColumns="repeat(2,1fr)" display='flex' flexDir='row' justifyContent='center'  alignItems= 'center'  > 
             
              <Image src="https://prod.gusto-assets.com/wp-content/uploads/signature-Ben-Opps-1.svg"></Image>
              
             
             <Heading  borderLeft='1px solid white' h='40px'  textAlign="left" size='sm' >Owner, Thrive RE Network LLC</Heading> 
             
              
           
            </Grid>
            </Box>
          </div> 
           
        </Slider>
        
        </Box> 
      
    ); 
  } 
}