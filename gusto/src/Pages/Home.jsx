import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Grid, GridItem,Text ,Slider,Image} from '@chakra-ui/react'
import React from 'react'
import "./Home.css"
import SimpleSlider from '../Components/Slider';
import { Navigate } from 'react-router-dom';


const Home = () => {
const part1=()=>{
  <Navigate  to ='/CreateAccount'/>
}

  return (
    <>
         <div className='main' >
        <div className='main233' >
        <p className='mainp1'>One place for payroll,<br/> benefits, and so much more.</p>
        <p className='mainp2'>People are at the heart of every successful<br/> business. Gusto puts the tools you need to hire,<br/> pay, insure, and support your team in one platform.</p>
        <div className='part'>
            <Button onClick={part1} className='part1' bg="#DD6B20" color="white">Create Account</Button>
            <Button className='part2' color='black'>Learn how gusto works</Button>
        </div>
        <p>Already useing Gusto?<a href="" >Sign in</a></p>
        </div>
        <div className='main2'>
            <div className='main2p1'>
                <img className='image'  src="https://prod.gusto-assets.com/assets/svg/header/pottedplant_kale-9f3a7160b7c67bc539b49e10e4f15c307bd533679eb16004a54a96dc70b8767b.svg"/>
                 <div>
                    <strong>Starting a business</strong>
                    <p> Recently started a business or looking for a payroll provider?<a href="">Learn more about Gusto</a></p>
                 </div>
            </div>
            <div className='main2p1'>
                <img className='image'  src="https://prod.gusto-assets.com/assets/svg/icons/moving-box-7d52aecb338cfc502ce160ff30aed4329bdbf081c6a9365016adc3947efbc637.svg"/>
                 <div>
                    <strong>Switching to Gusto</strong>
                    <p> Looking for a new payroll and benefits provider?<a href="">Let us help you switch provider</a></p>
                 </div>
            </div>
            <div className='main2p1'>
                <img className='image' src="https://prod.gusto-assets.com/assets/svg/icons/calculator-d726de745970d0cced76b998eafb8f08f25accfe46d580eb5cec94b1c8cd2721.svg"/>
                 <div>
                    <strong>Accountant</strong>
                    <p> Want to grow accounting practice?<a href="">Check out the perks for Gusto partner</a></p>
                 </div>
            </div>
        </div>


       
    </div>

 

    <Grid templateColumns='repeat(2,1fr)' templateRows='570px'>
      <GridItem   display='flex' flexDirection='column' justify='left'  p='60px' gap='40px' >
      <Text fontSize='2rem' fontWeight='600' textAlign='left'>Quickly pay your employees and <br/>contractors.</Text> 
      <Button w='40%' h='60px' >Learn how gusto works</Button> 

      <Accordion>
  <AccordionItem >
  
      <AccordionButton>
        <Box flex='1' textAlign='left' p='20px' fontSize={20} >
        Full-service payroll
        </Box>
        <AccordionIcon />
      </AccordionButton>
   
    <AccordionPanel pb={4} textAlign='left' >
    With Gusto, payroll takes just a few clicks. We automatically file your taxes, help with compliance, and can identify hidden tax credits to save you money. In many cases we can even transfer your payroll and benefits data for you.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  >
  
      <AccordionButton>
        <Box flex='1' textAlign='left'  p='20px' fontSize={20}>
        Time and attendance
        </Box>
        <AccordionIcon />
      </AccordionButton>
   
    <AccordionPanel pb={4} textAlign='left'>
    Gusto automatically calculates and syncs your team’s hours, PTO, and holidays with payroll. Plus, we help you stay compliant with alerts, software integrations, and more.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  >
    
      <AccordionButton>
        <Box flex='1' textAlign='left'  p='20px' fontSize={20}>
        Insights and reporting
        </Box>
        <AccordionIcon />
      </AccordionButton>
   
    <AccordionPanel pb={4} textAlign='left'>
    No more guessing games. Use competitive compensation tools, employee Our competitive compensation tools, employee feedback surveys, and workforce costing features make tough business decisions a lot easier.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </GridItem>
      

      <GridItem mt='-40px'><Image src='https://prod.gusto-assets.com/wp-content/uploads/Insights-and-reporting%402x-1024x1024.png'alt='pic'/>

      </GridItem>
      
    </Grid>


<Box w='95%' m='auto' p='40px'  >
<Box  borderRadius='10px' h='200px'p="40px" display='flex' alignItems='center' bg= '#f8f5f2'  >
<Box  w="75%" >
<Text fontSize='3xl' textAlign='left'  w='90%'  >Pricing plans start at just $46/month</Text>
<Text textAlign='left' fontSize='xl' >No matter the size or stage of your business, we’ll work with you to find the plan that best suits your needs.</Text>
</Box>
<Button w='15%' ml='60px' bg='orange.300'color='whiteAlpha.900'>See pricing</Button>
</Box>
</Box>



<Grid templateColumns='repeat(2,1fr)' templateRows='700px'  >

<GridItem mt='-40px'><Image src='https://prod.gusto-assets.com/wp-content/uploads/Talent-management.png'alt='pic'/>

</GridItem>
      
      <GridItem    display='flex' flexDirection='column' justify='left'  p='60px' gap='40px' >
      
      <Text fontSize='2rem' fontWeight='600' textAlign='left'>Build a better workplace with <br/> flexible benefits and HR tools.</Text> 
      <Button w='40%' h='60px' >Learn how gusto works</Button> 

      <Accordion defaultIndex={[0]} allowMultiple >
  <AccordionItem  >
      <AccordionButton>
        <Box flex='1' textAlign='left' p='20px' fontSize={20} >
        Employee benefits
        </Box>
        <AccordionIcon />
      </AccordionButton>
   
    <AccordionPanel pb={4} textAlign='left' >
    We provide a wide range of health and financial benefits to keep your team happy, productive, and engaged.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  >
  
      <AccordionButton>
        <Box flex='1' textAlign='left'  p='20px' fontSize={20}>
        Hiring and onboarding
        </Box>
        <AccordionIcon />
      </AccordionButton>
   
    <AccordionPanel pb={4} textAlign='left'>
    From hiring your first employees to scaling your growing business, Gusto helps you find and support great people from day 1 to 1,000.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  >
    
      <AccordionButton>
        <Box flex='1' textAlign='left'  p='20px' fontSize={20}>
        Talent management
        </Box>
        <AccordionIcon />
      </AccordionButton>
   
    <AccordionPanel pb={4} textAlign='left'>
    Whether you’re in an office, remote, or in between, give your employees a clear path for growth with performance reviews, trainings, and career development tools.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </GridItem>
</Grid>   

<SimpleSlider/>

<Box  h='400px' w='100%' paddingTop='90px'>
   <Box ><Text fontSize='15px' color='#ED8936' textAlign='center'  w='90%' p='30px' >Pricing plans start at just $46/month</Text></Box>
   <Box><Text fontSize='5xl'  textAlign='center'  w='90%' >Get your team working with Gusto.</Text></Box>
   
   <Grid display='grid' templateColumns='repeat(3,1fr)'   w='100%'padding='20px' >
      <Box  h='120px' w='100%'><Text fontSize='xl'fontWeight='600'  textAlign='center'  w='90%' >Create an account</Text>
      <Text fontSize='md'  textAlign='center'  w='90%' >It’s free to start. Tell us about your<br/> business and we’ll find the best plan<br/> for your needs.</Text>
      </Box>

      <Box  h='120px' w='100%'><Text fontSize='xl'fontWeight='600'  textAlign='center'  w='90%' >Add your people</Text>
      <Text fontSize='md'  textAlign='center'  w='90%' >Enter your employees into Gusto.<br/> They can even self-onboard to save<br/> you time.</Text>
      </Box>

      <Box  h='120px' w='100%'><Text fontSize='xl'fontWeight='600'  textAlign='center'  w='90%' >Run your first payroll</Text>
      <Text fontSize='md'  textAlign='center'  w='90%' >Once we have your employee and tax<br/> info, you can run payroll in just a few <br/>clicks.</Text>
      </Box>
      
   </Grid>

   <Button w='20%' m='auto' bg='#ED8936'color='whiteAlpha.900' >See pricing</Button>
</Box>

  
 {/* footer */}

 <div  className='footer'>
    <div className='footer1'>
    <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Pricing</strong>  
     
           <a href="">Starting at just $46 per month</a> 
           <br/>          
        </div>            
                    
        <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Built for you</strong>
          
           <a href="">Starting a business</a>  
                   
           <a href="">Switching to Gusto</a>
                    
           <a href="">Working remotely</a> 
           
           <a href="">Why Gusto</a>    
           <br/>
              
        </div>

        <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>For Accountants</strong> 
           <a href="">Become a partner</a>         
           <a href="">Gusto Pro dashboard</a>      
           <a href="">Partner community</a>
           <a href="">Professional development</a>  
           <a href="">People Advisory</a>  
           <a href="">Accountant blog</a> 
           <br/>     
        </div>
                     
        <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>For Developers</strong>     
           <a href="">Gusto Embedded Payroll</a>        
           <a href="">Build apps with Gusto</a>    
           <a href="">Developer tools</a> 
           <br/>       
        </div>
    </div>



    <div className='footer2'>
       <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Get started</strong>  
           <a href="">Interactive Demo</a>     
           <a href="">Contact Sales — (800) 936-0383</a>   
           <br/>           
           </div>
                     
           <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Services</strong> 
           <a href="">People platform</a>         
           <a href="">Full-service payroll</a>         
           <a href="">Employee Benefits</a>
           <a href="">Health Benefits</a>
           <a href="">Financial Benefits</a>       
           <a href="">Time and attendance</a>        
           <a href="">Hiring and onboarding</a>
           <a href="">Talent management</a>        
           <a href="">Insights and reporting</a>     
           <a href="">Workers' compensation</a>
           <a href="">Gusto Wallet</a><br/>       
           </div>
     </div>



    <div className='footer3'>
    <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Company</strong>
           <a href="">About</a>        
           <a href="">Careers — We're hiring!</a>  
           <a href="">Press</a>
           <a href="">News</a>    
           <a href="">Investors</a>         
           <a href="">Contact</a>
           <a href="">Affiliate program</a><br/>              
           </div>
                     
        <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Licenses</strong>
           <a href="">Gusto Capital, LLC NMLS ID: 1845463</a>      
           <a href="">Gusto, Inc. NMLS ID: 1737896</a><br/>               
        </div>
        <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Support</strong>  
           <a href="">Help Center</a>       
           <a href="">Talk to support — Sign in</a><br/>               
        </div>
    </div>



    <div className='footer4'>
        <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Resources</strong> 
           <a href="">Customer stories</a>     
           <a href="">Customer reviews</a> 
           <a href="">Compare</a>
           <a href="">Partner Directory</a>  
           <a href="">Business Guides</a>      
           <a href="">FAQs</a>
           <a href="">Security</a>  
           <a href="">Integrations</a><br/>            
        </div>
                     
        <div style= {{display:'flex' ,flexDirection:'column', gap:'15px'}}><strong>Tools</strong>     
           <a href="">Small Business Financial Relief</a>         
           <a href="">Employer tax calculator</a> 
           <a href="">Burn rate calculator</a>         
           <a href="">New hire checklist</a><br/>              
        </div></div>

 </div>
<div className='frt'><strong>Talk Shop:</strong>Business resources<hr/></div><br/>


<div className='footer_lst'>
    <div className='footer_lst1'>
    <div><strong>Talk Shop blog</strong><br/><br/>
    <p>Advice and information for <br/> growing businesses and their<br/> teams</p>
    </div>


    <div className='footer_lst2'>
    <a href="">Running payroll</a><br/><br/>
    <a href="">Employee benefits</a><br/><br/>
    <a href="">Health insurance</a><br/><br/>
    <a href="">People management</a><br/><br/>
    </div>


    <div className='footer_lst3'>
    <a href="">Workers' comp</a><br/><br/>
    <a href="">Starting a business</a><br/><br/>
    <a href="">Business finances</a><br/><br/>
    </div>


    <div className='footer_lst4'>
    <a href="">Hiring</a><br/><br/>
    <a href="">Growth</a><br/><br/>
    <a href="">Taxes</a><br/><br/>
    </div>
</div>

 


        
       


</div>  
    </>
   
    
  )
}

export default Home