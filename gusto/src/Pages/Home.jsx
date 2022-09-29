import { Button } from '@chakra-ui/react'
import React from 'react'
import "./Home.css"


const Home = () => {
  return (
    <>
         <div className='main' >
        <div >
        <p className='mainp1'>One place for payroll, benefits,<br/> and so much more.</p>
        <p className='mainp2'>People are at the heart of every successful business.<br/> Gusto puts the tools you need to hire, pay, insure, <br/>and support your team in one platform.</p>
        <div className='part'>
            <Button className='part1' bg="#DD6B20" color="white">Create Account</Button>
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

 <div className='sec'>
    <div className='sec1'>
    <div className='sec2'>
           <h1>Quickly pay your employees and <br/>contractors.</h1> 
           <div className='sec5'>
           <Button className='part2'>Learn how gusto works</Button>
           </div>
          
            </div>
            <div className='sec3'>
                <img src='https://prod.gusto-assets.com/wp-content/uploads/Insights-and-reporting%402x-1024x1024.png'/>
            </div>
        </div>
    </div>


    <div className='thrd'>
        <div className='thrd1'>
            <div className='thrd2'>
                <h1>Pricing plans start at just $46/month</h1>
                <p>No matter the size or stage of your business, we’ll work with you to find the plan that best suits your needs.</p>
            </div>
            <div className='thrd3'>
            <Button className='part2'>see pricing</Button>
            </div>
        </div>
    </div>

    <div className='sec'>
       <div className='sec1'>
            <div className='sec3'>
                <img src='https://prod.gusto-assets.com/wp-content/uploads/Talent-management%402x-1024x1024.png'/>
            </div>
         <div className='sec2'>
           <h1>Build a better workplace with<br/> flexible benefits and HR tools.</h1> 
           <div className='sec4'>
           <Button className='part2'>Learn how gusto works</Button>
           </div>
             
         </div>
            
        </div>
    </div>




    <div className='lst'>
        <div className='lst1'>
               <div className='lst2'>
                  <p>Prices start at just $46/month</p>
               </div>
                 <div className='lst3'>
                   <h1>Get your team working with Gusto. </h1>
                 </div>   
               
        
               <div className='lst4'>

                    <div className='lst5'>
                    <div><h1>Create an account</h1></div>
                    <div> <p>It’s free to start. Tell us about your<br/> business and we’ll find the best plan for <br/>your needs</p></div>
                    </div>  
                                     
                    <div className='lst6'>
                    <div><h1>Create an account</h1></div>
                    <div><p>It’s free to start. Tell us about your<br/> business and we’ll find the best plan for <br/>your needs</p>  </div>   
                    </div>  
                    
                    <div className='lst7'>       
                    <div> <h1>Create an account</h1></div>
                <div> <p>It’s free to start. Tell us about your<br/> business and we’ll find the best plan for <br/>your needs</p></div>      
                   </div>   
            </div>                   
               <div><Button className='lst8'>create account</Button></div>                      
         </div>         
    </div>

 {/* footer */}

 <div  className='footer'>
    <div className='footer1'>
    <div><strong>Pricing</strong><br/>  
           <a href="">Starting at just $46 per month</a><br/>           
        </div>            
                    
        <div><strong>Built for you</strong><br/>     
           <a href="">Starting a business</a><br/>         
           <a href="">Switching to Gusto</a><br/>         
           <a href="">Working remotely</a><br/> 
           <a href="">Why Gusto</a>         
        </div>

        <div><strong>For Accountants</strong><br/>     
           <a href="">Become a partner</a><br/>         
           <a href="">Gusto Pro dashboard</a><br/>         
           <a href="">Partner community</a><br/> 
           <a href="">Professional development</a><br/>   
           <a href="">People Advisory</a><br/>  
           <a href="">Accountant blog</a><br/>       
        </div>
                     
        <div><strong>For Developers</strong> <br/>    
           <a href="">Gusto Embedded Payroll</a><br/>         
           <a href="">Build apps with Gusto</a><br/>         
           <a href="">Developer tools</a><br/>          
        </div>
    </div>



    <div className='footer2'>
       <div><strong>Get started</strong> <br/>    
           <a href="">Interactive Demo</a><br/>         
           <a href="">Contact Sales — (800) 936-0383</a><br/>               
           </div>
                     
           <div><strong>Services</strong><br/>     
           <a href="">People platform</a><br/>         
           <a href="">Full-service payroll</a><br/>         
           <a href="">Employee Benefits</a><br/> 
           <a href="">Health Benefits</a><br/>
           <a href="">Financial Benefits</a><br/>         
           <a href="">Time and attendance</a><br/>         
           <a href="">Hiring and onboarding</a><br/>
           <a href="">Talent management</a><br/>         
           <a href="">Insights and reporting</a><br/>         
           <a href="">Workers' compensation</a><br/>  
           <a href="">Gusto Wallet</a><br/>       
           </div>
     </div>



    <div className='footer3'>
    <div><strong>Company</strong><br/>     
           <a href="">About</a><br/>         
           <a href="">Careers — We're hiring!</a><br/>  
           <a href="">Press</a><br/>
           <a href="">News</a><br/>      
           <a href="">Investors</a><br/>         
           <a href="">Contact</a><br/>  
           <a href="">Affiliate program</a><br/>              
           </div>
                     
        <div><strong>Licenses</strong> <br/>   
           <a href="">Gusto Capital, LLC NMLS ID: 1845463</a><br/>         
           <a href="">Gusto, Inc. NMLS ID: 1737896</a><br/>               
        </div>
        <div><strong>Support</strong>  <br/>   
           <a href="">Help Center</a><br/>         
           <a href="">Talk to support — Sign in</a><br/>               
        </div>
    </div>



    <div className='footer4'>
        <div><strong>Resources</strong> <br/>    
           <a href="">Customer stories</a><br/>         
           <a href="">Customer reviews</a><br/>  
           <a href="">Compare</a><br/>
           <a href="">Partner Directory</a><br/>      
           <a href="">Business Guides</a><br/>         
           <a href="">FAQs</a><br/>  
           <a href="">Security</a><br/>   
           <a href="">Integrations</a><br/>            
        </div>
                     
        <div><strong>Tools</strong><br/>     
           <a href="">Small Business Financial Relief</a><br/>         
           <a href="">Employer tax calculator</a><br/>  
           <a href="">Burn rate calculator</a><br/>         
           <a href="">New hire checklist</a><br/>              
        </div></div>

 </div>
<div className='frt'><strong>Talk Shop:</strong>Business resources<hr/></div>


<div className='footer_lst'>
    <div className='footer_lst1'>
    <div><strong>Talk Shop blog</strong><br/>
    <p>Advice and information for  growing businesses and their teams</p>
    </div>


    <div className='footer_lst2'>
    <a href="">Running payroll</a><br/>
    <a href="">Employee benefits</a><br/>
    <a href="">Health insurance</a><br/>
    <a href="">People management</a><br/>
    </div>


    <div className='footer_lst3'>
    <a href="">Workers' comp</a><br/>
    <a href="">Starting a business</a><br/>
    <a href="">Business finances</a><br/>
    </div>


    <div className='footer_lst4'>
    <a href="">Hiring</a><br/>
    <a href="">Growth</a><br/>
    <a href="">Taxes</a><br/>
    </div>
</div>

 


        
       


</div>  
    </>
   
    
  )
}

export default Home