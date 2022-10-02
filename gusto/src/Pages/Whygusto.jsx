import { CheckIcon } from '@chakra-ui/icons';
import { Box ,Text,strong,  Button, Grid, GridItem,Image, Spacer, Flex} from '@chakra-ui/react'
import React from 'react'
import SimpleSlider from '../Components/Slider';


const whygusto = () => {
  return (

    // https://prod.gusto-assets.com/wp-content/uploads/Hero_Desktop-LG%402x.png
    
<Box   >
  
<Box   h='400px' w='100%' paddingTop='30px' >
   <Box ><Text fontSize='15px' color='#ED8936' textAlign='center'  w='100%' p='30px' ><strong>The people platform</strong></Text></Box>
   <Box><Text fontSize='5xl'  textAlign='center'  w='100%' >The modern HR platform for payroll,<br/> benefits, and more.</Text></Box>
   <Box ><Text fontSize='15px'  textAlign='center'  w='100%' p='30px' >A well-supported team is the key to a successful business.<br/>With Gusto’s easy-to-use platform, you can empower your people<br/>and push your business forward.</Text>
   </Box>
   <Button w='12%'  m='auto' bg='#DD6B20'color='whiteAlpha.900' >create account</Button>
</Box>

{/* <Box _hover={{bg:"red"}} ></Box> */}
   
<Box>
<Box  h='800px' w='100%' paddingTop='200px'>
   <Box><Text fontSize='5xl'  textAlign='center'  w='100%' >One place to keep your team happy<br/> and productive.</Text></Box>
   <Box ><Text fontSize='xl'  textAlign='center'  w='100%' p='30px' >No matter the size or stage of your business, Gusto’s all-in-one HR platform puts the tools you<br/> need to hire, pay, and manage your team at your fingertips.</Text></Box>

    
   <Box h='400px'   >
    <Grid templateColumns='repeat(3,1fr)' templateRow='repear(2,1fr)'  gap='20px'  w='60%' m='auto'>


    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} p='30px' borderRadius='5%'  border='0.5px solid gray' ><Image h='60px' m='auto'  src='https://prod.gusto-assets.com/wp-content/uploads/HROS_Payrolll.svg'alt=""pic/><Text  textAlign='center'  ><strong>Full-service<br/> payroll </strong></Text></GridItem>

    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} p='30px' borderRadius='5%'border='0.5px solid gray'><Image h='60px' m='auto' src='https://prod.gusto-assets.com/wp-content/uploads/HROS_Benefits.svg'alt=""pic/><Text  textAlign='center'  ><strong>Employee<br/> benefits</strong></Text></GridItem>

    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} p='30px' borderRadius='5%' border='0.5px solid gray'><Image h='60px' m='auto'  src='https://prod.gusto-assets.com/wp-content/uploads/HROS_TimeAndAttendance.svg'alt=""pic/><Text  textAlign='center'  ><strong>Time and <br/>attendance</strong></Text></GridItem>

    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} p='30px' borderRadius='5%'border='0.5px solid gray'><Image h='60px'  m='auto'  src='https://prod.gusto-assets.com/wp-content/uploads/HROS_HiringAndOnboarding.svg'alt=""pic/><Text  textAlign='center'  ><strong>Hiring and <br/>onboarding</strong></Text></GridItem>

    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} p='30px'borderRadius='5%' border='0.5px solid gray'><Image h='60px'  m='auto'  src='https://prod.gusto-assets.com/wp-content/uploads/HROS_TalentManagement.svg'alt=""pic/><Text  textAlign='center'  ><strong>Talent<br/> management</strong></Text></GridItem>

    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} p='30px' borderRadius='5%'border='0.5px solid gray'><Image h='60px'  m='auto'  src='https://prod.gusto-assets.com/wp-content/uploads/HROS_InsightsAndReporting.svg'alt=""pic/><Text  textAlign='center'  ><strong>Insights and<br/> reporting</strong></Text></GridItem>

  </Grid>
</Box>
   </Box>




</Box>


<Grid templateColumns='repeat(2,1fr)' w='100%' m='auto' p='40px'  >
<Flex   flexDirection='column' h='800px'p="40px"  alignItems='center' gap='20px'   >
<Box  w="75%" >
<Text fontSize='xl' pb='20px' textAlign='left'color='orange.400'  w='100%'><strong>Full-service payroll</strong></Text>

<Text textAlign='left' pb='20px' fontSize='3xl' >Pay your employees and<br/> contractors with smart<br/> technology.</Text>

<Text textAlign='left' pb='20px' fontSize='md' >With Gusto, payroll takes just a few clicks. Plus, we automatically file<br/> your taxes, help with compliance, and identify tax credits to help save<br/> you money you may never have known you qualified for.
</Text>

<Text fontSize='xl' textAlign='left' color="teal" w='90%'><a href=''>Learn more about full-service payroll</a></Text>
</Box>

<Grid templateColumns='repeat(2,1fr)' templateRow='repear(4,1fr)'  h='700px' alignitem='left' gap='15px'>
    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Unlimited payroll runs for no<br/> extra charge</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>State tax registration in all<br/> 50 states</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Local, state, and federal<br/> payroll tax filing</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>International contractor<br/> payments in over 80 countries</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Automatic tax calculations</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Time tracking synced with<br/> payroll</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Direct deposits</Text>
    </GridItem>
  </Grid>

  



</Flex>
<GridItem>
    <Image src='https://prod.gusto-assets.com/wp-content/uploads/Full-service-payroll%402x.png' alt='img'/>
  </GridItem>
</Grid>




<Box>
<Box  h='1500px' w='100%' paddingTop='40px' bg='#f8f5f2 '>
   <Box ><Text fontSize='15px' color='#ED8936' textAlign='center'  w='100%' ><strong>Employee benefits</strong></Text></Box>
   <Box><Text fontSize='5xl'  textAlign='center'  w='100%' >Set your business apart with <br/> benefits that make a real <br/> difference.</Text></Box>
   <Box ><Text fontSize='15px'  textAlign='center'  w='100%' p='40px' >Supporting your employees is more important than ever, which is why we <br/> provide a wide range of health and financial benefits to help your team<br/> thrive.</Text>
   </Box>
  
   <Text textAlign='center' fontSize='xl'  color="teal" w='100%'><a href=''><strong>
Learn more about employee benefits</strong></a></Text>

   <Image src='https://prod.gusto-assets.com/wp-content/uploads/Employee_benefits%402x-1536x585.png' alt='img'/>

   <Grid  h='500px' w='80%' m='auto' templateColumns='repeat(2,1fr)' gap='30px' bg='white' textAlign='center'>

    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} >
    

<Text textAlign='left' paddingLeft='35px'  paddingTop='10px' fontSize='3xl' >Health benefits.</Text>

<Text textAlign='left' paddingLeft='35px'  paddingTop='10px'fontSize='md' >Whether you’re looking for a new broker or want to bring<br/> over your existing one, we’ll help you create a healthcare<br/> package that checks all the boxes.
</Text>

    <GridItem  gap='25px' display='flex' alignItems='center' paddingLeft='35px'  paddingTop='40px'>
    <CheckIcon color='teal' / > <Text fontSize='md' textAlign='left'   w='90%'>Medical, dental, life, and vision insurance</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center' paddingLeft='35px'  paddingTop='10px'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Trusted benefits advisors</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center' paddingLeft='35px'  paddingTop='10px'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>HSA and FSA</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center' paddingLeft='35px'  paddingTop='10px'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Guidance around new regulations and <br/> deadlines</Text>
    </GridItem>

    </GridItem>

    <GridItem   _hover={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>

    <Text textAlign='left' pb='20px' paddingLeft='35px'  paddingTop='10px'  fontSize='3xl' >Financial benefits</Text>

    <Text textAlign='left' pb='20px' paddingLeft='35px'  paddingTop='10px' fontSize='md' >Help your team plan for the future with pre-tax savings, clear breakdowns of each paycheck, and smart financial tools to set them up for success.
    </Text>

    <GridItem  gap='25px' display='flex' alignItems='center'  paddingLeft='35px'  paddingTop='10px'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>401(k) retirement savings</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center' paddingLeft='35px'  paddingTop='10px'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Workers’ comp</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center' paddingLeft='35px'  paddingTop='10px'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Gusto Wallet employee finance tools</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center' paddingLeft='35px'  paddingTop='10px'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>529 college savings</Text>
    </GridItem>

    </GridItem>
   </Grid>
</Box>
</Box>




<Grid templateColumns='repeat(2,1fr)' w='100%' m='auto' p='40px'  >
<Flex   flexDirection='column' h='600px'p="40px"  alignItems='center' gap='20px'   >
<Box  w="75%" >
<Text fontSize='xl' pb='20px' textAlign='left'color='orange.400'  w='100%'><strong>Time and attendance</strong></Text>

<Text textAlign='left' pb='20px' fontSize='3xl' >Save time with tools that<br/> automatically sync with payroll.</Text>

<Text textAlign='left' pb='20px' fontSize='md' >With Gusto, payroll takes just a few clicks. Plus, we automatically file<br/> your taxes, help with compliance, and identify tax credits to help save<br/> you money you may never have known you qualified for.
</Text>

<Text fontSize='xl' textAlign='left' color="teal" w='90%'><a href=''>Learn more about full-service payroll</a></Text>
</Box>

<Grid templateColumns='repeat(2,1fr)' templateRow='repear(4,1fr)'  h='100px' alignitem='left' gap='15px'>
    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Mobile time tracking with<br/> geolocation</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Overtime alerts</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Time-off requests and<br/> approvals</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Project tracking and<br/>
cost reports</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>PTO policies and reporting</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Leading .<a href > time tracking</a>  software integrationsl</Text>
    </GridItem>
</Grid>
</Flex>
<GridItem  h='700px'>
    <Image src='https://prod.gusto-assets.com/wp-content/uploads/Time-and-attendance%402x.png' alt='img'/>
  </GridItem>
</Grid>




<Grid templateColumns='repeat(2,1fr)' w='100%' m='auto' p='40px'  >

<GridItem>
    <Image src='https://prod.gusto-assets.com/wp-content/uploads/Hiring-and-onboarding%402x.png' alt='img'/>
  </GridItem>

<Flex   flexDirection='column' h='800px'p="40px"  alignItems='center' gap='20px'   >
<Box  w="75%" >
<Text fontSize='xl' pb='20px' textAlign='left'color='orange.400'  w='100%'><strong>Hiring and onboarding</strong></Text>

<Text textAlign='left' pb='20px' fontSize='3xl' >A more effective way to hire,<br/> onboard, and retain talent.</Text>

<Text textAlign='left' pb='20px' fontSize='md' >With Gusto, payroll takes just a few clicks. Plus, we automatically file<br/> your taxes, help with compliance, and identify tax credits to help save<br/> you money you may never have known you qualified for.
</Text>

<Text fontSize='xl' textAlign='left' color="teal" w='90%'><a href=''>Learn more about full-service payroll</a></Text>
</Box>

<Grid templateColumns='repeat(2,1fr)' templateRow='repear(4,1fr)'  h='200px' alignitem='left' gap='15px'>
    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Job postings</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Custom onboarding<br/> checklists</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Document e-signing and <br/>storage</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Integrations with the latest <br/>recruiting software</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Applicant tracking system</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>App provisioning with a<br/> single click</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Offer letter templates</Text>
    </GridItem>
  </Grid>
</Flex>

</Grid>


<SimpleSlider/>




<Grid templateColumns='repeat(2,1fr)' w='100%' m='auto' p='20px'  >
<Flex   flexDirection='column' h='800px'p="40px"  alignItems='center' gap='20px'   >
<Box  w="75%" >
<Text fontSize='xl' pb='20px' textAlign='left'color='orange.400'  w='100%'><strong>Talent management</strong></Text>

<Text textAlign='left' pb='20px' fontSize='3xl' >Unlock your team’s potential <br/>with built-in performance tools.</Text>

<Text textAlign='left' pb='20px' fontSize='md' >With Gusto, payroll takes just a few clicks. Plus, we automatically file<br/> your taxes, help with compliance, and identify tax credits to help save<br/> you money you may never have known you qualified for.
</Text>

<Text fontSize='xl' textAlign='left' color="teal" w='90%'><a href=''>Learn more about full-service payroll</a></Text>
</Box>

<Grid templateColumns='repeat(2,1fr)' templateRow='repear(4,1fr)'  h='100px' alignitem='left' gap='10px'>
    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Automated feedback requests</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Learning and development <br/>tools</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Performance review templates</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Personalized employee <br/>communications</Text>
    </GridItem>

    
</Grid>
</Flex>
<GridItem>
    <Image src='https://prod.gusto-assets.com/wp-content/uploads/Talent-management%402x.png' alt='img'/>
  </GridItem>
</Grid>




<Grid templateColumns='repeat(2,1fr)' w='100%' m='auto' p='40px'  >

<GridItem>
    <Image src='https://prod.gusto-assets.com/wp-content/uploads/Insights-and-reporting%402x.png' alt='img'/>
  </GridItem>

<Flex   flexDirection='column' h='800px'p="40px"  alignItems='center' gap='20px'   >
<Box  w="75%" >
<Text fontSize='xl' pb='20px' textAlign='left'color='orange.400'  w='100%'><strong>Insights and reporting</strong></Text>

<Text textAlign='left' pb='20px' fontSize='3xl' >Create an amazing workplace <br/>with actionable data and <br/>insights.</Text>

<Text textAlign='left' pb='20px' fontSize='md' >No more guessing games. Use competitive compensation tools,<br/> employee feedback surveys, and workforce costing to make important<br/> decisions a lot easier.
</Text>

<Text fontSize='xl' textAlign='left' color="teal" w='90%'><a href=''>Learn more about full-service payroll</a></Text>
</Box>

<Grid templateColumns='repeat(2,1fr)' templateRow='repear(4,1fr)'  h='200px' alignitem='left' gap='15px'>
    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Access to HR experts</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Workforce and project <br/>costing</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Competitive compensation tools</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Compliance checklists</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Automatic custom reports</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Anonymous feedback <br/>surveys</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Offer letter templates</Text>
    </GridItem>

    
    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md' textAlign='left'  w='90%'>Automated tax credit<br/> identification</Text>
    </GridItem>

    <GridItem  gap='15px' display='flex' alignItems='center'>
    <CheckIcon color='teal'/ > <Text fontSize='md'   textAlign='left'  w='90%'>Law and regulation alerts</Text>
    </GridItem>
  </Grid>
</Flex>

</Grid>


<Box>
<Box  h='900px' w='100%'  bg='#f8f5f2 ' >
   <Box ><Text fontSize='15px' color='#ED8936' textAlign='center' paddingTop='40px'  w='100%' ><strong>Integrations</strong></Text></Box>
   <Box><Text fontSize='5xl'  textAlign='center'  w='100%' >All your apps and data,<br/> together in one place.</Text></Box>
   <Box ><Text fontSize='15px'  textAlign='center'  w='100%' p='40px' >Life’s easier when systems talk. Gusto connects with today’s top software —<br/> and we’re always building more integrations to stay ahead.</Text>
   </Box>
  
   <Text textAlign='center' fontSize='xl'  color="teal" w='100%'><a href=''><strong>
   Learn more about employee benefits</strong></a></Text>

<Image src='https://prod.gusto-assets.com/wp-content/uploads/Integrations%402x-1536x585.png' alt='pic'/>
</Box>
</Box>


<Box>
<Box  h='350px' w='100%'   >

   <Image  m='auto' src='https://prod.gusto-assets.com/wp-content/uploads/Headset_Guava.svg' alt='pic'/>
   <Box><Text fontSize='5xl'  textAlign='center'  w='100%' >Dedicated support,<br/>at your service.</Text></Box>
   <Box ><Text fontSize='xl'  textAlign='center'  w='100%' p='40px' >Questions? With our Premium plan you’ll get your own dedicated customer <br/> success manager for expert guidance, data migrations, compliance tips, and<br/> more. See  Gusto pricing plans   to find the right plan for your business.</Text>
   </Box>
</Box>
</Box>



<Box  bg='red.400' h='300px' >
<Box  h='350px' w='100%'  >
   <Box><Text fontSize='5xl'  textAlign='center'  color='white' w='100%' pt='50px' >Ready to try Gusto for<br/> yourself?</Text></Box>
   <Button w='12%'  m='auto' bg='white'color='black' >create account</Button>
</Box>
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

























</Box>
  );
}

export default whygusto